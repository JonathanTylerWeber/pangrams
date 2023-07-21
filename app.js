function isPangram(sentence){
    let lowerCased = sentence.toLowerCase();
    for(let char of 'abcdefghijklmnopqrstuvwxyz'){
        if (lowerCased.indexOf(char) === -1){
            return false;
        }
    }
    return true;
}