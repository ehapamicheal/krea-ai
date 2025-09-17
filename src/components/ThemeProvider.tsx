"use client";

import { ThemeProvider as NextThemes } from "next-themes";

const ThemeProvider = ({ children, ...props }: any) => {
  return (
     <NextThemes {...props}>{children}</NextThemes>
  )
}

export default ThemeProvider;