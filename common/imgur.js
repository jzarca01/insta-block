import config from '../config/config.json';

export const postToImgur = function(fileUrl) {
    let formdata = new FormData();
    formdata.append("image", {uri: fileUrl})
    
    return fetch('https://api.imgur.com/3/image.json',{
        method: 'post',
        headers: {
            'Content-Type' : 'multipart/form-data',
            'Authorization' : 'Client-ID ' + config.imgurClientId
        },
        body: formdata
    }).then(response => {
        console.log("image uploaded")
        return response.json();
    }).catch(err => {
        console.log(err)
    }); 
}
