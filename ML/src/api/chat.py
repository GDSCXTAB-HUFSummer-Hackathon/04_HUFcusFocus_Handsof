from fastapi import APIRouter, Body, Path, Request, status
from fastapi.responses import JSONResponse

from src.crud import slack_crud
from src.schema import CreateSlackChattingLogModel
from src.util import slack

router = APIRouter()


@router.post("/slack/{team_id}/{destination_id}")
async def send_to_slack(
    request: Request,
    team_id: str = Path(..., description="Slack 워크스페이스 고유 아이디"),
    destination_id: str = Path(..., description="메세지 전달 대상 아이디"),
    insert_data: CreateSlackChattingLogModel = Body(
        ..., description="Slack 메세지 전송"
    ),
):
    """
    Send Slack Message

    To-do
    1. token and user_id will be replaced by the access token from HTTP Header
    """
    try:
        if await slack_crud.create(
            request=request,
            user_id="62dbd9ba9e804cba2f19ea16",
            destination_id=destination_id,
            team_id=team_id,
            insert_data=insert_data,
        ):
            return JSONResponse(
                status_code=status.HTTP_200_OK, content={"detail": "success"}
            )

        else:
            return JSONResponse(
                status_code=status.HTTP_404_NOT_FOUND,
                content={"detail": "not found"},
            )

    except Exception as error:
        return JSONResponse(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            content={"detail": str(error)},
        )


@router.get("/slack/{team_id}/channels")
async def get_slack_channels(
    team_id: str = Path(..., description="Slack 워크스페이스 아이디")
):
    """
    Get Slack Channels
    """
    try:
        worker = slack.Worker()
        result = worker.get_channels(team_id=team_id)

        if result["status"]:
            return JSONResponse(
                status_code=status.HTTP_200_OK,
                content={"data": result["detail"]},
            )

        else:
            return JSONResponse(
                status_code=status.HTTP_400_BAD_REQUEST,
                content={"detail": result["detail"]},
            )

    except Exception as error:
        return JSONResponse(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            content={"detail": str(error)},
        )


@router.get("/slack/{team_id}/users")
async def get_slack_users(
    team_id: str = Path(..., description="Slack 워크스페이스 아이디")
):
    """
    Slack Get Users
    """
    try:
        worker = slack.Worker()
        result = worker.get_users(team_id=team_id)

        if result["status"]:
            return JSONResponse(
                status_code=status.HTTP_200_OK,
                content={"data": result["detail"]},
            )

        else:
            return JSONResponse(
                status_code=status.HTTP_400_BAD_REQUEST,
                content={"detail": result["detail"]},
            )

    except Exception as error:
        return JSONResponse(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            content={"detail": str(error)},
        )
