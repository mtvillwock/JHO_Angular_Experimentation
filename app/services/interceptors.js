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
                //         $http.defaults.headers.post = {
                //     "Accept": "application/json, text/plain, * / *",
                //     "Content-Type": "application/json",
                //     "name": credentials["name"],
                //     "auth_token": credentials["auth_token"]
                // };
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
                    console.log("response error is: ", res);
                    // if response to API is a 401
                    $window.location.href = '#/login'
                }
            }
        }
    ])