# book_class.py

class Book:
    # Constructor (initializes the object)
    def __init__(self, title: str, author: str, year: int):
        self.title = title
        self.author = author
        self.year = year

    # Destructor (called when object is deleted)
    def __del__(self):
        print(f"Deleting {self.title}")

    # User-friendly string representation
    def __str__(self):
        return f"{self.title} by {self.author}, published in {self.year}"

    # Official representation (for developers / recreating the object)
    def __repr__(self):
        return f"Book('{self.title}', '{self.author}', {self.year})"
