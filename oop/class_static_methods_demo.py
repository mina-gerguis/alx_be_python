# class_static_methods_demo.py

class Calculator:
    # Class attribute
    calculation_type = "Arithmetic Operations"

    # Static Method: does not need access to class or instance data
    @staticmethod
    def add(a, b):
        return a + b

    # Class Method: has access to class-level data through cls
    @classmethod
    def multiply(cls, a, b):
        print(f"Calculation type: {cls.calculation_type}")
        return a * b
