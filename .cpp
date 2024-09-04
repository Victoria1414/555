#include <iostream>
#include <vector>
using namespace std;

unsigned long long catalan(int n) {
    vector<unsigned long long> C(n + 1, 0);
    C[0] = 1;  // C0 це 1

    for (int i = 1; i <= n; ++i) {
        for (int j = 0; j < i; ++j) {
            C[i] += C[j] * C[i - 1 - j];
        }
    }
    
    return C[n];
}

int main() {
    vector<int> ns; // Вектор для зберігання введених значень n
    int n; // потосно введене число

    // Зчитування значень
    while (cin >> n) {
        if (n % 2 != 0 || n < 2 || n > 50) {
            cout << "Введіть парне число від 2 до 50" << endl;
        } else {
            ns.push_back(n); // Додаємо введене значення n до вектора ns
        }
    }

    // Обробка введеного значення
    for (int n : ns) {
        // Обчислення числа Каталану для n/2
        unsigned long long result = catalan(n / 2);
        
        cout << result << endl;
    }

    return 0;
}
