/*
Message output should be 
You are a 1* on a quest to 2* while 3*.
1: group noun
2: objective
3: confilct 
*/

//Test values. TBD Convert to csv ?
let groupNounValue = ["disfunctional group of bards" , "rabid group of goblins", "guy named Steve" ];
let objectiveValue = ["stop a vauge prophecy", "kill the deamon lord", "rob the capital bank"];
let conflictValue = ["The town gaurds are on your tail","an old fling wants revenge", "the fey are out for blood"]; 

let generator = {
    _groupNoun : "",
    _objective : "",
    _conflict : "",

   set groupNoun(value){
       console.log('hit');
        this._groupNoun = value;
   },
   set objective(value){
        this._objective = value;
   },
   set conflict(value){
       this._conflict = value
   },
   get groupNoun(){
        return this._groupNoun;
   },
   get objective(){
        return this._objective;
   },
   get confilct(){
        return  this._conflict;
   },
   generatePlot(){  
    this._groupNoun = this.getWord('groupNoun');
    this._objective = this.getWord('objective');
    this._conflict  = this.getWord('conflict');

    return `You are a ${this._groupNoun} on a quest to ${this._objective} while ${this._conflict}.`
    },

    getWord(wordType){
        switch(wordType){
            case 'groupNoun':
                return groupNounValue[Math.floor( Math.random() * groupNounValue.length )]
                break;
            case 'objective':
                return objectiveValue[Math.floor( Math.random() * objectiveValue.length )]
                break;
            case 'conflict':
                return conflictValue[Math.floor( Math.random() * conflictValue.length )]
                break;
            default:
                console.log('Something broke')
        }
    }

   
};

console.log(generator.generatePlot());