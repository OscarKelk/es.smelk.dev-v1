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
        console.log('hi');
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
}