# daily_reminder.py

# Loop once to demonstrate control flow (no need for storing multiple tasks)
while True:
    # Prompt user for task details
    task = input("Enter your task: ")
    priority = input("Priority (high/medium/low): ").lower()
    time_bound = input("Is it time-bound? (yes/no): ").lower()

    # Process task based on priority using match case
    match priority:
        case "high":
            reminder = f"Reminder: '{task}' is a high priority task."
        case "medium":
            reminder = f"Note: '{task}' is a medium priority task. Try to plan it accordingly."
        case "low":
            reminder = f"Note: '{task}' is a low priority task. Consider completing it when you have free time."
        case _:
            reminder = f"'{task}' has an unknown priority level."

    # Modify message if the task is time-bound
    if time_bound == "yes":
        reminder = reminder.replace(".", "") + " that requires immediate attention today!"

    # Print final reminder
    print("\n" + reminder)

    # End the loop after one task (to keep it single-task as per instructions)
    break
