// finding recurrent numbers in array

// Given an array= [2, 1, 3, 2,4,5 , 6,]
// it should return 1


function firstRecurringCharacter(input){
    for(let i = 0; i < input.length; i++){
        for(let j = i+ 1; j < input.length; j++ ){
            if(input[i] === input[j]){
                return input[i];
            }
        }
    }
    return undefined;
}// o(n ^ 2)

function firstRecurringCharacter2(input){
    let map={};
    for(let i = 0; i < input.length; i++){
        if(map[input[i]] !== undefined){
            return input[i]
        }
        else{
            map[input[i]]=i
        }
        console.log(map);
    }
    return undefined;
}


console.log(firstRecurringCharacter2([2, 1,3, 4, 2,3,3, ]))
