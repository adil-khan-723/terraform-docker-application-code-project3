# STAGE 1 BUILD
FROM node:18-alpine AS build

WORKDIR /app

COPY package*.json .

RUN npm ci 

COPY public /app/public

COPY src /app/src

RUN npm run build 

# STAGE 2 RUN
FROM nginx:alpine

COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

COPY --from=build /app/build /usr/share/nginx/html

COPY docker-entrypoint.sh /docker-entrypoint.sh

RUN chmod +x /docker-entrypoint.sh

EXPOSE 80

ENTRYPOINT ["/docker-entrypoint.sh"]

CMD ["nginx", "-g", "daemon off;"]