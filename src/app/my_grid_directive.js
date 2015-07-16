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

}