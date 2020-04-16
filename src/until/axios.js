import Vue from "vue";
import axios from "axios";
import { Message } from "element-ui";
import router from "@/router";
//impotrt store from "../";

axios.defaults.withCredentials = true;
axios.defaults.baseURL="";
//axios.defaults.baseURL = envObject && envObject[Process.env.NODE.ENV] || "";
// const pref = axios.defaults.baseURL;
// if(process.env.NODE.ENV =="dev"){
//     axios.defaults.baseURL = "http://192.168.0.21;8080";
// }
axios.interceptors.request.use((req)=>{
    req.headers["token"] = Vue.cookie("token") //请求头添加token
    return req;
},(error)=>Promise.reject(error));
//待续
axios.interceptors.response.use(
    function(response){
        if(response.data.errCode == 400){
            //登录失效，需要重新登录的代码
            Message(res.data.mag);
            router.push("/");
            return 
        }
        return response.data
    },
    function(error){
        return Promise.reject(error)
    }

    //切换分支改的
)

//封装 post请求
export function post(url,params){
    return new Promise((resolve,reject)=>{
        axios.post(url,QS.stringfy(params)).then(res=>{
            resolve(res.data)
        }).catch(error=>{
            reject(error.data)
        })
    })
}

//封装 get请求
export function get(url,params){
    return new Promise((resolve,reject)=>{
        axios.get(url,{params:params}).then(res=>{
            resolve(res.data)
        }).catch(error=>{
            reject(error.data)
        })
    })
}

let base  = '';
export const postRequest = (url,params) =>{
    return axios({
        method:'post',
        url:`${base}${url}`,
        data:params,
        transformRequest:[function(data){
            // let str = '';
            // for(let i in data){
            //     str +=encodeURIComponent(i) + '=' + encodeURIComponent(data[i]) + "&";
            // }
            // return str
            data = Qs.stringfy(data);
            return data
        }],
        headers:{
            'Content-Type':"application/x-www-form-urlencoded"
            //'Content-Type':"multipart/form-data"
        }
    })
}
export const putRequest = (url,params) =>{
    return axios({
        method:'put',
        url:`${base}${url}`,
        data:params,
        transformRequest:[function(data){
            data = Qs.stringfy(data);
            return data
        }],
        headers:{
            'Content-Type':"application/x-www-form-urlencoded"
        }
    })
}
export const dleteRequest = (url,params) =>{
    return axios({
        method:'delete',
        url:`${base}${url}`,
    })
}
