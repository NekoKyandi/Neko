function but1() {
    const va = document.getElementById("bai1_input").value;
    //const bai1 = document.createElement("bai1");
    let KQ = ""
    if (va%2==0){
        KQ="chan"
    } else {KQ="le"}
    console.log(KQ);
    document.getElementById("bai1").innerHTML ="KQ = "+ KQ;
}

function but2() {
    const snt = document.getElementById("bai2_input").value;
    const snt1 = document.getElementById("bai2_input1").value;
    const snt2 = document.getElementById("bai2_input2").value;
    let s = 0
    let s1 = 0
    let s2 = 0 
    let KQ_bai2 = ""
    let num = 0
    for (let i = 1; i <= snt; i++){
        if (snt%i == 0)  {
            s = s+1;
        }
    }
    for (let j = 1; j <= snt1; j++){
        if (snt1%j == 0)  {
            s1 = s1+1;
        }
    }
    for (let k = 1; k <= snt2; k++){
        if (snt2%k == 0)  {
            s2 = s2+1;
        }
    }
    if (s == 2) {
        num = num + 1;
    }
    if (s1 == 2) {
        num = num + 1;
    }
    if (s2 == 2) {
        num = num + 1;
    }
    for (let m = 0; m < 2; m ++){
        if (s == 2){
            KQ_bai2 = snt;
            break;
        }else if (s1 == 2){
            KQ_bai2 = snt1;
            break;
        }else if (s2 == 2){
            KQ_bai2 = snt2;
            break;
        }
    }
    
    if (num == 3) {
        KQ_bai2 = "Hoan Hao"
    }
    if (num == 0) [
        KQ_bai2 = " Hao Hao"
    ]
    document.getElementById("bai2").innerHTML = "KQ = " + KQ_bai2
}