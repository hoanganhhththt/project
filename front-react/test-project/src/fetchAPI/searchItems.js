import {urlBooks,urlCategory} from './url'
export default function callApi(data) {

    return new Promise((resolve, reject) => {
        const url = urlBooks+"/"+data;
        console.log("----------------",url )
        fetch(url, {
                method: 'GET'
            })//chuyển responde về dạng json
            .then((res) => {
                console.log(res)
                resolve(res.json());//trả về 
                console.log(res);
            })
            .catch((error) => {
                reject(error);//trả về khi phát hiện sai
            });
    });
}