## Build step 1(installing node modules and preparing compiled build)
#FROM node:20.10.0-alpine3.18 as build
#RUN apk update && apk upgrade --available
#
#WORKDIR /app
#
#ENV PATH /app/node_modules/.bin:$PATH
#
#COPY package.json pnpm-lock.yaml ./
#
#RUN npm i -g pnpm && pnpm i
#
#COPY . ./
#
#RUN pnpm build
#
## Build step 2(Deploying build on NGINX)
#FROM nginx:1.13 as production
#RUN rm -rf /usr/share/nginx/html/*
#
#COPY ./nginx.conf /etc/nginx/conf.d/default.conf
#COPY --from=build /app/.output/public /usr/share/nginx/html
#
#EXPOSE 80
#
#ENTRYPOINT ["nginx", "-g", "daemon off;"]


FROM node:lts as build-stage
WORKDIR /nuxtapp
COPY . .
RUN npm install
RUN npm run build
RUN rm -rf node_modules && \
  NODE_ENV=production npm install \
  --prefer-offline \
  --pure-lockfile \
  --non-interactive \
  --production=true


FROM node:lts as prod-stage
WORKDIR /nuxtapp
COPY --from=build-stage /nuxtapp/.output/  ./.output/
CMD [ "node", ".output/server/index.mjs" ]