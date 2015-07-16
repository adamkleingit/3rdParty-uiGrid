import myData from './data.json'
export default class Main {
	constructor(MyGrid) {
		this.myData = myData;
		this.gridOptions = new MyGrid()
			.setData(this.myData)
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
	addWorker() {
		this.myData.unshift({
			firstName: this.firstName,
			lastName: this.lastName,
			company: this.company,
			employed: true
		});
		this.firstName = null;
		this.lastName = null;
		this.company = null;
	}
}

