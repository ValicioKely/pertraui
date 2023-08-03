import axios from "axios";



export async function LOGIN(userdata) {
    return await axios.post(
        `${process.env.REACT_APP_API_URL}api/user/login`,
        {
            email:userdata.email,
            password:userdata.password
        }
    )
}

export async function USERSLOADER() {
    return await axios.get(
        `${process.env.REACT_APP_API_URL}api/user/`
    )
}

export async function USERINFOLOADERS(userId) {
    return await axios.get(
        `${process.env.REACT_APP_API_URL}api/user/`,
        {
            params: userId
        }
    )
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