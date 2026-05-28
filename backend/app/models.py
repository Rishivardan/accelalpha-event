from pydantic import BaseModel

class VisitorRequest(BaseModel):
    name: str
    email: str
    professional_focus: str