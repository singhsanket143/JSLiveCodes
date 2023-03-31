for(let i = 1; i <= 5; i++) {
    // let str = "";
    for(let j = 1; j <= i; j++) {
        // str += "*";
        process.stdout.write("*"); // this wont work in browser
    }
    // console.log(str);
    console.log();
}