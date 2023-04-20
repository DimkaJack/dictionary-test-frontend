FROM node:lts-alpine


#COPY package*.json ./
WORKDIR /app

COPY package*.json ./

RUN npm install

EXPOSE 8080
EXPOSE 5173

CMD ["npm", "run", "dev"]


#RUN #cd /usr/src/app && npm init vue@latest dictionary
#RUN npm install

#EXPOSE 8080


#CMD ["npm", "install"]
#CMD ["npm", "run", "serve"]
