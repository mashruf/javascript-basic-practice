function areaOfCircle(radius){
    return 3.1416 * (radius ** 2);
    
}

function areaOfRectangle(length, width){
    return length * width;
}

function areaOfTriangle(base, height){
    return (1/2) * base * height;
}

console.log("Area of circle is "+areaOfCircle(5).toFixed(2));
console.log("Area of rectange is "+areaOfRectangle(12,5));
console.log("Area of triangle is "+areaOfTriangle(8,6));
