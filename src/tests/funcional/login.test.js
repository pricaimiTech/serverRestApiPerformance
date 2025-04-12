const axios = require('axios');
const { expect } = require('chai');
const { validateSchema } = require('../../utils/validateSchema.js');
import loginSchema from '../schemas/Login.schema.json';
import { loginPayload } from '../../mocks/loginPayload.js'; // Importando o payload
const { validateSchema } = require('../../utils/validateSchema.js');

describe('Login - POST /login', () => {
  it('deve fazer login com sucesso e validar o contrato', async () => {
    const response = await axios.post( `${process.env.BASE_URL}/${process.env.PATH_LOGIN}`, loginPayload);

    // Validação do status
    expect(response.status).to.equal(200);

    // Validação do schema
    const { valid, errorText } = validateSchema(loginSchema, response.data);
    expect(valid, `Erros de schema: ${errorText}`).to.be.true;

    // Validação dos dados
    expect(response.data).to.have.property('authorization').that.is.a('string');
  });
});
