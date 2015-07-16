import myData from './data.json'
export default class Main {
	constructor(MyGrid) {
		this.gridOptions = new MyGrid()
			.setData(myData)
			.setColumns([
				{
					field: 'firstName'
				},
				{
					field: 'lastName'
				},
				{
					field: 'company'
				},
				{
					field: 'employed',
					cellTemplate: 'checkbox'
				}
			]);
	}
}

