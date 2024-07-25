import axios from "axios";

export const BASE_URL = "https://backend-web-padukuhan.vercel.app";

export const getGambarKonten = (gambar_konten) => {
    return `${BASE_URL}/storage/img/${gambar_konten}`;
};

const useAxios = axios.create({
    baseURL: `${BASE_URL}/api/`,
});

export default useAxios;