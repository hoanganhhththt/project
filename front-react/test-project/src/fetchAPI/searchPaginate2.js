export default function callApi(data,page) {

    return new Promise((resolve, reject) => {
        const url = "http://localhost:3001/items?q="+data+"&_limit=5&_page="+page;
        console.log("----------------",url )
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