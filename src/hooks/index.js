import { AuthProvider } from "./auth";

export function AppProvider({children}){
    
    return(
        <AuthProvider>
            {children}
        </AuthProvider>
    );


}