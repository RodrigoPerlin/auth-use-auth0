# Stage 1 - the build process

FROM node:20 as build

WORKDIR /app

COPY package*.json ./

RUN yarn install

COPY . .

RUN yarn build

# Stage 2 - the production environment

FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 8080

CMD [ "nginx" , "-g" , "daemon off;" ]
