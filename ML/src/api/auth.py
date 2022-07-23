from fastapi import APIRouter, Body, Query, Request, status
from fastapi.responses import JSONResponse

from src.crud import user_crud
from src.schema import CreateUserModel
from src.util import slack

router = APIRouter()


@router.post("/sign-up")
async def sign_up(
    request: Request,
    insert_data: CreateUserModel = Body(..., description="회원가입을 위한 데이터"),
):
    """
    User Sign Up
    """
    try:
        if await user_crud.create(request=request, insert_data=insert_data):
            return JSONResponse(
                status_code=status.HTTP_200_OK, content={"detail": "success"}
            )

    except Exception as error:
        return JSONResponse(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            content={"detail": str(error)},
        )


@router.get("/slack")
async def slack_oauth(
    request: Request,
    code: str = Query(default=None, description="Slack에서 제공해주는 인증을 위한 임시 코드"),
) -> None:
    """
    Slack OAuth 2.0 Integration

    To-do
    1. user_id will be replaced by the access token from HTTP Header
    """
    try:
        worker = slack.Worker()
        result = worker.oauth_access(auth_code=code)

        if result["status"]:
            if await user_crud.platform_integrate(
                request=request,
                user_id="62dbd9ba9e804cba2f19ea16",
                update_data=result["detail"],
            ):
                return JSONResponse(
                    status_code=status.HTTP_200_OK,
                    content={"detail": "success"},
                )

            else:
                return JSONResponse(
                    status_code=status.HTTP_404_NOT_FOUND,
                    content={"detail": "not found"},
                )

        else:
            JSONResponse(
                status_code=status.HTTP_401_UNAUTHORIZED,
                content={"detail": result["detail"]},
            )

    except Exception as error:
        return JSONResponse(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            content={"detail": str(error)},
        )
