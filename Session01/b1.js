let number = prompt("Nhập vào chuỗi số").split(" ");
let sum= "";
let count = 0;
for (const i of number) {
    if (i >= 10) {
        sum += i + " ";
        count++;
    }
    
}
console.log(count !== 0 ? `${ sum}` : "không có có nào lớn hơn 10");
