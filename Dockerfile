FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm install --legacy-peer-deps

COPY . .

# Build the app (assumes you have a "build" script in package.json)
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]