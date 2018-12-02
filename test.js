const test = require('ava')
const hasJsSelector = require('.')

test('it exposes a function', t => {
	t.is('function', typeof hasJsSelector)
})

test('it accepts a simple js selector', t => {
	t.true(hasJsSelector('.js-toggle'))
	t.true(hasJsSelector('.JSTOGGLE'))
})

test('it accepts an id-with-js selector', t => {
	t.true(hasJsSelector('#jsSelector'))
})

test('it accepts a combined selector', t => {
	t.true(hasJsSelector('.selector.js-toggle'))
})

test('it accepts a nested js selector', t => {
	t.true(hasJsSelector('.parent .js-toggle .child'))
})

test('it accepts attribute js selectors', t => {
	t.true(hasJsSelector('[class*="js-selector"]'))
	t.true(hasJsSelector('[id="js-selector"]'))
})

test('it rejects a non-js selector', t => {
	t.false(hasJsSelector('.test'))

	// This one is debatable, feel free to open an issue
	t.false(hasJsSelector('.no-js'))
})
