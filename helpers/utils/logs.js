var chai = require("chai"),
  expect = chai.expect,
  should = chai.should();

export function checkDataNull(response, body, endpoint) {
  return should.not.equal(
    body,
    null,
    `${endpoint} não gerado` + JSON.stringify(response)
  );
}
