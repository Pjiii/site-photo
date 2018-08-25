# FROM debian:jessie

# RUN apt-get update \
# && apt-get install -y curl \
# && rm -rf /var/lib/apt/lists/*

# RUN curl -LO "https://nodejs.org/dist/v0.12.5/node-v0.12.5-linux-x64.tar.gz" \
# && tar -xzf node-v0.12.5-linux-x64.tar.gz -C /usr/local --strip-components=1 \
# && rm node-v0.12.5-linux-x64.tar.gz

# ADD package.json /app/
# WORKDIR /app
# RUN npm install
# ADD . /app/

# EXPOSE 3000
# VOLUME /app/log

# CMD node server.js

FROM node:8

# Create app directory
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install

# Bundle app source
COPY . .

EXPOSE 3000
CMD [ "npm", "start" ]