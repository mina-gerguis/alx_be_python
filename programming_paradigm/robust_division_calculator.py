def safe_divide(numerator, denominator):
    """
    دالة تقوم بعملية القسمة بشكل آمن،
    وتعالج الأخطاء المحتملة مثل القسمة على الصفر أو القيم غير الرقمية.
    """
    try:
        # نحاول تحويل القيم إلى float
        num = float(numerator)
        den = float(denominator)

        # نحاول إجراء القسمة
        result = num / den
        return f"The result of the division is {result}"

    except ValueError:
        # لو القيم مش أرقام
        return "Error: Please enter numeric values only."

    except ZeroDivisionError:
        # لو المقام = 0
        return "Error: Cannot divide by zero."
