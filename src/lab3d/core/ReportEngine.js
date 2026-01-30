// src/lab3d/core/ReportEngine.js

export function generateReport(solutionType) {
  const reports = {
    true: {
      title:
        "Preparation of a True Solution, Suspension and Colloid",
      aim:
        "To prepare a true solution and study its properties.",
      materials:
        "Beaker, water, common salt, glass rod.",
      procedure: [
        "Take water in a clean beaker.",
        "Add common salt to the water.",
        "Stir the solution with a glass rod.",
        "Observe the solution.",
      ],
      observations: [
        "Solution is clear and transparent.",
        "No particles are visible.",
        "No scattering of light is observed.",
      ],
      result:
        "The mixture is a true solution as the solute is completely dissolved.",
      precautions: [
        "Use clean apparatus.",
        "Add solute slowly.",
        "Stir gently.",
      ],
    },

    colloid: {
      title:
        "Preparation of a Colloidal Solution",
      aim:
        "To prepare a colloidal solution and study Tyndall effect.",
      materials:
        "Beaker, water, starch/milk, glass rod.",
      procedure: [
        "Take water in a beaker.",
        "Add starch or milk slowly.",
        "Stir continuously.",
        "Observe the solution in light.",
      ],
      observations: [
        "Solution appears milky.",
        "Particles are not visible.",
        "Tyndall effect is observed.",
      ],
      result:
        "The mixture is a colloid as it scatters light.",
      precautions: [
        "Add colloid slowly.",
        "Do not overheat.",
      ],
    },

    suspension: {
      title:
        "Preparation of a Suspension",
      aim:
        "To prepare a suspension and study its properties.",
      materials:
        "Beaker, water, chalk powder/sand.",
      procedure: [
        "Take water in a beaker.",
        "Add chalk powder.",
        "Stir the mixture.",
        "Leave it undisturbed.",
      ],
      observations: [
        "Solution is cloudy.",
        "Particles are visible.",
        "Particles settle on standing.",
      ],
      result:
        "The mixture is a suspension as particles settle down.",
      precautions: [
        "Stir before observation.",
        "Do not disturb while settling.",
      ],
    },
  };

  return reports[solutionType];
}