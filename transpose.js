function runProgram(input) {
    // Write code here
    let arr=input.split("\n");
    let [row,col]=arr[0].trim().split(" ").map(Number);
    let mat=[];

    for(let i=1;i<=row;i++){
        mat.push(arr[i].trim().split(" ").map(Number))
    }
    let newMatrix=[];
    for(let c=0;c<mat[0].length;c++){
        let newRow=[];
        for(let r=0;r<mat.length;r++){
            newRow.push(mat[r][c])
        }
        newMatrix.push(newRow.join(" "))

    }
   console.log(newMatrix.join("\n"))
  }
  if (process.env.USERNAME === "SHUBHAM") {
    runProgram(``);
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