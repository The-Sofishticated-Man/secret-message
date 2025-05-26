import { ReactNode } from "react";
import { Link } from "react-router-dom";
const BetterLink = ({
  children,
  to,
  Color,
  underline,
  className
}: {
  children: ReactNode;
  to: string;
  underline?: boolean;
  Color?: string;
  className?: string;
}) => {
  return (
    <Link
      className= {className}
      to={to}
      // This is a better link component that overrides the default styles of react-router's Link component
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
