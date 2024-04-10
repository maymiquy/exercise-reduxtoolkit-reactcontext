import {
 ThemeProviderContext,
 ThemeProviderState,
} from "@/context/ThemeContext";
import { useContext } from "react";

export const useTheme = (): ThemeProviderState => {
 const context = useContext(ThemeProviderContext);

 if (context === undefined)
  throw new Error(
   "Theme context is undefined, useTheme must be used within a ThemeProvider",
  );

 return context;
};
