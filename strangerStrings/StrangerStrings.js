class StrangerStrings {

    getHelloWorld(){
        return "Hello World";
    }

    concatenation(firstSegment, secondSegment){
       return "Wutang" + " Forever";
    }

    getPrefix(input){
        return input.substring(0, 3);
    }

    getSuffix(input){
        return input.slice(-3);
    }

    getMiddleCharacter(inputValue){
        let i = Math.floor(inputValue.length) / 2;
        return inputValue[i];
    }

    getFirstWord(input){
        let first= input.split(" ")
        return first[0];
    }
    
    getSecondWord(spaceDelimnatedInput){
        let second = spaceDelimnatedInput.split(" ")
        return second[1];
    }
    
    reverse(input){
        for(let i = 1; input.length  1; i--){
            return input;
        };
    }

module.exports = StrangerStrings;