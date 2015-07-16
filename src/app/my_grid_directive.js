export default function MyGridDirective() {
	return {
		restrict: 'A',
		bindToController: true,
		controller: MyGridDirectiveController,
		controllerAs: 'MyGrid',
		scope: {
			'gridOptions': '=myGrid'
		},
		templateUrl: 'app/my_grid.html'
	}
}

class MyGridDirectiveController {
	removeGridRow(row) {
		let index = this.gridOptions.data.indexOf(row.entity);
		this.gridOptions.data.splice(index, 1);
	}
}