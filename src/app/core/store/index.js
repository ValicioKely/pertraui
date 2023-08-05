import {atom} from "recoil";


//Atoms
//user atoms
export const username = atom({
    key : "username" ,
    default : []
})

export const userid = atom({
    key : "userid" ,
    default : ''
})


//Accounts Atoms
export const themeState= atom({
    key : "theme" ,
    default : 'dark'
})

//Selectors
