function but1() {
    const bai1 = document.getElementById("cau1")
    let n = prompt("nhap n:");
    let a = " "
    for (i=1; i<=n; i++) {
        a = a + i +" ";
    }
    let b =  " "
    for (i=1; i<=n; i++) {
        if (i%2==0) {
            b = b + i + " ";
        }
    }
    cau1.innerHTML = "tu 1 den n: " + a + "; so chan tu 1 den n: " + b;
}

function but2() {
    const bai2 = document.getElementById("cau2")
    let A = prompt("Nhap A:");
    let tong = 0;
    let KQ = 0
    for (i=1; i<=A; i++) {
        tong = tong + i;
        if (tong <= A) {
            KQ = i;
        }
    }
    cau2.innerHTML = KQ
}

function but3() {
    const bai3 = document.getElementById("cau3")
    let n = prompt("Nhap n:");
    let a = n.length;
    let b = 0
    let tong = 0
    for (i=0; i<a; i++) {
        n = n/10
    }
    cau3.innerHTML = "so luong: " + a + "; tong: " + tong + "; dao nguoc: " + dao;
}