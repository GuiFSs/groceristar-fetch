---
id: chickenkyiv-project
title: Methods, related to ChickenKyiv project
sidebar_label: ChickenKyiv project
---

#### Importing ChickenKyiv module
```
const { chickenKyiv } = require('@groceristar/groceristar-fetch');
// or 
import { chickenKyiv } from '@groceristar/groceristar-fetch';
```

---
#### Get an array of Ingredients3
```
var ingredients3 = chickenKyiv.getIngredients3();
```

Result
```
[
    {
      "name": "medium russet potatoes, sliced into sticks",
      "departmentId": "department_id"
    },
    {
      "name": "tablespoons vegetable oil, divided",
      "departmentId": "department_id"
    },
    {
      "name": "salt & freshly ground black pepper, to taste",
      "departmentId": "department_id"
    }
]
```


---
#### Get an array of Menu
```
var menu = chickenKyiv.getMenu();
```

Result
```
[{
    "title": "Weekly menu #9",
    "date": "new Date",
    "description": "string",
    "notes": "This is notes6"
  },
  {
    "title": "Weekly menu #6",
    "date": "new Date",
    "description": "string1",
    "notes": "This is notes5"
}]
```


---
#### Get an array of Recipe
```
var recipe = chickenKyiv.getRecipe();
```

Result
```
[{

    "title": "Crock Pot Roast12",
    "directions": [
      "Place beef roast in crock pot.",
      "Mix the dried mixes together in a bowl and sprinkle over the roast.",
      "Pour the water around the roast.",
      "Cook on low for 7-9 hours."
    ],
    "prep_time": "30min",
    "total_time": "3h",
    "recipe_yield": "8",
    "img": "http://img.sndimg.com/food/image/upload/w_266/v1/img/recipes/27/20/8/picVfzLZo.jpg",
    "url": "http://www.food.com/recipe/to-die-for-crock-pot-roast-27208"

}]
```


---
#### Get an array of nutritions1
```
var nutritions1 = chickenKyiv.getNutritions1();
```

Return
```
[
 {
   "calories"  : 450,
   "fat_calories" : 430,
   "total_fat" : 48,
   "sat_fat"
 }
 ]
```

---
#### Get an array of nutritions2
```
var nutritions2 = chickenKyiv.getNutritions2();
```

Return
```
[{
         "type": "Vitamins",
         "items": [
           "Vitamin A (retinol)",
           "Vitamin B1 (thiamin)"
           ]
}]
```

---
### Get an array of meal calendar
```
var mealCalendar = chickenKyiv.getMealCalendar();
```

Return
```
[
  {
    "id": "week1",
    "recipes": [
      {
        "tag": "steak",
        "text": "Grilled Honey & Ginger Marinated Flank Steaks with Mashed Potatoes, Tossed Salad and Rolls",
        "day": "Sunday"
      }
    ]
  }
]
```