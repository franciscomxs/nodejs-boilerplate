# Usage:

```shell
export APP_NAME="my-app-name"

git clone --depth=1 --branch=master \
  git@github.com:franciscomxs/nodejs-boilerplate.git $APP_NAME

rm -rf ./$APP_NAME/.git

cd $APP_NAME

git init

cp .env.sample .env.development
sed -i "s/boilerplate/$APP_NAME/g" .env.development
sed -i "s/boilerplate/$APP_NAME/g" docker-compose.

yarn install

docker-compose up --build web
```

### Running (without Docker):

```shell
yarn start:dev
```


### Useful commands

Used to create this boilerplate.

```shell
git init
yarn init
yarn add typescript -D
yarn tsc --init
yarn add express
yarn add @types/express -D
yarn tsc # optional
yarn add ts-node-dev -D

yarn add eslint -D
yarn eslint --init
yarn add -D @typescript-eslint/eslint-plugin@latest eslint-config-airbnb-base@latest eslint@^5.16.0 || ^6.8.0 || ^7.2.0 eslint-plugin-import@^2.21.2 @typescript-eslint/parser@latest

yarn add jest -D
yarn jest --init
yarn add ts-jest -D

yarn add -D @babel/cli @babel/core @babel/node @babel/preset-env @babel/preset-typescript babel-plugin-module-resolver
```
