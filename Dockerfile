FROM node:9.6.1

# Create app directory
WORKDIR /usr/src/app

#COPY package*.json ./
COPY package.json /usr/src/app/package.json

RUN npm i --silent
RUN npm i react-scripts -g --silent

# Bundle app source
#COPY . .

#EXPOSE 3000
CMD [ "npm", "start" ]