from fastapi import FastAPI

from bson import ObjectId
from schematics.models import Model
from schematics.types import StringType
import database
from pydantic import BaseModel
from typing import Dict, List, Any

class User(Model):
    _id=ObjectId()
    user = StringType(required=True)
    email=StringType(required=True)

app = FastAPI()

@app.get("/getuser")
def get_user():
    l=[]
    user = database.db.user.find()
    for i in user:
        i["_id"] = str(i["_id"])
        l.append(i)
    return l

@app.post('/user')
def add_lib(name: List|Dict|Any=None, email: List|Dict|Any=None):
    database.db.library.insert_one({"name":name,"email":email})
    return {"Success":"User added successfully"}