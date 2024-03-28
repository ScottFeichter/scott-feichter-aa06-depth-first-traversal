/*
Write a function called printDepthFirst that will traverse the given graph
depth-first, printing each node when visited exactly once, on a newline.

Hint: How can you use your code from the breadth-first traversal to get a head
start writing your depth-first traversal?
*/

const adjList = {
  1: [2, 5],
  2: [1, 3, 5],
  3: [2, 4],
  4: [3, 5, 6],
  5: [1, 2, 4],
  6: [4],
};

function printDepthFirst(start) {
  // CREATE A STACK AND ENstack STARTING NODE
  const stack = [start];

  // CREATE A SET TO STORE VISITED NODES
  const visited = new Set();

  // CREATE A LOOP
  while (stack.length) {
    // GRAB THE NODE
    let currentNode = stack.pop();

    // CHECK IF CURRENT NODE ALREADY VISITED
    if (!visited.has(currentNode)) {
      // DO SOMETHING WITH THE NODE
      console.log(currentNode);

      // ADD TO VISITED
      visited.add(currentNode);
    }

    // GRAB THE NEIGHBORS
    let neighbors = adjList[currentNode];

    // ADD UNVISITED NEIGHBORS TO THE stack
    for (let neighbor of neighbors) {
      if (!visited.has(neighbor)) {
        stack.push(neighbor);
      }
    }
  }
}

// console.log("First Test:")
// printDepthFirst(3); // Prints 1 through 6 in Depth-first order, starting with 3
//                     // One possible solution:  3, 4, 6, 5, 2, 1
// console.log("Second Test:")
// printDepthFirst(6); // Prints 1 through 6 in Depth-first order, starting with 6
//                     // One possible solution:  6, 4, 5, 2, 3, 1
// console.log("Third Test:")
// printDepthFirst(4); // Prints 1 through 6 in Depth-first order, starting with 4
//                     // One possible solution:  4, 6, 5, 2, 3, 1

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = printDepthFirst;
