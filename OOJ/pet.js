class Pet {
    constructor(animal, age, breed, sound) {
        this.animal = animal;
        this.age = age;
        this.breed = breed;
        this.sound = sound;
    }

    get activity() {
        const today = new Date();
        const hour = today.getHours();

        if (hour > 8 && hour <= 20) {
            return 'playing';
        } else {
            return 'sleeping';
        }

    }

    speak() {
        console.log(this.sound);
    }

    get owner() {
        return this._owner;
    }

    set owner(owner) {
        this._owner = owner;
        console.log(`Setter Called: ${owner}`)
    }

}

const ernie = new Pet("Dog", 1, "Pug", "YIP");
const vera = new Pet("Monkey", 52, "Monkey", "WAHHHH");

ernie.owner = 'Blake';