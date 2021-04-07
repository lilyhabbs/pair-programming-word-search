// pair programming: Zea Lingard & Lily Habberfield

const chai = require('chai');
const assert = chai.assert;

const wordSearch = require('../wordsearch.js');

describe("#wordSearch()", function() {
  it("should return false if the word is not present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'FRANK');

    assert.isFalse(result);
  });

  it("should return true if the word is present horizonatally", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'SEINFELD');

    assert.isTrue(result);
  });

  it("should return true if the word is present vertically", function() {
    const result = wordSearch([
      ['A', 'W', 'V', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'A', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'N', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'C', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'O', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'U', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'V', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'E', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'R', 'F', 'Q', 'U', 'A', 'L'],
    ], 'VANCOUVER');

    assert.isTrue(result);
  });

  it("should return a message if the word matrix is an empty array", function() {
    const actual = wordSearch([], 'WORD');
    const expected = 'The word matrix is empty.';
    assert.strictEqual(actual, expected);
  });
});
