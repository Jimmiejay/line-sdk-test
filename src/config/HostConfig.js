let hostname = location.hostname;
let host_config = {};

if(hostname === 'localhost')
{
    host_config = {
        baseApi: 'https://nlchr.podsable.com:6001'
    }
}
else if(hostname === '')
{
    host_config = {
        baseApi: ''
    }
}

export const BASE_URL = host_config