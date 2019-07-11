FROM node:latest
RUN git clone https://github.com/incuisting/contactKeeperTS contactKeeperTS
WORKDIR /contactKeeperTS
RUN npm install
RUN npm run clientinstall
EXPOSE 3000
CMD ["npm","run","dev"]
