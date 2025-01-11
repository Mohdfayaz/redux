// impure function

let count = 0;
function impureAdd() {
    count += 1;
    return count;
}

// pure function
function pureAdd(mul){
    return mul * 2;
}

console.log(pureAdd(10))