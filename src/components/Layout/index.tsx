import Head from "next/head";
import { ReactNode } from "react";
import * as Styles from "./styles";

interface LayoutProps {
  children: ReactNode;
  title?: string;
}

export const Layout = ({ children, title }: LayoutProps) => {

  return (<>
    <Head>
      <title>{title || "PokeTeam"}</title>
    </Head>
    <Styles.Container>{children}</Styles.Container>
  </>)

};
