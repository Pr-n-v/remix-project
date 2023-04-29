from bson import ObjectId
from flask import Flask,request,jsonify
import pymongo
import datetime
import json


from pymongo import MongoClient

lib_app = Flask(__name__)
lib_app.config['MONGO_URI'] = 'mongodb://localhost:27017/library'

mongo_client = MongoClient(lib_app.config['MONGO_URI'])

db = mongo_client['library']

@lib_app.route('/books-search', methods=['GET'])
def search_book():
    name = request.args.get('name')
    book = db.status.find_one({'name':name})
    return jsonify(name)

@lib_app.route('/books-borrow', methods=['POST'])
def borrow_book():
    data = request.json
    book_id = data['book_id']
    id = data['student_id']
    borrow_date=str(datetime.date.today())
    db.status.update_one({'book_id': book_id}, {'$set': {'status': 'borrowed','borrow_date': borrow_date}})
    return jsonify({'message': 'Book borrowed successfully'})

if __name__=='__main__':
    lib_app.run()