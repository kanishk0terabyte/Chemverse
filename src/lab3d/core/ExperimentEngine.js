export default class ExperimentEngine {
  constructor() {
    this.solutionType = "true"; // true | suspension | colloid
    this.waterLevel = 0.6;
    this.isStirring = false;
    this.lightOn = true;
  }

  setSolution(type) {
    this.solutionType = type;
  }

  toggleStir() {
    this.isStirring = !this.isStirring;
  }

  toggleLight() {
    this.lightOn = !this.lightOn;
  }
}