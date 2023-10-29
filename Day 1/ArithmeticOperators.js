// Calculate and return the area of a rectangle
function getArea(length, width) {
    const area = length * width;
    return area;
}

// Calculate and return the perimeter of a rectangle
function getPerimeter(length, width) {
    const perimeter = 2 * (length + width);
    return perimeter;
}

// Example usage:
const area1 = getArea(20, 30);
const perimeter1 = getPerimeter(20, 30);

const area2 = getArea(40, 90);
const perimeter2 = getPerimeter(40, 90);

console.log("Area 1:", area1);
console.log("Perimeter 1:", perimeter1);
console.log("Area 2:", area2);
console.log("Perimeter 2:", perimeter2);
