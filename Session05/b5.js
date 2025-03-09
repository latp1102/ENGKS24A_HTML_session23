let n = +prompt("Nhập số lượng phần tử n:");

if (isNaN(n) || n < 0) {
    console.log("Số lượng phần tử không hợp lệ");
} else {
    let arr = [];

    for (let i = 0; i < n; i++) {
        let char = prompt(`Nhập ký tự thứ ${i + 1}:`);
        arr.push(char);
    }

    let sum = 0;
    let dem = 0;

    for (let i = 0; i < arr.length; i++) {
        if (!isNaN(arr[i]) && arr[i] !== null && arr[i] !== "") { 
            sum += Number(arr[i]); 
            dem = 1;
        }
    }

    console.log(arr);

    if (n === 0) {
        console.log("Mảng không có phần tử");
    } else if (!dem) {
        console.log("Không có số nào trong mảng");
    } else {
        console.log("Tổng các số trong mảng là:", sum);
    }
}
