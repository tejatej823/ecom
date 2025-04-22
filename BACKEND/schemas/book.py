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
    bookName: Optional[str] = None
    author: Optional[str] = None
    price: Optional[float] = None
    rating: Optional[float] = None
    description: Optional[str] = None
    totalBooks: Optional[int] = None
    genre: Optional[str] = None
    imageURL:Optional[str]=None
    
class bookDelete(BookBase):
    id:int

class bookResponse(BookBase):
    id: int
    imageURL: Optional[str] = None
    createdAt: datetime
    updatedAt: Optional[datetime] = None

    class Config:
        orm_mode = True
