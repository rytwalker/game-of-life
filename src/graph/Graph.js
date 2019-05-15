/*
This class is used to create a graph data structure with additional functionality to create a grid. This can simply be done by creating a new Graph, calling addVerticies while passing in an array, and creating connections by calling connectEdges and passing in the row length. The last function assumes a square grid. 
*/
class Graph {
  constructor() {
    this.verticies = {};
  }
  addVertex(vertex) {
    // this.verticies[vertex] = new Set();
    this.verticies[vertex] = {
      on: false,
      neighbors: new Set(),
      id: parseInt(vertex)
    };
  }

  addEdge(vert1, vert2) {
    // if (this.verticies[vert1] && this.verticies[vert2]) {
    //   this.verticies[vert1].add(vert2);
    //   this.verticies[vert2].add(vert1);
    // } else {
    //   throw new Error();
    // }
    if (this.verticies[vert1] && this.verticies[vert2]) {
      this.verticies[vert1]['neighbors'].add(vert2);
      this.verticies[vert2]['neighbors'].add(vert1);
    } else {
      throw new Error();
    }
  }

  addVerticies(array) {
    for (let i = 0; i < array.length; i++) {
      this.addVertex(i + 1);
    }
  }

  connectEdges(size) {
    for (let vert in this.verticies) {
      let vertInt = parseInt(vert);
      let notInLastRow = vertInt <= size * size - size;

      if (notInLastRow) {
        if (vertInt % size === 1) {
          this._addEdgesToLeftVert(vert, vertInt, size);
        } else if (vertInt % size === 0) {
          this._addEdgesToRightVert(vert, vertInt, size);
        } else {
          this._addEdgesToVert(vert, vertInt, size);
        }
      } else {
        if (vertInt % size !== 0) {
          this.addEdge(vert, this._getNextVert(vertInt));
        }
      }
    }
  }

  _getNextVert(vert) {
    return (vert + 1).toString();
  }

  _getBelowVert(vert, size) {
    return (vert + size).toString();
  }

  _getBelowPlusOneVert(vert, size) {
    return (vert + size + 1).toString();
  }

  _getBelowMinusOneVert(vert, size) {
    return (vert + size - 1).toString();
  }

  _addEdgesToVert(vert, vertInt, size) {
    this.addEdge(vert, this._getNextVert(vertInt));
    this.addEdge(vert, this._getBelowVert(vertInt, size));
    this.addEdge(vert, this._getBelowPlusOneVert(vertInt, size));
    this.addEdge(vert, this._getBelowMinusOneVert(vertInt, size));
  }
  _addEdgesToLeftVert(vert, vertInt, size) {
    this.addEdge(vert, this._getNextVert(vertInt));
    this.addEdge(vert, this._getBelowVert(vertInt, size));
    this.addEdge(vert, this._getBelowPlusOneVert(vertInt, size));
  }

  _addEdgesToRightVert(vert, vertInt, size) {
    this.addEdge(vert, this._getBelowVert(vertInt, size));
    this.addEdge(vert, this._getBelowMinusOneVert(vertInt, size));
  }
}

export default Graph;
// const testGraph = new Graph();

// const numbers = [
//   1,
//   2,
//   3,
//   4,
//   5,
//   6,
//   7,
//   8,
//   9,
//   10,
//   11,
//   12,
//   13,
//   14,
//   15,
//   16,
//   17,
//   18,
//   19,
//   20,
//   21,
//   22,
//   23,
//   24,
//   25
// ];

// testGraph.addVerticies(numbers);
// testGraph.connectEdges(5);
// console.log(testGraph.verticies);
