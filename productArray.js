function productArray(n,arr){
    let sum=1;
    for(let i=0;i<n;i++){
        sum*=arr[i]
    }
    console.log(sum)
}



function runProgram(input) {
    // Write code here
    input=input.split("\n");
    let n=+input[0];
    let arr=input[1].trim().split(" ").map(Number);
    productArray(n,arr)
   
  }
  if (process.env.USERNAME === "SHUBHAM") {
    runProgram(`5
    3 5 2 9 4`);
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