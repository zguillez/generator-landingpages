const scripts = require('../src/static/scripts');
test('dummy test', () => {
  expect(scripts.hello).toBe('test ok!');
});
