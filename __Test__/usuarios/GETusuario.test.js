import { requestGetAPI } from "../../helpers/utils/request";
import { getRandomNumber, schemaValidator } from "../../helpers/utils";
import { pathUsuarios } from "../../environment/stg";

/**
 * @description realizar a validação de um usuário aleatório
 */
describe("GET/{ID} usuarios", () => {
  let usuariosObj = null;
  let responseBody = null;
  let response = null;

  /**
   * @description antes do teste começar é executado um get em todos os usuários da base
   */
  beforeAll(async () => {
    try {
      usuariosObj = await requestGetAPI(pathUsuarios);
      responseBody = await getRandomUser(usuariosObj.body);
    } catch (error) {
      throw new Error(`Erro durante a execução dos testes: ${error.message}`);
    }
  });

  /**
   * @description através do método random, ele irá buscar um usuario alteatorio
   */
  async function getRandomUser() {
    try {
      // Supondo que 'getRandomNumber' é uma função que gera um número aleatório
      const randomIndex = getRandomNumber(0, usuariosObj.body.usuarios.length); // Gera um índice aleatório
      responseBody = usuariosObj.body.usuarios[randomIndex].body; // Obtém o usuário aleatório com base no índice gerado
      return responseBody;
    } catch (error) {
      throw new Error(`Erro durante a execução dos testes: ${error.message}`);
    }
  }

  it("Capturar ID aleatório ", async () => {
    // response = await requestGetAPI(`${pathUsuarios}/${responseBody._id}`);
    console.log(responseBody);

    // expect(response._id).to.be.equal(responseBody._id);
  });
  it.skip("Validar contrato", () => {
    const schema = require("../../api/schema/usuario.schema.json");
    schemaValidator(response, schema);
  });
});
