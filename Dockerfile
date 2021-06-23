FROM node:15

WORKDIR /usr/src

RUN npm install --global http-server

COPY ./package.json ./
COPY ./*lock* ./

RUN yarn

COPY snowpack.config.js .
COPY tsconfig.json .
COPY .prettierrc .
COPY src src
COPY scripts scripts
COPY public public

RUN yarn build

EXPOSE 8080

CMD ["http-server", "./build", "-p", "8080", "--cors", "--proxy", "http://localhost:8080?"]
