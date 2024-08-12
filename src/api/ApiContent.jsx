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

export const EditKonten = async (data) => {
    try {
        const formData = new FormData();
        formData.append('title', data.title);
        formData.append('content', data.content);

        if (data.image) {
            formData.append('image', data.image);
        }
        console.log('data di api:', formData.get('title'), formData.get('content'), formData.get('image'));
        const response = await useAxios.put(`/konten/${data.id}`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
                "Accept": "multipart/form-data",
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            }
        });

        return response.data;
    } catch (error) {
        console.error('Axios error:', error);
    }
}


export const DeleteKonten = async (id) => {
    try {
        const response = await useAxios.delete(`/konten/${id}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            }
        });
        return response.data;
    } catch (error) {
        console.error(error);
    }
}