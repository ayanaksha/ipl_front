# FROM node:10.15.1
# RUN mkdir -p /usr/src/app
# WORKDIR /usr/src/app
# COPY server.js /usr/src/app
# COPY dist /usr/src/app/dist
# COPY package-container.json /usr/src/app
# RUN mv package-container.json package.json
# RUN npm install express --save
# expose 4200
# CMD ["node","server.js"]

# base image
FROM node:10.15.1

# set working directory
RUN mkdir /usr/src/app
WORKDIR /usr/src/app

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /usr/src/app/package.json
RUN npm install
RUN npm install -g @angular/cli@7.3.6

# add app
COPY . /usr/src/app

# start app
CMD ng serve --host 172.18.2.50:2375