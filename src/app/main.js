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
					cellTemplate: `
						<div class="ui-grid-cell-contents">
							<input type="checkbox" ng-model="MODEL_COL_FIELD"></input>
						</div>`
				}
			]);
	}
}

