const { capitalize, reverseString, calculator, caesarCipher, analyzeArray } = require('./odin');

test('capitalizes first letter', () => {
  expect(capitalize("hello")).toBe("Hello");
});


test('reverse string', () => {
  expect(reverseString("Manufacture")).toBe("erutcafunaM");
  expect(reverseString("Ukraine")).toBe("eniarkU");
});

test('Adding is correct', () => {
  expect(calculator.add(5, 3)).toBe(8);
  expect(calculator.add(32, 68)).toBe(100);
})

test('Subtraction is correct', () => {
  expect(calculator.subtract(5, 3)).toBe(2);
  expect(calculator.subtract(123, 63)).toBe(60);
})

test('Multiplying is correct', () => {
  expect(calculator.multiply(13, 3)).toBe(39);
  expect(calculator.multiply(30, 5)).toBe(150);
})

test('Division is correct', () => {
  expect(calculator.divide(18, 6)).toBe(3);
  expect(calculator.divide(32, 8)).toBe(4);
})

test('Caesar Cipher shifts characters correctly', () => {
  expect(caesarCipher('hello', 1)).toBe('ifmmp');
  expect(caesarCipher('hello world', 3)).toBe('khoor zruog');
  expect(caesarCipher('XYZ', 5)).toBe('CDE');
});

test('Analyze Array returns correct properties', () => {
  const result1 = analyzeArray([1, 2, 3, 4, 5]);
  expect(result1).toEqual({
      average: 3,
      min: 1,
      max: 5,
      length: 5
  });

  const result2 = analyzeArray([]);
  expect(result2).toEqual({
      average: undefined,
      min: undefined,
      max: undefined,
      length: 0
  });
});