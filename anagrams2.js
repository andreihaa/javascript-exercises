function wordAnagrams(wordA, wordB) {
    let newWordA = wordA.toLowerCase();
    let newWordB = wordB.toLowerCase();

    if (newWordA.length === newWordB.length) {
      return (
        [...newWordA].sort().join("") === [...newWordB].sort().join("")
      );
    }

    return "unequal word lengths";
  }

console.log(wordAnagrams('silent', 'listen'))