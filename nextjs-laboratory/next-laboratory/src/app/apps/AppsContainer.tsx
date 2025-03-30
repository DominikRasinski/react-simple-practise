import { getData } from "./action/getData"
import { postData } from "./action/postData"
import { Apps } from "./Apps"

export const AppsContainer = () => {
    return <Apps getData={getData} postData={postData} />
}