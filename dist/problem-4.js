"use strict";
{
    const calculateShapeArea = (shape) => {
        if (shape.shape === 'circle') {
            return parseFloat((Math.PI * shape.radius * shape.radius).toFixed(2));
        }
        else if (shape.shape === 'rectangle') {
            return parseFloat((shape.height * shape.width).toFixed(2));
        }
        // if shape doesn't match, return undefine explicitly
        return undefined;
    };
    const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
    console.log(circleArea);
    const rectangleArea = calculateShapeArea({
        shape: "rectangle",
        width: 4,
        height: 6,
    });
    console.log(rectangleArea);
    //
}
