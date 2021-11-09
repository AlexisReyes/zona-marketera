[![Netlify Status](https://api.netlify.com/api/v1/badges/553fc5a0-cf9e-4a10-a675-6904acba046d/deploy-status)](https://app.netlify.com/sites/zonamarketera/deploys)

# Gatsby Web Page

### ENV vars

GATSBY_EMAILJS_USERID - emailjs user ID.
GATSBY_EMAILJS_TEMPLATEID - emailjs template ID.
GATSBY_EMAILJS_SERVICEID - emailjs service ID.
GATSBY_EMAILJS_TO_NAME - Contact Email receiver to name.
GATSBY_RECAPTCHA_KEY - Google recaptcha site key.

## Development

1.- Cloning starter

`gatsby new my-new-website https://github.com/app-generator/gatsbyjs-starter-tailwindplay`

2.- Fill .env file

`cp website/.env.sample website/.env.development`

3.- Run development server

`gatsby develop`


## Build Production

1.- Fill .env file with production ENV values.

`cp website/.env.sample website/.env`

2.- Run build for production

`gatsby build`

3.- Start container

`docker-compose up -d`