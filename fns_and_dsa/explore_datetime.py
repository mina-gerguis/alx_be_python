# explore_datetime.py

from datetime import datetime, timedelta

def display_current_datetime():
    # الحصول على الوقت والتاريخ الحالي
    current_date = datetime.now()
    # التنسيق "YYYY-MM-DD HH:MM:SS"
    formatted_date = current_date.strftime("%Y-%m-%d %H:%M:%S")
    print(f"Current date and time: {formatted_date}")
    return current_date  # نرجع التاريخ الحالي لاستخدامه في الجزء الثاني

def calculate_future_date(current_date, days_to_add):
    # حساب التاريخ بعد عدد الأيام المدخلة
    future_date = current_date + timedelta(days=days_to_add)
    formatted_future = future_date.strftime("%Y-%m-%d")
    print(f"Future date: {formatted_future}")
    return future_date

def main():
    # جزء 1: عرض الوقت والتاريخ الحالي
    current_date = display_current_datetime()

    # جزء 2: حساب التاريخ المستقبلي
    try:
        days = int(input("Enter the number of days to add to the current date: "))
        calculate_future_date(current_date, days)
    except ValueError:
        print("Invalid input. Please enter an integer number of days.")

if __name__ == "__main__":
    main()
