// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Prashant",
    "full name": "Prashant Rawat",
    [mySym]: "mykey1",
    age: 18,
    location: "Lucknow",
    email: "Prashant@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)              //Prashant@google.com
// console.log(JsUser["email"])          // Prashant@google.com
// console.log(JsUser["full name"])      // Prashant Rawat
// console.log(JsUser[mySym])               // mykey1

JsUser.email = "Prashant@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "Prashant@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());