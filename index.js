// Code your solution in this file!
function distanceFromHqInBlocks(number) {
    let result
    if (number > 42) {
        return number - 42;
    }
    if (number < 42) {
        return 42 - number;
    }
    return result;
}

function distanceFromHqInFeet(number) {
    let result = distanceFromHqInBlocks(number) * 264;
    return result;
}

function distanceTravelledInFeet(num1, num2) {
    let result 
    if (num1 > num2) {
        return (num1 - num2) * 264;
    }
    if (num1 < num2) {
        return (num2 - num1) * 264;
    }
    return result;
}


function calculatesFarePrice(num1, num2) {
    let result
    if (distanceTravelledInFeet(num1, num2) < 400) {
        result = 0;
    }
    if (distanceTravelledInFeet(num1, num2) > 400 && distanceTravelledInFeet(num1, num2) < 2000) {
        result = (distanceTravelledInFeet(num1, num2) - 400) * .02;
    }
    if (distanceTravelledInFeet(num1, num2) > 2000 && distanceTravelledInFeet(num1, num2) < 2500) {
        result = 25;
    }
    if (distanceTravelledInFeet(num1, num2) > 2500) {
        result = 'cannot travel that far';
    }
    return result;
}

