const {
  getNationFromRequest,
  DEFAULT_NATION,
  SUPPORTED_NATIONS,
} = require('./nationHelper.js');

const request = {
  query: {},
};

test('returns default nation if no nation given', () => {
  request.query = {};
  const nation = getNationFromRequest(request);
  expect(nation).toBe(DEFAULT_NATION);
});

test('returns default nation if invalid nation given', () => {
  request.query.nation = 'dummy';
  const nation = getNationFromRequest(request);
  expect(nation).toBe(DEFAULT_NATION);
});

test('supports uppercase nations', () => {
  const testNation = SUPPORTED_NATIONS[1];
  request.query.nation = testNation.toUpperCase();
  const nation = getNationFromRequest(request);
  expect(nation).toBe(testNation);
});

test('matches all existing nations', () => {
  SUPPORTED_NATIONS.forEach((expectedNation) => {
    request.query.nation = expectedNation;
    const actualNation = getNationFromRequest(request);
    expect(actualNation).toBe(expectedNation);
  });
});
