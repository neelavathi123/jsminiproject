var randomNumber = Math.floor(Math.random() *20);
var quotes = [

    "Act as if what you do makes a difference. It does - William James",
    "Success is not final, failure is not fatal: it is the courage to continue that counts.-Winston Churchill",
    "Never bend your head. Always hold it high. Look the world straight in the eye.-Helen Keller",
    "Don’t let what you cannot do interfere with what you can do. – John Wooden",
    "Successful and unsuccessful people do not vary greatly in their abilities. They vary in their desires to reach their potential. – John Maxwell",
    "There are no shortcuts to any place worth going. – Beverly Sills",
    "Failure is the opportunity to begin again more intelligently. – Henry Ford",
    "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time. – Thomas A. Edison"
	]
function newquote() {
    var randomNumber = Math.floor(Math.random() * (quotes.length));
	document.getElementById('display').innerHTML = quotes[randomNumber];
}
