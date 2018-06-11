//evaluated in strict mode-->code is more robust, readable, and accurate
'use strict';

//block-scoped 'let' declaration

var sentences = [{ subject: 'JavaScript', verb: 'is', object: 'great' }, { subject: 'Bats', verb: 'are', object: 'adorable' }];
//object destructuring
function say(_ref) {
  var subject = _ref.subject,
      verb = _ref.verb,
      object = _ref.object;

  //template strings
  console.log(subject + ' ' + verb + ' ' + object);
}
//for...of
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = sentences[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var s = _step.value;

    say(s);
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator.return) {
      _iterator.return();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}