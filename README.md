# Loops and Lyrics

#### An exercise in looping and branching for Epicodus, 2.8.2020

#### By **Winter A. Runion**

## Description

A web app that asks a user to input a number, and returns a list of numbers up to, and including the given number. Additionally, numbers that contain the integer "3" are replaced with "TiK", numbers that contain "2" are replaced with "ToK", and numbers that contain "1" are replaced with "Now the party don't start 'til I walk in."


## Setup/Installation Requirements

* Play the web app [here](https://wrunion.github.io/my-project/).
* View the scripts used to build the game [here](https://github.com/wrunion/my-project/blob/master/js/scripts.js).
* No additional libraries or technologies are needed. Simply run the game in any JavaScript-enabled browser!

## Specifications
|Spec | Input | Output |
| :---------------------------       | :------------------ | :------------------|
| **Program gathers user input** | User input: "5" |`5` |
| **Program returns a range of numbers from 0 to inputted number** | User input: "5" | `0, 1, 2, 3, 4, 5` |
| **Numbers that contain a 3: all digits are replaced (all digits) with `${string3}`** | User input: "5" |  `0, 1, 2, ${string3}, 4, 5` |
| **Numbers that contain a 2: all digits are replaced (all digits) with `${string2}`** | User input: "5" | `0, 1, ${string2}, ${string3}, 4, 5` |
| **Numbers that contain a 1: all digits are replaced (all digits) with `${string1}`** | User input: "5" | `0, ${string1}, ${string2}, ${string3}, 4, 5` |
| **Specs 3-5 are written from most to least important. The last exception should apply unless the second exception does, and the same with the second and first** | User input: "13" | `0, ${string1}, ${string2}, ${string3}, 4, 5, 6, 7, 8, 9, ${string1}, ${string1}, ${string2}, ${string3}` |
| **A user should be able to enter a new number and see new results over and over again.** | User input: "3," "1" | First output: `0, ${string1}. ${string2}, ${string3}` Second output: `0, ${string1}`
 
 ## Technologies Used

* JS & jQuery
* CSS library: [Semantic UI](https://semantic-ui.com/)

## Support and contact details

_If you have issues, questions, or concerns, feel free to contact me at winterrunion@gmail.com._

### License

_This code is licensed under the GPL license. This code may be used freely, but the resulting work must also be open source._

Copyright (c) 2020 **Winter A. Runion**