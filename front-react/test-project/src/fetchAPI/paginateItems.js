export default function callApi(limit,page) {

    return new Promise((resolve, reject) => {
        const url = "http://localhost:3001/items?_page="+page+"&_limit="+limit;
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