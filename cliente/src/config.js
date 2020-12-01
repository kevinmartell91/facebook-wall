const dev = {
    MAX_ATTACHMENT_SIZE: 5000,
    URL_PATH: 'http://localhost:8080/api/v1'
}
const prod = {
    MAX_ATTACHMENT_SIZE: 5000000,
    URL_PATH: 'https://facebook-wall-challenge.herokuapp.com/api/v1'
}

const config = {
    // add common config varaibles here
    ...(process.env.REACT_APP_STAGE === "prod" ? prod : dev)
}

export default config;