import 'angular';
import '../../node_modules/angular-ui-grid/ui-grid';

import appStyle    from 'app/app.less';
import appTemplate from 'app/app.html';
import Main 	   from './main';
import MyGrid 	   from './my_grid';

export default angular.module('app', ['ui.grid'])
  .controller('Main', Main)
  .factory('MyGrid', MyGrid)

