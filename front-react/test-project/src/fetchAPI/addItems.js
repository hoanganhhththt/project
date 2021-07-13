import {urlBooks,urlCategory} from './url'
export default function callApi(link,name,pay,category) {

    return new Promise((resolve, reject) => {
        const url = urlBooks;
        fetch(url, {
                method: 'POST',
                headers: {"Content-Type": "Application/json"},
                body: JSON.stringify({
                    link: link,
                    title: name,
                    pay:pay,
                    categorys: category,
                    num:10
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