const chickenKyiv = require('./projects/ChickenKyiv/chickenKyiv.js');
const groceristar = require("./projects/GroceriStar/groceristar.js");
const search = require("./projects/Search/search.js");

describe("testing if methods inside the files are accessible from the outside", () => {
  test("[ChickenKyiv] recipe file is set", () => {
    var stream = chickenKyiv.getRecipe();
    expect(stream).not.toBe("");
  });
  //@TODO format it later
  test("[Groceristar] departments file is set", () => {
    var stream = groceristar.getDepartments();
    expect(stream).not.toBe("");
  });
  //@TODO format it later
  test('[Search Form] getAttribute("allergy")', () => {
    var stream = search.getAttribute("allergy");
    expect(stream).not.toBe("");
  });
});
