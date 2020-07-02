FROM node:12.18.0

WORKDIR /app
COPY . .
RUN yarn

EXPOSE 3000
CMD ["yarn", "start"]
