import https from 'https';
var __modules = {};
__modules.https = https;
export const handler = async function(event) {

    // Edit this array if you want other event names rebounded
    // See: https://www.gorillastack.com/blog/real-time-events/cloudtrail-event-names/
    var allowableEventNames = [
            'ConsoleLogin'
        ],
        eventName = event.detail.eventName,
        request = function(url) {
            var promise = new Promise(function(resolve, reject) {

                // Function fails
                if (allowableEventNames.includes(eventName) === false) {
                    reject('Invalid eventName: ' + (eventName));
                    return false;
                }
                var data = {};
                data.event = event;
                var postData = JSON.stringify(data),
                    options = {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'Content-Length': postData.length
                        }
                    },
                    req = https.request(url, options, function(res) {
                        var body = '';
                        res.on('data', function(chunk) {
                            body += chunk.toString();
                        });
                        res.on('end', function() {
                            var statusCode = res.statusCode;
                            if (statusCode === 200) {

                                // Function succeeds
                                var response = JSON.parse(body);
                                resolve('Successful rebound');
                            } else {

                                // Function fails
                                reject('Invalid status code: ' + (statusCode));
                            }
                        });
                        res.on('error', reject);
                    });
                req.on('error', reject);
                req.write(postData);
                req.end();
            });
            return promise;
        },

        // Replace this URL with your preferred endpoint
        url = 'https://416.io/utils/ping';
    var msg = await request(url);
    const response = {
        statusCode: 200,
        body: JSON.stringify('Webhook received successfully!'),
    };
    return response;
};
