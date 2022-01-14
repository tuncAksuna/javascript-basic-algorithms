var library = [

    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        libraryID: 1254
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        libraryID: 4264
    },
    {
        author: 'Suzanne Collins',
        title: 'Mockingjay: The Final Book of The Hunger Games',
        libraryID: 3245
    }
];



var myArray = [102, 3102, 3, 41, 2, 31];

window.onload = function() {
    for (var i = 0; i < myArray.length - 1; i++) {
        var min = i;
        for (var j = i + 1; j < myArray.length; j++) {
            if (myArray[j] < myArray[min]) {
                min = j;
            }
        }
        if (min != i) {
            var tmp = myArray[i];
            myArray[i] = myArray[min];
            myArray[min] = tmp;
        }
    }
    console.log(myArray);
};