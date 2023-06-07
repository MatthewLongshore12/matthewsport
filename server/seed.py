from datetime import datetime
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from app import app
from models import db, Request

if __name__ == '__main__':
    with app.app_context():

        print("Starting seed...")

        r1 = Request(name='Matthew Longshore', email='matthewltlreds@gmail.com', message='Making sure it works')
        r2 = Request(name='Sarra Leila', email='Sarra13@icloud.com', message='Working maybe?')

        db.session.add_all([r1,r2])
        db.session.commit()
        
        print("Seeding Done!")