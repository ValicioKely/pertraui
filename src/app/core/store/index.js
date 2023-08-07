import {atom, selector} from "recoil";
import {loadUserInfo} from "../loader";


//Atoms
//user atoms


export const currentUserIdState = atom({
    key : "currentUserId" ,
    default : ''
})

export const currentUserNameState = selector({
    key : "currentUserName" ,
    get : async ({get}) => {
        const currentUserId = get(currentUserIdState);
        return await loadUserInfo(currentUserId);

    }
})



//Accounts Atoms
export const themeState= atom({
    key : "theme" ,
    default : 'dark'
})

//Selectors
