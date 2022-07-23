from fastapi import APIRouter

from src.api import auth, chat

router = APIRouter()

router.include_router(router=auth.router, prefix="/auth", tags=["인증"])
router.include_router(router=chat.router, prefix="/chat", tags=["메세지"])
