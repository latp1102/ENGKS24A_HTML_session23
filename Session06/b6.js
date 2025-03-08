let numberArray = [
    ["", false, 0, 5, 10, "Hello world!"],
    ["", false, 0, undefined, null],
    [NaN, "test", 4],
    ["JavaScript", 0, null, true, 7, " "]
];

for (let arr of numberArray) {
    let numberArray1 = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i]) { 
            numberArray1.push(arr[i]);
        }
    }

    console.log(numberArray1);
}
