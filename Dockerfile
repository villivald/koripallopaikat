FROM node:14-alpine
WORKDIR /usr/src/app

COPY . ./

RUN npm i
RUN npm run build

CMD [ "npm", "start" ]
