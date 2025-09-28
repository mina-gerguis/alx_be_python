# temperature_converter.py

# ===============================
# Global Conversion Factors
# ===============================
FAHRENHEIT_TO_CELSIUS_FACTOR = 5 / 9
CELSIUS_TO_FAHRENHEIT_FACTOR = 9 / 5


# ===============================
# Conversion Functions
# ===============================
def convert_to_celsius(fahrenheit: float) -> float:
    """تحويل درجة الحرارة من فهرنهايت إلى مئوية"""
    return (fahrenheit - 32) * FAHRENHEIT_TO_CELSIUS_FACTOR


def convert_to_fahrenheit(celsius: float) -> float:
    """تحويل درجة الحرارة من مئوية إلى فهرنهايت"""
    return (celsius * CELSIUS_TO_FAHRENHEIT_FACTOR) + 32


# ===============================
# User Interaction
# ===============================
try:
    # طلب إدخال درجة الحرارة
    temp_input = input("Enter the temperature to convert: ")
    if not temp_input.replace(".", "", 1).isdigit():
        raise ValueError("Invalid temperature. Please enter a numeric value.")

    temperature = float(temp_input)

    # تحديد الوحدة
    unit = input("Is this temperature in Celsius or Fahrenheit? (C/F): ").strip().upper()

    if unit == "F":
        result = convert_to_celsius(temperature)
        print(f"{temperature}°F is {result}°C")
    elif unit == "C":
        result = convert_to_fahrenheit(temperature)
        print(f"{temperature}°C is {result}°F")
    else:
        raise ValueError("Invalid unit. Please enter 'C' for Celsius or 'F' for Fahrenheit.")

except ValueError as e:
    print(e)
