# typescript-amd-karma
Integration of Karma with Typescript using AMD modules

## usage under Linux
```shell
cd typescript-amd-karma/src
npm install
export CHROME_BIN=/usr/bin/chromium-browser
npm start
```

Any change in the ts folder will trigger typescript to compile and Karma to execute the tests.