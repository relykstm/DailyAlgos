var constructMaximumBinaryTree = function(nums, root = new TreeNode() ) {
    
    if(nums.length === 0){
        return null;
    }
      if(nums.length == 1){
            return new TreeNode(nums[0])
        }
      
      root.val = Math.max(...nums)
      var index = nums.indexOf(root.val)
      var numsLeft = []
      var numsright = []
      
      for(var i=0; i<index; i++){
          numsLeft.push(nums[i])
      }
      for(var i=index+1; i<nums.length; i++){
          numsright.push(nums[i])
      }
  
      root.left = constructMaximumBinaryTree(numsLeft)
      root.right = constructMaximumBinaryTree(numsright)
      
      return root;
  };