function consecutiveSubstrings(string) {
  // type your code here
  const result = [];
for (let i = 0; i < string.length; i++) {
  for (let e = i + 1; e <= string.length; e ++) {
    result.push(string.slice(i, e));
  }
}
return result;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: ['a', 'ab', 'abc', 'b', 'bc', 'c']");
  console.log("=>", consecutiveSubstrings('abc'));

  console.log("");

  console.log("Expecting: ['a']");
  console.log("=>", consecutiveSubstrings('a'));
}

module.exports = consecutiveSubstrings;


