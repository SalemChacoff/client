import { useContext } from "react"
import { AuthContext } from "./AuthProvider"

//Este hook es para consumir la authenticacion del usuario
const useAuth = () => {
    return useContext(AuthContext)
}

export default useAuth
