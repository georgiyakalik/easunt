function getNodeNameArray(node) {
  return [node.name];
}

// Example usage
const myNode = { name: "exampleNode" };
const result = getNodeNameArray(myNode);
console.log(result); // Output: ["exampleNode"]
