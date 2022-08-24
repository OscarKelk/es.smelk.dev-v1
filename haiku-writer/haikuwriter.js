window.onload = function() {
    writeHaiku();
}
function choose(choices) {
    var index = Math.floor(Math.random() * choices.length);
    return choices[index];
}

function writeHaiku() {
    personname = ""
    $.getJSON("https://raw.githubusercontent.com/ASkiingrock/haiku-writer/main/haiku%20writer/english%20words%20syllables%20v3.json", function(words) {
        var firstline = [];
        var firstlinetotal = 0;
        var secondline = [];
        var secondlinetotal = 0;
        var thirdline = [];
        var thirdlinetotal = 0;

        firstline_words = [];
        secondline_words = [];
        thirdline_words = [];

        for(let i=0; i<5; i++){ 
            if (firstlinetotal < 5) { //If line doesn't already have 5 syllables
                firstline.push(Math.floor(Math.random()*(5-firstlinetotal)) + 1); // Number between 1 and amount left
                firstlinetotal += firstline.slice(-1)[0]; // Add total
            }
        }
        for(let i=0; i<5; i++){  // Third line
            if (thirdlinetotal < 5) { //If line doesn't already have 5 syllables
                thirdline.push(Math.floor(Math.random()*(5-thirdlinetotal)) + 1); // Number between 1 and amount left
                thirdlinetotal += thirdline.slice(-1)[0]; // Add total
            }
        }
        for(let i=0; i<7; i++){  // Second line
            if (secondlinetotal < 7) { //If line doesn't already have 5 syllables
                secondline.push(Math.floor(Math.random()*(6-secondlinetotal)+1)); // Number between 1 and amount left (6 is max number of syllables allowed)
                secondlinetotal += secondline.slice(-1)[0]; // Add total
            }
            
        }
        for(let x in firstline){
            firstline_words.push(choose(words[String(firstline[x])]))
        }
        for(let x in secondline){
            secondline_words.push(choose(words[String(secondline[x])]))
        }
        for(let x in thirdline){
            thirdline_words.push(choose(words[String(thirdline[x])]))
        }

        document.getElementById('text-output').innerHTML = firstline_words.join(" ") + "<br/>" + secondline_words.join(" ") + "<br/>" + thirdline_words.join(" ");

        let title = choose(words[choose(Object.keys(words))])
        title = title.charAt(0).toUpperCase() + title.slice(1);

        document.getElementById('text-title').innerHTML = title
    });
    $.getJSON("https://raw.githubusercontent.com/ASkiingrock/haiku-writer/main/haiku%20writer/firstnames.json", function(firstnames) {
        personname += choose(firstnames["firstnames"]) + " "
    });
    $.getJSON("https://raw.githubusercontent.com/ASkiingrock/haiku-writer/main/haiku%20writer/lastnames.json", function(lastnames) {
        personname += choose(lastnames["lastnames"])
        document.getElementById('text-author').innerHTML = "- " + personname + ", " + String(Math.floor(1800 + Math.random()*(2020 - 1800 + 1)))
    });
    
}
