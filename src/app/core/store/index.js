import {atom} from "recoil";


//Atoms
export const username = atom({
    key : "username" ,
    default : []
})

export const userid = atom({
    key : "userid" ,
    default : []
})


export const themeState= atom({
    key : "theme" ,
    default : 'dark'
})

//Selectors
