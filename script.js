class Node {
    constructor(d) {
        this.data = d;
        this.left = null;
        this.right = null;
    }
}

class Tree {
    constructor() {
        this.root = null;
    }

    arrayToBST(arr, start, end) {
        if (start > end) {
          return null;
        }

        let mid = Math.floor((start + end) / 2);
        let node = new Node(arr[mid]);

        node.left = this.arrayToBST(arr, start, mid - 1);
        node.right = this.arrayToBST(arr, mid + 1, end);

        return node;
    }
}

const arr = [];
let i, j;

function createBoard() {
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            const coord = `${i}${j}`;
            arr.push(coord);
        }
    }
    return arr;
}

function knightMoves(x, y) {
    const availableMoves = [];


    const moves = [
        [-2, -1], [-2, 1], [-1, -2], [-1, 2],
        [1, -2], [1, 2], [2, -1], [2, 1]
        ];

    for (const move of moves) {
        const newX = x + move[0];
        const newY = y + move[1];

    if (newX >= 0 && newX < 8 && newY >= 0 && newY < 8) {
        availableMoves.push([newX, newY]);
        }
    }

    return availableMoves;
}

function fastestMoveWithMoves(posX, posY, toX, toY) {
    const directions = [
      [-2, -1], [-2, 1], [-1, -2], [-1, 2],
      [1, -2], [1, 2], [2, -1], [2, 1]
    ];
  
    const queue = [];
    const visited = new Set();
    queue.push({ x: posX, y: posY, moves: [] });
    visited.add(`${posX},${posY}`);
    
    while (queue.length > 0) {
      const { x, y, moves } = queue.shift();
    
      if (x === toX && y === toY) {
        return moves;
      }
    
      for (const [dx, dy] of directions) {
        const newX = x + dx;
        const newY = y + dy;
        const newPosition = `${newX},${newY}`;
      
        if (
          newX >= 0 && newX < 8 &&
          newY >= 0 && newY < 8 &&
          !visited.has(newPosition)
        ) {
          const newMoves = [...moves, { x: newX, y: newY }];
          queue.push({ x: newX, y: newY, moves: newMoves });
          visited.add(newPosition);
        }
      }
    }
  
  return [];
}

  const posX = 1;
  const posY = 1;
  const toX = 7;
  const toY = 7;

  const sequenceOfMoves = fastestMoveWithMoves(posX, posY, toX, toY);
  if (sequenceOfMoves.length > 0) {
    console.log(`The sequence of moves to reach (${toX},${toY}):`);
    sequenceOfMoves.forEach((move, index) => {
      console.log(`${index + 1}. (${move.x},${move.y})`);
    });
  } else {
    console.log(`The knight cannot reach (${toX},${toY}).`);
  }
  


let arrSort = createBoard().sort();

console.log(arrSort);

let bst = new Tree();
let n = arrSort.length;
bst.root = bst.arrayToBST(arrSort, 0, n - 1);
console.log(bst.root);
const possibleMoves = knightMoves(3, 4);
console.log("Available moves for the knight:", possibleMoves);
