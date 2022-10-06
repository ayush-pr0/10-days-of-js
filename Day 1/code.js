// Problem can be found here : https://www.hackerrank.com/challenges/js10-arithmetic-operators/problem

/**
Calculate the area and perimeter of a rectangle.

   length: The length of the rectangle.
   width: The width of the rectangle.

   Return a number denoting the rectangle's area and perimeter.
*/


function getArea(length, width) {
    let area;
    // Code
    area = length*width;
    return area;
}


function getPerimeter(length, width) {
    let perimeter;
    // Code
    perimeter = 2*(length+width);
    return perimeter;
}
