function mergeSort(n, arr1, arr2) {

  let res=[];
  let i=0;
  let j=0;
  while(i<arr1.length&&j<arr2.length){
      if(arr1[i]<arr2[j]){
          res.push(arr1[i]);
          i++;
      }else{
          res.push(arr2[j]);
          j++
      }
  }
  while(i<arr1.length){
      res.push(arr1[i]);
      i++
  }
  while(j<arr2.length){
      res.push(arr2[j]);
      j++
  }
  console.log(res.join(" "))
}


function runProgram(input) {
    // Write code here
    input = input.split("\n");
    let n = +input[0];
    let arr1 = input[1].trim().split(" ").map(Number)
    let arr2 = input[2].trim().split(" ").map(Number)
    mergeSort(n, arr1, arr2)

}
if (process.env.USERNAME === "SHUBHAM") {
    runProgram(`4
    1 5 7 9
    2 4 6 8`);
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
        process.exit(0);
    });
}