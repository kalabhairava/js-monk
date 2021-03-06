class Dog {
  constructor(name) {
    this.name = name;
  }

  bark() {
    return `I'm a stupid dog named ${this.name}`;
  }
}

class Cat {
  constructor(name) {
    this.name = name;
  }

  meow() {
    return `I'm a stupid cat named ${this.name}`;
  }
}

// export default Dog; ==> ES6 syntax

// export an object which contains all the classes
module.exports = {
  Dog: Dog,
  Cat: Cat
};

// IMPORTANT => This is Node.js way of exporting module, not ES6. This is incorrent.
// This works in Node.js because it provides the object module.exports by default
// module.exports is not available in ES6
