import request from "supertest";
import { baseURL } from "../../environment/stg";

export async function requestGetAPI(path) {
  const response = await request(baseURL)
    .get(path)
    .expect("Content-Type", "application/json; charset=utf-8")
    .expect(200);
  return response;
}

export async function requestPostAPI(path, payload) {
  const response = await request(baseURL)
    .post(path)
    .send(payload)
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(201)
  return response.body;
}
