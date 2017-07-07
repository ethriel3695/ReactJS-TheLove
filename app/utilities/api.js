var axios = require('axios');

// function getPictaculousObject (image) {
//     return axios.get('http://pictaculous.com/api/' + image)
//         .then(function (complementaryObject) {
//             return complementaryObject;
//         });
// }

module.exports = {
    fetchPictaculousObject: function (image) {
        //var encodedURI = window.encodeURI('//pictaculous.com/api/1.0/' + image);

        return axios.get('//pictaculous.com/api/1.0/' + image)
            .then(function(response) {
                return response;
            });
    }
};