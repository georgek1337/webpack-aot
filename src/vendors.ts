//declare var require: any;
// Angular
import '@angular/platform-browser';
import '@angular/platform-browser-dynamic';
import '@angular/core';
import '@angular/common';
import '@angular/http';
import '@angular/router';
import 'bootstrap/dist/css/bootstrap.min.css';
//import 'ngx-bootstrap';
//import 'bootstrap/dist/js/bootstrap';

// RxJS
import 'rxjs';

// Other vendors for example jQuery, Lodash or Bootstrap
// You can import js, ts, css, sass, ...

import 'core-js/es6';
import 'core-js/es7/reflect';
require('zone.js/dist/zone');

if (process.env.ENV === 'production') {
  // Production
} else {
  // Development and test
  Error['stackTraceLimit'] = Infinity;
  require('zone.js/dist/long-stack-trace-zone');
}


// // Other vendors for example jQuery, Lodash or Bootstrap
// // You can import js, ts, css, sass, ...
// import 'jquery';
// import 'signalr';
// //import './node_modules/cbs-signalR/hubs.js';

// //Kendo UI
// import '@progress/kendo-angular-dialog'
// import '@progress/kendo-angular-dropdowns'
// import '@progress/kendo-angular-layout'
// import '@progress/kendo-angular-inputs'
// import '@progress/kendo-angular-buttons'
// import '@telerik/kendo-intl'
// import '@progress/kendo-angular-dateinputs'
// import '@progress/kendo-angular-intl'
// import '@progress/kendo-angular-l10n'