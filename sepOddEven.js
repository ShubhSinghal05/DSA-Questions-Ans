function sepOddEven(n, arr, q) {

    /* Initialize left and right indexes */
    var left = 0, right = arr.length - 1;
    while (left < right) {
        /* Increment left index while we see 0 at left */
        if(arr[left] % 2 == 0 && left < right)
            left++;
        /* Decrement right index while we see 1 at right */
        if(arr[right] % 2 == 1 && left < right)
            right--;
        if (left < right && q == 2) {
            /* Swap arr[left] and arr[right]*/
            var temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
            left++;
            right--;
        }
        console.log(arr)
    }

}


function runProgram(input) {
    // Write code here
    input = input.split("\n");
    let testcase = +input[0];
    let line = 1;
    for (let i = 0; i < testcase; i++) {
        let n = +input[line++];
        let arr = input[line++].trim().split(" ").map(Number);
        let q = +input[line++]
        sepOddEven(n, arr, q)
    }

}
if (process.env.USERNAME === "SHUBHAM") {
    runProgram(`2
    6
    1 3 5 2 7 4
    1
    6 
    1 3 5 2 7 4
    2`);
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
    process.on("SIGvar", function () {
        read = read.replace(/\n$/, "");
        runProgram(read);
        process.exit(0);
    });
}