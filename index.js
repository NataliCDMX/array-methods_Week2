const filterByAge = (el) => {
    return el.age < 50;
};

const filterByScore = (el) => {
    return el.score > 75;

};

const filterByServiceRecord = (el) => {
    return el.serviceRecord > 5;

};

const sortByScore = (arr) => {

};

const getMeanAge = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i].age;
    }
    return sum / arr.length;

};

const getMeanAgeReduce = (arr) => {

};

const getNamesOnly = (arr) => {

};

module.exports = {
filterByAge,
filterByScore,
filterByServiceRecord,
sortByScore,
getMeanAge,
getMeanAgeReduce,
getNamesOnly,
};
