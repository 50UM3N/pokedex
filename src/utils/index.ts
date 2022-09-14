export const fetchPokemon = async (url: string) => {
    try {
        const res = await fetch(process.env.APP_BASE_API + url);
        if (!res.ok) {
            try {
                return Promise.reject(await res.json());
            } catch (error) {
                return Promise.reject({ message: res.statusText });
            }
        }
        return await res.json();
    } catch (error: any) {
        return Promise.reject(error.message);
    }
};
