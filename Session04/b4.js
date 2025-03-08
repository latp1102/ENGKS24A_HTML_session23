let n = +prompt("nhập số lượng phần tử n:");

if (isNaN(n) || n < 0) {
    console.log("số lượng phần tử không hợp lệ");
} else {
    let arr = [];

    for (let i = 0; i < n; i++) {
        let charInput = prompt(`nhập ký tự thứ ${i + 1}:`);
        arr.push(charInput);
    }

    let numberArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (!isNaN(arr[i]) && arr[i] !== " ") {
            numberArray.push(arr[i]);
        }
    }

    console.log(arr);

    if (numberArray.length === 0) {
        console.log("không có ký tự số");
    } else {
        console.log(numberArray.join(" "));
    }
}