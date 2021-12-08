export const network = {
  async request({ method, url, data }) {
    try {
      const response = await fetch(url, {
        method,
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      return result;
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  },
  post({ url, data }) {
    return this.request({ method: "POST", url, data });
  },
};
