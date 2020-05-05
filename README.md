# Tic-Tac-Toe Project
Single player Tic-Tac-Toe against yourself! You are your own enemy!

## Introduction
Thank you for visiting my Tic-Tac-Toe project. This project was assigned to us with a project deadline of 5 days. Afterwards we were given additional (personal) time to complete any missing requirements to finally submit our product.

## How to get started
You can play the game [here](https://philingyuup.github.io/Tic-Tac-Toe-Project/ "Tic-Tac-Toe Game"). Game is currently optimized for desktop usage.
To get started, please **sign-up** with the **sign-up button**. As a safety precaution, please don't use a *real email* or a *real password*. Be _**creative**_, make a new persona for yourself! Afterwards, just hit the **New Board** button and you are on your way!

>>*I didn't make instructions for Tic-Tac-Toe, if you have never played Tic-Tac-Toe before, please refer to this [video](https://www.youtube.com/watch?v=USEjXNCTvcc "Tic-Tac-Toe Rules").*

## Planning
My planning for this project consisted of separating the workload into their own
sections.

>
> - User API Functionality
> - Game API Functionality
> - Gameplay Logic
> - Gamelog Logic
> - CSS
>

### Technology
Listed below are the technologies used to complete this Project

- HTML
- CSS
- Sass
- Bootstrap
- JQuery
- JavaScript
- AJAX

### User Stories
The main features we wanted to add to our project can best be described by our
user stories for this project.

| As a ... | I want ... |
| -------- | ------------- |
| user   | to keep track of my progress |
| user   | to play tic-tac-toe |
| user   | the game to decide end game results |
| user   | restart my game |
| user   | the game to keep track of player's turns |

### Wireframe
One of the requirements involved creating a Single Page Application (SPA). For my research of SPAs, I looked at two of my most used applications, *Discord* and *Slack*. From those applications, I really enjoyed the left-side navigation and their ease of use.

![Wireframe](https://github.com/philingyuup/Tic-Tac-Toe-Project/raw/master/assets/pictures/Tic-Tac-Toe-WireFrame.jpg "Tic-Tac-Toe Wireframe")

## Progression
After the research/design stage, I decided to start tackling my project. I started off with the *User API Functionality* because I assumed it was probably the easiest task to handle. Afterwards, I created my logic for my *Gameboard* and within that I created rules and feedback for when you're playing the game. The rules of the game included rotating players (X then O then X then etc.), inability to play a previous played spot, checking for a winner/draw, communication with our *Game API*. Within the rules logic, I implemented a *winning array* and a function which compares our current game with the *winning array* to see if the game is over and if there is a winner. We can change the win-condition rules of the game by simpling changing the *winning array*. My *gamelog* was created in conjunction with the *Game API*. For CSS, I wanted to keep the layout simple and intuitive. Since our only game mechanic is clicking things, I wanted to make the clicking feel better by adding feedback to all buttons.

### Challenges
Throughout this project, I was met with challenges ranging from syntax errors, async errors, to CSS/Bootstrap compatability issues. The greatest challenge involved exporting an array, where the export would fail with no error from the console log. With the help of the instructors, we were able to nail down the problem to circle-dependency and async loading. I was able to workaround this problem by getting rid of the circle-dependency.

### Checklist
For a more indepth look at my project progression, I created a checklist on
google sheets to help keep track of my progress. You can visit my checklist
[here](https://docs.google.com/spreadsheets/d/1OJRPkFwx4X7panJAvG54ew7Z-lzdbdHtnmbg_WYDxzU/edit?usp=sharing "Project Checklist")

## Future Features
- Responsive Design (especially Mobile)
- Two Player Functionality
- New Game Mode: Ultimate Tic-Tac-Toe
- More In-depth Statitics
