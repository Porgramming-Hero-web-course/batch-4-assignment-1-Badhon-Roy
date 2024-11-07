"use strict";
{
    // problem 3
    const countWordOccurrences = (sentence, word) => {
        const countWord = sentence.toLowerCase().split(/\s+/).filter(w => w === word.toLowerCase());
        return countWord.length;
    };
    console.log(countWordOccurrences("I love typescript", "typescript"));
    //
}
