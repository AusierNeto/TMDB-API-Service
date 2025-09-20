FROM node:lts-alpine

WORKDIR /

COPY package*.json ./

RUN npm install --omit=dev

COPY . .

EXPOSE 3000

CMD ["node", "./src/app.js"]
