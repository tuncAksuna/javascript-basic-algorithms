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

checkFun()

function checkFun() {
    var n1 = document.getElementById("tableData").rows.length;
    var i = 0,
        j = 0;
    var str = "";

    for (i = 0; i < n1; i++) {
        var n2 = document.getElementById("tableData").rows[i].cells;
        for (j = 0; j < n2.length; j++) {
            var x = document.getElementById("tableData").rows[i].cells.item(j).innerHTML;
            str = str + x + ":";
        }
        str = str + "#";
    }
    document.getElementById("tablecontent").innerHTML = str;
}