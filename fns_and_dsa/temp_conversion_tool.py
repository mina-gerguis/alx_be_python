# temp_conversion_tool.py

# -- global conversion factors (must exist at module level with these exact names) --
FAHRENHEIT_TO_CELSIUS_FACTOR = 5 / 9
CELSIUS_TO_FAHRENHEIT_FACTOR = 9 / 5

def convert_to_celsius(fahrenheit):
    """تحويل من Fahrenheit إلى Celsius باستخدام المتغير العالمي."""
    return (fahrenheit - 32) * FAHRENHEIT_TO_CELSIUS_FACTOR

def convert_to_fahrenheit(celsius):
    """تحويل من Celsius إلى Fahrenheit باستخدام المتغير العالمي."""
    return (celsius * CELSIUS_TO_FAHRENHEIT_FACTOR) + 32

def main():
    temp_input = input("Enter the temperature to convert: ").strip()
    try:
        temp = float(temp_input)
    except ValueError:
        # يجب رفع ValueError بنفس النص المطلوب
        raise ValueError("Invalid temperature. Please enter a numeric value.")

    unit = input("Is this temperature in Celsius or Fahrenheit? (C/F): ").strip().upper()
    if unit == "C":
        converted = convert_to_fahrenheit(temp)
        print(f"{temp}°C is {converted}°F")
    elif unit == "F":
        converted = convert_to_celsius(temp)
        print(f"{temp}°F is {converted}°C")
    else:
        print("Invalid unit. Please enter 'C' for Celsius or 'F' for Fahrenheit.")

if __name__ == "__main__":
    main()
