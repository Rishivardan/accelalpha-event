import google.generativeai as genai
import os
from dotenv import load_dotenv

load_dotenv()

genai.configure(api_key=os.getenv("GEMINI_API_KEY"))
model = genai.GenerativeModel("gemini-1.5-flash")

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
"""

    response = model.generate_content(prompt)
    return response.text.strip()