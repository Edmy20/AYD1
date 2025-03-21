FROM node:18

WORKDIR /app

COPY package*.json ./
COPY index.js ./
COPY web ./web

RUN npm install

EXPOSE 80

CMD ["node", "index.js"]
