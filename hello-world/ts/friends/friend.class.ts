export class Friend {

    name: string = '';
    age: number = 0;
    email: string = '';
    bff: boolean = false;

    display(): void {
        console.log(`${this.name} ${this.age} ${this.email} ${(this.bff ? 'Yes' : 'No')}`);
    }

    constructor(name: string, age: number, email: string, bff: boolean = false) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.bff = bff;
    }
}