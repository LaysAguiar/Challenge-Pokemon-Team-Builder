import * as Styles from "./styles";
import Link from "next/link";

type HeaderProps = {
  href: string;
  title: string;
};

export const Header = ({ href, title }: HeaderProps) => {
  return (
    <Styles.HeaderContainer>
      <Styles.Divider />
      <Link href={href} passHref>
        <h1>{title}</h1>
      </Link>
    </Styles.HeaderContainer>
  );
};
