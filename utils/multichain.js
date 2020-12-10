const axios = require('axios');
const url = 'http://localhost:7000';

module.exports = async (le, cropIDs, method, params) => {
    let response = await axios.post(url, {
        payload: [le, cropIDs, method, params]
    })
        .then(r => r)
        .catch(e => e);

    return response.data;
};
