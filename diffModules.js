function diffModulus(a, b, c) {
    // console.log(a,b,c)
    // let sum = ([a % c] - [b % c] + c) % c
    // console.log(sum)

    let sums=(a-b)%c
    if(sums<0){
        sums=([a % c] - [b % c] + c) % c
    }
    console.log(sums)

}



function runProgram(input) {
    // Write code here
    input = input.split("\n");
    let testcase=input[0];
    let line=1
    // let n = +input[0];
    for(let i=0;i<testcase;i++){

        let [a, b, c] = input[line++].trim().split(" ").map(Number)
        diffModulus(a, b, c)
    }

}
if (process.env.USERNAME === "SHUBHAM") {
    runProgram(`8
    5 7 8
    7 7 6
    3 7 7
    4 9 3
    9 4 8
    9 1 6
    3 2 3
    5 5 9`);
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