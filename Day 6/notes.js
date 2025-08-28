// filter 

const ages = [18,12,33,15,45]

const result = ages.filter(adult)

function adult(age){
    return age >=18;
}

console.log(result);

