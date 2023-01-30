# Prograde

Source for [https://joeygryder.com](https://joeygryder.com).

## Prerequisites

* [Serverless Framework](https://serverless.com/framework/docs/providers/aws/guide/installation/)
* [Node](https://nodejs.org/en/download/)

## Installing

To install all packages and run the React app in development:

```
/site$ npm i
/site$ npm start
```

## Deployment

To deploy a new version of the contact web service:
```
/contact-service$ sls deploy
```

To build and deploy a new version of the React app:
```
/site$ npm run build
/site$ npm run deploy
```

## Built With

* [HTML5 UP](https://html5up.net/) - HTML5 / CSS3 Theming
* [create-react-app](https://github.com/facebook/create-react-app) - React with zero build configuration
* [Serverless Framework](https://serverless.com/) - Framework for building and deploying serverless systems
* [AWS](https://aws.amazon.com/) - Cloud Services Platform
* [react-pdf](https://www.npmjs.com/package/react-pdf) - PDF Rendering in React
