from fastapi import FastAPI
from db import engine, Base
from routes import book
from fastapi.middleware.cors import CORSMiddleware

# Initialize FastAPI app 

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],  # Allows all HTTP methods
    allow_headers=["*"],  # Allows all headers
)

# Create database tables if they do not exist
Base.metadata.create_all(bind=engine)


# Include the router for book routes
app.include_router(book.router)
