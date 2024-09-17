// Shuffle an array using Fisher–Yates shuffle algorithm
function fisherYatesShuffle(array) {
    let currentIndex = array.length;
    let temporaryValue, randomIndex;

    // While there remain elements to shuffle…
    while (currentIndex !== 0) {

        // Pick a remaining element…
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

// Example usage:
const arr = [1, 2, 3, 4, 5];
console.log(fisherYatesShuffle(arr)); 
