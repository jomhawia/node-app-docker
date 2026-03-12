FROM node:18 as base

FROM base as development

WORKDIR /app

COPY package.json .

ARG NODE_ENV 

RUN npm install

COPY . .

EXPOSE 4000

CMD ["npm","run","dev"] 

FROM base as production
WORKDIR /app

COPY package.json .

ARG NODE_ENV 

RUN npm install 

COPY . .

EXPOSE 4000

CMD [ "npm", "start" ]
