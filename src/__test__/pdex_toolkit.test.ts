import { Greeter } from '../Intro';
test('My Greeter', () => {
  expect(Greeter('Carl')).toBe('Hello Carl');
});
