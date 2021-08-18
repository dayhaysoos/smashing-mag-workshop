import React from 'react';

function Test() {
  return (
    <form action='/api/redirect-to-checkout' method='POST'>
      <input type='hidden' name='test' value='derp' />
      <button type='submit'>Submit</button>
    </form>
  );
}

export default Test;
