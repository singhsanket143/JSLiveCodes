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

