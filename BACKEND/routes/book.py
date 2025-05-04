from fastapi import APIRouter, HTTPException, Form, File, UploadFile, Depends, status
from sqlalchemy.orm import Session
from typing import List,Optional
from models.book import Book
from schemas.book import  bookUpdate, bookResponse
from db import get_db
import cloudinary
import cloudinary.uploader
from cloudinary.exceptions import Error as CloudinaryError

# Setup Cloudinary configuration
cloudinary.config(
    cloud_name="dshh6oxak",
    api_key="327322986496458",
    api_secret="WJNDfOpzVaU-3t2a-QJ95Jzp_-c",
    secure=True,
)


router = APIRouter(prefix="/books", tags=["Books"])


# Endpoint to create a new book
@router.post("/", response_model=bookResponse, status_code=status.HTTP_201_CREATED)
def create_book(
    bookName: str = Form(...),
    author: str = Form(...),
    price: float = Form(...),
    rating: float = Form(...),
    description: str = Form(...),
    totalBooks: int = Form(...),
    genre: str = Form(...),
    file: UploadFile = File(...),
    db: Session = Depends(get_db),
):
    try:
        # upload to Cloudinary
        upload_result = cloudinary.uploader.upload(file.file, folder="uploads")
        image_url = upload_result.get("secure_url")

        # Create new book instance
        new_book = Book(
            bookName=bookName,
            author=author,
            price=price,
            rating=rating,
            description=description,
            totalBooks=totalBooks,
            genre=genre,
            imageURL=image_url,
        )
        db.add(new_book)
        db.commit()
        db.refresh(new_book)

        return new_book
    except Exception as e:

        raise HTTPException(status_code=500, detail=f"error: {str(e)}")

# End point to retrive all the books
@router.get("/",response_model=List[bookResponse],status_code=status.HTTP_200_OK)
def getBooks(db:Session=Depends(get_db)):
    try:
        books=db.query(Book).all()
        
        return books
        
    except Exception as e:
        raise HTTPException(status_code=500,detail=f"error: {str(e)}")

# Endpoint to delete rows
@router.delete("/{id}",response_model=bookResponse,status_code=status.HTTP_200_OK)
def deleteBooks(id:int,db:Session=Depends(get_db)):
    try:
        book=db.query(Book).filter(Book.id==id).first()
        if book is None:
            raise HTTPException(status_code=404, detail="Book not found")
        db.delete(book)
        db.commit()
        return book
    except Exception as e:
        raise HTTPException(status_code=500,detail=f"error:{str(e)}")

# Endpoint to update the values in the row
@router.put("/{id}",response_model=bookResponse,status_code=status.HTTP_200_OK)
def updateBook(id:int,
                     bookName:Optional[str]=Form(None),
                     author:Optional[str]=Form(None),
                     price:Optional[float]=Form(None),
                     rating:Optional[float]=Form(None),
                     description:Optional[str]=Form(None),
                     totalBooks:Optional[int]=Form(None),
                     genre:Optional[str]=Form(None),
                     imageURL:Optional[UploadFile]=File(None)
                     ,db:Session=Depends(get_db)):
    try:
        book=db.query(Book).filter(Book.id==id).first()
        if book is None:
            raise HTTPException(status_code=404,detail="Book not found")
        if bookName is not None:
            book.bookName = bookName
        if author is not None:
            book.author = author
        if price is not None:
            book.price = price
        if rating is not None:
            book.rating = rating
        if description is not None:
            book.description = description
        if totalBooks is not None:
            book.totalBooks = totalBooks
        if genre is not None:
            book.genre = genre
        if imageURL is not None:
            upload_result = cloudinary.uploader.upload(imageURL.file, folder="uploads")
            image_url = upload_result.get("secure_url")
            book.imageURL=image_url

        db.commit()
        db.refresh(book)
        return book
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"error: {str(e)}")

@router.get("/{id}",status_code=status.HTTP_200_OK,response_model=bookResponse)
def getBook(id:int,db:Session=Depends(get_db)):
    try:
        book=db.query(Book).filter(Book.id==id).first()
        if book is None:
            raise HTTPException(status_code=404, detail="Book not found")
        return book
    except Exception as e:
        raise HTTPException(status_code=500,detail=f"error:{str(e)}")