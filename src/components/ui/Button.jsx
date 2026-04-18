import * as React from "react";
import { cva } from "class-variance-authority";
import { cn } from "../../utils/cn";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
  {
    variants: {
      variant: {
        default: "bg-blue-600 text-white hover:bg-blue-700",
        destructive: "bg-red-600 text-white hover:bg-red-700",
        outline:
          "border-2 border-gray-400 bg-white text-black hover:bg-gray-100",
        secondary: "bg-gray-600 text-white hover:bg-gray-700",
        ghost: "hover:bg-gray-100 text-black",
        link: "text-blue-600 underline",
        green:
          "h-14 px-10 py-4 bg-green-500 text-white font-bold text-lg border-2 border-black rounded-lg hover:bg-green-600 active:bg-green-700 shadow-lg transition-all",
      },
      size: {
        default: "h-10 px-8 py-2 rounded-md",
        sm: "h-9 px-3 rounded-md",
        lg: "h-14 px-10 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

const Button = React.forwardRef(
  ({ className, variant, size, ...props }, ref) => (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    />
  ),
);
Button.displayName = "Button";

// eslint-disable-next-line react-refresh/only-export-components
export { Button, buttonVariants };
