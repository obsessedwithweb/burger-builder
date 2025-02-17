import React from "react";
import cssClass from "./Burger.module.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const burger = (props) => {
  const ingredientList = Object.keys(props.ingredient);
  let ingredientComponent = ingredientList
    .map((ingName) => {
      return [...Array(props.ingredient[ingName])].map((_, i) => {
        return (
          <BurgerIngredient
            key={ingName + i}
            type={ingName}
          />
        );
      });
    })
    .reduce((prev, curr) => {
      return prev.concat(curr);
    }, []);

  {
    /**
    The reduce here is combining multiple arrays into a single array. Let's break it down:

The first parameter prev is like a container where we collect things (starts as an empty array [])
The second parameter curr is the current array we're looking at
[] at the end means we start with an empty array
 // Let's say after mapping we have arrays like this:
[
  [<Salad1/>, <Salad2/>],
  [<Cheese1/>],
  [<Meat1/>, <Meat2/>, <Meat3/>]
]

// reduce combines them into a single array:
[<Salad1/>, <Salad2/>, <Cheese1/>, <Meat1/>, <Meat2/>, <Meat3/>]
//~ ### Plan
1. Explain what concat does in array methods
2. Show simple example of concat usage
3. Explain how it works in the Burger component context

### Explanation



concat()

 is an array method that:
- Combines two or more arrays
- Returns a new array without modifying original arrays
- Can also add single elements to array

### Examples

```javascript
// Basic concat example
const array1 = ['a', 'b'];
const array2 = ['c', 'd'];
const combined = array1.concat(array2);
// Result: ['a', 'b', 'c', 'd']

// In Burger.jsx context:
let prev = [<Salad1/>, <Salad2/>];
let curr = [<Cheese1/>];
let result = prev.concat(curr);
// Result: [<Salad1/>, <Salad2/>, <Cheese1/>]
```

### In Your Code
```jsx


.reduce((prev, curr) => {
  return prev.concat(curr);  // Takes current array of ingredients and adds it to previous result
}, [])
```
This combines all ingredient arrays into one flat array of JSX elements.
    */
  }
  // console.log(ingredientComponent);

  if (ingredientComponent.length == 0) {
    ingredientComponent = <p>Please Add some ingredients here!</p>;
  }

  return (
    <div className={cssClass.Burger}>
      <BurgerIngredient type="bread-top" />
      {ingredientComponent}
      <BurgerIngredient type="bread-bottom" />
      {/* <BurgerIngredient type="bread-top" />
      <BurgerIngredient type="salad" />
      <BurgerIngredient type="meat" />
      <BurgerIngredient type="meat" />
      <BurgerIngredient type="cheese" />
      <BurgerIngredient type="bread-bottom" /> */}
    </div>
  );
};

export default burger;
