function canJump(nums, max) {
    
    // I didnt write this greedy solution, but I studied it and wanted to save it!

  let max = nums[0];

  for (let i = 1; i < nums.length; i++) {
      console.log("max", max)
      console.log("i", i)
    if (max < i) return false;  // max steps cannot reach position i
    max = Math.max(nums[i] + i, max);
  }

  return true;
}