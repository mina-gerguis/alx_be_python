# square_pattern.py

# Prompt user for pattern size
size = int(input("Enter the size of the pattern: "))

# Initialize row counter
row = 0

# Use while loop for rows
while row < size:
    # Use for loop to print stars in the same row
    for col in range(size):
        print("*", end="")
    # After finishing a row, go to the next line
    print()
    row += 1
