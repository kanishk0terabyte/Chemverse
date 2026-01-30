export default class StepEngine {
  constructor() {
    this.currentStep = 0;
  }

  nextStep() {
    this.currentStep++;
    console.log("STEP →", this.currentStep);
  }

  getStep() {
    return this.currentStep;
  }

  reset() {
    this.currentStep = 0;
  }
}