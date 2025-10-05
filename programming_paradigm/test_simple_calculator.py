import unittest
from simple_calculator import SimpleCalculator


class TestSimpleCalculator(unittest.TestCase):
    """Unit tests for the SimpleCalculator class."""

    def setUp(self):
        """تهيئة كائن من الآلة الحاسبة قبل كل اختبار."""
        self.calc = SimpleCalculator()

    # 🧮 اختبار الجمع
    def test_addition(self):
        """اختبار دالة الجمع."""
        self.assertEqual(self.calc.add(2, 3), 5)
        self.assertEqual(self.calc.add(-1, 1), 0)
        self.assertEqual(self.calc.add(0, 0), 0)
        self.assertEqual(self.calc.add(-5, -5), -10)

    # ➖ اختبار الطرح
    def test_subtraction(self):
        """اختبار دالة الطرح."""
        self.assertEqual(self.calc.subtract(5, 3), 2)
        self.assertEqual(self.calc.subtract(0, 5), -5)
        self.assertEqual(self.calc.subtract(-5, -5), 0)
        self.assertEqual(self.calc.subtract(10, -5), 15)

    # ✖️ اختبار الضرب
    def test_multiplication(self):
        """اختبار دالة الضرب."""
        self.assertEqual(self.calc.multiply(2, 3), 6)
        self.assertEqual(self.calc.multiply(-2, 3), -6)
        self.assertEqual(self.calc.multiply(0, 100), 0)
        self.assertEqual(self.calc.multiply(-2, -2), 4)

    # ➗ اختبار القسمة
    def test_division(self):
        """اختبار دالة القسمة."""
        self.assertEqual(self.calc.divide(10, 2), 5)
        self.assertEqual(self.calc.divide(-9, 3), -3)
        self.assertEqual(self.calc.divide(7.5, 2.5), 3.0)

        # اختبار القسمة على صفر
        self.assertIsNone(self.calc.divide(10, 0))

        # اختبار أعداد سالبة مع القسمة
        self.assertEqual(self.calc.divide(-8, -2), 4)
        self.assertEqual(self.calc.divide(-8, 2), -4)


if __name__ == "__main__":
    unittest.main()
