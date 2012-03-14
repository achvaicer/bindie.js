bindie.js
=========

bindie.js is a small project to bind array methods that doesn't work at Internet Explorer and a few more to help you on others browsers.

METHODS THAT DOES'T EXIST ONLY AT IE
------------------------------------

 * indexOf (returns the first index of a searched item, or -1 if none is found)
 * lastIndexOf (returns the last index of a searched item, or -1 if none is found)
 * forEach (receives a function that is executed for each item)
 * map (returns a new array with the result type of the sent function)
 * filter (returns a new array which the provided filtering function returns true)
 * every (returns true if all items in the array satisfies the provided function)
 * some (returs true if at least one item in the array statisfies the provided function)


METHODS THAT DOES'T EXIST ON ANY BROWSER
----------------------------------------

 * isempty (returns true if the array doesn't have any item)
 * intersect (receives a different array and returns the items that exists on both arrays)
 * except (receives a different array and returns the items that exists only on the first array)
 * count (returns the number of items that satisfies the provided function)
 * distinct (returns a new array without repeated items)
 * first (returns the first item that satisfies the provided function)
 * last (returns the last item that satisfies the provided function)


