from fastapi import APIRouter, HTTPException
from app.models import VisitorRequest
from app.matcher import find_best_session
from app.llm import generate_invitation_email
from app.mcp_logger import send_draft_via_mcp

router = APIRouter()

@router.post("/match-and-invite")
async def match_and_invite(visitor: VisitorRequest):
    try:
        # Step 1: Find the best matching session
        best_session = find_best_session(visitor.professional_focus)

        # Step 2: Generate personalized email using Gemini
        email_body = generate_invitation_email(
            name=visitor.name,
            professional_focus=visitor.professional_focus,
            session=best_session
        )

        # Step 3: Trigger MCP simulation automatically
        send_draft_via_mcp(
            email_address=visitor.email,
            email_body=email_body
        )

        # Step 4: Return response to frontend
        return {
            "success": True,
            "matched_session": best_session,
            "email_body": email_body
        }

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))