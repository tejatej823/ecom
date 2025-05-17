from sqlalchemy.orm import mapped_column, Mapped
from db import Base

class Cart(Base):
    __tablename__="cart"
    
    cartID:Mapped[int]=mapped_column()