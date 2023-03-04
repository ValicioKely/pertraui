import React from "react";

export const themes = {
    dark : {
        background: '#282c34',
        foreground: '#ffffff'
 } ,
    light : {
        foreground: '#282c34',
        background: '#ffffff'
 }
 }

 export const ThemeContext  =  React.createContext(themes.dark);