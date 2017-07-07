var axios = require('axios');

function getPictaculousObject (image) {
    return axios.get('http://pictaculous.com/api/' + image)
        .then(function (complementaryObject) {
            return complementaryObject;
        });
}

module.exports = getPictaculousObject;