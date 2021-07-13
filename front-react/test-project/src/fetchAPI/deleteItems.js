import {urlBooks,urlCategory} from './url'
export default function callApi(id) {
    console.log(id)

    return new Promise((resolve, reject) => {
        const url = urlBooks+'/'+id;
        fetch(url, {
                method: 'DELETE',
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