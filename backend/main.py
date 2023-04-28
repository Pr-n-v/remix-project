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
    srn = StringType(required=True)
    attendance = StringType(required=True)

app = FastAPI()

@app.get("/getatt")
def get_notes():
    l=[]
    att = database.db.attendance.find()
    for i in att:
        i["_id"] = str(i["_id"])
        l.append(i)
    return l

@app.delete("/deleteatt/{name}")
def delete_notes(name= str):
    database.db.attendance.delete_one({"name": name})
    return {"Success":"Attendance removed successfully"}

@app.post('/att')
def add_attendance(name: List|Dict|Any=None, srn:  List|Dict|Any=None, attendance: List|Dict|Any=None):
    database.db.attendance.insert_one({"name":name,"srn":srn,"attendance":attendance})
    return {"Success":"Attendance added successfully"}