var legoBuilderScriptExists = false;
var legoBuilder = angular.module('legoBuilder');

if (typeof legoBuilder === 'object') {
  window.dispatchEvent(new CustomEvent('legoBuilder-module-exists', {'detail': 'passed'}));
}

if ('ng-app' in document.body.attributes) {
  window.dispatchEvent(new CustomEvent('ngApp-used', {'detail': 'passed'}));
}

if (document.body.getAttribute('ng-app') === 'legoBuilder') {
  window.dispatchEvent(new CustomEvent('bootstrapped-legoBuilder', {'detail': 'passed'}));
}
