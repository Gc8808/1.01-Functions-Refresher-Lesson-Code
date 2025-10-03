// Helper function: writes any HTML into the #out div
function render (html) {
  document.getElementById('out').innerHTML = html
}

/* 
  Function 1 — greet()
  ---------------------
  - Prompt the user for their name
  - If they type something, display "Hello, NAME!"
  - If they cancel or leave blank, show a friendly message
*/
function greet () {
  // TODO: Write your code here
  const name = prompt('What is your name?')
 if (!name) {
  document.getElementById('out').innerHTML = render('<p>No name given.</p>')  
  return
}

render(`<p>Hello, ${name}! Nice to see you today</p>`)
}
/* 
  Function 2 — averageNumbers()
  ------------------------------
  - Prompt the user for a list of numbers separated by commas
  - Split the input into an array, turn into numbers
  - Calculate the average
  - Display the average AND the list of numbers
*/
function averageNumbers () {
  // TODO: Write your code here
  const numbers = prompt('Enter a list of numbers, separated by commas:')
  if (!numbers) {
    render('<p>No numbers provided.</p>')
    return
  }
const givenNumbers = numbers.split(',').map(n => parseFloat(n.trim()))
const sum = givenNumbers.reduce((a,b) => a + b, 0)
const average = sum / givenNumbers.length
const listItems = givenNumbers.map(n => `<li class="list-group-item">${n}</li>`).join('')
render(`<p>Average: <strong>${average.toFixed(2)}</strong></p>
<ul class="list-group">${listItems}</ul>`)
givenNumbers.length
}

/* 
  Function 3 — timeOfDay()
  -------------------------
  - Get the current hour from the computer clock
  - Decide whether it's morning, afternoon, or evening
  - Display a message like "Good morning!" 
*/                                  
function timeOfDay () {
  // TODO: Write your code here
  const h = new Date().getHours()
  let message = ''
  if (h < 12) {
    message = 'Good morning!'
  } else if (h < 18) {
    message = 'Good afternoon!'
  } else {
    message = 'Good evening!'
  }
  render(`<p>${message}</p>`)

  
}

/* 
  Function 4 — randomBetween()
  -----------------------------
  - Prompt the user for a minimum and maximum number
  - Generate a random number between them
  - Display the result
  - Handle invalid input (like blanks or min >= max)
*/
function randomBetween () {
  // TODO: Write your code here
  const min = parseInt(prompt('Enter the minimum number:'))
  const max = parseInt(prompt('Enter the maximum number:'))
  if (isNaN(min) || isNaN(max)) {
    render('<p>Please enter valid numbers for both minimum and maximum.</p>')
    return
  }
  if (min >= max) {
    render('<p class="text-danger">The minimum number must be less than the maximum number.</p>')
    return
  }
const randomNum = Math.floor(Math.random() * (max - min + 1) + min)
render(`<p>Random number between ${min} and ${max}: <strong>${randomNum}</strong></p>`)

}

/* 
  Function 5 — clearOutput()
  ---------------------------
  - Clear whatever is inside #out
  - Replace it with a placeholder message like "Output cleared."
*/
function clearOutput () {
  // TODO: Write your code here
  render('')
}


function changeTitle() {
  document.title = prompt('Enter a new page title:') || document.title
  render('<p>Page title changed!</p>')
}

function changeTextColor() {
  const colors = ['red', 'blue', 'green', 'purple', 'orange', 'teal']
  const currentColor = document.getElementById('out').style.color
  let newColor = colors[Math.floor(Math.random() * colors.length)]
}
function changeAllColors() {
  const colors = ['red', 'blue', 'green', 'purple', 'orange', 'teal']
  const bgColors = ['lightyellow', 'lightblue', 'lightgreen', 'lavender', 'lightcoral', 'lightgray']
}


// ---- Event listeners for the demo buttons ----
document.getElementById('btnGreet').addEventListener('click', greet)
document.getElementById('btnAvg').addEventListener('click', averageNumbers)
document.getElementById('btnTime').addEventListener('click', timeOfDay)
document.getElementById('btnRandom').addEventListener('click', randomBetween)
document.getElementById('btnClear').addEventListener('click', clearOutput)
document.getElementById('btnColor').addEventListener('click', clearOutput)
document.getElementById('btnColor2').addEventListener('click', clearOutput)
document.getElementById('btnTitle').addEventListener('click', clearOutput)

/* 
  ------------------------------------------
  Student Challenge Section 
  ------------------------------------------
  Add 4 new functions here, each with its own button in index.html:
  
  1) Change the page title text to something new.
  2) Cycle the output box text color (switch to a different color each time clicked).
  3) Change BOTH the text and background color of #out.
  
  Write each function below, and don’t forget to connect each one 
  to a new button in index.html using addEventListener.
*/
