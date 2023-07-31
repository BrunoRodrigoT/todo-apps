"use client";

import theme from "@/utils/theme";
import ThemeContext from "./themeContext";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
}
    