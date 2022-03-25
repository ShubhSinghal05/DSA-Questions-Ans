function binary(n,arr,k){
    let low=0;
    let high=arr.length-1;
    let count=0;
     let ans;
    var mid=Math.floor(low+(high-low)/2)

    while(low<high){
      if(arr[mid]==k){
        count++;
        ans=mid
        high=mid-1
        return ans
        
      }
      if(arr[mid]<k){
        low=mid+1
      }
      if(arr[mid]>k){
        high=mid-1
      }
      return (-1,-1,0)
    }
    
    

}



function runProgram(input) {
    // Write code here
    input=input.split("\n");
    
    
    
        let n=+input[0];
        let arr=input[1].trim().split(" ").map(Number);
        let k=+input[2];
        console.log(binary(n,arr,k))
    
   
  }
  if (process.env.USERNAME === "SHUBHAM") {
    runProgram(`6
    1 1 1 2 2 2	
    1`);
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