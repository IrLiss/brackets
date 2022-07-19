module.exports = function check(str, bracketsConfig) {
    if (str.length % 2) return false;

    let openBrackets = bracketsConfig.map(element => element[0]);
    let closeBrackets = bracketsConfig.map(element => element[1]);
    let result = [];

    for (let i = 0; i < str.length; i++) {
        if (openBrackets.includes(str[i])) result.push(str[i]);
        if (closeBrackets.indexOf(str[i]) === openBrackets.indexOf(result[result.length - 1])) result.pop();
        if (openBrackets.includes(str[i]) && closeBrackets.includes(str[i])) {
            if (result[result.length - 1] === str[i]) {
                result.pop();
            }
            else {
                result.push(str[i]);
            }
        }
    }
    return result.length === 0;
}
