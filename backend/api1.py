from bson import ObjectId
from flask import Flask,request,jsonify
import pymongo
import datetime
import json


from pymongo import MongoClient

lib_app = Flask(_name_)
lib_app.config['MONGO_URI'] = 'mongodb://localhost:27017/library'

mongo_client = MongoClient(lib_app.config['MONGO_URI'])

db = mongo_client['library']
#print(db)


class Book:
    def _init_(self,name,author,language,genre,borrow,returner,status):
        self.name=name
        self.author=author
        self.language=language
        self.genre=genre
        self.borrow=borrow
        self.returner=returner
        self.status=status

class Loan:
    def _init_(self,student_id,book_id,loan_date):
        self.student_id=student_id
        self.book_id=book_id
        self.loan_date=loan_date
        self.return_date=None



@lib_app.route('/return-book',methods=['POST'])
def return_book():
    data=request.json
    
    s_id=data['status']
    loan_id=data['loans']
    print(loan_id)
    print(s_id)
    
    book= db.book_id.find_one( { "book_id": loan_id })
    print(book['book_id'])
    
    if not book:
        return jsonify({'message':'Book not loaned/not found'}),404
    if book.get('return_date'):
        return jsonify({'message':'Book already returned'}),400
    return_date=datetime.date.today()
    db.status.update_one({"book_id":book}, {'$set': {'status': 'available'}})
    return jsonify({'message':"Book was returned successfully"})

if _name=='main_':
    lib_app.run()