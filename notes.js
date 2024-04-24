// Let is a way to declare a variable

let theBook = "Clean Code"
let favNum = 7
let arrayOfValues = [1,2,3,4]



// We can change the value of that variable later

favNum = 3;

// We can also declare a variable without giving it a value

let pants, shirt, socks  

pants ="Jeans"
shirt = "Blouse"
socks = "Warm winter socks"


// we can only access that variable withing a scope


// first use function then use the scope() {}

//initialize the count as 0
//listen for clicks on the increment button
//increment the count variable 

// function practice() {
//     console.log(42)
// }

// practice()


// let lap1 = 34
// let lap2 = 33
// let lap3 = 36


// function logLapTime() {
//     let totalTime = lap1 + lap2 + lap3
//     console.log(totalTime)
// }


// logLapTime()


let lapsCompleted = 0

// Create a function that increments the lapsCompleted variable
// Run it three times

function incrementLap() {
   lapsCompleted = lapsCompleted + 1
}

incrementLap()
incrementLap()
incrementLap()


console.log(lapsCompleted)

let count = 0
function increment() {
     count = count + 1
     console.log(count)
}


let username = 'per'

console.log(username)

let message = "You have tree new notifications"

console.log(message)

let messageToUser = message + ", " + username + "!"
console.log(messageToUser)

let myName = "Robert"
let greeting = "Hi, my name is"
let myGreeting = greeting + myName

console.log(myGreeting)


let points = 4
let bonusPoints = 10

let totalPoints = points + bonusPoints
console.log(totalPoints)

console.log(4 + 5)
console.log("2" + "4")
console.log("5" + 1)
console.log(100 + "100")

// string overrides a number.. string is a higher priority. 

let welcomeEl = document.getElementById('welcome-el')
let myName = "Robert"
let greeting = "Welcome Back, "

welcomeEl.innerText = greeting + myName

welcomeEl.innerText += "👋"