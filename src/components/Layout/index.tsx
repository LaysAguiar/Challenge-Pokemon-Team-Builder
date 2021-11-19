import { ReactNode } from "react";
import * as Styles from "./styles";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return <Styles.Container>{children}</Styles.Container>;
};
