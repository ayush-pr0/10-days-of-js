
// Test Cases

let testStringValue = "Akshay Kumar Maurya"
// let testStringValue = "JavaScript"
// let testStringValue = "Hacktoberfest-2022"

reverseString(testStringValue);

function reverseString(stringValue){
    try {
        stringValue = stringValue.split("").reverse().join("");
    } catch (e) {
        console.log(e.message);
    } finally {
        console.log(stringValue);
    }
}