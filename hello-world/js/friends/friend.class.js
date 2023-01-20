"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Friend = void 0;
class Friend {
    display() {
        console.log(`${this.name} ${this.age} ${this.email} ${(this.bff ? 'Yes' : 'No')}`);
    }
    constructor(name, age, email, bff = false) {
        this.name = '';
        this.age = 0;
        this.email = '';
        this.bff = false;
        this.name = name;
        this.age = age;
        this.email = email;
        this.bff = bff;
    }
}
exports.Friend = Friend;
