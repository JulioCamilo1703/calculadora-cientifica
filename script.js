
// Agrega caracteres a la pantalla de la calculadora
function append(value) {
    document.getElementById('display').value += value;
}

// Limpia la pantalla
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Borra el último carácter
function deleteChar() {
    let display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

// Calcula la expresión
function calculate() {
    let display = document.getElementById('display');
    let expression = display.value;
    
    try {
        // Reemplaza "^" por "**" para realizar potencias
        expression = expression.replace(/\^/g, '**');
        display.value = eval(expression);
    } catch (error) {
        display.value = "Error";
    }
}
