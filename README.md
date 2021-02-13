# pumpcarAccountingBook

### server side

yarn init
yarn add express
yarn add body-parser
yarn global add @babel/cli
yarn global add @babel/core
yarn add mysql
yarn add dotenv
yarn add nodemon
yarn add @babel/node 중요! babel-node가 아니라 @babel/node임
yarn add @babel/preset-env
yarn add @babel/core
yarn add --dev babel-watch

index.js 에 express설치 + babel 설치
7버전 이상의 babel을 사용한다면 @babel/cli로 설치할 것
router/api.js 생성 + router/user.js 추가
db/mysql.js 추가 + dotenv 설정
babel 설정 + package.json에 dev 명령어 추가 -> "dev": "babel-node ./src/index.js"
babel + nodemon인 babel-watch 설치 -> "dev": "babel-watch ./src/index.js"
이 프로젝트는 cross-browsing을 고려하지 않으므로 babelrc에 chrome55이상으로 설정
만약 chrome이 아닌 다른 버전에서 실행할 것이라면 babel/polyfill을 설치하고 import할 것

### client side

npx create-react-app client
