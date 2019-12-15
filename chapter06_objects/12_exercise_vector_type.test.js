// Your code here.
/*
Write a class Vec that represents a vector in two-dimensional space. It takes x and y parameters (numbers), which it
should save to properties of the same name.
*/
class Vec{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
    plus(otherVec){
        this.x = this.x + otherVec.x;
        this.y = this.y + otherVec.y;
    }
    minus(otherVec){
        this.x = this.x - otherVec.x;
        this.y = this.y - otherVec.y;
    }
    get length(){
        return Math.sqrt(this.x*this.x+this.y*this.y);
    }
}
/*
Give the Vec prototype two methods, plus and minus, that take another vector as a parameter and return a new vector
 that has the sum or difference of the two vectors’ (this and the parameter) x and y values.
*/
/*
Add a getter property length to the prototype that computes the length of the vector—that is, the distance of the
point (x, y) from the origin (0, 0).
 */
test('plus', () => {
    let v = new Vec(1, 2);
        v.plus(new Vec(2, 3));
    expect(v).toStrictEqual(new Vec(3,5));
});
test('minus', () => {
    let v = new Vec(1, 2);
    v.minus(new Vec(2, 3));
    expect(v).toStrictEqual(new Vec(-1,-1));
});
test('length', () => {
    expect(new Vec(3, 4).length).toBe(5);
});