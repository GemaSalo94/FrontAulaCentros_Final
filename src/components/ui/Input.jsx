import * as React from "react";
import { cn } from "../../utils/cn";

const Input = React.forwardRef(({ className, type, ...props }, ref) => (
  <input
    type={type}
    className={cn(
      "w-full h-12 px-4 py-3 rounded-lg border-2 border-gray-400 bg-white text-black placeholder-gray-500 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-300",
      className,
    )}
    ref={ref}
    {...props}
  />
));
Input.displayName = "Input";

export { Input };
