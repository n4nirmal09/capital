  import ScrollMagic from 'ScrollMagic'
  import $ from 'jquery'
  $('.carousel-slides').slick({
    slidesToShow: 2
  })

  var s, NF = {
        init: function() {
            s = this.settings
            this.select()
            this.selectAll()
            this.scrollDierectionChecker()
            this.smoothScrolling()
            this.resizeListner()
            this.scrollBarWidth() 
            this.removeMethod()
            this.tabs()
            this.accordian()
            this.hamburger()
            //this.headerScrollOut()
            //this.contentSlider();
        },
        loaded : false,
        // Settings
        settings: {

            desktop: 1200,
            tab: 1024,
            mobile: 768,
            scrollClassTrigger: 100, 
            windowWidth: window.innerWidth,
            windowheight: window.innerHeight,
            scrollBarWidth: 0
        },

        select () {
          return window.select = s => {
            return document.querySelector(s)
          }
        },
        selectAll () {
          return window.selectAll = s => {
           return document.querySelectorAll(s)
          }
        },
        detectIe : function(){
               
              var ua = window.navigator.userAgent;

              var msie = ua.indexOf('MSIE ');
              if (msie > 0) {
                  // IE 10 or older => return version number
                  return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
              }

              var trident = ua.indexOf('Trident/');
              if (trident > 0) {
                  // IE 11 => return version number
                  var rv = ua.indexOf('rv:');
                  return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10); 
              }

              var edge = ua.indexOf('Edge/');
              if (edge > 0) {
                 // Edge (IE 12+) => return version number
                 return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10); 
              }

              // other browser
              return false;
          
        },

        // ResizeListner 
        resizeListner: function() {
            window.addEventListener("resize", function() {
                s.windowheight = window.innerHeight;
                s.windowWidth = window.innerWidth;

                //NF.windowheight();
            });
            
        },

        //scroll listener
        scrollListener () {
          
          const scrollFunction = () => {
            
          }

          window.onscroll = scrollFunction
        },

        headerScrollOut () {
            let scrollController = new ScrollMagic.Controller(),
                mainWrapper = select('#main-wrapper'),
                mainHeader = select('#main-header'),
                tween = TweenLite.to(mainHeader, 0.5, {y: "-100%"})

            new ScrollMagic.Scene({
                  triggerHook : 'onLeave',
                  offset : -0,
                  reverse : true,
                  duration: 150
            })
            .setTween(tween)
            .addTo(scrollController)
        },

        // Window height calculator
        windowheight: function() {
            var body = document.querySelector('.window_height');
            body.style.height = s.windowheight + 'px';
        },

        hamburger: function() {
          let menus = selectAll('.hamburger-menu')
          menus.forEach(menu => {
            menu.addEventListener("click", () => {
              let target = menu.dataset.target
              select('#' + target).classList.toggle('active')
            })
          })

        },

        // Adding scroll class
        scrollDierectionChecker: function() {
            
            function scrollCheck(){
                if(window.scrollY > s.scrollClassTrigger){
                    document.querySelector('body').classList.add('scrolled');
                } else {
                    document.querySelector('body').classList.remove('scrolled');
                }
            }
            function scrollDirCheck(e){
                var delta = ((e.deltaY || -e.wheelDelta || e.detail) >> 10) || 1;;
                if (delta > 0) {
                    
                    document.querySelector('body').classList.remove('scrolling-up');
                    document.querySelector('body').classList.add('scrolling-down');
                } else {
                    document.querySelector('body').classList.remove('scrolling-down');
                    document.querySelector('body').classList.add('scrolling-up');
                }
            }
            
            window.onscroll = function(){scrollCheck()};
            window.addEventListener('mousewheel', scrollDirCheck);
            window.addEventListener('DOMMouseScroll', scrollDirCheck);
           
        },



        //Update scroll bar width
        scrollBarWidth: function() {
            var outer = document.createElement("div");
            outer.style.visibility = "hidden";
            outer.style.width = "100px";
            outer.style.msOverflowStyle = "scrollbar"; // needed for WinJS apps

            document.body.appendChild(outer);

            var widthNoScroll = outer.offsetWidth;
            // force scrollbars
            outer.style.overflow = "scroll";

            // add innerdiv
            var inner = document.createElement("div");
            inner.style.width = "100%";
            outer.appendChild(inner);

            var widthWithScroll = inner.offsetWidth;

            // remove divs
            outer.parentNode.removeChild(outer);

            s.scrollBarWidth = widthNoScroll - widthWithScroll;

            
        },
        

        smoothScrolling: function() {
              /* Smooth scroll */
              Math.easeOut = function (t, b, c, d) { t /= d; return -c * t*(t-2) + b; };

              (function() { // do not mess global space
              var
                interval, // scroll is being eased
                mult = 0, // how fast do we scroll
                dir = 0, // 1 = scroll down, -1 = scroll up
                steps = 50, // how many steps in animation
                length = 30; // how long to animate
              function MouseWheelHandler(e) {
                e.preventDefault(); // prevent default browser scroll
                clearInterval(interval); // cancel previous animation
                ++mult; // we are going to scroll faster
                var delta = -Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
                if(dir!=delta) { // scroll direction changed
                  mult = 1; // start slowly
                  dir = delta;
                }
                for(var tgt=e.target; tgt!=document.documentElement; tgt=tgt.parentNode) {
                  var oldScroll = tgt.scrollTop;
                  tgt.scrollTop+= delta;
                  if(oldScroll!=tgt.scrollTop) break;
                }
                var start = tgt.scrollTop;
                var end = start + length*mult*delta; // where to end the scroll
                var change = end - start; // base change in one step
                var step = 0; // current step
                interval = setInterval(function() {
                  var pos = Math.easeOut(step++,start,change,steps);
                  //window.scrollTo(0,pos);
                  tgt.scrollTop = pos;
                  if(step>=steps) { // scroll finished without speed up - stop by easing out
                    mult = 0;
                    clearInterval(interval);
                  }
                },10);
              }
              window.addEventListener("mousewheel", MouseWheelHandler, false);
              window.addEventListener("DOMMouseScroll", MouseWheelHandler, false);
              })();
            
        },

        removeMethod : function(){
          if (!('remove' in Element.prototype)) {
              Element.prototype.remove = function() {
                  if (this.parentNode) {
                      this.parentNode.removeChild(this);
                  }
              };
          }
        },

        tabs () {
          let tabLinks = selectAll('.tab-link>a'),
              tabContents = selectAll('.tab-contents>div'),
              removeInitial = function (parent) {
                let tabLinks = parent.querySelectorAll('.tab-link>a')
                    tabContents = parent.querySelectorAll('.tab-contents>div')

                tabLinks.forEach(link => {
                  link.parentNode.classList.remove('active')
                })
                tabContents.forEach(content => {
                  content.classList.remove('active')
                })
              }

          tabLinks.forEach(link => {
            link.addEventListener('click', (e) => {
              e.preventDefault()
              removeInitial(link.parentNode.parentNode.parentNode.parentNode)
              let target = link.href.split('#')[1]
              select('#' + target).classList.add('active')
              link.parentNode.classList.add('active')
            })
          })
        },

        accordian () {
          let aTrigger = selectAll('.accordian-trigger'),
              aPanel = selectAll('.accordian-panel'),
              reset = function () {
                aTrigger.forEach(trigger => {
                  trigger.classList.remove('active')
                })

                aPanel.forEach(panel => {
                  TweenLite.to(panel,0.8, {maxHeight: 0, ease: Power3.easeInOut})
                })
              }
              // Searching for active panel
              aPanel.forEach(panel => {
                if(panel.classList.contains('active')) TweenLite.set(panel,{maxHeight: panel.scrollHeight})
              })


              aTrigger.forEach(trigger => {
                trigger.addEventListener('click', function() {
                  //reset()
                  let panel = this.nextElementSibling
                  if(this.classList.contains('active')) {
                    this.classList.remove('active')
                    TweenLite.to(panel,0.8, {maxHeight: 0, ease: Power3.easeInOut})
                  } else {
                    reset()
                    this.classList.add('active')
                    TweenLite.to(panel,0.8, {overwrite:"all", maxHeight: panel.scrollHeight, ease: Power3.easeInOut})
                  }
                  
                })
              })


        }
    }

export default NF
