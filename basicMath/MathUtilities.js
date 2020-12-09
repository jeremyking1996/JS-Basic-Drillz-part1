class MathUtilities {


    add(baseValue, valueToAdd){
        let sum = baseValue + valueToAdd;
        return sum;
    }

    subtract(baseValue, valueToAdd){
        let remainder = baseValue - valueToAdd;
        return remainder;
    }

    divide(baseValue, valueToAdd){
        let dividend = baseValue / valueToAdd;
        return dividend;
    }

    multiply(baseValue, valueToAdd){
        let product = baseValue * valueToAdd;
        return product;
    }
}

module.exports = MathUtilities;