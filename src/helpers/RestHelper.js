import axios from "axios";

const GetArticles = (typeId = null) => {
    let typeIdString = "";
    if(typeId){
        typeIdString = `?typeId=${typeId}`
    }
    return axios.get(`http://localhost:8080/GetArticles${typeIdString}`, {
        crossDomain: false
    }).then((response) => {
        console.log(response.data);
        return response.data;
    });
}

export { GetArticles };