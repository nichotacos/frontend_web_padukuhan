import axios from "axios";

export const BASE_URL = "http://127.0.0.1:8000";

export const getGambarKonten = (gambar_konten) => {
    return `${BASE_URL}/storage/img/${gambar_konten}`;
};

const useAxios = axios.create({
    baseURL: `${BASE_URL}/api/`,
});

export default useAxios;