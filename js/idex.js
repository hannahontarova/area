const lengthOfFirstRoom = prompt('Intut the length of first room (meters)')
const widthOfFirstRoom = prompt('Intut the width of first room (meters)')
const lengthOfSecondRoom = prompt('Intut the length of second room (meters)')
const widthOfSecondRoom = prompt('Intut the width of second room (meters)')

const areaOfTheApartment = lengthOfFirstRoom*widthOfFirstRoom + lengthOfSecondRoom*widthOfSecondRoom

alert(`The area of apartment is ${areaOfTheApartment} cubic meters`)