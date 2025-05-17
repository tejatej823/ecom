from sqlalchemy import str, DateTime, Float, Integer, func,String 
from sqlalchemy.orm import mapped_column, Mapped
from db import Base

class User(Base):
    
    __tablename__="user"
    
    userId:Mapped[int]=mapped_column(primary_key=True)
    image:Mapped[str]=mapped_column(String(30))
    email:Mapped[str]=mapped_column()
    userName:Mapped[str]=mapped_column(String(30))
    password:Mapped[str]=mapped_column(String(30))
    firstName:Mapped[str]=mapped_column(String(30))
    lastName:Mapped[str]=mapped_column(String(30))
    address:Mapped[str]=mapped_column()
    