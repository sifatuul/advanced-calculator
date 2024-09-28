
const expressionElement = document.getElementById('expression');
const resultElement = document.getElementById('result');
let expression = '';

document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        // Clear button functionality
        if (value === 'C') {
            expression = '';
            expressionElement.textContent = '0';
            resultElement.textContent = '0';
            return;
        }

        // Equals button functionality
        if (value === '=') {
            try {
                expression = expression.replace('×', '*').replace('÷', '/');
                resultElement.textContent = eval(expression);
            } catch {
                resultElement.textContent = 'Error';
            }
            return;
        }

        // Add clicked value to expression
        expression += value;
        expressionElement.textContent = expression;
    });
});
