var myArr = [1, 2, 3, 4, 5];

function addOrRemoveElementFromArray(_id) {
    for (let i = 0; i < myArr.length; i++) {
        if (myArr[i] === _id) {
            return myArr.unshift(_id);
        } else {
            return myArr.push(_id);
        }
    }
}
// findElementViaId(6);
// console.log(myArr);

var int1 = [10, 20, 30];

var sum = 0;

for (let i = 0; i < int1.length; i++) {
    sum += int1[i];
}

// console.log(sum);

function areaOfRectangle(kk, uk) {
    let area;
    area = kk * uk;
    console.log(area);
}
// areaOfRectangle(10, 20);

function perimeterOfRectangle(kk, uk) {
    let rectangle = 0;
    rectangle = 2 * (kk * uk);
    console.log(rectangle);
}

// perimeterOfRectangle(10, 20);

function getRectArea(width, height) {
    if (width > 0 && height > 0) {
        return width * height;
    }
    return 0;
}

// console.log(getRectArea(3, 4));

function counter() {
    for (var count = 1;; count++) { // infinite loop
        console.log(count + 'A'); // until 5
        if (count === 5) {
            return;
        }
        console.log(count + 'B'); // until 4
    }
}

// counter();


let myArr2 = [10, 20, 30, 40, 50, 60];
let arr = [];

function findByValue(val) {
    for (let i = 0; i < myArr2.length; i++) {
        if (myArr2[i] === val) {
            break;
        } else {
            return arr.push(val);
        }
    }
}
// findByValue(11);
// console.log(arr);

var myArray = [10, 20, 30, 40, 50, 60, 5, 2, 200];

function findMinAndMaxValueInAnArray(_arr) {

    let max = _arr[0];
    let min = _arr[0];

    for (let i = 1; i < _arr.length; i++) {
        if (_arr[i] < min) {
            min = _arr[i]
        } else if (_arr[i] > max) {
            max = _arr[i];
        }
    }
    console.log(`min,MAX = ${[min,max]}`);
    return [min, max];
}
// findMinAndMaxValueInAnArray(myArray);

/*      ***************************************************************************************************************************************************************************************************************************************         */
//! SELECTION SORT
function selectionSort(_array) {

    for (var i = 0; i < _array.length - 1; i++) {
        var min = i;
        for (var j = i + 1; j < _array.length; j++) {
            if (_array[j] < _array[min]) {
                min = j;
            }
        }
        // swapping (with temporary variable)
        swap(_array, min, i);
    }
    console.log(_array);
}

function swap(arr, x, y) {
    /**
     * x = min ,  y = value of first for loop
     */
    var temp = arr[x];
    arr[x] = arr[y];
    arr[y] = temp;

}
// selectionSort(myArray);


//! INSERTION SORT
const insertion = (_givenArr => {
    for (let i = 0; i < _givenArr.length; i++) {
        let key = _givenArr[i];
        j = i - 1;
        while (j >= 0 && _givenArr[j] > key) {
            _givenArr[j + 1] = _givenArr[j];
            j = j - 1;
        }
        _givenArr[j + 1] = key;
    }
    return _givenArr;
});
// console.log(insertion([40, 10, 30, 201, 21]));

function parseTime(unixTime) {

    const currentDate = new Date();
    var seconds = Math.floor((new Date() - unixTime) / 1000);
    intervalHours = seconds / 3600;
    intervalMinutes = seconds / 60;
    intervalDays = seconds / 86400;

    if (intervalHours >= 1 && intervalHours <= 24) {
        return "data sended " + Math.floor(intervalHours) + " hours ago";
    } else if (intervalMinutes < 1) {
        return "data sended  " + Math.floor(intervalMinutes) + " minutes ago"
    } else if (intervalDays > 1) {
        return "data sended : " + currentDate.getDay() + "/" + currentDate.getMonth() + "/" + currentDate.getFullYear();
    } else if (intervalDays < 1) {
        return "data sended yesterday" + " " + currentDate.getHours() + " clock";

    }
}

console.log(parseTime(new Date(Date.now() - 31536000 * 20))); // minutes -> gün*20 = 1 gün 20 dk olmuş
console.log(parseTime(new Date(Date.now() - 31536000))); // -> bir gün