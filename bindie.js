// These are basic methods that already exist on Firefox, Chrome and Safari.
// THESE IS ONLY FOR IE
if (!Array.prototype.indexOf)
	Array.prototype.indexOf = function(item, startIndex) {
		var len = this.length;
		if (startIndex == null)
			startIndex = 0;
		else if (startIndex < 0) {
			startIndex += len;
			if (startIndex < 0)
				startIndex = 0;
		}
		for (var i = startIndex; i < len; i++) {
			var val = this[i] || this.charAt && this.charAt(i);
			if (val == item)
				return i;
		}
		return -1;
	};

if (!Array.prototype.lastIndexOf)
	Array.prototype.lastIndexOf = function(item, startIndex) {
		var len = this.length;
		if (startIndex == null || startIndex >= len)
			startIndex = len - 1;
		else if (startIndex < 0)
			startIndex += len;
		for (var i = startIndex; i >= 0; i--) {
			var val = this[i] || this.charAt && this.charAt(i);
			if (val == item)
				return i;
		}
		return -1;
	};

if (!Array.prototype.forEach)
	Array.prototype.forEach = function(func, thisVal) {
		var len = this.length;
		for (var i = 0; i < len; i++)
			func.call(thisVal, this[i] || this.charAt && this.charAt(i), i, this);
	};

if (!Array.prototype.map)
	Array.prototype.map = function(func, thisVal) {
		var len = this.length;
		var ret = new Array(len);
		for (var i = 0; i < len; i++)
			ret[i] = func.call(thisVal, this[i] || this.charAt && this.charAt(i), i, this);
		return ret;
	};

if (!Array.prototype.filter)
	Array.prototype.filter = function(func, thisVal) {
		var len = this.length;
		var ret = new Array();
		for (var i = 0; i < len; i++) {
			var val = this[i] || this.charAt && this.charAt(i);
			if(func.call(thisVal, val, i, this))
				ret[ret.length] = val;
		}
		return ret;
	};

if (!Array.prototype.every)
	Array.prototype.every = function(func, thisVal) {
		var len = this.length;
		for (var i = 0; i < len; i++)
			if (!func.call(thisVal, this[i] || this.charAt && this.charAt(i), i, this))
				return false;
		return true;
	};

if (!Array.prototype.some)
	Array.prototype.some = function(func, thisVal) {
		var len = this.length;
		for (var i = 0; i < len; i++)
			if (func.call(thisVal, this[i] || this.charAt && this.charAt(i), i, this))
				return true;
		return false;
	};


// These are extending methods!
// Does not exist on any browser!
if (!Array.prototype.isempty)
	Array.prototype.isempty = function() {
		return this.length == 0;
	};

if (!Array.prototype.intersect)
	Array.prototype.intersect = function(A) {
		return this.filter(function( x ) { return A.some(function( y ) { return x == y }) });	
	};

if (!Array.prototype.except)
	Array.prototype.except = function(A) {
		return this.filter(function( x ) { return !A.some(function( y ) { return x == y }) });	
	};

if (!Array.prototype.count)
	Array.prototype.count = function(func, thisVal) {
		return this.filter(func, thisVal).length;
	};

if (!Array.prototype.distinct)
	Array.prototype.distinct = function() {
		var ret = [];
		var len = this.length;
		var self = this;
		for(var i = 0; i < len; i++)
			if (!ret.some(function(e) { return e === self[i] }))
				ret.push(self[i]);

		return ret;
	};

if (!Array.prototype.first)
	Array.prototype.first = function(func, thisVal) {
		if (!func)
			return this.isempty() ? null : this[0];
		var ret = this.filter(func, thisVal);
		return ret.isempty() ? null : ret[0];
	};

if (!Array.prototype.last)
	Array.prototype.last = function(func, thisVal) {
		if (!func)
			return this.isempty() ? null : this[this.length-1];
		var ret = this.filter(func, thisVal);
		return ret.isempty() ? null : ret[ret.length-1];
	};
