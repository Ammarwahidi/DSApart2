class Node {
  constructor(id, name, marks) {
    this.id = id;
    this.name = name;
    this.marks = marks;
    // this.percentage = marks.reduce((a, b) => a + b) / marks.length;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(id, name, marks) {
    let newNode = new Node(id, name, marks);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode) {
    if (newNode.percentage < node.percentage) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  search(name) {
    return this.searchNode(this.root, name);
  }

  searchNode(node, name) {
    if (node === null) {
      return null;
    }
    if (node.name === name) {
      return node.marks;
    }
  }
}

let student = new BinarySearchTree();
student.insert(1, "raju", 25);
student.insert(1, "raja", 28);
student.insert(1, "rajesh", 29);

console.log(student);
