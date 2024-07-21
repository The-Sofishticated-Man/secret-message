import { ReactNode } from "react";
import { Link } from "react-router-dom";
const BetterLink = ({
  children,
  to,
  Color,
  underline,
}: {
  children: ReactNode;
  to: string;
  underline?: boolean;
  Color?: string;
}) => {
  return (
    <Link
      to={to}
      style={{
        textDecoration: underline
          ? " 4px underline var(--color-primary)"
          : "none",
        color: Color || "white",
      }}
    >
      {children}
    </Link>
  );
};

export default BetterLink;
