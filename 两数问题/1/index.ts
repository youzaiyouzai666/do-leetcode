const two = (nums:number[], target: number):number[] => {
    for(let i=0,len=nums.length; i<len; i++){
        for(let j=i+1; j<len; j++){
           if(nums[i]+ nums[j] === target){
               return [i,j]
           } 
        }
    }
    return []
}

//test
console.log(two([3,1,3,6], 6))