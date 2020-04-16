import {postRequest} from "../axios"
import Axios from "axios"

//get 请求
export function login(data){
    return Axios.get("/login/login",{params:data})
}
//post请求
export function login(data){
    return Axios.post("/login/login",data)
}
//From表单请求
export function login(data){
    return postFrom("/login/login",data)
}
