import re
import os

def load_agenda(filepath: str = None) -> list[dict]:
    if filepath is None:
        filepath = os.path.join(os.path.dirname(__file__), '..', 'agenda.txt')
    
    else:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()

        # Split into individual sessions
        sessions_raw = re.split(r'\[SESSION_\d+\]', content)
        sessions_raw = [s.strip() for s in sessions_raw if s.strip()]

        sessions = []

        for block in sessions_raw:
            session = {}

            # Extract each field
            time = re.search(r'Time:\s*(.+)', block)
            title = re.search(r'Title:\s*(.+)', block)
            speaker = re.search(r'Speaker:\s*(.+)', block)
            keywords = re.search(r'Focus Keywords:\s*(.+)', block)
            description = re.search(r'Description:\s*(.+)', block)

            session['time'] = time.group(1).strip() if time else ''
            session['title'] = title.group(1).strip() if title else ''
            session['speaker'] = speaker.group(1).strip() if speaker else ''
            session['keywords'] = keywords.group(1).strip() if keywords else ''
            session['description'] = description.group(1).strip() if description else ''

            sessions.append(session)

        return sessions