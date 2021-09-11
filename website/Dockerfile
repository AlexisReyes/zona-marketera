FROM node:14-slim

WORKDIR /home/node/app

RUN npm install -g gatsby-cli@2.19.3

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY gatsby-config.js .

EXPOSE 8000

CMD ["gatsby", "develop", "-H", "0.0.0.0"]
