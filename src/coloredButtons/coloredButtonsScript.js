let colorValues = [];

function createButtons() {
  let buttons = [
    "button 01",
    "button 02",
    "button 03",
    "button 04",
    "button 05",
    "button 06",
    "button 07",
    "button 08",
    // "button 09",
    // "button 10",
    // "button 11",
    // "button 12",
  ];
  let parent = document.getElementById("coloredButtons");
  colorSteps(buttons.length);

  for (let i = 0; i < buttons.length; i++) {
    let newButton = document.createElement("div");
    let backgroundColor =
      "rgb(" +
      colorValues[i][0] +
      "," +
      colorValues[i][1] +
      "," +
      colorValues[i][2] +
      ")";

    let borderColor =
      "rgb(" +
      (colorValues[i][0] - 50) +
      "," +
      (colorValues[i][1] - 50) +
      "," +
      (colorValues[i][2] - 50) +
      ")";

    newButton.innerHTML = buttons[i];
    newButton.className = "text btn brightness";
    newButton.style.backgroundColor = backgroundColor;
    newButton.style.borderColor = borderColor;

    parent.appendChild(newButton);
  }
}

function colorSteps(steps) {
  for (let i = 0; i < steps; i++) {
    let value = (480 / steps) * i;
    setColorValues(value);
  }
}

function setColorValues(value) {
  let result = value / 80;
  let rest = value % 80;
  let newValue = [];

  switch (Math.floor(result)) {
    case 0:
      newValue = 100 + rest;
      colorValues.push([180, newValue.toFixed(), 100]);
      break;
    case 1:
      newValue = 180 - rest;
      colorValues.push([newValue.toFixed(), 180, 100]);
      break;
    case 2:
      newValue = 100 + rest;
      colorValues.push([100, 180, newValue.toFixed()]);
      break;
    case 3:
      newValue = 180 - rest;
      colorValues.push([100, newValue.toFixed(), 180]);
      break;
    case 4:
      newValue = 100 + rest;
      colorValues.push([newValue.toFixed(), 100, 180]);
      break;
    case 5:
      newValue = 180 - rest;
      colorValues.push([180, 100, newValue.toFixed()]);
      break;
    default:
      break;
  }
}
