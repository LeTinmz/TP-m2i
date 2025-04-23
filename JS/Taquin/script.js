const gridContainer = document.getElementById("grid");
let gridSize = 3;
const grid = []

// for (let i = 1; i <= gridSize; i++) {
//   let row = [];
//   for (let j = 1; j <= gridSize; j++) {
//     row.push(i * j);
//   }
//   grid.push(row);
// }

// grid[Math.floor(Math.random() * gridSize)][
//   Math.floor(Math.random() * gridSize)
// ] = "empty";
// console.log(grid);

// const createTile = (parent) => {
//   const tile = document.createElement("div");
//   tile.classList.add("tile");
 

//   tile.style.backgroundColor = "lightblue";
//   tile.addEventListener("click", () => {});
//   parent.appendChild(tile);
// };

// const createBlankTile = (parent) => {
//   const tile = document.createElement("div");
//   tile.classList.add("tile", "empty");

//   tile.style.backgroundColor = "lightgrey";
//   parent.appendChild(tile);
// };

grid.forEach((row) => {
  row.forEach((cell) => {
    cell !== "empty"
      ? createTile(gridContainer)
      : createBlankTile(gridContainer);
  });
});
console.log(gridContainer.classList.contains("coucou"));
