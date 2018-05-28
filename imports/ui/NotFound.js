import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <div className="boxed-view">
      <div className="boxed-view__box">
        <h1>Page Not Found</h1>
        <p>Hmm, we couldn't find that page.</p>
        <Link to="/" className="button button--link">HOME</Link>
      </div>
    </div>
  );
}
