import { cn } from "@/lib/utils";
import React, { CSSProperties } from "react";

interface IContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  styles?: CSSProperties;
  onClick?: () => void;
  className?: string;
}

const Container = React.forwardRef<HTMLDivElement, IContainerProps>(
  ({ className, onClick, styles, ...props }, ref) => {
    return (
      <div
        ref={ref}
        style={{ ...styles }}
        className={cn(className, "bg-white bg-opacity-5 shadow-sm rounded-md ")}
        onClick={onClick}
        {...props}
      ></div>
    );
  }
);

export default Container;
