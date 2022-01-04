const two = (nums:number[], target: number):number[] => {
    const map = new Map()
    for(let i=0,len= nums.length; i<len; i++){
        const key = target-nums[i]
        if(map.has(key)){
            return [map.get(key), i]
        }else{
            map.set(nums[i],i)
        }
    }
    return []
}

//test
console.log(two([2,7,11,15], 9))
console.log(two( [3,2,4], 6))
console.log(two( [3,3], 6))