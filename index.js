// Code your solution in this file!

const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']
const returnFirstTwoDrivers = function(drivers){
const newArray = drivers.slice(0, 2);
return newArray;
}
const returnLastTwoDrivers = function (divers){
    const newArray2 = drivers.slice(-2);
    return newArray2;
}
const  selectingDrivers = [
    returnFirstTwoDrivers, returnLastTwoDrivers];

function  createFareMultiplier(int = 4){
    return  function(fare){
       return int * fare 

    }

}   const fareDoubler = function(createFareMultiplier){
    return createFareMultiplier * 2
}
const fareTripler = function(createFareMultiplier){
    return createFareMultiplier * 3
}
function selectDifferentDrivers(drivers, driversToreturn){
    return driversToreturn(drivers);

}