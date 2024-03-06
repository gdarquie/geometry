FROM node:21-bullseye

RUN npm install -g @nestjs/cli

WORKDIR /usr/geometry/back
COPY ./back/package.json .
RUN npm install --quiet

COPY ./back .
