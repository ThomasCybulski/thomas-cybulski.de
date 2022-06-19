import React, { Component } from 'react';
import { ThemeToggler } from 'gatsby-plugin-dark-mode';
import LightSwitch from '../Image/LightSwitch';
import DarkSwitch from '../Image/DarkSwitch';

let toggle = true;

class ThemeSwitch extends Component {
  constructor(props) {
    super(props);
  }

  handleClick(e, theme, toggleTheme) {
    theme === 'dark' ? toggleTheme('light') : toggleTheme('dark');
    toggle = !toggle;
  }

  render() {
    return (
      <ThemeToggler>
        {({ theme, toggleTheme }) => (
          <span className="themeToggle" onClick={(e) => this.handleClick(e, theme, toggleTheme)}>
            <LightSwitch />
            <DarkSwitch />
          </span>
        )}
      </ThemeToggler>
    );
  }
}

export default ThemeSwitch;
