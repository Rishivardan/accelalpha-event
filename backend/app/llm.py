import google.generativeai as genai
import os
from dotenv import load_dotenv

load_dotenv()

api_key = os.getenv("GEMINI_API_KEY")
if not api_key:
    raise ValueError("GEMINI_API_KEY is missing. Set it in your .env file.")

genai.configure(api_key=api_key)
primary_model = os.getenv("GEMINI_MODEL", "gemini-2.5-flash")
fallback_models = [
    primary_model,
    "gemini-2.5-flash-lite",
    "gemini-2.5-flash",
    "gemini-2.5-pro",
]

def generate_invitation_email(name: str, professional_focus: str, session: dict) -> str:
    
    prompt = f"""
You are a professional B2B event coordinator writing a formal invitation email.

STRICT RULES - YOU MUST FOLLOW THESE:
- ONLY use information provided below. Do NOT invent or assume anything.
- Do NOT hallucinate fake session names, times, speakers, or topics.
- Do NOT add sessions or details that are not in the data below.
- Keep the tone professional, warm, and concise.
- Write ONLY the email body. No subject line. No extra commentary.

VISITOR INFORMATION:
- Name: {name}
- Professional Interest: {professional_focus}

MATCHED SESSION DATA (use ONLY this):
- Session Title: {session['title']}
- Time: {session['time']}
- Speaker: {session['speaker']}
- Description: {session['description']}

EVENT INFORMATION:
- Event Name: ACCELALPHA-ORACLE-2024
- Event Theme: Troubled Waters: Sailing with AI in Supply Chain

TASK:
Write a personalized B2B invitation email to {name} highlighting why the matched 
session is relevant to their professional challenges. 
Mention the session title, time, and speaker name exactly as provided above.
End with a warm closing encouraging them to attend.
Close the email exactly with:
Sincerely,
Accelalpha Events Team
"""

    last_error = None

    for model_name in fallback_models:
        try:
            model = genai.GenerativeModel(model_name)
            response = model.generate_content(prompt)
            return response.text.strip()
        except Exception as exc:
            last_error = exc
            continue

    raise RuntimeError(f"All Gemini models failed. Last error: {last_error}")