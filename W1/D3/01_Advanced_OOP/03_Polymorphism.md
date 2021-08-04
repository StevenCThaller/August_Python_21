# Polymorphism

Polymorphism dictates that while yes, we want to inherit `attributes` and `methods` from a `parent class`, we also want to keep some uniqueness here.

So what we'll do, is we'll take the `attack` method we built into the `Character` class, and make it a little more generalized. Then, we'll add in the unique features to the `Wizard` and `Ninja` classes.

## Our Previous Attack Method
```py
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
```

And finally, give in to Polymorphism, and add the unique parts to the `Wizard` and `Ninja` classes.

#### Wizard

```py
def attack(self, spell_name, target):
    print(f"The air starts to crackle around {self.name} as they start chanting.")

    super().attack(spell_name, target)
```
