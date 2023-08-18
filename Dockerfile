FROM node:16-alpine
WORKDIR /app
COPY . .
RUN npm install --omit=dev
RUN npm run build
CMD ["npm", "start"]

