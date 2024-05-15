
function test(arr_nums)
{
    return arr_nums.sort((x,y) => y-x)[arr_nums.length-3]

}
 nums = [5,7,8,9,10,]

 console.log("trečias mažiausias:"+test(nums));



