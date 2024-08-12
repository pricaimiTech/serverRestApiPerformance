import request from "supertest";
import { baseURL } from "../../environment/stg";

export async function requestGetAPI(path) {
  const response = await request(baseURL)
    .get(path)
    .expect("Content-Type", "application/json; charset=utf-8")
    .expect(200);
  return response;
}
