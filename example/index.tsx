import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Thing, Button, Logo } from '../.';

const App = () => {
  const [theme, setTheme] = React.useState('light');
  React.useEffect(() => {
    document.documentElement.setAttribute('class', '');
    document.documentElement.classList.add(
      localStorage.getItem('theme') || 'light'
    );
    setTheme(localStorage.getItem('theme') || 'light');
  }, []);

  const switchTheme = () => {
    if (theme === 'light') {
      saveTheme('dark');
    } else {
      saveTheme('light');
    }
  };

  const saveTheme = theme => {
    setTheme(theme);
    console.log(theme);
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('class', '');
    document.documentElement.classList.add(theme);
  };
  return (
    <div>
      <button onClick={() => switchTheme()}>Toggle Mode</button>
      <Thing />
      <Logo />
      <Button isPrimary>Test</Button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
