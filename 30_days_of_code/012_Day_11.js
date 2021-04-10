function main() {
    let arr = Array(6);

    for (let i = 0; i < 6; i++) {
        arr[i] = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }
    let maxSum = -51416512651;
    
    for(var i = 0; i < arr.length - 2; i++){
        for(var j = 0; j < arr[i].length - 2; j++){
            
            let sumOne = arr[i][j] + arr[i][j+1] + arr[i][j+2];
            let sumTwo = arr[i+1][j+1];
            let sumThree = arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2];
            let lassSum = sumOne + sumTwo + sumThree;
            
            (lassSum > maxSum )? maxSum = lassSum: null;   
        }
    }
    console.log(maxSum)
}