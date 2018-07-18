// Initialize custom select on saving place form

const savingPlanEle = document.getElementById('savingPlan-form');
if (savingPlanEle) {
  console.log('custom select')
  const savingPlaneForm = new CGForm(document.getElementById('savingPlan-form'));
}

const collegePlanEle = document.getElementById('collegePlan-form');
if (collegePlanEle) {
  console.log('custom select')
  const collegePlanForm = new CGForm(document.getElementById('collegePlan-form'));
}

const collegePlanEle2 = document.getElementById('collegePlan-form2');
if (collegePlanEle2) {
  console.log('custom select')
  const collegePlanForm2 = new CGForm(document.getElementById('collegePlan-form2'));
}
