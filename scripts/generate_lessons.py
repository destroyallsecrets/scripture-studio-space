import json
import random

def generate_lessons():
    with open('bible_data.json', 'r') as f:
        verses = json.load(f)
    
    lessons = []
    for i in range(8):
        verse = random.choice(verses)
        lesson = {
            "id": i,
            "title": f"Lesson {i+1}",
            "description": f"Study on {verse}",
            "scripture": verse,
            "imageSrc": f"https://example.com/image{i}.jpg",
            "href": f"/study/{i}"
        }
        lessons.append(lesson)
    
    return lessons

if __name__ == "__main__":
    lessons = generate_lessons()
    with open('lessons.json', 'w') as f:
        json.dump(lessons, f)
