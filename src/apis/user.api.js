import axios from 'axios'
import { BASE_URL } from '../config/HostConfig'

export const USER_ACTION = {
    GetAllUsers,
    Register
}

function GetAllUsers(userId) {
    return new Promise(async resolve => {
        axios.get(BASE_URL.baseApi+'/api/getallusers')
        .then(res => {
            resolve(res.data);
        })
        .catch(err => {
            console.log('------- Get All Users API --------');
            console.log('Error: ', err);
        })
    })
}
function Register(reqData) {
    return new Promise(async resolve => {
        axios.post(BASE_URL.baseApi+'/api/register', reqData)
        .then(res => {
            resolve(res.data);
        })
        .catch(err => {
            console.log('------- Register API --------');
            console.log('Error: ', err);
        })
    })
}