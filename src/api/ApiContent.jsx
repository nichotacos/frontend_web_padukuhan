import useAxios from "./index.jsx";

export const FetchKonten = async () => {
    try {
        const response = await useAxios.get("/konten", {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        console.log(response);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export const FetchKontenLimited = async (limit) => {
    try {
        const response = await useAxios.get("/konten", {
            headers: {
                'Content-Type': 'application/json',
            },
            params: {
                limit: limit,
            }
        });
        console.log(response);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export const FetchKontenDetail = async (id) => {
    try {
        const response = await useAxios.get(`/konten/`, {
            headers: {
                'Content-Type': 'application/json',
            },
            params: {
                id: id,
            }
        });
        return response.data;
    } catch (error) {
        console.error(error);
    }

}

export const CreateKonten = async (data) => {
    try {
        const response = await useAxios.post("/konten", data, {
            headers: {
                "Content-Type": "multipart/form-data",
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            }
        });
        return response.data;
    } catch (error) {
        console.error(error);
    }
}