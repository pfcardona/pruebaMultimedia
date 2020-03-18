import React from 'react';
import { Link } from 'react-router';

export default () => {
  return (
    <div className="boxed-view">
      <div className="boxed-view__box">
        <h1>404 - Página no encontrada</h1>
        <p>No esta disponible la página</p>
        <Link to="/" className="button button--link">Home</Link>
      </div>
    </div>
  );
};
