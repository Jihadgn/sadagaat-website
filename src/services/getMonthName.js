/**
 * This function convert event month from number to month name
 * @param {date} d  event date
 * @return name of month  
 * @example month = Aug
 * @see https://www.w3schools.com/JSREF/jsref_tolocalestring.asp
 */
export function getMonthName(d) {

    const date = new Date(d);
    const month = date.toLocaleString('en-US', { month: 'short' });
return month
}
/**
 * This function add comma to long number  and add Curency to number
 * @param {number} num  long number 123456789 
 * @return {string} 123,456,789  SDG
 * @see https://www.w3schools.com/JSREF/jsref_tolocalestring.asp
 */
export function getNumberWithComma(num) {

    const number = num.toLocaleString('en-US', { style: 'currency', currency: 'SDG' });
return number
}

/**
 * This function add comma to long number
 * @param {number} num  long number 123456789 
 * @return {string} 123,456,789 
 * @see https://www.w3schools.com/JSREF/jsref_tolocalestring.asp
 */
export function getNumber(num) {

    const number = num.toLocaleString('en-US');
//    console.log(number);
return number
}

export function getCurrentDate() {

    const date = new Date();
    const now = date.toLocaleString('en-US');
return now
}
/**
 * This functio get three number ofter comma 12,123456777777
 * @param {number} percentage long number
 * @return {string} 12,123
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toPrecision
 */
export function Precision(percentage) {

 let shortPercentage = percentage.toPrecision(3)
return shortPercentage
}