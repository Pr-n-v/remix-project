from bson import ObjectId
from flask import Flask,request,jsonify
import pymongo
import datetime
import json
import database


from pymongo import MongoClient

lib_app = Flask(__name__)
lib_app.config['MONGO_URI'] = 'mongodb://localhost:27017/library'

mongo_client = MongoClient(lib_app.config['MONGO_URI'])

db = mongo_client['library']
#print(db)


class Book:
    def _init_(self,name,author,language,genre,borrow,returner,status,student_id,book_id,loan_date):
        self.name=name
        self.author=author
        self.language=language
        self.genre=genre
        self.borrow=borrow
        self.returner=returner
        self.status=status
        self.student_id=student_id
        self.book_id=book_id
        self.returner=None

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
    if book.get('returner'):
        return jsonify({'message':'Book already returned'}),400
    return_date=datetime.date.today()
    db.database.library.update_one({"book_id":book}, {'$set': {'status': 'available'}})
    return jsonify({'message':"Book was returned successfully"})

if __name__=='main_':
    lib_app.run()