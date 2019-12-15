exports.Rabbit = Rabbit = class Rabbit {
    constructor(type) {
        this.type = type;
    }
    speak(line) {
        return `The ${this.type} rabbit says '${line}'`;
    }
}
exports.killerRabbit  = new Rabbit("killer");
exports.blackRabbit = new Rabbit("black");