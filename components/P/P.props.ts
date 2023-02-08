import { HTMLProps, ReactNode, DetailedHTMLProps, HTMLAttributes } from "react";

export interface PProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  children: ReactNode;
  fontSize?: "s" | "m" | "l";
}
