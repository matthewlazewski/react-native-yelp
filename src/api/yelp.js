import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer T-hzZahCipcG6yE7lJEOz7oNLH3qdxzVUh9KJ0aS-y08y8-zFGFQYjwGWapiACu5ut4s6_lwnwPH4V8PwWotUgTASOxzXINJT9M8mW4fUTCtVMayOb6PRSfUZna9X3Yx'
    }
});
