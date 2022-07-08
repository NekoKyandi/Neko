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
    const bai3_tong = document.getElementById("bai3_tong")
    const bai3_dao = document.getElementById("bai3_dao")
    let n = prompt("Nhap n:");
    let copy = n;
    let a = n.length;
    let b = 0
    let tong = parseInt(0);
    let dao = " "
    // cau3.innerHTML = n
    for (i=0; i<a; i++) {
        tong = tong + n%10;
        n=n/10;
    }
    
    let mang = copy.split("");
    let m = mang.reverse();
    dao = m.join("");
    cau3.innerHTML = "so luong: " + a;
    cau3_tong.innerHTML = "tong: " + parseInt(tong,0);
    cau3_dao.innerHTML = "dao: " + dao;
}

function but4() {
    const bai4 = document.getElementById("bai4")
    const bai4_am = document.getElementById("bai4_am");
    const bai4_duong = document.getElementById("bai4_duong");
    let a = prompt("Nhap a:");
    let tong_am = 0;
    let tong_duong = 0;
    let tong_0 = 0;
    let max_am = 0;
    let max_duong = 0;
    a.split("");
    // bai4.innerHTML = a;
    for (i = 0; i <= a.length; i--) {
        if (a[i]>0){
            tong_duong += 1;
        }
        if (a[i]<0){
            tong_am += 1;
        }
        if (a[i]=0){
            tong_0 += 1;
        }
        if (a[i]>=max_duong){
            max_duong = a[i];
        }
        if (a[i]>=max_am){
            max_am = a[i];
        }
    }

    bai4.innerHTML = "tong so am: " + tong_am + "; tong so duong: " + tong_duong;
    bai4_am.innerHTML = "so am lon nhat: " + max_am;
    bai4_duong.innerHTML = "so duong lon nhat: " + max_duong;
}