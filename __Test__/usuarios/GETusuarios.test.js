import request from "supertest";
import { requestGetAPI } from "../../helpers/utils/request";
import { schemaValidator } from "../../helpers/utils";
import { pathUsuarios } from "../../environment/stg";

describe("GET/ALL usuarios", () => {
  let response = null;
  it("should return a 200 status code", async () => {
    response = await requestGetAPI(pathUsuarios);
    console.log(response.body);
    expect(response.statusCode).toBe(200);
  });

  it("Validar contrato", () => {
    const schema = require("../../api/schema/usuario/usuarios.schema.json");
    schemaValidator(response.body, schema);
  });
});
