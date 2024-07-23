import useAxios from ".";

export const RegisterAuth = async (data) => {
    try {
        const response = await useAxios.post("/register", data, {
            headers: {
                "Content-Type": "application/json",
            }
        });
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export const LoginAuth = async (data) => {
    try {
        const response = await useAxios.post("/login", data, {
            headers: {
                "Content-Type": "application/json",
            }
        });

        console.log(response);

        return response.data;
    } catch (error) {
        console.error(error);
        // Optionally return an error response or throw an error
        throw error; // or return { error: true, message: error.message }
    }
}