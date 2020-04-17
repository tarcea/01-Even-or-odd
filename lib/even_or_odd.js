const evenOrOdd = (number) => {
  // TODO: this should return "even" if the number is even, "odd" otherwise
  const x = (number % 2);
  if (x === 0) {
    return "even";
  }
  return "odd";
};

module.exports = evenOrOdd; // Do not remove. We need this for the spec to know about your method.
