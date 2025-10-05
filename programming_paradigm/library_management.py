class Book:
    """A class representing a single book in the library."""

    def __init__(self, title, author):
        """Initialize a book with title and author. By default, the book is available."""
        self.title = title
        self.author = author
        self._is_checked_out = False  # خاصّة لتتبع حالة الكتاب (متاح أو غير متاح)

    def check_out(self):
        """Mark the book as checked out (unavailable)."""
        if not self._is_checked_out:
            self._is_checked_out = True
            return True
        return False  # لو كان الكتاب مستعار بالفعل

    def return_book(self):
        """Mark the book as returned (available)."""
        if self._is_checked_out:
            self._is_checked_out = False
            return True
        return False  # لو كان الكتاب متاح بالفعل

    def is_available(self):
        """Return True if the book is available."""
        return not self._is_checked_out


class Library:
    """A class to manage a collection of books."""

    def __init__(self):
        """Initialize the library with an empty book list."""
        self._books = []

    def add_book(self, book):
        """Add a new book to the library."""
        self._books.append(book)

    def check_out_book(self, title):
        """Check out a book by title if available."""
        for book in self._books:
            if book.title == title:
                if book.is_available():
                    book.check_out()
                    print(f"'{title}' has been checked out.")
                    return
                else:
                    print(f"'{title}' is already checked out.")
                    return
        print(f"Book '{title}' not found in the library.")

    def return_book(self, title):
        """Return a book by title."""
        for book in self._books:
            if book.title == title:
                if not book.is_available():
                    book.return_book()
                    print(f"'{title}' has been returned.")
                    return
                else:
                    print(f"'{title}' was not checked out.")
                    return
        print(f"Book '{title}' not found in the library.")

    def list_available_books(self):
        """List all books that are currently available."""
        available_books = [book for book in self._books if book.is_available()]
        if not available_books:
            print("No books are currently available.")
        else:
            for book in available_books:
                print(f"{book.title} by {book.author}")
