# daily_reminder.py

# طلب المهمة
task = input("Enter your task: ")
priority = input("Priority (high/medium/low): ").lower()
time_bound = input("Is it time-bound? (yes/no): ").lower()

# التعامل مع الأولوية باستخدام match case
match priority:
    case "high":
        reminder = f"'{task}' is a high priority task."
    case "medium":
        reminder = f"'{task}' is a medium priority task."
    case "low":
        reminder = f"'{task}' is a low priority task."
    case _:
        reminder = f"'{task}' has an undefined priority."

# تعديل التذكير لو المهمة مرتبطة بالوقت
if time_bound == "yes":
    reminder += " This requires immediate attention today!"
else:
    reminder += " Consider completing it when you have free time."

# عرض التذكير المخصص
print("\nReminder:", reminder)
