// Q: Given size of 3 line segments, check that whether using these segments we 
// can form a triangle or not ?

// Ex: li = 7, l2 = 10, l3 = 5
// ans -> "Yes we can make a triangle"

// Ex: l1 = 1, l2 = 10, l3 = 12
// ans -> "No we cannot make a triangle"

// -> sum of 2 sides should be greater than the third side, and this should be true for
// all sides.

// (li + l2) > l3 and (l1 + l3) > l2 and (l2 + l3) > l1

let l1 = 1, l2 = 10, l3 = 12;
if(((l1 + l2) > l3) && ((l1 + l3) > l2) && ((l2 + l3) > l1)) {
    console.log("Yes we can make a triangle");
} else {
    console.log("No we cannot make a triangle");
}