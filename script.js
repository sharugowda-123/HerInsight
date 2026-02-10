function calculatePCOSRisk() {
  let score = 0;

  if (document.getElementById("pcos_q1").checked) score += 3; // Irregular periods
  if (document.getElementById("pcos_q2").checked) score += 2; // Weight gain
  if (document.getElementById("pcos_q3").checked) score += 1; // Acne
  if (document.getElementById("pcos_q4").checked) score += 2; // Excess hair
  if (document.getElementById("pcos_q5").checked) score += 1; // Hair thinning
  if (document.getElementById("pcos_q6").checked) score += 1; // Fatigue

  if (score <= 3) {
    return "Low Risk";
  } else if (score <= 7) {
    return "Medium Risk";
  } else {
    return "High Risk";
  }
}

function calculateAnemiaRisk() {
  let score = 0;

  if (document.getElementById("anemia_q1").checked) score += 3; // Fatigue
  if (document.getElementById("anemia_q2").checked) score += 2; // Dizziness
  if (document.getElementById("anemia_q3").checked) score += 2; // Pale skin
  if (document.getElementById("anemia_q4").checked) score += 2; // Breathlessness
  if (document.getElementById("anemia_q5").checked) score += 1; // Low iron diet

  if (score <= 3) {
    return "Low Risk";
  } else if (score <= 6) {
    return "Medium Risk";
  } else {
    return "High Risk";
  }
}

function showResults() {
  const pcosRisk = calculatePCOSRisk();
  const anemiaRisk = calculateAnemiaRisk();

  document.getElementById("pcosResult").innerText =
    "PCOS Risk Level: " + pcosRisk;

  document.getElementById("anemiaResult").innerText =
    "Anemia Risk Level: " + anemiaRisk;
}
