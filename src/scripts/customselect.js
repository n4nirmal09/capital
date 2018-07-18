; (function (window) {

  'use strict';

  var document = window.document;

  if (!String.prototype.trim) {
    String.prototype.trim = function () { return this.replace(/^\s+|\s+$/g, ''); };
  }

  function CGForm(el) {
    this.el = el;
    this.overlay = this.el.querySelector('.cg-overlay');
    this.fields = [];
    this.fldOpen = -1;
    this._init();
  }

  CGForm.prototype = {
    _init: function () {
      var self = this;
      Array.prototype.slice.call(this.el.querySelectorAll('select')).forEach(function (el, i) {
        self.fldOpen++;
        self.fields.push(new CGField(self, el, 'dropdown', self.fldOpen));
      });
      Array.prototype.slice.call(this.el.querySelectorAll('input')).forEach(function (el, i) {
        self.fldOpen++;
        self.fields.push(new CGField(self, el, 'input', self.fldOpen));
      });
      // this.overlay.addEventListener('click', function (ev) { self._closeFlds(); });
      // this.overlay.addEventListener('touchstart', function (ev) { self._closeFlds(); });

      var body = document.querySelector('body');
      body.addEventListener('click', function (ev) {
        self._closeFlds();
      });
    },
    _closeFlds: function () {
      if (this.fldOpen !== -1) {
        this.fields[this.fldOpen].close();
      }
    }
  }

  function CGField(form, el, type, idx) {
    this.form = form;
    this.elOriginal = el;
    this.pos = idx;
    this.type = type;
    this._create();
    this._initEvents();
  }

  CGField.prototype = {
    _create: function () {
      if (this.type === 'dropdown') {
        this._createDropDown();
      }
      else if (this.type === 'input') {
        this._createInput();
      }
    },
    _createDropDown: function () {
      var self = this;
      this.fld = document.createElement('div');
      this.fld.className = 'cg-field cg-dd';
      this.toggle = document.createElement('a');
      this.toggle.innerHTML = this.elOriginal.options[this.elOriginal.selectedIndex].innerHTML;
      this.toggle.className = 'cg-field-toggle';
      this.optionsList = document.createElement('ul');
      this.optionsList.setAttribute('class', 'cg-select-menu');
      var ihtml = '';
      Array.prototype.slice.call(this.elOriginal.querySelectorAll('option')).forEach(function (el, i) {
        ihtml += self.elOriginal.selectedIndex === i ? '<li class="cg-dd-checked">' + el.innerHTML + '</li>' : '<li>' + el.innerHTML + '</li>';
        // selected index value
        if (self.elOriginal.selectedIndex === i) {
          self.selectedIdx = i;
        }
      });
      this.optionsList.innerHTML = ihtml;
      this.fld.appendChild(this.toggle);
      this.fld.appendChild(this.optionsList);
      this.elOriginal.parentNode.insertBefore(this.fld, this.elOriginal);
      this.elOriginal.style.display = 'none';
    },
    _createInput: function () {
      var self = this;
      this.fld = document.createElement('div');
      this.fld.className = 'cg-field cg-ti-text';
      this.toggle = document.createElement('a');
      this.toggle.innerHTML = this.elOriginal.getAttribute('placeholder');
      this.toggle.className = 'cg-field-toggle';
      this.optionsList = document.createElement('ul');
      this.getinput = document.createElement('input');
      this.getinput.setAttribute('type', 'text');
      this.getinput.setAttribute('placeholder', this.elOriginal.getAttribute('placeholder'));
      this.getinputWrapper = document.createElement('li');
      this.getinputWrapper.className = 'cg-ti-input';
      this.inputsubmit = document.createElement('button');
      this.inputsubmit.className = 'cg-field-go';
      this.inputsubmit.innerHTML = 'Go';
      this.getinputWrapper.appendChild(this.getinput);
      this.getinputWrapper.appendChild(this.inputsubmit);
      this.example = document.createElement('li');
      this.example.className = 'cg-ti-example';
      this.example.innerHTML = this.elOriginal.getAttribute('data-subline');
      this.optionsList.appendChild(this.getinputWrapper);
      this.optionsList.appendChild(this.example);
      this.fld.appendChild(this.toggle);
      this.fld.appendChild(this.optionsList);
      this.elOriginal.parentNode.insertBefore(this.fld, this.elOriginal);
      this.elOriginal.style.display = 'none';
    },
    _initEvents: function () {
      var self = this;
      this.toggle.addEventListener('click', function (ev) { ev.preventDefault(); ev.stopPropagation(); self._open(); });
      this.toggle.addEventListener('touchstart', function (ev) { ev.preventDefault(); ev.stopPropagation(); self._open(); });

      if (this.type === 'dropdown') {
        var opts = Array.prototype.slice.call(this.optionsList.querySelectorAll('li'));
        opts.forEach(function (el, i) {
          el.addEventListener('click', function (ev) { ev.preventDefault(); self.close(el, opts.indexOf(el)); });
          el.addEventListener('touchstart', function (ev) { ev.preventDefault(); self.close(el, opts.indexOf(el)); });
        });
      }
      else if (this.type === 'input') {
        this.getinput.addEventListener('keydown', function (ev) {
          if (ev.keyCode == 13) {
            self.close();
          }
        });
        this.inputsubmit.addEventListener('click', function (ev) { ev.preventDefault(); self.close(); });
        this.inputsubmit.addEventListener('touchstart', function (ev) { ev.preventDefault(); self.close(); });
      }

    },
    _open: function () {
      if (this.open) {
        return false;
      }
      this.open = true;
      this.form.fldOpen = this.pos;
      var self = this;
      this.fld.className += ' cg-field-open';
    },
    close: function (opt, idx) {
      if (!this.open) {
        return false;
      }
      this.open = false;
      this.form.fldOpen = -1;
      this.fld.className = this.fld.className.replace(/\b cg-field-open\b/, '');

      if (this.type === 'dropdown') {
        if (opt) {
          // remove class cg-dd-checked from previous option
          var selectedopt = this.optionsList.children[this.selectedIdx];
          selectedopt.className = '';
          opt.className = 'cg-dd-checked';
          this.toggle.innerHTML = opt.innerHTML;
          // update selected index value
          this.selectedIdx = idx;
          // update original select element´s value
          this.elOriginal.value = this.elOriginal.children[this.selectedIdx].value;
        }
      }
      else if (this.type === 'input') {
        this.getinput.blur();
        this.toggle.innerHTML = this.getinput.value.trim() !== '' ? this.getinput.value : this.getinput.getAttribute('placeholder');
        this.elOriginal.value = this.getinput.value;
      }
    }
  }

  // add to global namespace
  window.CGForm = CGForm;

})(window);
