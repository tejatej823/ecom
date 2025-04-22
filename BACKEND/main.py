import logging
from fastapi import FastAPI
from db import engine, Base
from routes import book

# Initialize FastAPI app
app = FastAPI()

# Create database tables if they do not exist
Base.metadata.create_all(bind=engine)

# Include the router for book routes
app.include_router(book.router)
