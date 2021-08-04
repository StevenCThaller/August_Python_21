class Character:
    def __init__(self, name, abilities, health = 100, mana = 100):
        self.name = name 
        self.health = health
        self.abilities = abilities
        self.mana = mana

    def attack(self, ability, target):
        if ability not in self.abilities:
            print("Invalid ability, please try again.")
            return self

        mana_cost = self.abilities[ability]['mana_cost']

        if mana_cost > self.mana:
            print(f"{self.name} does not have enough mana.")
            return self
        


        damage_dealt = self.abilities[ability]['damage']

        print(f"{self.name} {self.abilities[ability]['description']} {target.name}, dealing {damage_dealt} damage at the cost of {mana_cost} mana.")
        target.take_damage(damage_dealt)

        return self
    
    def take_damage(self, damage):
        if self.health <= 0:
            print(f"{self.name} is already dead, stop attacking them!")
            return self

        self.health -= damage

        if self.health <= 0:
            print(f"{self.name} dies.")
        
        return self

class Wizard(Character):
    pointy_hat = True
    robes = True

    def __init__(self, name, spell_book, magic_school, health = 75, mana = 150):
        super().__init__(name, spell_book, health, mana)
        self.magic_school = magic_school

    def attack(self, spell_name, target):
        print(f"The air starts to crackle around {self.name} as they start chanting.")

        return super().attack(spell_name, target)

class Ninja(Character):
    is_sneaky = True

    def __init__(self, name):
        abilities = {
            "Sneak": {
                "description": "sneaks up to and stabs",
                "damage": 40,
                "mana_cost": 70
            },
            "Smoke bomb": {
                "description": "throws down a smoke bomb, vanishing instantly and fleeing from",
                "damage": 0,
                "mana_cost": 25
            }
        }
        super().__init__(name, abilities, 70, 50)
    
    def meditate(self):
        print(f"{self.name} meditates, restoring 10 health.")

        self.health += 10
        
        return self

rincewind_spells = {
    "Fireball": {
        "description": "launches a fireball at",
        "damage": 25,
        "mana_cost": 30
    }
}

# rincewind = Wizard("Rincewind", rincewind_spells, "Failure", 50)
# joe = Ninja("Joe")

# rincewind.attack("Fireball", joe)
# joe.attack("Smoke bomb", rincewind)
# joe.meditate()

# print(joe.health)

user_input = input("What would you like to enter? ")

print(user_input)