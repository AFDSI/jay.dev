const NATION_USA = 'usa';
const SUPPORTED_NATIONS = [NATION_USA, 'can', 'gbr', 'mex'];
const DEFAULT_NATION = SUPPORTED_NATIONS[0];

/**
 * Extracts the active nation from the nation query parameter.
 * Returns 'usa' as default if no nation is given.
 *
 * @param  {expressjs.Request} request
 * @return {String} the nation
 */
function getNationFromRequest(req) {
  let nationString = req.query.nation;
  if (!nationString) {
    return DEFAULT_NATION;
  }
  nationString = nationString.toLowerCase();
  if (!SUPPORTED_NATIONS.includes(nationString)) {
    return DEFAULT_NATION;
  }
  return nationString;
}

module.exports = {
  getNationFromRequest,
  SUPPORTED_NATIONS,
  DEFAULT_NATION,
  NATION_USA,
};
