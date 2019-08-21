document.addEventListener('DOMContentLoaded', () => {

  const palindromeForm = document.querySelector('.js--palindrome-form');
  const resultsIcon = document.getElementById('js--results-icon');

  palindromeForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const word = this.wordInput.value.toLowerCase(); // make lower for comparison ("Racecar" still eligible to be palindrome)
    const wordArr = word.split("").filter(char => char !== " "); // make array + remove spaces
    const revWordArr = wordArr.slice().reverse(); // reverse to compare (slice because just calling reverse would mutate original array)

    // if .reverse() was not an option
    // for (let i = 0; i < wordArr.length; i++) {
    //   revWordArr.push(wordArr[-(i+1)])
    // }

   resultsIcon.classList = wordArr.join("") === revWordArr.join("") ? "far fa-thumbs-up" : "far fa-thumbs-down" //compare the stringified versions of each array - also could loop each character in each array and compare
  });
});