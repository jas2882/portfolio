import React, { Component } from 'react';
import { ThemeContext } from '../API/context';

class ThemeToggle extends Component {

  static contextType = ThemeContext;

  render() {
    const { toggleTheme } = this.context;
    return(
      <ThemeContext.Consumer>{(context) => {
        const { isLightTheme, light, dark } = context;
        const theme = isLightTheme ? light : dark;
        return (
          <button
            style={{
              background: "none",
              border: 'none'
            }}
            onClick={toggleTheme}
          >TOGGLE
            <i
              style={{
                border: theme.border,
                color: theme.primaryBg,
                background: theme.primaryContrast,
              }}
              className="icon-btn icon fa fa-adjust"
            />
          </button>
        );}}
      </ThemeContext.Consumer>
    )
  }
}

export default ThemeToggle;