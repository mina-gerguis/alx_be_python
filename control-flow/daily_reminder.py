# task_reminder.py

# Prompt user for task details
task = input("Enter your task: ")
priority = input("Priority (high/medium/low): ").lower()
time_bound = input("Is it time-bound? (yes/no): ").lower()

# Process task based on priority
match priority:
    case "high":
        reminder = f"Reminder: '{task}' is a high priority task."
    case "medium":
        reminder = f"Note: '{task}' is a medium priority task. Try to plan it accordingly."
    case "low":
        reminder = f"Note: '{task}' is a low priority task. Consider completing it when you have free time."
    case _:
        reminder = f"'{task}' has an unknown priority level."

# Adjust message if the task is time-bound
if time_bound == "yes":
    reminder = reminder.replace(".", "") + " that requires immediate attention today!"

# Output final reminder
print(reminder)
