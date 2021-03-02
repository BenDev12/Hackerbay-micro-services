import got from "got";
const USER_SERVICE_URL = "http://login:9200";
export default class UserService {
  static async signup({ email, password, name }) {
    try {
      const data = await got
        .post(`${USER_SERVICE_URL}/signup `, {
          json: {
            email,
            password,
            name
          }
        })
        .json();
      return data;
    } catch (error) {
      return error;
    }
  }
  static async login({ email, password }) {
    try {
      const data = await got
        .post(`${USER_SERVICE_URL}/login`, {
          json: {
            email,
            password
          }
        })
        .json();
      return data;
    } catch (error) {
      return error;
    }
  }
}
