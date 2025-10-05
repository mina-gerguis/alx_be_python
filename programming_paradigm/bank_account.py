class BankAccount:
    def __init__(self, initial_balance=0):
        """تهيئة حساب جديد برصيد مبدئي (افتراضي = 0)"""
        self.__account_balance = initial_balance  # خاص (encapsulation)

    def deposit(self, amount):
        """إيداع مبلغ في الحساب"""
        if amount > 0:
            self.__account_balance += amount
        else:
            print("Amount must be positive!")

    def withdraw(self, amount):
        """سحب مبلغ من الحساب إذا كان الرصيد كافي"""
        if amount <= 0:
            print("Amount must be positive!")
            return False
        if amount <= self.__account_balance:
            self.__account_balance -= amount
            return True
        else:
            return False

    def display_balance(self):
        """عرض الرصيد الحالي"""
        print(f"Current Balance: ${self.__account_balance}")
