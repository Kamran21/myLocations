import orderBy from "lodash/orderBy";

export const isEquivalent = (a, b) => {
  // Create arrays of property names
  var aProps = Object.getOwnPropertyNames(a);
  var bProps = Object.getOwnPropertyNames(b);

  // If number of properties is different,
  // objects are not equivalent
  if (aProps.length !== bProps.length) {
    return false;
  }

  for (var i = 0; i < aProps.length; i++) {
    var propName = aProps[i];

    // If values of same property are not equal,
    // objects are not equivalent
    if (a[propName] !== b[propName]) {
      return false;
    }
  }

  // If we made it this far, objects
  // are considered equivalent
  return true;
};

var toString = Object.prototype.toString;
var isFunction = function(o) {
  return toString.call(o) === "[object Function]";
};

function groupByFunc(list, prop) {
  return list.reduce(function(grouped, item) {
    var key = isFunction(prop) ? prop.apply(this, [item]) : item[prop];
    grouped[key] = grouped[key] || [];
    grouped[key].push(item);
    return grouped;
  }, {});
}

export const getElementByID = (items, id) => {
  let res = items.filter(l => l.id === id);
  return res.length ? res[0] : null; //since filter returns an array we need to check for res.length
};

export const sortFunc = (items, prop, dir) => orderBy(items, [prop], [dir]);

export const filterDeep1 = (items, prop1, prop2, val) =>
  items.filter(l => l[prop1][prop2] === val);

export const filterFunc = (items, prop1, prop2, val) =>
  val === "" || val === "select"
    ? items
    : filterDeep1(items, prop1, prop2, val);

export const filter = (items, prop, val) => items.filter(l => l[prop] === val);

var sort = function(prop, arr) {
  prop = prop.split(".");
  var len = prop.length;

  arr.sort(function(a, b) {
    var i = 0;
    while (i < len) {
      a = a[prop[i]];
      b = b[prop[i]];
      i++;
    }
    if (a < b) {
      return -1;
    } else if (a > b) {
      return 1;
    } else {
      return 0;
    }
  });
  return arr;
};

export const sortAndGroupByFunc = (items, groupBy, sortBy, dir) => {
  // items=groupByFunc(items, groupBy);
  // let temp=[]
  // for(const element in items){
  //     temp=[...temp,...orderBy(items[element], [sortBy],[dir])];
  // }
  // return temp;

  items = groupByFunc(items, sortBy);
  let temp = [];
  for (const element in items) {
    // temp=[...temp,...orderBy(items[element], groupBy)];
    temp = [...temp, ...sort(groupBy, items[element])];
  }
  return temp;
};
