// Функція для обчислення числа Каталана
function catalan(n) {
    let C = new Array(n + 1).fill(0);
    C[0] = 1;  // C0 is 1

    // Обчислюємо числа Каталана C1 до Cn
    for (let i = 1; i <= n; ++i) {
        for (let j = 0; j < i; ++j) {
            C[i] += C[j] * C[i - 1 - j];
        }
    }

    return C[n];
}

// Функція для обробки введених даних
function processInput(input) {
    let ns = input.trim().split('\n').map(Number);
    let results = [];

    ns.forEach(n => {
        if (n % 2 === 0 && n >= 2 && n <= 50) {
            let result = catalan(n / 2);
            results.push(result);
        }
    });

    return results;
}

// Читання введених даних з консолі
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = '';

rl.on('line', (line) => {
    input += line + '\n';
});

rl.on('close', () => {
    let results = processInput(input);
    results.forEach(result => console.log(result));
});
