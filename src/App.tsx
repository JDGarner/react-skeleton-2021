import React from 'react';
import { hot } from 'react-hot-loader/root';

export function AppWithoutHotLoader(): JSX.Element | null {
  return (
    <div>
      <h1>Hello world!</h1>
    </div>
  );
}

export const App = hot(AppWithoutHotLoader);
