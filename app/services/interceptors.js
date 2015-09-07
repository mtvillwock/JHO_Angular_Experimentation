angular.module("JHO")
    .factory('authInterceptor', ['API', 'auth',
        function authInterceptor(API, auth) {
            return {
                // automatically attach Authorization header
                request: function(config) {
                    var token = auth.getToken();
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
                        auth.saveToken(res.data.token);
                    }

                    return res;
                },

                responseError: function(res) {
                    console.log("response is: ", res);
                    // if response to API is a 401
                    // redirect user to login page
                }
            }
        }
    ])