FROM node:16

# Create app directory
ENV APP_NAME angular-web
ENV APP_HOME /app/$APP_NAME
RUN mkdir -p $APP_HOME
WORKDIR $APP_HOME

ADD . $APP_HOME

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
# COPY . . 

RUN npm install

# If you are building your code for production
# RUN npm ci --omit=dev

# Bundle app source
# COPY . .

EXPOSE 4200

CMD ["ng", "serve", "--host", "0.0.0.0", "--port", "8000"]
