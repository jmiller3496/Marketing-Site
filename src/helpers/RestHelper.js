import axios from "axios";

function GetSchedulerData(id) {
    return axios.get("http://localhost:7777/api/scheduler/test", {
        // params: {
        //     id: id
        // },
        crossDomain: false
    }).then((response) => {
        console.log(response.data);
        return response.data;
    });
}

export { GetSchedulerData };