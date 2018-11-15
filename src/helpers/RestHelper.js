import axios from "axios";

export default () => {
    axios.get("/api/scheduler/test").then((response) =>{
        return response.data;
    })
}