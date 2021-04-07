// pair programming: Zea Lingard & Lily Habberfield

const transpose = function(matrix) {
  const newMatrix = [];

  for (let col = 0; col < matrix[0].length; col++) {
    newMatrix[col] = [];
    for (let row = 0; row < matrix.length; row++) {
      newMatrix[col].push(matrix[row][col]);
    }
  }
  return newMatrix;
};


const wordSearch = (letters, word) => {
  if (letters.length === 0) {
    return 'The word matrix is empty.';
  }

  // check for horizonal words
  const horizontalJoin = letters.map(ls => ls.join(''));
  for (const l of horizontalJoin) {
    if (l.includes(word)) {
      return true;
    }
  }

  // check for vertical words
  const transposedMatrix = transpose(letters);
  const verticalJoin = transposedMatrix.map(ls => ls.join(''));
  for (const l of verticalJoin) {
    if (l.includes(word)) {
      return true;
    }
  }

  return false;
};

module.exports = wordSearch;