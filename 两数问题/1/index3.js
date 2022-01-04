var twoSum = function(nums, target) {
    for(let i=0,len=nums.length;i<len;i++){
        for(let j=i+1;j<len;j++){
            if(nums[i]+nums[j]===target){
                return [i,j]
            }
        }
    }
    return []
};
/*****test */
console.log(twoSum([3,2,4],6))