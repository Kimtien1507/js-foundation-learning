function calculateRectangleArea(length, width) {
    if (typeof length === 'number' && typeof width === 'number') {
        return length * width;
    } else {
        throw new Error('Rectangle requires 2 numeric parameters: length and width.');
    }
}

function calculateTriangleArea(height, base) {
    if (typeof height === 'number' && typeof base === 'number') {
        return 0.5 * height * base;
    } else {
        throw new Error('Triangle requires 2 numeric parameters: height and base.');
    }
}

function calculateCircleArea(radius) {
    if (typeof radius === 'number') {
        return Math.PI * Math.pow(radius, 2);
    } else {
        throw new Error('Circle requires 1 numeric parameter: radius.');
    }
}

function calculateShapeArea(shapeType, parameters) {
    switch (shapeType) {
        case 'rectangle':
            return calculateRectangleArea(...parameters);
        case 'triangle':
            return calculateTriangleArea(...parameters);
        case 'circle':
            return calculateCircleArea(...parameters);
        default:
            throw new Error('Shape not supported.');
    }
}

try {
    // Example
    console.log(calculateShapeArea('rectangle', [5, 10])); // Rectangle : 50
    console.log(calculateShapeArea('triangle', [8, 6])); // Triangle : 24
    console.log(calculateShapeArea('circle', [4])); // Circle : ~50.27
    console.log(calculateShapeArea('square', [3])); // Exception: Shape not supported.
} catch (error) {
    console.error(error.message);
}
