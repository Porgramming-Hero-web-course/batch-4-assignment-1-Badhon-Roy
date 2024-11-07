{
    // problem 4
    type CircleArea = {
        shape : "circle";
        radius : number;
    }
    type RectangleArea = {
        shape : "rectangle";
        width : number;
        height : number;
    }

    // Define a union type
    type Shape = CircleArea | RectangleArea

    const calculateShapeArea = (shape : Shape) : number | undefined =>{
        if(shape.shape === 'circle'){
            return parseFloat((Math.PI * shape.radius * shape.radius).toFixed(2))
        }
        else if(shape.shape === 'rectangle'){
            return parseFloat((shape.height * shape.width).toFixed(2));
        }
        // if shape doesn't match, return undefine explicitly
        return undefined;
    }


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