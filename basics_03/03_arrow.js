const user = {
    username: "Prashant",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "Stark"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "Prashant"
//     console.log(this.username);
//     console.log(this);
// }

// chai()

// const chai = function () {
//     let username = "Prashant"
//     console.log(this.username);
//     console.log(this);
// }



// const chai = () => {
//     let username = "Prashant"
//     console.log(this);
// }


// chai()


// const addTwo = (num1, num2) => {
//     return num1 + num2
    
// }

// const addTwo = (num1, num2) =>  num1 + num2     //implecit return

// const addTwo = (num1, num2) => ( num1 + num2 )

// const addTwo = (num1, num2) => ({username: "Prashant"})


// console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()-