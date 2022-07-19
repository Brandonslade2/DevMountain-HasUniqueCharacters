// Write your code below+

const hasUniqueChars = (word) => {
    let uniquechars = new Set([])
    for (i = 0; i < word.length; i++) {
        uniquechars.add(word[i])

    }
    return word.length === uniquechars.size
}

//learned that the .add method does not add duplicates
//learned a new method. .size  counts how many indexes
// learned here that strings have their own indexes. wow that would be good to know.
// leanred you can temporarily make a new object

console.log(hasUniqueChars("monday"))