FROM node:21-bullseye

WORKDIR /usr/geometry/back
COPY ./back/package.json .
RUN npm install --quiet

COPY ./back .

CMD pwd && ls
