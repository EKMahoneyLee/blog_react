npx create-react-app my-blog --use-npm : 보일러플레이트 생성

npm install --save react-router-dom : react router를 사용하기 위해 설치되는 package

# 라우트 설치중 에러 발생...다운그레이딩 하기 위해 두 패키지 다시 설치
    npm install react-router-dom@5.2.0
    npm install react-router@5.2.0

# 벡엔드 설치
같은 레벨에서 백엔드 위한 폴드 생성후 폴드로 이동

command line에 "npm init -y" => package.json 생성됨

npm install --save express => install/node_modules/package-lock.json 생성됨

src 폴더 생성후 server.js 파일 생성 (entry point for the app)

package설치 "npm install --save-dev @babel/core @babel/node @babel/preset-env"

.babelrc 파일생성 => this file is were we tell babel how we want it to transform the ES6 code that we write into common Js code that Node.js can execute.

"npx babel-node src/server.js" => run the backend server 매번 중지 실행의 불편함을 줄이기 위해 npm install --save-dev nodemon 설치 (nodemon -v로 확인)

"npx nodemon --exec npx babel-node src/server.js" => 이 명령어 사용하면 코드에 변화가 있을 때마다 자동 업데이트 될거임

Run npm i nodemon => to update nodemon

body Parcer => "npm install --save body-parser"











# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
