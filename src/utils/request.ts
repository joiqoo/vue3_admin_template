// encapsulate Axios: to use request and response interceptor
import axios from "axios";
import { ElMessage } from "element-plus";

let axiosInstance = axios.create({
    baseURL:import.meta.env.VITE_APP_BASE_API,
    timeout:5000
});

axiosInstance.interceptors.request.use((config) => {
    return config;
})

axiosInstance.interceptors.response.use((response) => {
    return response.data;
}, (error) => {
    let message = '';
    let status = error.response.status;
    switch (status) {
        case 401:
            message = "Unauthorized"
            break;
            
        case 403:
            message = "Forbidden"
            break;

        case 404:
            message = "Not Found"
            break;
        
        case 500:
            message = "Internal Server Error"
            break;
        
        default:
            message = "Service Unavailable"
            break;
    }

    ElMessage({
        type: 'error',
        message
    });

    return Promise.reject(error);
})


export default axiosInstance;