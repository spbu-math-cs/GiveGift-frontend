import {useLocalStorage} from "./useLocalStorage";

export const useToken = () => {
    const [token, setToken, removeToken] = useLocalStorage('token', null);
    return {token, setToken, removeToken};
}