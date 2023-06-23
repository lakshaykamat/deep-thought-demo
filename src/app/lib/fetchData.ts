import axios from 'axios';
export const fetchData = async () => {
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'https://dev.deepthought.education/assets/uploads/files/files/others/ddugky_project.json',
        headers: {}
    };

    try {
        const response = await axios.request(config);
        return response.data;
        // console.log(JSON.stringify(response.data));
    }
    catch (error) {
        console.log(error);
    }
}
