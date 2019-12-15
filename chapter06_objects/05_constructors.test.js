let protoRabbit = {
    speak(line) {
        return `The ${this.type} rabbit says '${line}'`;
    }
};

test('explicit constructor', () => {
    function makeRabbit(type) {
        let rabbit = Object.create(protoRabbit);
        rabbit.type = type;
        return rabbit;
    }

    expect(makeRabbit('handmade').speak("hello there")).toBe("The handmade rabbit says 'hello there'");
});
/*
JavaScript provides a way to make defining this type of function easier. If you put the keyword new in front of a
function call, the function is treated as a constructor. This means that an object with the right prototype is
 automatically created, bound to this in the function, and returned at the end of the function.
 */
describe('constructor with new', function () {
    function Rabbit(type) {
        this.type = type;
    }

    Rabbit.prototype.speak = function (line) {
        return `The ${this.type} rabbit says '${line}'`;
    };
    let weirdRabbit = new Rabbit("weird");

    test('new makes function a constructor', () => {

        expect(weirdRabbit.speak("hello there")).toBe("The weird rabbit says 'hello there'");
        expect(Object.getPrototypeOf(weirdRabbit)).toBe(Rabbit.prototype);

        let weirderRabbit = new Rabbit("even weirder");
        expect(weirderRabbit.speak("hello there")).toBe("The even weirder rabbit says 'hello there'");
    });
    /*
    Constructors (all functions, in fact) automatically get a property named prototype, which by default holds a plain,
    empty object that derives from Object.prototype. You can overwrite it with a new object if you want. Or you can add
     properties to the existing object, as the example does.
     */

    /*
    It is important to understand the distinction between the way a prototype is associated with a constructor (through
    its prototype property) and the way objects have a prototype (which can be found with Object.getPrototypeOf). The actual
    prototype of a constructor is Function.prototype since constructors are functions. Its prototype property holds the
    prototype used for instances created through it.
     */
    test('prototype of a function is Function prototype', () => {
        expect(Object.getPrototypeOf(Rabbit)).toBe(Function.prototype);

    });
    test('', () => {
        expect(Object.getPrototypeOf(weirdRabbit)).toBe(Rabbit.prototype);
    });
});