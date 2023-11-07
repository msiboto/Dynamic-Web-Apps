/* eslint-disable react/no-deprecated */

// eslint-disable-next-line no-unused-vars
import React from "react"
import ReactDOM from "react-dom"
import App from "./App.jsx"

// eslint-disable-next-line react/no-deprecated
ReactDOM.render(<App />, document.getElementById("root"))

/*
import React from "react"
import ReactDOM from "react-dom"

function App() {
    const firstName = "Joe"
    const lastName = "Schmoe"
       return (
        <h1>Hello {firstName} {lastName}!</h1>
    )
}
ReactDOM.render(<App />, document.getElementById("root"))
*/


/*
EXCERSICE 

square each number in array

const nums = [1, 2, 3, 4, 5]
// -->       [1, 4, 9, 16, 25]

answer:

const squares = nums.map(function(num) {
    return num * num
})



/*
Challenge 2:
Given an array of strings, return an array where 
the first letter of each string is capitalized


const names = ["alice", "bob", "charlie", "danielle"]
// -->        ["Alice", "Bob", "Charlie", "Danielle"]

answer:

const capitalized = names.map((name) => {
    return name[0].toUpperCase() + name.slice(1)
})


Challenge 3:
Given an array of strings, return an array of strings that wraps each
of the original strings in an HTML-like <p></p> tag.

E.g. given: ["Bulbasaur", "Charmander", "Squirtle"]
return: ["<p>Bulbasaur</p>", "<p>Charmander</p>", "<p>Squirtle</p>"]


const pokemon = ["Bulbasaur", "Charmander", "Squirtle"]
// -->          ["<p>Bulbasaur</p>", "<p>Charmander</p>", "<p>Squirtle</p>"]

answer

const paragraphs = pokemon.map(mon => {
    return `<p>${mon}</p>`
})


*/