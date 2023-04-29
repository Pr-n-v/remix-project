from fastapi import FastAPI

from bson import ObjectId
from schematics.models import Model
from schematics.types import StringType
import database
from pydantic import BaseModel
from typing import Dict, List, Any

class Notes(Model):
    _id = ObjectId()
    name = StringType(required=True)
    author = StringType(required=True)
    language = StringType(required=True)
    genre = StringType(required=True)
    borrow = StringType(required=True)
    returner = StringType(required=True)
    status = StringType(required=True)

class User(Model):
    _id=ObjectId()
    user = StringType(required=True)
    email=StringType(required=True)
    password= StringType(required=True)




app = FastAPI()

@app.get("/getlibrary")
def get_notes():
    l=[]
    lib = database.db.library.find()
    for i in lib:
        i["_id"] = str(i["_id"])
        l.append(i)
    return l

@app.delete("/deletelib/{name}")
def delete_notes(name= str):
    database.db.library.delete_one({"name": name})
    return {"Success":"Library details removed successfully"}

@app.post('/library')
def add_lib(name: List|Dict|Any=None, author: List|Dict|Any=None,language: List|Dict|Any=None, genre:List|Dict|Any=None,borrow:List|Dict|Any=None,returned:List|Dict|Any=None, status: List|Dict|Any=None):
    database.db.library.insert_one({"name":name,"author":author,"language":language,"genre":genre,"borrow":borrow,"returned":returned,"status":status})
    return {"Success":"Library details added successfully"}