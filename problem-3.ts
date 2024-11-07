{
    // problem 3
    const countWordOccurrences = (sentence : string , word : string ) : number =>{
        const countWord : string[] = sentence.toLowerCase().split(/\s+/).filter(w => w === word.toLowerCase())
        return countWord.length;
    }
    console.log(countWordOccurrences("I love typescript", "typescript"));

    //
}