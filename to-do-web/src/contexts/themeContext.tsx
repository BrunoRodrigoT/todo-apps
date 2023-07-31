"use client";

import theme from "@/utils/theme";
import React, { createContext, useContext } from "react";

type Theme = typeof theme;

const ThemeContext = createContext<Theme>(theme);

export function useTheme() {
  return useContext(ThemeContext);
}

export default ThemeContext;
