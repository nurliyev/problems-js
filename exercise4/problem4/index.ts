interface Shape {
  getArea: () => number;
}
// Update it as much as you want, just don't change the name
export class Circle {
  radius: number;
  constructor(radius: number) {
    this.radius = radius;
  }

  getArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

export class Rectangle {
  width: number;
  height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }
}

// Update it as much as you want, just don't change the name
export function sumOfAllAreas(...shapes: Shape[]): number {
  return shapes.reduce((totalArea, shape) => totalArea + shape.getArea(), 0);
}

const circle1 = createCircle(2);
const circle2 = createCircle(3);
const rect1 = createRectangle(2, 4);
const rect2 = createRectangle(3, 2);
