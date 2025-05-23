/// <reference types="vite/client" />

declare namespace JSX {
  interface IntrinsicElements {
    "l-ring": React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    > & {
      color?: string;
      size?: number;
    };
  }
}
