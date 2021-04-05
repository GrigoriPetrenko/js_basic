function processData(input) {
    //Enter your code here
    let inArray = input.split('\n').splice(1);
    inArray.forEach(myFunction);
    
    function myFunction(func){
        let evenStr = '';
        let oddStr = '';
        for(let i = 0; i < func.length; i++) {
            if (i % 2) {
            oddStr += func[i]
            }  else {
            evenStr += func[i]
            };
        }
        console.log(`${evenStr} ${oddStr}`);
    }
} 