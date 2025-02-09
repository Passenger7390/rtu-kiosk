from fastapi import FastAPI
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware
import json
import os

app = FastAPI()

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods
    allow_headers=["*"],  # Allows all headers
)

@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.get("/geojson")
def get_geojson():
    geojson_path = os.path.join(os.path.dirname(__file__), "map.geojson")
    with open(geojson_path, "r") as file:
        geojson_data = json.load(file)
    return JSONResponse(content=geojson_data)