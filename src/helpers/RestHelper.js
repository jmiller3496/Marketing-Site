import axios from "axios";

const GetArticles = (typeId = null) => {
    let typeIdString = "";
    if(typeId){
        typeIdString = `?typeId=${typeId}`
    }
    return axios.get(`https://jmm-marketing-site.azurewebsites.net/API/GetArticles${typeIdString}`, {
        crossDomain: false
    }).then((response) => {
        return response.data;
    }).catch((error) => {
        return error;
    });
}

export { GetArticles };