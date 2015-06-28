'use strict';

function _slicedToArray(arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }

System.config({ baseURL: './js/' });

Promise.all(['react', 'react-router', 'app/routes'].map(function (x) {
	return System['import'](x);
})).then(function (_ref) {
	var _ref2 = _slicedToArray(_ref, 3);

	var React = _ref2[0];
	var Router = _ref2[1];
	var Routes = _ref2[2];

	Router.run(Routes, function (Handler) {
		React.render(React.createElement(Handler, null), document.getElementById('mangaio'));
	});
});