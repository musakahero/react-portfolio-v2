FROM node:20.15.0
WORKDIR /react-portfolio-v2
COPY package.json .
RUN npm i
COPY . .
EXPOSE 3000
CMD ["npm", "start"]