# _Fancy Fizz Buzz_

#### _An exercise in looping and branching for Epicodus, 2.8.2020_

#### By _**Winter A. Runion**_

## Description

_A web app that asks a user to input a number, and returns a list of numbers up to, and including the given number. Additionally, numbers that contain the integer "3" are replaced with ${string3}, numbers that contain "2" are replaced with ${string2}, and numbers that contain "1" are replaced with ${string1}._

_In each case, the entire number is replaced, not just the target characters. The result is a list of integers, interspersed with strings at specific locations._

## Setup/Installation Requirements

* _Play the web app [here](#)._
* _Check out the scripts used to build the game [here](#)._
* _No additional libraries or technologies are needed. Simply run the game in any JavaScript-enabled browser!_

## Specifications

* **Spec**: The program returns a range of numbers from 0 to the users inputted number
  * **Input**: "4"
  * **Output**: "0, 1, 2, 3, 4"
* **Spec**: Numbers that contain a 3: all digits are replaced (all digits) with ${string3}.
  * **Input**: "3"
  * **Output**: "0, 1, 2, ${string3}"
* **Spec**: Numbers that contain a 2: all digits are replaced (all digits) with ${string2}.
  * **Input**: "4"
  * **Output**: "0, 1, ${string2}, ${string3}, 4"
* **Spec**: Numbers that contain a 1: all digits are replaced (all digits) with ${string1}.
  * **Input**: "4"
  * **Output**: "0, ${string1}, ${string2}, ${string3}, 4"
* **Spec**: Specs 2-4 exceptions are written from most to least important. The last exception should apply unless the second exception does, and the same with the second and first.
  * **Input**: "15"
  * **Output**: "0, ${string1}, ${string2}, ${string3}, 4, 5, 6, 7, 8, 9, ${string1}, ${string1}, ${string2}, ${string3}, ${string1}, ${string1}"
* **Spec**: A user should be able to enter a new number and see new results over and over again.
 
## Known Bugs

_No known bugs._

## Support and contact details

_If you have issues, questions, or concerns, feel free to contact me at winterrunion@gmail.com._

## Technologies Used

* _JavaScript and jQuery_
* _CSS libraries: [Bootstrap](#), [Semantic UI](#), and [Materialize](#)_

### License

_This code is licensed under the GPL license. This code may be used freely, **but** the resulting work must also be open source._

Copyright (c) 2020 **_Winter A. Runion_**