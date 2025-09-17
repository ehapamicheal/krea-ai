"use client";

import { ThemeProvider as NextThemes, ThemeProviderProps } from "next-themes";

const ThemeProvider = ({ children, ...props }: ThemeProviderProps) => {
  return (
    <NextThemes defaultTheme="light" enableSystem={false} attribute="class" {...props}>
      {children}
    </NextThemes>
  );
};

export default ThemeProvider;