
FROM jrottenberg/ffmpeg:4.4-alpine AS FFmpeg
FROM node:16-alpine

RUN apk add --no-cache libssl1.1 libcrypto1.1 libgomp expat fontconfig

COPY --from=FFmpeg /usr/local /usr/local

WORKDIR /app

COPY package.json .
COPY yarn.lock .

RUN yarn install --frozen-lockfile

COPY . .

CMD ["yarn", "start"]
