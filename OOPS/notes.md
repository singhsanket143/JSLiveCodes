# Objects in JS

Now in order to understand classes in JS, we need to understand Objects in JS first. 
In JS we have string, number boolean etc these kind of types. That means we can store a string value, number value, boolean value etc. What if I want to store a value that doesn;t represent something atomic and instead represent something which is more complex and is a club of multiple atomic value, example: a Product. 

Let’s say we are building an e-commerce application. In an e-commerce app, we have wide variety of Products . When we say the word Products we refer to a wide range of real life instances or commodities. For example: Iphone 12, macbook pro etc these are real life products. 

So how would you represent these complex entities ? 
We can use an obejct. Why ? Objects are nothing but a bunch key-value pairs, where key identifies a unique property and value indentifies the value associated with the key. 

For example, if we have to define a Product object, we can have `name`, `price`, `discount` all of these as Keys and then `Iphone12` as a value to the `name` key, then `100000` as a value to the `price` key and `10` as a value to the `discount` key. 

```
let iphone = {
    name: "Iphone 12",
    price: 100000,
    discount: 10
}
```

All the keys, actually represent some property of a real life entity, and "iphone12", 100000, 10 these represent values to those properties. 

That's why objects can actually represent real life entities for us. 

But now on an e-commerce platform, there can lakhs of objects, are we going to make all of them like the above ? 
So we need a better mechanism to actually create objects which can represent real life entities. And for this we can use `Classes`. 

# Class 
In computer science we sometimes need to define a blueprint of a real life instance. 
You might have seen architects preparing blue prints. Blueprints representa how a flat/home might look like, in terms of design, shape and size, etc. Blue print is not an actual flat. Based on the design we have in the blue print we prepare actual real flats. 

Similar things exist in programming, if you see an ecommerce website, on that we have multiple products. Any product page you open looks similar, as every product has a name, description, price, rating, discount etc. All these properties are common, apart from that you can buy any product,  bookmark any product, etc. These behaviours are also common. 
So we can say for every product listed on an e-commerce platform has the same blueprint. Means, we can define how a product should be before we can actually start making new products. 

Now in technical terms, the blue print we prepare is called as classes. And the actual complex entity which has multiple properties and behaviours to posses are called as Objects. 
- For ex: `Product` will be a class and `Macbook` will be an object. 
- For ex: `Category` will be a class and `Electronics` will be an object.

We can create classes in JS using `class` keyword. 
Inside a class we can define two things:
- Properties of the real life entities to be parepared.
- Behaviours of the real life entitities to be prepared. 

So let's say, we want to make `Product` class, 
`What properties Product class should have ? `
Properties helps us to uniquely identify every object, so we should keep those things that can keep Products segregated and helps us to differenciate them. 
 - Name
 - Description
 - Price
 - Rating
 .
 .
 .

And so on. 

`What behaviours Product class should have?`
Behaviours are actually actions that can be done on the object
- We can buy a Product.
- We can bookmark a product.
.
.
.
and so on.

To define properties in the class we use a technnical term `data memebers` and for behaviours we use a term `member functions`.

Now let's see syntactically, how can we define a class.

```
class Product {
    // below are the data members
    name;
    description;
    price;
    rating;

    // below are the member functions
    buy() {

    }

    display() {

    }
}

```

So here, we write the class keyword, followed by the name of the class followed by a pair of curly braces. 
Inside the curly braces, we can mention our data memebers (without any need to use let, var, const) and member functions (without using any function keyword). 

Note: A lot of people don't know that they can define data members by just putting them outside of all of the functions in a class. 

### How can we use classes to create an object ? 
To create a new real life entity (object) we can use two things together:
- `new` keyword
- `constructor` function

```
let iphone = new Product();
console.log(iphone);
```

## Constructor function
whenever we create a brand new object, there are multiple steps that takes place. 
1. We create an empty plain object
2. We call the constructor function of the class.

That means constructor is a default function that gets invoked automatically during creation of an object. It is the first function that gets called when object is created. 

Inside the constructor we have access to the plain new object we created before calling the constructor. To access this plain object we can use the `this` keyword. 
Now objects are just key-value pairs right, so using something like `this.propertyname = propertyvalue` can actually add a new key value pair in the object pointed by `this`.

By default, every class in JS, has a default constructor. Otherwise, `constructor` keyword is used to define constructors in a JS class. 

Now what we can do is, we can use the `constructor` method, to actually assign values to `data members`.  When we do `this.datamemeber` and assign it a value, then it created a new key-value pair in the plain object. 
```
class Product {
    name;
    description;
    price;
    rating;
    constructor(n, d, p, r) {
        this.name = n;
        this.description = d;
        this.price = p;
        this.rating = r;
    }

    buy() {

    }

    display() {

    }
}
```
Now because we are initialising values of the data memebers inside constructor, we dont need to mention them outside (only in one use case we will do so....).
```
class Product {
    constructor(n, d, p, r) {
        this.name = n;
        this.description = d;
        this.price = p;
        this.rating = r;
    }

    buy() {

    }

    display() {

    }
}

let iphone = new Product("iphone", "brand new iphone", 100000, 4.5);
console.log(iphone);
```

