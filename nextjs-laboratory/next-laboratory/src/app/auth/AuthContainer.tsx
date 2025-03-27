import { Auth } from "./Auth"
import { getUser } from "./action/getUser"

export const AuthContainer = () => {
    return (
        <Auth onSubmit={getUser}/>
    )
}