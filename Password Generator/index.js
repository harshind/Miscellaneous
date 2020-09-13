let nouns=['apple', 'dinosaur', 'ball', 'toaster', 'goat', 'dragon', 'hammer', 'duck', 'panda']
let adjectives = ['sleepy', 'slow', 'smelly', 'wet', 'fat', 'red',    'orange', 'yellow', 'green',  'blue', 'purple', 'fluffy', 'white', 'proud', 'brave'];
document.addEventListener('DOMContentLoaded',()=>{
    document.querySelector("#btn").addEventListener('click',()=>{
        let nounSelection = nouns[Math.floor(Math.random() * nouns.length)];
        let adjSelection = adjectives[Math.floor(Math.random() * adjectives.length)];
        let number= Math.floor(Math.random() * 10000);
        let passwordString = `${adjSelection}${nounSelection}${number}`;
        document.querySelector("#psd").innerHTML = passwordString;
        //console.log(passwordString);
    });
});
