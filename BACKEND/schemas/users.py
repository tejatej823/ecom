from pydantic import BaseModel,EmailStr

class Users(BaseModel):
    
    userID:int
    userName:str
    image:str | None=None
    email: EmailStr
    password: str
    firstName: str | None=None
    lastName: str | None=None
    address: str | None=None
    
    