
function findSecondMaxRegular(a, b, c) {
    if (a >= b && a >= c) {
        if (b >= c) {
            return b;
        } else {
            return c;
        }
    } else if (b >= a && b >= c) {
        if (a >= c) {
            return a;
        } else {
            return c;
        }
    } else {
        if (a >= b) {
            return a;
        } else {
            return b;
        }
    }
}


const findSecondMaxAnonymous = function(a, b, c) {
    if (a >= b && a >= c) {
        if (b >= c) {
            return b;
        } else {
            return c;
        }
    } else if (b >= a && b >= c) {
        if (a >= c) {
            return a;
        } else {
            return c;
        }
    } else {
        if (a >= b) {
            return a;
        } else {
            return b;
        }
    }
};


const findSecondMaxArrow = (a, b, c) => {
    if (a >= b && a >= c) {
        if (b >= c) {
            return b;
        } else {
            return c;
        }
    } else if (b >= a && b >= c) {
        if (a >= c) {
            return a;
        } else {
            return c;
        }
    } else {
        if (a >= b) {
            return a;
        } else {
            return b;
        }
    }
};


function printSecondMax(a, b, c, findSecondMaxFunction) {
    const secondMax = findSecondMaxFunction(a, b, c);
    console.log("Second Maximum:", secondMax);
}


printSecondMax(10, 5, 15, findSecondMaxRegular);
printSecondMax(20, 30, 10, findSecondMaxAnonymous);
printSecondMax(5, 8, 5, findSecondMaxArrow);
