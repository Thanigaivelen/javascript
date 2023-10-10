function findSecondMax(arr) {
    if (arr.length < 2) {
        return "the array should contain atleast 2 elements";
    }

    let max = arr[0];
    let secondMax = arr[1];

    if (secondMax > max) {
        max = arr[1];
        secondMax = arr[0];
    }

    for (let i = 2; i < arr.length; i++) {
        if (arr[i] > max) {
            secondMax = max;
            max = arr[i];
        } else if (arr[i] > secondMax && arr[i] !== max) {
            secondMax = arr[i];
        }
    }

    return secondMax;
}


const numbers = [12, 5, 19, 8, 25, 13];
const secondMaxNumber = findSecondMax(numbers);
console.log("Second Max Number:", secondMaxNumber);
