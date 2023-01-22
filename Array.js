function depth(arr) {
    let maxDepth = 0;
    let currentDepth = 0;
  
    function traverse(arr) {
      currentDepth++;
      for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
          traverse(arr[i]);
        }
      }
      maxDepth = Math.max(maxDepth, currentDepth);
      currentDepth--;
    }
  
    traverse(arr);
    return maxDepth;
  }
  console.log(depth([1, 2, 3, 4]));
  console.log(depth([1, [2, [3, 4]]]));
  