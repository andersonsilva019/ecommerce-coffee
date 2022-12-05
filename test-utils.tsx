/* eslint-disable import/export */

import React from "react";
import { render } from "@testing-library/react";
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from "./src/styles/theme/default";

const customRender = (ui: React.ReactElement, options = {}) =>

  render(
    <ThemeProvider theme={defaultTheme}>
      {ui}
    </ThemeProvider>
    , {

      wrapper: ({ children }) => children,

      ...options,

    });

export * from "@testing-library/react";

export { default as userEvent } from "@testing-library/user-event";

// override render export

export { customRender as render };