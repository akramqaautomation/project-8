{
    "name": "hm08-qa-us",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "scripts": {
      "lint": "npx eslint .",
      "build": "rm -rf ./node_modules && npm install",
      "wdio": "wdio run ./wdio.conf.js"
    },
    "keywords": [],
    "author": "",
    "license": "ISC",
    "devDependencies": {
      "@wdio/cli": "^8.6.7",
      "@wdio/devtools-service": "^8.6.9",
      "@wdio/local-runner": "^8.6.7",
      "@wdio/mocha-framework": "^8.6.6",
      "@wdio/spec-reporter": "^8.6.6",
      "eslint": "^8.38.0",
      "eslint-plugin-mocha": "^10.1.0",
      "eslint-plugin-wdio": "^8.0.14",
      "geckodriver": "^3.2.0",
      "wdio-eslinter-service": "^0.0.4",
      "wdio-geckodriver-service": "^4.1.1",
      "wdio-intercept-service": "4.0.0"
    }
  }  