const DEFAULTS = {
	enableFiltering: true
};

class MyGrid {
	constructor(opts) {
		this._setDefaults(opts);
	}

	_setDefaults(opts) {
		opts = angular.extend(DEFAULTS, opts);
		angular.extend(this, opts)
	}

	setData(data) {
		this.data = data;
		return this;
	}
}

export default function MyGridFactory() {
	return MyGrid;
}