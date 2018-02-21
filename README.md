# rad-radiocom-redesign

## Requirements

[Node.js](https://nodejs.org/en/download/) v7.6.0+

[NPM](https://www.npmjs.com/get-npm) v5.3.0+

## Installation

### Development

#### Install necessary dependencies:
```
npm install
```

#### Compile Graphql literals into generated files that live alongside your source files for Relay:
```
npm run relay
```
which must be run when any GraphQL query is changed. Or...
```
npm run relay -- --watch
```
to watch for changes

#### Start the server:
```
npm start
```
point your browser to [http://localhost:3942](http://localhost:3942)

### Stage

#### Install necessary dependencies:
```
NODE_ENV=production npm install
```

#### Compile Graphql literals into generated files that live alongside your source files for Relay:
```
npm run relay
```

#### Compile javascript into a single bundle, sass into a single css file, and prepare assets
```
npm run build:stg
```

#### Start the server:
```
npm run start:stg
```

### Production

#### Install necessary dependencies:
```
NODE_ENV=production npm install
```

#### Compile Graphql literals into generated files that live alongside your source files for Relay:
```
npm run relay
```

#### Compile javascript into a single bundle, sass into a single css file, and prepare assets
```
npm run build:prod
```

#### Start the server:
```
npm run start:prod
```
