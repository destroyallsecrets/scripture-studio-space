import requests
from bs4 import BeautifulSoup
import json

def scrape_bible_data():
    url = "https://www.openbible.info/topics/"
    response = requests.get(url)
    soup = BeautifulSoup(response.text, 'html.parser')
    
    # Extract data (this is an example, adjust based on actual HTML structure)
    verses = []
    for item in soup.select('.topic-item'):
        verse = item.get_text()
        verses.append(verse)
    
    return verses

if __name__ == "__main__":
    data = scrape_bible_data()
    with open('bible_data.json', 'w') as f:
        json.dump(data, f)
