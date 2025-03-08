let n = +prompt("Nhập số lượng phần tử n:");

if (isNaN(n) || n < 0) {
    console.log("Số lượng phần tử không hợp lệ");
} else {
    let arr = [];
    for (let i = 0; i < n; i++) {
        let num = parseInt(prompt(`Nhập phần tử thứ ${i + 1}:`));
        arr.push(num);
    }

    let count = 0;
    for (let num of arr) {
        if (num < 0) {
            count++;
        }
    }

    console.log( arr);

    if (n === 0) {
        console.log("Mảng không có phần tử");
    } else {
        console.log(count);
    }
}