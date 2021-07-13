import {urlBooks,urlCategory,urlPay} from './url'
export default function callApi(idBook,name,phone,address,count) {

    return new Promise((resolve, reject) => {
        const url = urlPay;
        fetch(url, {
                method: 'POST',
                headers: {"Content-Type": "Application/json"},
                body: JSON.stringify({
                    idBook:idBook,
                    nameCustom: name,
                    count: count,
                    phone:phone,
                    address:address
                })
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