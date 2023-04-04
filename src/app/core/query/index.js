import {gql} from "@apollo/client";

export  const LOGIN =  gql(
    `mutation Login ( $email: String! , $password: String! ){
               login(input: {email: $email , password : $password}  ) 
               @rest (method:"POST" , path:"api/user/login" ,bodyKey : "input"){
                email ,
                password
               }
        }`
);