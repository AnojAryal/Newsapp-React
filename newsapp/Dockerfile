FROM node:14.16.0-alpine3.13
RUN addgroup app && adduser -S -G app app
USER app
WORKDIR /app
COPY package*.json .
RUN npm install
COPY . .
ENV API_URL=https://newsapi.org/v2/top-headlines?country=us&apiKey=0e05d4b28f9d474b9492f6f9534ddf0d&page=
EXPOSE 3000
CMD [ "npm","start" ] 