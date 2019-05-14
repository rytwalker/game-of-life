class Graph {
  constructor() {
    this.verticies = {};
  }
  addVertex(vertex) {
    this.verticies[vertex] = new Set();
  }

  addEdge(vert1, vert2) {
    if (this.verticies[vert1] && this.verticies[vert2]) {
      this.verticies[vert1].add(vert2);
      this.verticies[vert2].add(vert1);
    } else {
      throw new Error();
    }
  }

  connectEdges(size) {
    for (let vert in this.verticies) {
      if (parseInt(vert) <= size * size - size) {
        if (parseInt(vert) % size === 1) {
          let nextVert = (parseInt(vert) + 1).toString();
          let belowVert = (parseInt(vert) + size).toString();
          let belowPlusOneVert = (parseInt(vert) + size + 1).toString();
          this.addEdge(vert, nextVert);
          this.addEdge(vert, belowVert);
          this.addEdge(vert, belowPlusOneVert);
        } else if (parseInt(vert) % size === 0) {
          let belowVert = (parseInt(vert) + size).toString();
          let belowMinusOneVert = (parseInt(vert) + size - 1).toString();
          this.addEdge(vert, belowVert);
          this.addEdge(vert, belowMinusOneVert);
        } else {
          let nextVert = (parseInt(vert) + 1).toString();
          let belowVert = (parseInt(vert) + size).toString();
          let belowPlusOneVert = (parseInt(vert) + size + 1).toString();
          let belowMinusOneVert = (parseInt(vert) + size - 1).toString();
          this.addEdge(vert, nextVert);
          this.addEdge(vert, belowVert);
          this.addEdge(vert, belowPlusOneVert);
          this.addEdge(vert, belowMinusOneVert);
        }
      } else {
        if (parseInt(vert) % size !== 0) {
          let nextVert = (parseInt(vert) + 1).toString();
          this.addEdge(vert, nextVert);
        }
      }
    }
  }
}

const testGraph = new Graph();

const numbers = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
  25
];

for (let i = 0; i < numbers.length; i++) {
  testGraph.addVertex(numbers[i]);
}
testGraph.connectEdges(5);
console.log(testGraph.verticies);
