from sqlalchemy import String, DateTime, Float, Integer, func
from sqlalchemy.orm import mapped_column, Mapped
from db import Base


class Book(Base):
    __tablename__ = "books"

    id: Mapped[int] = mapped_column(primary_key=True, index=True)
    bookName: Mapped[str] = mapped_column(String(30))
    author: Mapped[str] = mapped_column(String(30))
    price: Mapped[float] = mapped_column()
    rating: Mapped[float] = mapped_column()
    description: Mapped[str] = mapped_column()
    totalBooks: Mapped[int] = mapped_column()
    genre: Mapped[str] = mapped_column()
    imageURL: Mapped[str] = mapped_column()
    createdAt: Mapped[DateTime] = mapped_column(
        DateTime(timezone=True), server_default=func.now()
    )
    updatedAt: Mapped[DateTime] = mapped_column(
        DateTime(timezone=True), onupdate=func.now(), nullable=True
    )
