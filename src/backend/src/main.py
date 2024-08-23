from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

import uvicorn
import sys
import os

app = FastAPI()
port = 5555

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/api")
def home():
    return "Hello, World!"

@app.get("/api/msg")
def msg():
    return "Message: Hello, World!"

if __name__ == "__main__":
    uvicorn.run(app, host='127.0.0.1', port=port)
