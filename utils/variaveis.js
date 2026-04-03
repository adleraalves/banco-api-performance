const configLocal = JSON.parse(open('../config/config.local.json'));

export function pegarBaseURL () {
    //console.log ('ENV BASE_URL: ' +  __ENV.BASE_URL);
    return __ENV.BASE_URL || configLocal.baseUrl;
}