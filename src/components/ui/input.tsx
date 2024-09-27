import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  type: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, placeholder, type, ...props }, ref) => {
    return (
      <div className="flex flex-row sm:w-[400px] w-full">
        <input
          type={type}
          placeholder={placeholder}
          className={cn(
            "flex-1 px-3 h-10 w-full rounded-[10px] border border-[#ffffff4d] bg-white py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-zinc-800 dark:bg-zinc-950 dark:ring-offset-zinc-950 dark:placeholder:text-zinc-400 text-[#ffffffb2] text-[18px] dark:focus-visible:ring-zinc-300 placeholder-[#ffffffb2]",
            className
          )}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
