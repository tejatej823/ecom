from pydantic import BaseModel
from datetime import datetime
from typing import Optional


class BookBase(BaseModel):
    bookName: str
    author: str
    price: float
    rating: float
    description: str
    totalBooks: int
    genre: str


class bookCreate(BookBase):
    pass


class bookUpdate(BookBase):
    bookName: str | None = None
    author: str | None = None
    price: float | None = None
    rating: float | None = None
    description: str | None = None
    totalBooks: int | None = None
    genre: str | None = None
    imageURL: str | None = None
    
class bookDelete(BookBase):
    id:int

class bookResponse(BookBase):
    id: int
    imageURL: str | None=None
    createdAt: datetime 
    updatedAt: datetime | None=None

    class Config:
        orm_mode = True
