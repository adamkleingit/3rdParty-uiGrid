const cellTemplates = {
	checkbox: `
		<div class="ui-grid-cell-contents">
			<input type="checkbox" ng-model="MODEL_COL_FIELD"></input>
		</div>`,
	delete: `
		<div class="ui-grid-cell-contents">
			<a href="" ng-click="grid.appScope.MyGrid.removeGridRow(row)">X</a>
		</div>`
}
export default cellTemplates;