
// Silly Sentance Generatror
// Word Bank
//Oct 24, 2024 Mike Mayer

introArray = ['That', 'Her', 'A', 'Our','The', 'His', 'Your', 'Their', 'My'];
nounArray = ['dad', 'friend', 'mom', 'doctor', 'pirate', 'coach', 'rhino', 'hippo', 'bird', 'cat', 'dog', 'fish'];
advArray = ['angrily', 'happily', 'sadly', 'laughingly', 'hungrily', 'messily', 'loudly', 'quickly'];
verbArray = ['listens', 'dances', 'reads', 'eats', 'runs', 'runs', 'swims', 'sleeps', 'jumps', 'plays', 'hops'];
descriptorArray = ['at lunch', 'in the rain', 'in outer space', 'on a farm', 'in a plane', 'in ballet class'];

// funtion generate a random number based on the number of elements in the bank and returns a WORD
function randomIndex (arr) {
    let numElements = arr.length;
    let indexNum = Math.floor(Math.random() * numElements);
    return arr[indexNum];

}

// prints the function call
console.log(randomIndex(introArray) + " " + randomIndex(nounArray) + " " + randomIndex(advArray) + " " + randomIndex(verbArray) + " " + randomIndex(descriptorArray))

