### electron + vue3 + FastAPI

Desktop application built with electron, Vue3 + Vite, FastAPI.

### Installation and running

To run electron you will need to install Node.js and npm (node package manager) as electron is  JavaScript.
To learn more about electron: https://www.electronjs.org/
To install Node.js you can follow this guide. The recommended way to install Node.js and npm is to use Node version manager (nvm)
https://docs.npmjs.com/downloading-and-installing-node-js-and-npm

Clone the project
git clone git@github.com:compomics/electron-vue-python-boilerplate.git


### local application development 
for backend:
create virtual environment electron-vue-python-boilerplate
python3 -m venv electron-vue-python-boilerplate
source electron-vue-python-boilerplate/bin/activate
cd src/backend
pip install -r requirements.txt
python3 main.py
Now API runs on localhost on port 5500

for frontend:
cd src/frontend
Install all the needed modules from package.js
npm install
npm run dev
Now the frontend will run in the browser http://localhost:5173/


### local packaged application development
for backend:
create virtual environment electron-vue-python-boilerplate
python3 -m venv electron-vue-python-boilerplate
source electron-vue-python-boilerplate/bin/activate
cd src/backend
pip install -r requirements.txt

for frontend
cd src/frontend
npm install

in protject root
npm run start


### to package application into one file
mac
npm run build:mac

(Need to still test that everything works find for 2 following builds)
windows
npm run build:win

linux
npm run build:linux






