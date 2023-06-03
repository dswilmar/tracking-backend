FROM node:19-slim

WORKDIR /home/node/app

CMD ["npm", "run", "start:dev"]