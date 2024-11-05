# electron + vue3 + FastAPI

Desktop application built with electron, Vue3 + Vite, FastAPI.

I opted for a double package.json file in case we want to have a web application as well running separately. This way we can run backend and frontend separately on the server in the convenient way.


## Installation and running

To run electron you will need to install Node.js and npm (node package manager) as electron is  JavaScript.
To learn more about electron: https://www.electronjs.org/
To install Node.js you can follow this guide. The recommended way to install Node.js and npm is to use Node version manager (nvm)
https://docs.npmjs.com/downloading-and-installing-node-js-and-npm

Clone the project
```
git clone git@github.com:compomics/electron-vue-python-boilerplate.git
```


### Local application development 
**For backend:**

Create virtual environment `electron-vue-python-boilerplate` with the tools you usually use, and activate. Ex.:
```
python3 -m venv electron-vue-python-boilerplate
source electron-vue-python-boilerplate/bin/activate
```
Go to backend and intstall all project requirements
```
cd src/backend
pip install -r requirements.txt
```
Launch backend in a terminal
```
python3 main.py
```
Now API runs on localhost on port 5500 http://localhost:5500

**For frontend:**

In a different terminal run
```
cd src/frontend
```
Install all the needed modules from package.js
```
npm install
npm run dev
```
Now the frontend will run in the browser http://localhost:5173/


### Local packaged application development
**For backend:**

create virtual environment `electron-vue-python-boilerplate`
```
python3 -m venv electron-vue-python-boilerplate
source electron-vue-python-boilerplate/bin/activate
cd src/backend
pip install -r requirements.txt
```

**For frontend**
```
cd src/frontend
npm install
```
In protject root
```
npm run start
```

### To package application into one file
- mac
```
npm run build:mac
```
(Need to still test that everything works fine for 2 following builds)
- windows
```
npm run build:win
```
- linux
```
npm run build:linux
```

### Thanks
I thank the following projects for inspiration:

https://github.com/Deluze/electron-vue-template

https://github.com/iamyb/electron-fastapi-vue-element-plus

https://github.com/hafiidz/electron-vite-vue-fastapi







