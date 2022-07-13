function but1() {
    const test = document.getElementById('item');
    let n = parseInt(prompt("nhập n:"));
    let copyn = 1;
    let copya = [];
    let a = []
    let b = []
    for (copyn;copyn <= n;copyn++) {
        a.push(copyn);
        copya.push(copyn);
    }
    for (i=1; i<=a.length; i++) {
        if (copya[i]%2==0){
            b.push(copya[i]);
        }
    }
    item.innerHTML = a;
    item_1.innerHTML = b;
}

function but2() {
    const test = document.getElementById('item_2');
    let A = parseInt(prompt("nhập a:"));
    let B = parseInt(prompt("Nhập n:"));
    let a = 0;
    let b = 0
    for (i=0; i<A; i++) {
        a+=i;
        if (a<=A) {
            b=i;
        }
    }
    for (i=0; i<B; i++) {
        sum+=i;
    }
    item_2.innerHTML = b;
    item_3.innerHTML = sum;

}