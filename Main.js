/*
Message output should be 
You are a 1* on a quest to 2* while 3*.
1: group noun
2: objective
3: confilct 
*/

//Test values. TBD Convert to csv ?
let testValue1 = ["disfunctional group of bards" , "rabid group of goblins", "some guy named Steve" ];
let testValue2 = ["stop a vauge prophecy", "kill the deamon lord", "rob the capital bank"];
let testValue3 = ["The town gaurds are on your tail.","a members old fling wants reveng", "the fey are out for blood."]; 

let generator = {
    _groupNoun : undefined,
    _objective : undefined,
    _confilct : undefined,
};