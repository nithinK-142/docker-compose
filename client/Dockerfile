# ---------- Build stage ----------
FROM node:22-alpine AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# ---------- Production stage ----------
FROM node:22-alpine AS production

WORKDIR /app

RUN npm i -g serve

COPY --from=build /app/dist ./

EXPOSE 6173

CMD ["serve", "-s", ".", "-l", "6173"]
