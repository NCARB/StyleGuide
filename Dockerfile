FROM node:6

WORKDIR /home/nodejs/app

# Run as a non root user
#RUN groupadd -r nodejs \
#   && useradd -m -r -g nodejs nodejs
#
#USER nodejs

RUN npm install -g grunt-cli && npm install -g bower

# Cache node_modules
COPY package.json .
RUN npm install

# Cache bower_components
COPY bower.json .
RUN bower install --allow-root

COPY . .

RUN grunt build

EXPOSE 5000

ENTRYPOINT ["node", "web.js"]