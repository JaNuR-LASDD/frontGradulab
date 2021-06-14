FROM node:lts-alpine as node
WORKDIR /app
COPY ./ /app/
RUN npm install
RUN npm run build -- --prod

FROM nginx:alpine
COPY --from=node /app/dist/frontGradulab /usr/share/nginx/html
COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf
