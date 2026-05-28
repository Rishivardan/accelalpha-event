from datetime import datetime, timezone

def send_draft_via_mcp(email_address: str, email_body: str) -> None:
    timestamp = datetime.now(timezone.utc).strftime("%Y-%m-%d %H:%M:%S UTC")
    
    print("\n" + "="*60)
    print("📨  MCP TRIGGER FIRED")
    print("="*60)
    print(f"📧  To:        {email_address}")
    print(f"🕐  Timestamp: {timestamp}")
    print(f"📝  Email Body:\n")
    print(email_body)
    print("="*60 + "\n")