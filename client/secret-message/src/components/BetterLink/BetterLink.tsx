import { ReactNode } from "react";
import { Link } from "react-router-dom";
const BetterLink = ({ children, to }: { children: ReactNode; to: string }) => {
  return (
    <Link to={to} style={{ textDecoration: "none" }}>
      {children}
    </Link>
  );
};

export default BetterLink;
