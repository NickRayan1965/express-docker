FROM node:16
WORKDIR /app
COPY . .
RUN npm install --production
CMD ["npm", "run", "start"]