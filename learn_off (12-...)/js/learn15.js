function but1() {
    const num = document.getElementById("am_duong")
    let a = parseInt(prompt("Check số âm dương"));
    if(a>0){
        am_duong.innerHTML = "đây là số dương.";
    } else if(a<0) {
        am_duong.innerHTML = "đây là số âm.";
    }else if(a==0){
        am_duong.innerHTML = "đây là số khum.";
    }
}

function but2() {
    const numm = document.getElementById("web")
    let a = parseInt(prompt("nhập a:"));
    let b = parseInt(prompt("nhập b:"));
    let c = parseInt(prompt("nhập c:"));
    
    if(a>b){
        web.innerHTML = "web a";
    }else if(a>c){
        web.innerHTML = "web a";
    } else if(b>c){
        web.innerHTML = "web b";
    } else {
        web.innerHTML = "web c";
    }

}

function but4() {
    const a = document.getElementById("space")
    let text = prompt("nhập thoải mái đê :>")
    space.innerHTML = "Đây đúng chưa: " + text + ".";

}

function but5() {
    const a = document.getElementById("up")
    var text = prompt("nhập thoải mái đê :>")
    up.innerHTML = "Đây đúng chưa: " + text + ".";

}
