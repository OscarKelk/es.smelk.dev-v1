// Load jQuery
window.onload = function() {
    if (typeof jQuery === "undefined") {
        var script = document.createElement("script");
        script.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js";
        script.type = "text/javascript";
        document.getElementsByTagName("head")[0].appendChild(script);
    }
}
function choose(choices) {
    var index = Math.floor(Math.random() * choices.length);
    return choices[index];
}
function pickInsults(traits, exacts) {
    insults = {}
    outputstring = ""
    if (exacts["name"].length != 0){
        outputstring += "Yo mama's name is " + exacts["name"] + ".\n\n"
    }
    $.getJSON("https://raw.githubusercontent.com/ASkiingrock/mom-insulter/main/insults.json", function(insultlist) {
        // for item in traits
        if (traits.length > 0) {
            for (let category in traits) {
                category = traits[category];
                insults[category] = choose(insultlist[category]);
            }
            for (const singleinsult in Object.keys(insults)) {
                outputstring += "Yo mama so " + Object.keys(insults)[singleinsult] + ", " + insults[Object.keys(insults)[singleinsult]] + "\n";

                if ("old" == Object.keys(insults)[singleinsult]){
                    outputstring += "Yo mama is " + exacts["age"] + " years old, which is over 60, therefore: she is old."
                    outputstring += "\n"
                }
                if ("short" == Object.keys(insults)[singleinsult]){
                    outputstring += "Yo mama is " + exacts["height"] + "m, which is fairly under the average of 1.62m"
                    outputstring += "\n"
                }
                if ("fat" == Object.keys(insults)[singleinsult]){
                    outputstring += "Yo mama has a bmi of " + String(parseInt(exacts["bmi"]).toFixed(2)) + ", which classifies her as overweight or obese."
                    outputstring += "\n"
                }
                if ("stupid" == Object.keys(insults)[singleinsult]){
                    outputstring += "Yo mama has an iq of " + exacts["iq"] + ", which is fairly below the average of 100 and classifies her as mentally impaired"
                    outputstring += "\n"
                }
                if ("ugly" == Object.keys(insults)[singleinsult]){
                    outputstring += "Yo mama is a " + exacts["attractiveness"] + " out of 10. She ugly."
                    outputstring += "\n"
                }
                if ("scary" == Object.keys(insults)[singleinsult]){
                    outputstring += "Yo mama is " + exacts["scariness"] + " out of 10 in scariness. She scary."
                    outputstring += "\n"
                }
                if ("poor" == Object.keys(insults)[singleinsult]){
                    outputstring += "Yo mama has a yearly income of $" + exacts["income"] + ", this is less that $60,000 - defined as poor by the Australian governent."
                    outputstring += "\n"
                }
                if ("rich" == Object.keys(insults)[singleinsult]){
                    outputstring += "Yo mama has a yearly income of $" + exacts["income"] + ", which is above $330,000, placing her in the top 20% richest households in Australia."
                    outputstring += "\n"
                }
                outputstring += "\n"
            }
        } else {
            if (exacts["void"] == "False") {
                outputstring += "Yo mama so average, we don't have any jokes. Here's a random one instead.\n\n";
            }
            category = choose(["stupid", "fat", "short", "ugly", "scary", "rich", "poor"])
            outputstring += "Yo mama so " + category + ", " + choose(insultlist[category])

        }
        document.getElementById("results").value = outputstring;

    })
}
function insultMother(name, age, height, weight, intelligence, attractiveness, scariness, nationality, income) {
    mum = {
     void: "False",
     name : name,
     age : age,
     height : height,
     weight : weight,
     bmi : weight/(height*height),
     intelligence : intelligence,
     attractiveness : attractiveness,
     scariness : scariness,
     nationality : nationality,
     income : income,
     traits : []
    }
    if (age == '' &&  height == '' &&  weight == '' &&  intelligence == '' &&  attractiveness == '' &&  scariness == '' &&  nationality == '' &&  income == '') {
        mum.void = "True"
    }
    try {
     mum.bmi = mum.weight / (mum.height * mum.height);
    }
    catch(err) {
    }
    if (mum.age != null && mum.age > 0 && mum.age != '') {
    if (mum.age > 60){
       mum.traits.push('old');
    }
    } if (mum.height != null && mum.height > 0 && mum.height != '') {
    if (mum.height < 1.55){
        mum.traits.push('short')
    }
    } if (mum.bmi != null && mum.bmi > 0 && mum.bmi != '') {
    if (mum.bmi > 25){
        mum.traits.push('fat')
    }
    } if (mum.iq != null && mum.iq > 0 && mum.iq != '') {
    if (mum.iq < 85){
        mum.traits.push('stupid')
    }
    } if (mum.attractiveness != null && mum.attractiveness != '') {
    if (mum.attractiveness < 5){
        mum.traits.push('ugly')
    }
    } if (mum.scariness != null && mum.scariness != '') {
    if (mum.scariness > 6){
        mum.traits.push('scary')
    }
    } if (mum.nationality != null && mum.nationality != '') {
    if (mum.nationality.toLowerCase() == "american" || mum.nationality.toLowerCase() =="united states" || mum.nationality.toLowerCase() =="united states of america" || mum.nationality.toLowerCase() =="usa" || mum.nationality.toLowerCase() =="us" || mum.nationality.toLowerCase() =="america"){
        mum.traits.push('american')
    }
    if (mum.nationality.toLowerCase() == "french" || mum.nationality.toLowerCase() =="france"){
        mum.traits.push('french')
    }
    } if (mum.income != null && mum.income>0 && mum.income != '') {
    if (mum.income <= 60000){
        mum.traits.push('poor')
    }
    if (mum.income >= 330000){
        mum.traits.push('rich')
    }
    }
    
    document.getElementById("results").innerHTML = mum.traits;
    pickInsults(mum.traits, mum)
}
