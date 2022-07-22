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

