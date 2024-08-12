var Validator = require("jsonschema").Validator;
var v = new Validator();
var chai = require("chai"),
  expect = chai.expect;

export function schemaValidator(response, schema) {
  const res = v.validate(response, schema);
  expect(
    res.valid,
    "schema não é valido \nResponse: " +
      JSON.stringify(response) +
      "\nErro:" +
      JSON.stringify(res.errors)
  ).to.be.true;
}
