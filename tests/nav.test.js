const assert = require('assert');

// Mock document and elements
const elements = {
  mySidenav: { style: {} },
  main: { style: {} },
  overlay: { style: {} },
};

global.document = {
  getElementById: (id) => elements[id],
};

const { openNav, closeNav } = require('../assets/js/script.js');

// Test openNav behavior
openNav();
assert.strictEqual(elements.mySidenav.style.width, '250px');
assert.strictEqual(elements.main.style.marginLeft, '20px');
assert.strictEqual(elements.overlay.style.width, '100%');
assert.strictEqual(elements.overlay.style.height, '100%');
assert.strictEqual(
  elements.overlay.style.backgroundColor,
  'rgba(0,0,0,0.4)'
);

// Test closeNav resets styles
closeNav();
assert.strictEqual(elements.mySidenav.style.width, '0');
assert.strictEqual(elements.main.style.marginLeft, '0');
assert.strictEqual(elements.overlay.style.width, '0%');
assert.strictEqual(elements.overlay.style.height, '0%');

console.log('All nav tests passed.');

