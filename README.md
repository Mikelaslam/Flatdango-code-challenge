# Project title: Flatdango-code-challenge

## Introduction

In this code challenge, we are going to develop a Movie theatre app that allows users to view the movie title, runtime and showtime. The user should also be able to purchase movie tickets from the app. We will achieve this by employing HTML, CSS, and Javascript.

## Project set up

First of all we create a new project folder and thereafter create a private Github repository. 
Clone the repository to the new project folder and navigate to it via the terminal. We begin by creating a README.md, index.js, index.html, and a db.json files using touch.
Open the repository in VS code by typing code(space). .
Now we start working on the code.

## Project Description

In this project, the user is supposed to view a list of movies and its poster in the page. The list should be in the left side of the page and when clicked, a movie poster alongside the movie details are shown.
The user is able to buy a ticket by clicking the "Buy Ticket" button.
When a user buys a ticket, the number of remaining tickets is supposed to be updated in the page and once the tickets are sold out the user is not able to buy any ticket.

## Project Implementation

After creating all the required files, our main focus will be on the index.js file. First of all we update the db.json file and ensure that all the items are contained. We can confirm if the movie details are captured by running "json-server --watch db.json" and opening the JSON server.
We start by initiating the eventListener so as to start fetching the movie data from the source url "http://localhost:3000/Movies"
The next step is to render the movies to the page by looping through the array and create a list item for every movie using document.querySelector() method.
We then render the movie details to the page by using the document.getElemetById() method

## Author and License

MIT License

Copyright (c) 2022 Davis Mikel

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

