// Update it as much as you want, just don't change the name
export class Circle {
  constructor(private radius: number) {}

  getArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}
// Update it as much as you want, just don't change the name
export class Rectangle {
  constructor(private width: number, private height: number) {}

  getArea(): number {
    return this.width * this.height;
  }
}
// Update it as much as you want, just don't change the name
export function sumOfAllAreas(...shapes: { getArea: () => number }[]): number {
  return shapes.reduce((totalArea, shape) => totalArea + shape.getArea(), 0);
}

const circle1 = new Circle(2);
const circle2 = new Circle(3);
const rect1 = new Rectangle(2, 4);
const rect2 = new Rectangle(3, 2);

console.log(sumOfAllAreas(circle1, circle2)); // ~ 40.84 (approximately)
console.log(sumOfAllAreas(circle1, rect1)); // 20
