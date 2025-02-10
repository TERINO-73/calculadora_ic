const { sumar, restar,multiplicar,dividir,raiz } = require('./calculadora');

test('Suma 2 + 3 y devuelve 5', () => {
    expect(sumar(2, 3)).toBe(5);
});
test('Suma 3 + 3 y devuelve 5', () => {
    expect(sumar(3, 3)).toBe(6);
});

test('Resta 5 - 3 y devuelve 2', () => {
    expect(restar(5, 3)).toBe(2);
});

test('Resta 6 - 3 y devuelve 3', () => {
    expect(restar(6, 3)).toBe(3);
});
test('Resta 5 - 2 y devuelve 3', () => {
    expect(restar(5, 3)).toBe(2);
});



test('Multiplica 5 * 3 y devuelve 15', () => {
    expect(multiplicar(5, 3)).toBe(15);
});
test('Divide 6 / 3 y devuelve 2', () => {
    expect(dividir(6, 3)).toBe(2);
});

test('Raiz de 4 es 2', () => {
    expect(raiz(4)).toBe(2);
});
