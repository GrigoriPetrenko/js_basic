function bitwiseAnd(N, K) {
    let maximum = 0;
 for (let i = 1; i <= N; i++) {
   for (let j = 1; j < i; j++) {
     let bitOp = i & j;

     if ((maximum < bitOp) && (bitOp < K)) {
       maximum = bitOp;
     }
   }
 }
 return maximum;
}