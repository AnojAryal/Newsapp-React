FROM node:14.16.0-alpine3.13
WORKDIR /app
COPY . .
RUN npm install
ENV API_URL=https://newsapi.org/v2/top-headlines?country=us&apiKey=0e05d4b28f9d474b9492f6f9534ddf0d&page=