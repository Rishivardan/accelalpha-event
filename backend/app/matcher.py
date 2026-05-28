from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
from app.agenda_loader import load_agenda

def find_best_session(professional_focus: str) -> dict:
    sessions = load_agenda()

    # Combine keywords + description for each session into one string
    session_texts = [
        f"{s['keywords']} {s['description']}"
        for s in sessions
    ]

    # Add user input to the list for vectorization
    all_texts = session_texts + [professional_focus]

    # Convert all texts to TF-IDF vectors
    vectorizer = TfidfVectorizer(stop_words='english')
    tfidf_matrix = vectorizer.fit_transform(all_texts)

    # Compare user input vector against all session vectors
    user_vector = tfidf_matrix[-1]
    session_vectors = tfidf_matrix[:-1]

    similarities = cosine_similarity(user_vector, session_vectors)[0]

    # Get the index of the most similar session
    best_index = similarities.argmax()

    return sessions[best_index]