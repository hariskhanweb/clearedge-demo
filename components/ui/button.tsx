import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center rounded-full font-roboto font-normal transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
          {
            "bg-brand-blue text-white hover:bg-[#023d8a] border border-white cursor-pointer":
              variant === "default",
            "border border-white text-white hover:bg-white/10 cursor-pointer":
              variant === "outline",
            "hover:bg-accent hover:text-accent-foreground cursor-pointer": variant === "ghost",
            "text-primary underline-offset-4 hover:underline cursor-pointer": variant === "link",
            "h-10 sm:h-12 px-3 sm:px-5 text-sm sm:text-base": size === "default",
            "h-8 sm:h-9 px-3 sm:px-4 text-xs sm:text-sm": size === "sm",
            "h-12 sm:h-14 px-4 sm:px-8 text-base sm:text-lg": size === "lg",
            "h-10 w-10": size === "icon",
          },
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };

