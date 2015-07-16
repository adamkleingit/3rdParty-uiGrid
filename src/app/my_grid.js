class MyGrid {
	setData(data) {
		this.data = data;
		return this;
	}
}

export default function MyGridFactory() {
	return MyGrid;
}