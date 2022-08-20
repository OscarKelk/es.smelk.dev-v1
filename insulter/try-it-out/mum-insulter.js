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
function pickInsults(traits) {
    insults = {}
    $.getJSON("https://raw.githubusercontent.com/ASkiingrock/mom-insulter/main/insults.json", function(insultlist) {
        // for item in traits
        console.log(traits)
        if (traits.length > 0) {
            for (let category in traits) {
                category = traits[category]
                console.log(category)
                insults.category = choose(Object.keys(insultlist[category]));
            }
        } else {
            insults = "There are no insults to make."
        }
        console.log(insults)
    })
}
function insultMother(name, age, height, weight, intelligence, attractiveness, scariness, nationality, income) {
    mum = {
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
    pickInsults(mum.traits)
}