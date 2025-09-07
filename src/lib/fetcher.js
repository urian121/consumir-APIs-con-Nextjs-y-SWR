import axios from "axios"; // importar axios


// fetcher para axios y una exportacion nombrada
export const fetcherAxios = async (url) => {
  try {
    // hacer peticion a la api
    const { data } = await axios.get(url);
    // normalizar la respuesta para que SWR la entienda mejor
    return data;
  } catch (err) {
    // normalizar el error para que SWR lo entienda mejor
    throw err.response?.data || new Error(err.message);
  }
};
