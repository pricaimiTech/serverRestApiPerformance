import api from './apiClient.js'; // a instância axios configurada
import { expect } from 'chai';

export async function requestGetAPI(path, expectedStatus = 200) {
  const res = await api.get(path);

  // Verificações opcionais, imitando o supertest
  expect(res.status).to.equal(expectedStatus);
  expect(res.headers['content-type']).to.include('application/json');

  return res.data;
}

export async function requestPostAPI(path, payload, expectedStatus = 201) {
  const res = await api.post(path, payload, {
    headers: { 'Accept': 'application/json' }
  });

  expect(res.status).to.equal(expectedStatus);
  expect(res.headers['content-type']).to.include('application/json');

  return res.data;
}
