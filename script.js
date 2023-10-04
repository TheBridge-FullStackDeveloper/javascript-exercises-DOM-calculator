let currentInput = "";
let currentOperator = "";
let currentValue = null;

// FUNCIONES PARA CALCULAR

function operate(input, currentValue, currentOperator) {
  // 1. Crea un switch que dependiendo del operador actual (currentOperator) realice 
  // la operación correspondiente con el valor actual (currentValue) y el valor de entrada (input).

  // ¡Devuelve el valor actual (currentValue)!
}

function operations(value) {
  if (value === "+" || value === "-" || value === "*" || value === "/") {
    if (currentInput !== "") {
      if (currentOperator !== "") {
        calculateResult();
      }
      currentOperator = value;
      currentValue = parseFloat(currentInput);
      currentInput = "";
    }
  } else {
    currentInput += value;
  }

  return currentInput;
}

function calculateResult(currentInput, currentValue, currentOperator) {
  if (currentInput !== "") {
    const input = parseFloat(currentInput);

    currentValue = operate(input, currentValue, currentOperator);
    
    currentInput = "";
    currentOperator = "";

    return currentValue;
  }
}

// FUNCIONES PARA INTERACTUAR CON EL DOM

function appendToDisplay(value) {
  currentInput = operations(value);

  // 2. Selecciona el elemento con el id "display" y cambia su contenido de texto al valor de currentInput.
}

function clearDisplay() {
  currentInput = "";
  currentOperator = "";
  currentValue = null;

  // 3. Selecciona el elemento con el id "display" y cambia su contenido de texto a "0".
}

function appendResult() {
  let result = calculateResult(currentInput, currentValue, currentOperator);

  // 4. Selecciona el elemento con el id "display" y cambia su contenido de texto al resultado.
}
