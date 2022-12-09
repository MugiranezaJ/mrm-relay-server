FROM node:16
WORKDIR /app/server
COPY ["package.json", "package-lock.json*", "./"]
RUN ls
RUN npm install
COPY server .
ENTRYPOINT npm run start
