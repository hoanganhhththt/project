import {urlBooks,urlCategory} from './url'
export default function callApi() {

    return new Promise((resolve, reject) => {
        const url = urlCategory;
        fetch(url, {
                method: 'GET'
            })
            .then((response) => response.json())//chuyển responde về dạng json
            .then((res) => {
                console.log(res)
                resolve(res);//trả về 
                console.log(res);
            })
            .catch((error) => {
                reject(error);//trả về khi phát hiện sai
            });
    });
}