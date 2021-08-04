# Inheritance

Yesterday afternoon, we had fun building a wizard class. But that's pretty cut and dry, and doesn't allow for much in the way of building off it (unless you were thinking something like wizards vs sorcerers). 

## Our Wizard Class

```py
class Wizard:
    pointy_hat = True 
    robes = True 

    def __init__(self, name, magic_school, spell_book, health = 100, mana = 100):
        self.name = name
        self.magic_school = magic_school
        self.spell_book = spell_book
        self.health = health
        self.mana = mana

    def cast(self, spell_name, target):
        # potential edge case: what if that's not a spell?
        if spell_name not in self.spell_book:
            print("Invalid spell, try again!")
            return self
        # reduce wizard mana by spell's cost
        mana_reduced = self.spell_book[spell_name]["mana_cost"]

        if mana_reduced > self.mana:
            print(f"As hard as {self.name} tries, they just can't muster up enough energy and the spell fails")
            return self

        self.mana -= mana_reduced
        # reduce target's health by spell's damage
        spell_damage = self.spell_book[spell_name]["damage"]

        target.health -= spell_damage
        # print a description of what happened
        # Example: Rincewind launches a fireball at Joe, dealing 25 damage at the cost of 30 mana
        print(f"{self.name} {self.spell_book[spell_name]['description']} {target.name}, dealing {spell_damage} damage at the cost of {mana_reduced} mana.")

        # what if the target dies?
        if target.health <= 0:
            # Joe dies a miserable death from Rincewind's Fireball
            print(f"{target.name} dies a miserable death from {self.name}'s {spell_name}")
        
        return self
```

Ultimately, we want to move towards this being a class that will contain shared features between any/all child subclasses.

So things like, maybe not calling it `Wizard`, removing `pointy_hat`, `robes`, and `magic_school` would help us slim down to the basics.

Additionally, let's go ahead and re-name our `spell_book` to be a bit more character specific, and call it `abilities`.

```py
class Character:
    def __init__(self, name, abilities, health = 100, mana = 100):
        self.name = name 
        self.health = health
        self.abilities = abilities
        self.mana = mana


    # that method was a WEE bit too Wizard specific. So, let's look into making it a bit more generic to match our new Character class
```

But what if we want to bring back that attacking functionality?

```py
class Character:
    # constructor removed for brevity's sake
    def attack(self, ability, target):
        if ability not in self.abilities:
            print("Invalid ability, please try again.")
            return self

        mana_cost = self.abilities[ability]['mana_cost']

        if mana_cost > self.mana:
            print(f"{self.name} does not have enough mana.")
            return self
        


        damage_dealt = self.abilities[ability]['damage']

        target.take_damage(damage_dealt)
    
    def take_damage(self, damage):
        if self.health <= 0:
            print(f"{self.name} is already dead, stop attacking them!")
            return self

        self.health -= damage

        if self.health <= 0:
            print(f"{self.name} dies.")
        
        return self
```

Now, if I want to have a Wizard Class that has the same information, and then some more information, our first approach would be something like having the original `Wizard` class in addition to, and totally separate from, the `Character` class.

That's the least DRY thing I've ever seen. The whole reason we're here is to learn about `INHERITANCE`, so let's do it.

```py
class Wizard(Character):
    pointy_hat = True
    robes = True

    def __init__(self, name, spell_book, magic_school, health = 75, mana = 150):
        super().__init__(name, spell_book, health, mana)
        self.magic_school = magic_school
```

What about other types of characters? Maybe a `Ninja`? Or a `Samurai`?

```py
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
                "description": "throws down a smoke bomb, vanishing instantly",
                "damage": 0,
                "mana_cost": 25
            }
        }
        super().__init__(name, abilities, 70, 50)
    
    def meditate(self):
        print(f"{self.name} meditates, restoring 10 health.")

        self.health += 10
        
        return self
```