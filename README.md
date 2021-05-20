The project was created using create-react-app with Sass preprocessor.

SQUARES DESCRIPTION 
Squares is a simple two player game where a square shaped game board is split to N*N squares. (2 <= N <= 8) Each player marks a square on their turn and at the end, the player with the biggest directly connecting squares group wins.

Project structure:
 -> components (contains simple view entities that can be reused and have little to no logic)
    -> cell (simple button)
    -> board (create matrix of cells for a game)
    -> sizeSwitcher (bunch of buttons to choose board size)

 -> containers (contains logic and some non reusable stuff that wasn't allocated as individual components)
 -> pages (for the moment there is only one page, but it can be divided into several with routing setup for further purpose)
 -> utils (contains function for winn result calculation)

