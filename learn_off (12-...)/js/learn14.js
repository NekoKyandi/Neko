console.log("Hello world")

function butFunction() {
    const text = document.getElementById("text")
    let hmm = prompt("Điền cái gì đó đê :D");
    text.innerHTML = "Bạn vừa điền: " + "'" + hmm + "'" + " đúng chứ?."
}

function but1Function() {
    const Yname = document.getElementById("Yname")
    let input = prompt("Nhap ho:");
    let input1 = prompt("Nhap ten:");
    Yname.innerHTML = "Tên Tôi là:" + input + " " + input1
}

function but2Function() {
    const math = document.getElementById("math")
    let a = parseInt(prompt("Nhập số đầu:"));
    let b = parseInt(prompt("Nhập số sau:"));
    let tong = a + b;
    let hieu = a - b;
    let tich = a * b;
    let thuong = a / b;
    math.innerHTML = "Tổng: " + tong + "__Hiệu: " + hieu + "__Tích: " + tich + "__Thương: " + thuong
}

function but3() {
    const number = document.getElementById("random_number")
    let random = Math.floor((Math.random() * 100) + 1);
    random_number.innerHTML = "số bạn vừa random là: " + "' " + random + " '."
}

function but4() {
    const pop = document.getElementById("pop_up")
    alert("Đây là pop-up -.-");
    alert("Đã bảo đừng ấn rồi mà -.-")
}

function but5() {
    const loading = document.getElementById("load")
    let y = 0;
    for (y=1;y<100;y++){
        // y=y+1;
        // load.innerHTML = y+"%"
    }
}