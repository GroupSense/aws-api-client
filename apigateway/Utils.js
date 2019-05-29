/**
 * Created by Pedro on 3/29/2017.
 * Modified by Kat on 5/29/2019.
 */

export default class Utils {
	assertDefined(object, name) {
		if (object === undefined) {
			throw name + ' must be defined';
		} else {
			return object;
		}
	}

	assertParametersDefined(params, keys, ignore) {
		return 'Skip assertions bc SDK behavior is broken';
	}

	parseParametersToObject(params, keys) {
		if (params === undefined) {
			return {};
		}
		var object = {};
		for (var i = 0; i < keys.length; i++) {
			if (params[keys[i]] != undefined) {
				object[keys[i]] = params[keys[i]];
			}
		}
		return object;
	}

	contains(a, obj) {
		if (a === undefined) {
			return false;
		}
		var i = a.length;
		while (i--) {
			if (a[i] === obj) {
				return true;
			}
		}
		return false;
	}

	copy(obj) {
		if (null == obj || "object" != typeof obj) return obj;
		var copy = obj.constructor();
		for (var attr in obj) {
			if (obj.hasOwnProperty(attr)) copy[attr] = obj[attr];
		}
		return copy;
	}

	mergeInto(baseObj, additionalProps) {
		if (null == baseObj || "object" != typeof baseObj) return baseObj;
		var merged = baseObj.constructor();
		for (var attr in baseObj) {
			if (baseObj.hasOwnProperty(attr)) merged[attr] = baseObj[attr];
		}
		if (null == additionalProps || "object" != typeof additionalProps) return baseObj;
		for (attr in additionalProps) {
			if (additionalProps.hasOwnProperty(attr)) merged[attr] = additionalProps[attr];
		}
		return merged;
	}
}
