function main() {
    const n = parseInt(readLine(), 10);
    someMath(n);
}

function someMath(n){
    for(var i = 1; i < 11; i++){
       console.log(n + " x " + i + " = " + (i*n)); 
    } 
}