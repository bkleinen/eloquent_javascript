const mat = require('./matrix.js');
const Matrix  = mat.Matrix;

class SymmetricMatrix extends mat.Matrix {
    constructor(size, element = (x, y) => undefined) {
        super(size, size, (x, y) => {
            if (x < y) return element(y, x);
            else return element(x, y);
        });
    }

    set(x, y, value) {
        super.set(x, y, value);
        if (x != y) {
            super.set(y, x, value);
        }
    }
}


test('test symmetry', () => {
    let matrix = new SymmetricMatrix(5, (x, y) => `${x},${y}`);
    expect(matrix.get(2, 3)).toBe("3,2");
});

test('instance of', () => {
    expect(new SymmetricMatrix(2) instanceof SymmetricMatrix).toBe(true);
    expect(new SymmetricMatrix(2) instanceof Matrix).toBe(true);
    expect(new Matrix(2, 2) instanceof SymmetricMatrix).toBe(false);
    expect([1] instanceof Array).toBe(true);
});