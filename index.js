document.addEventListener('DOMContentLoaded', () => {

  const palindromeForm = document.querySelector('.js--palindrome-form');
  const resultsIcon = document.getElementById('js--results-icon');

  function palindromeChecker(e) {
    e.preventDefault();
    const word = this.wordInput.value.toLowerCase(); // make lower for comparison ("Racecar" still eligible to be palindrome)
    const wordArr = word.split('').filter(char => char !== " "); // make array + remove spaces
    const revWordArr = wordArr.slice().reverse(); // reverse to compare (slice because just calling reverse would mutate original array)

    // if .reverse() was not an option
    // for (let i = 0; i < wordArr.length; i++) {
    //   revWordArr.push(wordArr[-(i+1)])
    // }

   resultsIcon.classList = wordArr.join('') === revWordArr.join('') ? 'far fa-thumbs-up' : 'far fa-thumbs-down' //compare the stringified versions of each array - could also loop over each character in each array and compare
  }

  function recursiveCheck(word) {
    if (word.length === 0 || word.length === 1) { // if word is, or makes it down to 1 or 0 chars, word is palindrome
      return true;
    }
    if (word[0] === word[word.length -1]) { // check if first char is equal to last char
      return recursiveCheck(word.slice(1, word.length-1)); // if equal, invoke again and pass in sliced word to compare the next first + last characters
    }
    return false 
  }

  function altPalindromeChecker(e) {
    e.preventDefault();
    const word = this.wordInput.value.toLowerCase().split('').filter(char => char !== ' ').join(''); // song and dance of converting to lowercase and removing spaces
    resultsIcon.classList = recursiveCheck(word) ? 'far fa-thumbs-up' : 'far fa-thumbs-down'
  }

  palindromeForm.addEventListener('submit', altPalindromeChecker);
});