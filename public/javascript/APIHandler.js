class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  async getFullList() {
    const response = await axios.get(`${this.BASE_URL}/characters`);
    if (response.status === 200) {
      return response.data;
    }
  }

  async getOneRegister(id) {
    const response = await axios.get(`${this.BASE_URL}/characters/${id}`);
    if (response.status === 200) {
      return response.data;
    }
  }

  async createOneRegister(newCharacter) {
    const response = await axios.post(
      `${this.BASE_URL}/characters`,
      newCharacter
    );
    return response.data;
  }

  async updateOneRegister(id, updatedData) {
    const response = await axios.patch(
      `${this.BASE_URL}/characters/${id}`,
      id,
      updatedData
    );
    return response.data;
  }

  async deleteOneRegister(id) {
    const response = await axios.delete(`${this.BASE_URL}/characters/${id}`);
    return response.data;
  }
}