Now when we initialise a new object using `new Classname()` then here when we mention class name and put a pair of parenthesis, then we are actually calling the constructor of the class.
```
let iphone = new Product("iphone", "brand new iphone", 100000, 4.5);
console.log(iphone);

```
Here we are calling Product constructor, and if you see above in the class, the constructor expects 4 args. So we can pass them and constructor will use them automtically. 

You might feel, constructor is a function, what if we do something like `return 10` to it ? If you are returning a non-object value it will be ignored. But if you are returning another object say o1, then this o1 object will be returned. 

```
class Product {
    constructor(n, d, p, r) {
        this.name = n;
        this.description = d;
        this.price = p;
        this.rating = r;
        return {x: 9, y: 10};
    }

    buy() {

    }

    display() {

    }
}

let iphone = new Product("iphone", "brand new iphone", 100000, 4.5);
console.log(iphone);

// write a show class
```
Output of above code will be 
`{ x: 9, y: 10 }`

### Can we have more than 1 constructors in a class, may be different constructors have different number of parameters ? Is this possible ? 
No, we cannot do constructor overloading in JS. 

## dot operator
For any object, if we want to call any member function of the object we can use the dot (`.`) operator. 

```
iphone.display();
```
Here in the iphone variable we have a new product object stored, so on that object we have access to a display function, which gets called using `.` operator. 

## new keyword

What is the use of new keyword ??
It has one very simple usecase, wherever you use a new keyword, it just creates a brand new plain empty object. 

## this keyword
Inside the constructor of a class, this refers to the plain object created by new. But to understand this we need to get a more indepth clarity.
Apart from construcctor you can use `this` keyword in other member functions as well. So what does it refer to there ? 
```
display() {
        console.log(this);
}
```
So in simple terms, `this` keyword in JS, refers to the calling context. `this` keyword in JS is different than JAVA or C++. 

For example, when we create a plain object using `new` keyword and then call the constructor, this means that we are calling the constructor with respect to the new plain object,, hence the calling context becomes the new plain object and `this` starts referring to the plain object.
When we call a member function of an object like `iphone.display()`, here using the iphone object we are calling the display function, so `this` keyword refers to the `iphone` object, because that is the calling context.

Let's take an example:
```
x = {
  name: "Sanket",
  age: 25,
  fun: function fun() {
		console.log("name of the boy is ", this.name);	
  }
}

console.log(x.fun());
```
Above code will print
```
name of the boy is  Sanket
```
Now in the above piece of code, the function fun, is using a this keyword. Now the object x, is just a plain JS object right ? How come it can do something with `this` you might be thinking. But as I mentioned earlier, `this` refers to the calling context. 
Now who is calling the function fun ? `x` object is calling `fun`, so `x` is the calling context, so `this` refers to object `x` and when you do `this.name` it refers to the name property of object `x`. 

```
function fun() {
		console.log("name of the boy is ", this.name);	
 }
x = {
  name: "Sanket",
  age: 25,
  getName: fun 
}

console.log(x.getName());
```
Above code will print
```
name of the boy is  Sanket
```
Now here we extrcated out the function fun, outside of `x`, and we are accessing `this` keyword in the function fun. Now when you call `x.getName` the calling context is `x` and hence `this` refers to x, so when `getName` function is called, which is internally referring to function fun, there we have access of `this` keyword as object `x` and hence we get the same ans. 


## Function constructor
Classes is a fairly new syntax in JS, if you see very old legacy code, you might not find classes. Before existence of class keyword in JS, we used to have functions only to do the blue printing that now classes do. So technically, classes are just wrapper over these speacial functions that can act as blue prints and create new objects, which we call as `Function constructors`

```
function Product(n, d, r, p) {
    this.name = n;
    this.price = p;
    this.rating = r;
    this.description = d;
  }
  let iphone = new Product("iphone", "iphone 14 pro", 4.5, 100000);
  console.log(iphone);
```
The above code works exactly like we create a Product class and then create objects out of it. 
Now what will this refer to ? 
Calling context that is the plain new object created by `new` keyword. 
What if we return non-object value from the function ? It will be ignored.
What if we return object value say o1 from the function ? o1 will be returned. 


What if we want to add member function ? Just add it like other data member properties.
```
function Product(n, d, r, p) {
  this.name = n;
  this.price = p;
  this.rating = r;
  this.description = d;
  
  this.display = function display() {
    console.log(this);
  }
}
let iphone = new Product("iphone", "iphone 14 pro", 4.5, 100000);
console.log(iphone);
iphone.display();
```

So in a nutshell, if you want to create an object using classes/functions you can use a club of `new` `this` and `constructors` and you;re good to go. 