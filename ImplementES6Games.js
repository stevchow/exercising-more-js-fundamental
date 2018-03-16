/*

Suppose that you're working in a small town administration, and you're in charge of two town elements:
1. Parks
2. Streets

It's a very small town, so right now there are only 3 parks and 4 streets. All parks and streets have a name and a build year.

At an end-of-year meeting, your boss wants a final report with the following:
1. Tree density of each park in the town (forumla: number of trees/park area)
2. Average age of each town's park (forumla: sum of all ages/number of parks)
3. The name of the park that has more than 1000 trees
4. Total and average length of the town's streets
5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal

All the report data should be printed to the console.

HINT: Use some of the ES6 features: classes, subclasses, template strings, default parameters, maps, arrow functions, destructuring, etc.

*/

class Elements {
  constructor(name, buildYear) {
    this.name = name;
    this.buildYear = buildYear;
  }
}

class Park extends Elements {
  constructor(name, buildYear, numTrees, area) {
    super(name, buildYear);
    this.numTrees = numTrees;
    this.area = area;
  }

  treeDensity() {
    console.log(
      `${this.name} has a tree density of ${this.numTrees /
        this.area} trees per square km`
    );
  }
}

class Streets extends Elements {
  constructor(name, buildYear, length, size = 3) {
    super(name, buildYear);
    this.length = length;
    this.size = size;
  }

  classifyStreet() {
    const streetSizeMap = new Map();
    streetSizeMap.set(1, "tiny");
    streetSizeMap.set(2, "small");
    streetSizeMap.set(3, "normal");
    streetSizeMap.set(4, "big");
    streetSizeMap.set(5, "huge");
    console.log(
      `${this.name}, built in ${this.buildYear}, is a ${streetSizeMap.get(
        this.size
      )} street.`
    );
  }
}

const allParks = [
  new Park("Blue Park", 1990, 2000, 10),
  new Park("Peking Park", 1880, 900, 10),
  new Park("Phonphon Park", 1920, 600, 6)
];

const allStreets = [
  new Streets("Ocean Avenue", 1999, 10, 4),
  new Streets("Ever Green", 1989, 9, 1),
  new Streets("4th Street", 1990, 8.3),
  new Streets("Sunset Boulevard", 2003, 7.7, 5)
];

function calc(arr) {
  const sum = arr.reduce((prev, next) => prev + next);
  return [sum, sum / arr.length];
}

function parkReport(park) {
  console.log("=======parks report=======");

  const year = park.map(a => new Date().getFullYear() - a.buildYear);
  const crowdParkIndex = park.map(a => a.numTrees).findIndex(a => a > 100);
  const [sum, avg] = calc(year);
  console.log(`Our ${park.length} parks have an average age of ${avg} years`);

  allParks.map(park => park.treeDensity());

  console.log(`${park[crowdParkIndex].name} has more than 1000 trees`);
}

function streetReport(street) {
  console.log("=======streets report=======");
  const age = street.map(a => a.length);
  const [sum, avg] = calc(age);
  console.log(
    `Our ${
      street.length
    } streets have a total length of ${sum} km with an average of ${avg} km`
  );
  allStreets.forEach(street => street.classifyStreet());
}

parkReport(allParks);
streetReport(allStreets);
