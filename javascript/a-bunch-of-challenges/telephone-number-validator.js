/* Telephone Number Validator

Return true if the passed string looks like a valid US phone number.

The user may fill out the form field any way they choose as long as it has the format of a valid US number. The following are examples of valid formats for US numbers (refer to the tests below for other variants):

555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555

For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf. Your job is to validate or reject the US phone number based on any combination of the formats provided above. The area code is required. If the country code is provided, you must confirm that the country code is 1. Return true if the string is a valid US phone number; otherwise return false. */

function telephoneCheck(str) {
    // validate missing parentheses
    if (str.indexOf('(') !== -1 && str.indexOf(')') === -1) return false;
    if (str.indexOf('(') === -1 && str.indexOf(')') !== -1) return false;
    if (str.indexOf('(') == 0 && str.indexOf(')') == str.length - 1) return false;

    // validate missing ? - correct this
    if (str.indexOf('?') != -1) return false;

    // take away non alphabetical characters
    let str1 = str
        .split(/\W/)
        .filter(item => item === /\W/ || item === /\s/ ? '' : item)
    //.join('');

    console.log(str1);
    // validate the amount of characters
    if (str1.join('').length > 11 || str1.join('').length < 10) return false;

    // validate first character not one if string.length == 11
    if (str1.join('').length == 11) {
        if (str.charAt() != 1) return false;
    }

    return true;
}

telephoneCheck("(555)5(55?)-5555")

//telephoneCheck("555-555-5555");
telephoneCheck("1 555)555-5555"); //false
telephoneCheck("(6054756961)");
telephoneCheck("2 (757) 622-7382");
telephoneCheck("2(757)6227382")




/* Solution from FCC hints section:

Solution
function telephoneCheck(str) {
    var regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
    return regex.test(str);
}
telephoneCheck("555-555-5555");

Code Explanation
^ denotes the beginning of the string.
(1\s?)? allows for “1” or "1 " if there is one.
\d{n} checks for exactly n number of digits so \d{3} checks for three digits.
x|y checks for either x OR y so (\(\d{3}\)|\d{3}) checks for either three digits surrounded by parentheses, or three digits by themselves with no parentheses.
[\s\-]? checks for spaces or dashes between the groups of digits.
$ denotes the end of the string. In this case the beginning ^ and end of the string $ are used in the regex to prevent it from matching any longer string that might contain a valid phone number (eg. “s 555 555 5555 3”).
Lastly we use regex.test(str) to test if the string adheres to the regular expression, it returns true or false.

*/