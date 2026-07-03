class Solution {
    /**
     * @param {number[][]} grid
     * @return {number[]}
     */
    findMissingAndRepeatedValues(grid) {
        
        let grid_arr = [];
        grid = grid.flat().sort((a,b)=>a-b)
        let grid_set = new Set();
        for(let i = 0; i<grid.length; i++){
            if(!grid_set.has(grid[i])){
                console.log(i, "up")
                grid_set.add(grid[i])
            }else{
                console.log(i, "down")
                grid_arr.push(grid[i])
            }
            
        }
        for(let i = 1; i<=grid.length; i++){
            if(!grid.includes(i)){
                grid_arr.push(i)
            }
        }
        return grid_arr
    }
}
