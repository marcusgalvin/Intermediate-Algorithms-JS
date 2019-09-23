//instructions: Check if a value is classified as a boolean primitive. Return true or false.
// Boolean primitives are true and false.

function booWho(bool) {
  //must use triple = here because it must be an exact match
  if (bool === true || bool === false) {
    return true;
  } else {
    return false;
  }

  return bool;
}

booWho(null);
