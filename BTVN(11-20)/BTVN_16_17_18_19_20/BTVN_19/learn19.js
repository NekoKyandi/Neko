function but1_a() {
    const ten = document.getElementById("bai1_ten").value;
    const tuoi = document.getElementById("bai1_tuoi").value;
    const diachi = document.getElementById("bai1_diachi").value;
    const a = "";
    let list = []
    if (ten == a || tuoi == a || diachi == a){
        document.getElementById("bai1_text").innerHTML = "Chưa điền đầy đủ";
    } else document.getElementById("bai1_text").innerHTML = "Đã điền đầy đủ";
    // document.getElementById("ten").innerHTML = "tên: " + ten;
    let ten1 = [];
    let tuoi1 = [];
    let diachi1 = [];
    ten1.push(ten)
    tuoi1.push(tuoi)
    diachi1.push(diachi)
    document.getElementById("ten").innerHTML =ten1;
    document.getElementById("tuoi").innerHTML =tuoi1;
    document.getElementById("diachi").innerHTML =diachi1;
    
}