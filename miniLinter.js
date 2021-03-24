let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

// convert story into an array of individul words
const storyWords = story.split(' ');

// using storyWords create a new array that doesn't include unnecessaryWords
const betterWords = storyWords.filter(word => {
    if(!unnecessaryWords.includes(word)){
        return true;
    }
})

// Determine how many times overusedWords appear in story
let really = 0;
let very = 0;
let basically = 0;
betterWords.forEach(word => {
   switch (word) {
       case 'really':
           really++
       case 'very':
           very++
        case 'basically':
            basically++
   }
})

// Determine how many sentences are in the story
let sentences = 0;
betterWords.forEach(word => {
    if(word[word.length -1] === '.' || word[word.length - 1] === '!') {
        sentences++
    }
})




// Word count
console.log(`original word count: ${storyWords.length}`);
console.log(`adjusted word count: ${betterWords.length}`);
// overusedWord count
console.log(`'really' used ${really} times`)
console.log(`'very' used ${very} times`)
console.log(`'basically' used ${basically} times`)
// sentence count
console.log(`Total sentences: ${sentences}`)
// print adjusted story
console.log(betterWords.join(' '))


