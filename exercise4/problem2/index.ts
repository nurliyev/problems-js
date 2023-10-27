class Name {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName =
      firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();
    this.lastName =
      lastName.charAt(0).toUpperCase() + lastName.slice(1).toLowerCase();
  }

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  get initials(): string {
    return `${this.firstName.charAt(0)}.${this.lastName.charAt(0)}`;
  }
}
const p1 = new Name("john", "SMITH");

console.log(p1.firstName); // "John"
console.log(p1.lastName); // "Smith"
console.log(p1.fullName); // "John Smith"
console.log(p1.initials); // "J.S"
export default Name;
