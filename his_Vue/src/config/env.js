// import localConfig from "./config.local"
let baseUrl = '';

if (process.env.NODE_ENV === 'development') {
    baseUrl = 'http://localhost:8080/hoso'

} else if (process.env.NODE_ENV === 'production') {
    baseUrl = 'http://120.79.88.98:8080/hoso';
}

export {
    baseUrl,//导出baseUrl
}
