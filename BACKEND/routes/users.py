from fastapi import APIRouter,Depends,HTTPException,status

router=APIRouter(prefix="users",tags=["Users"])

router.get("/")