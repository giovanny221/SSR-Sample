FROM node:lts-slim AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . ./
RUN npm run build:ssr

FROM node:lts-slim
WORKDIR /app
COPY --from=builder /app/dist/ssr-project ./
EXPOSE 4000
CMD ["node", "server/server.mjs"]
