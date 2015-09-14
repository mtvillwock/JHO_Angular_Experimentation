angular.module("JHO")
    .factory('authInterceptor', ['API', 'auth', '$window',
        function authInterceptor(API, auth, $window) {
            return {
                // attach Authorization header on outgoing request
                request: function(config) {
                    var token = auth.getToken();
                    console.log("token from localStorage being used for API call:", token);
                    if (config.url.indexOf(API) === 0 && token) {
                        config.headers.Authorization = 'Bearer ' + token;
                    }

                    return config;
                },

                requestError: function(config) {
                    // handling request error
                },

                // If a token was sent back, save it
                response: function(res) {
                    if (res.config.url.indexOf(API) === 0 && res.data.token) {
                        console.log("token received from server:", res.data.token);
                        auth.saveToken(res.data.token);
                    }

                    return res;
                },

                responseError: function(res) {
                    console.log("interceptor responseError: server error / bad request: ", res);
                    // if response to API is a 422 or 401
                    return res;
                }
            }
        }
    ])