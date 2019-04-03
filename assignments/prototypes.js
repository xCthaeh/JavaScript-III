/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/
  
/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/

function GameObject(attr) {
  this.createdAt = attr.createdAt;
  this.dimensions = attr.dimensions;
}
GameObject.prototype.destroy = function() {
  return `${this.name} was removed from the game.`;
};


/*
  === CharacterStats ===
  * healthPoints
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/

function CharacterStats(stat) {
  GameObject.call(this, stat);

  this.healthPoints = stat.healthPoints;
  this.name = stat.name;
}
CharacterStats.prototype = Object.create(GameObject.prototype);

CharacterStats.prototype.takeDamage = function() {
  return `${this.name} took damage.`;
};

/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/
 
function Humanoid(value) {
  CharacterStats.call(this, value);

  this.team = value.team;
  this.weapons = value.weapons;
  this.language = value.language;
}
//Humanoid.prototype = Object.create(GameObject.prototype);
Humanoid.prototype = Object.create(CharacterStats.prototype);

Humanoid.prototype.greet = function() {
  return `${this.name} offers a greeting in ${this.language}.`;
};

/*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/

// Test you work by un-commenting these 3 objects and the list of console logs below:


  const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Tongue',
  });

  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Tongue',
  });

  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });

  console.log(mage.createdAt); // Today's date
  console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(swordsman.healthPoints); // 15
  console.log(mage.name); // Bruce
  console.log(swordsman.team); // The Round Table
  console.log(mage.weapons); // Staff of Shamalama
  console.log(archer.language); // Elvish
  console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  console.log(mage.takeDamage()); // Bruce took damage.
  console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.


  // Stretch task: 
  // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
  // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  // * Create two new objects, one a villain and one a hero and fight it out with methods!

  Humanoid.prototype.attack = function(enemy) {
    enemy.healthPoints--;
    if (enemy.hitPoints <= 0) {
      return enemy.destroy();
    } else {
      return `${enemy.takeDamage()} Health Points: ${enemy.healthPoints}`;
    }
  };
  
  function Villain(enemy1) {
    Humanoid.call(this, enemy1);
  }
  Villain.prototype = Object.create(Humanoid.prototype);
  
  function Hero(enemy2) {
    Humanoid.call(this, enemy2);
  }
  Hero.prototype = Object.create(Humanoid.prototype);
  
  const Hulk = new Villain({
    createdAt: new Date(),
    dimensions: {
      length: 60,
      width: 50,
      height: 50
    },
    healthPoints: 1000,
    name: "Hulk",
    team: "Avengers",
    weapons: ["Fists", "Hulk Smash"],
    language: "unknown"
  });
  
  const Thor = new Hero({
    createdAt: new Date(),
    dimensions: {
      length: 20,
      width: 30,
      height: 30
    },
    healthPoints: 1000,
    name: "Thor",
    team: "Avengers",
    weapons: ["Hammer", "Lightning"],
    language: "unknown"
  });
  
  function fight(hero, villain) {
    while (hero.healthPoints > 0 && villain.healthPoints > 0) {
      const heroAttacks = Math.random() > 0.2;
  
      if (heroAttacks) {
        console.log(hero.attack(villain));
      } else {
        console.log(villain.attack(hero));
      }
    }
  
    if (hero.healthPoints > 0) {
      return `Winner: ${hero.name}`;
    } else {
      return `Winner: ${villain.name}`;
    }
  }
  console.log(fight(Hulk, Thor));
  