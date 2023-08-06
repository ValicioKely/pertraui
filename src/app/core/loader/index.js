import axios from "axios";
import {redirect} from "react-router-dom";



export async function LOGIN(userdata) {
    return await axios.post(
        `${process.env.REACT_APP_API_URL}api/user/login`,
        {
            email:userdata.email,
            password:userdata.password
        }
    )
}

export async function loadUser() {
    return await axios.get(
        `${process.env.REACT_APP_API_URL}api/user/`
    )
        .then(
            (response) => {
                if (!response.data) {
                    return redirect("/")
                }else{
                    return response.data.users
                }
            }
        );
}

export async function loadUserInfo(userId) {

    return await axios.get(
        `${process.env.REACT_APP_API_URL}api/user/${userId}`
    )
        .then((response) => {
            if (!response.data) return redirect("/")
            return response.data.user
        })
}

export async function ACCOUNTSLOADER() {
    return await axios.get(
        `${process.env.REACT_APP_API_URL}api/account/`
    )
}
export async function ACCOUNTINFOLOADER(accountId) {
    return await axios.get(
        `${process.env.REACT_APP_API_URL}api/account/`,
        {
            params: accountId
        }

    )
}