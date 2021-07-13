import {urlBooks,urlCategory} from './url'
export default function callApi(id,link,name,pay,num) {
    console.log(id,link,name,pay,num)

    return new Promise((resolve, reject) => {
        const url = urlBooks;
        fetch(url, {
                method: 'PUT',
                headers: {"Content-Type": "Application/json"},
                body: JSON.stringify({
                    _id:id,
                    title: name,
                    num: num,
                    pay:pay,
                    link: link
                })
            })
            .then((response) => {
                response.json()})
            .then((res) => {
                    resolve(res);
                    console.log(res);
            })
            .catch((error) => {
                reject(error);
            });
    });
}