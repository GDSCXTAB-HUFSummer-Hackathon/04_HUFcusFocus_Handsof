from slack_sdk import WebClient

from src.core import get_settings
from src.schema import SlackIntegrationModel


class Worker:
    """
    Slack API Worker Class
    """

    def __init__(self, token: str = get_settings().SLACK_TOKEN) -> None:
        self.client: WebClient = WebClient(token=token)

    def oauth_access(self, auth_code: str) -> dict[str, bool | str]:
        """
        Get Slack OAuth
        """
        response = self.client.oauth_v2_access(
            client_id=get_settings().SLACK_CLIENT_ID,
            client_secret=get_settings().SLACK_CLIENT_SECRET,
            code=auth_code,
        )

        result: dict[str, bool | str] = {"status": response["ok"]}
        if result["status"]:
            result["detail"] = SlackIntegrationModel(
                slack={
                    "accessToken": response["authed_user"]["access_token"],
                    "workspaceId": response["team"]["id"],
                    "workspaceName": response["team"]["name"],
                }
            )

        else:
            result["detail"] = response["error"]

        return result

    def get_channels(
        self, team_id: str
    ) -> dict[str, bool | str | list[dict[str, str]]]:
        """
        Get Slack Channels
        """
        response = self.client.conversations_list(
            types="public_channel,private_channel",
            team_id=team_id,
        )

        result: dict[str, bool | str | list[dict[str, str]]] = {
            "status": response["ok"]
        }
        if result["status"]:
            channels: list[dict[str, str]] = []
            for channel in response["channels"]:
                channels.append({"id": channel["id"], "name": channel["name"]})

            result["detail"] = channels

        else:
            result["detail"] = response["error"]

        return result

    def get_users(
        self, team_id: str
    ) -> dict[str, bool | str | list[dict[str, str]]]:
        """
        Get Users in Slack Channel
        """
        response = self.client.users_list(team_id=team_id)

        result: dict[str, bool | str | list[dict[str, str]]] = {
            "status": response["ok"]
        }
        if result["status"]:
            users: list[dict[str, str]] = []
            for user in response["members"]:
                if not user["is_bot"] and user["name"] != "slackbot":
                    users.append(
                        {
                            "id": user["id"],
                            "real_name": user["profile"]["real_name"],
                            "display_name": user["profile"]["display_name"],
                        }
                    )

            result["detail"] = users

        else:
            result["detail"] = response["error"]

        return result

    def send_message(
        self, destination: str, message: str
    ) -> dict[str, bool | str]:
        """
        Send Message to Slack
        """
        response = self.client.chat_postMessage(
            channel=destination,
            blocks=[
                {
                    "type": "context",
                    "elements": [
                        {
                            "type": "plain_text",
                            "text": "핸즈오프 앱으로 발송된 메세지입니다. :raised_hands:",
                            "emoji": True,
                        }
                    ],
                },
                {"type": "divider"},
                {
                    "type": "section",
                    "text": {"type": "plain_text", "text": message},
                },
            ],
        )

        result: dict[str, bool | str] = {"status": response["ok"]}
        if result["status"]:
            result["detail"] = message

        else:
            result["detail"] = response["error"]

        return result
