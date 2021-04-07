function processData(input) {
    //Enter your code here
    let inputToArr = input.split("\n");
    let entryLength = inputToArr.splice(0, 1);
    var queries = inputToArr.splice(entryLength);
    
    for (var i = 0; i < entryLength; i++) {
    inputToArr[i] = inputToArr[i].split(" ");
    }
    var phoneBookMap = new Map(inputToArr);
  
  for (var i = 0; i < queries.length; i++) {
    if (phoneBookMap.has(queries[i])) {
      console.log(queries[i] + "=" + phoneBookMap.get(queries[i]));
    } else {
      console.log("Not found");
    }
  }
} 