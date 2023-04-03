function fun(fn, gn) {
    console.log("welcome to fun");
    gn();
    fn();
}

fun(function f() {
    console.lo("calling fn inside fun");
    //console.trace();
}, function g() {
    console.log("Calling gn inside fun")
});