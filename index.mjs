import https from 'https';
var __modules = {};
__modules.https = https;
export const handler = async function(event) {
    var request = function(url) {
            var promise = new Promise(function(resolve, reject) {
                var options = {
                        method: 'GET'
                    },
                    req = __modules.https.request(url, options, function(response) {
                        var data = '';
                        response.on('data', function(chunk) {
                            data += chunk;
                        });
                        response.on('end', function() {
                            resolve(data);
                        });
                    }).on('error', function(err) {
                        reject(err)
                    });
                req.end();
            });
            return promise;
        },
        url = 'https://416.io/utils/ping?abc=123';
    await request(url);
    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello from Lambda!'),
    };
    return response;
};
