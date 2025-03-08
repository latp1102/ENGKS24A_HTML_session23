let number = prompt("Nhập vào chuỗi số ").split("");
let max = 0;
let index;

for (const i in number) {
    if (number[i] > max) {
        max = number[i];
        index = i;
    }
}
if (max !== 0) {
    console.log(` số lớn nhất ${max} vị trí ${index}`);
    
} else {
    console.log("kho");
    
}
