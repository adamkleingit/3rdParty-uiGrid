import 'angular';
import '../../node_modules/angular-ui-grid/ui-grid';

import appStyle    from 'app/app.less';
import appTemplate from 'app/app.html';
import Main 	   from './main';
import MyGrid 	   from './my_grid';
import MyGridDirective 	   from './my_grid_directive';

export default angular.module('app', ['ui.grid', 'ui.grid.pagination'])
  .controller('Main', Main)
  .factory('MyGrid', MyGrid)
  .directive('myGrid', MyGridDirective)

