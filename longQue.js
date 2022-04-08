function longQueue(n, arr){
    //write code here
  var count=0
    for(var i=0;i<n;i++){
      if(arr[i+1]>=arr[i]){
      } else {
        count++;
      }
    }
  console.log(count);
}



function runProgram(input) {
    // Write code here
    input=input.split("\n");
    let n=+input[0];
    let arr=input[1].trim().split(" ").map(Number);
    longQueue(n,arr)
   
  }
  if (process.env.USERNAME === "SHUBHAM") {
    runProgram(`6
    1 2 4 3 5 8`);
  } else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
      read += input;
    });
    process.stdin.on("end", function () {
      read = read.replace(/\n$/, "");
      read = read.replace(/\n$/, "");
      runProgram(read);
    });
    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0) ;
    });
  }