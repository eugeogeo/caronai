import {
    createContext,
    useContext,
    useState
} from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";
import { Alert } from "react-native";
import { api } from "../services/api";


const AuthContext = createContext()


function AuthProvider({children}) {

    const [userStorageLoading, setUserStorageLoading] = useState(true);
    const [userAuthState, setUserAuthState] = useState()
    const userStorageKey = '@rentx:user';

    async function signIn(credentials) {

        await api.post('/token/', credentials).then((response) => {
            
            const { user, token } = response.data;
        
            const userAuthenticad = {
                token: token,
                user: user
            }
            api.defaults.headers.authorization = `Bearer ${token.access}`;
            setUserAuthState({ user, token })
            setLocalStorageAuthenticatedUserData(userAuthenticad)
            
        }).catch((error) => {
            throw Error(error)
        })

    }

    // persiste dados do usuário autenticado
    async function setLocalStorageAuthenticatedUserData(userAuthenticad) {

        try {
            await AsyncStorage.setItem(userStorageKey, JSON.stringify(userAuthenticad))
        } catch (e) {
            console.log(e)
        }

    }

    async function getAuthenticatedUserData() {

        const userData = await AsyncStorage.getItem(userStorageKey)
        if (userData) {
            const userDataFormatted = JSON.parse(userData)
            api.defaults.headers.authorization = `Bearer ${userDataFormatted.token.access}`;
            setUserAuthState(userDataFormatted)
        }
        setUserStorageLoading(false)
    }

    
    async function signOut() {

        try {
            setUserAuthState()
            await AsyncStorage.removeItem(userStorageKey)
        } catch (e) {
            console.log(e)
            Alert.alert('', 'Não foi possível deslogar')
        }
    }

    useEffect(() => {
        getAuthenticatedUserData();
    }, [])

    return (
        <AuthContext.Provider value={{
            userAuthState,
            signIn,
            signOut,
            userStorageLoading
        }}>
            {children}
        </AuthContext.Provider>
    );
}

function useAuth() {
    const context = useContext(AuthContext)
    return context;
}

export { AuthProvider, useAuth };