const two = (nums:number[], target: number):number[] => {
    const map = new Map()
    for(let i=0,len=nums.length; i<len; i++){
        const key = target-nums[i]
        if(map.has(key)){
            return [map.get(key),i]
        }else{
            map.set(key,i)
        }
    }
    return []
}

//test
console.log(two([3,1,3,6], 6))