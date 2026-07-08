function add(a, b) {
  return a + b;
}

test('adds 1 + 1 to equal 2', () => {
  expect(add(1, 1)).toBe(2);
});
