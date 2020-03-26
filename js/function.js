// return the two oldest/oldest ages within the array of ages passed in.
function twoOldestAges(ages){
     
    let result = [];

     let maxOne = 0;
     let maxTwo = 0;
    for(let i = 0;i<ages.length;i++) {
            if(ages[i]>maxOne) {
               
maxOne = ages[i];  
        }
    } 

    for (let t=0;t<ages.length;t++) {
        if(ages[t]!=maxOne && ages[t]>maxTwo) {
            maxTwo = ages[t];
        }
    }
    result[0] = maxTwo;
    result[1] = maxOne;
    return result;
}
   


    console.log(twoOldestAges([1,5,87,45,8,8]));