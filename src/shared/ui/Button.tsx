import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/shared/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        default:
          "bg-white/10 border border-white/5 text-white hover:bg-white/20",
        close:
          "bg-[rgba(65,63,64,0.4)] text-white hover:bg-[rgba(65,63,64,0.7)]",
        ghost: "bg-transparent text-white hover:bg-white/10",
        glass:
          "bg-white/10 border border-white/10 text-white backdrop-blur-md hover:bg-white/20",
        badge: "bg-white text-black hover:bg-zinc-200",
        nav: "flex-col bg-transparent text-white",
        navActive:
          "flex-col bg-[#121212] text-white rounded-[100px] mix-blend-plus-lighter",
      },
      size: {
        default: "h-8 w-8 rounded-full",
        closeSize:
          "h-8 px-[12px] py-[4px] pl-[6px] gap-[2px] rounded-full text-sm",
        xs: "h-6 w-6 rounded-full",
        block: "w-full h-12 px-4 rounded-2xl justify-between",
        badge:
          "h-[22px] px-[6px] py-[4px] gap-[4px] rounded-[12px] text-[10px]",
        rowSm: "w-full h-6 justify-between text-sm",
        nav: "h-[50px] flex-1 gap-[2px] text-[8px] font-normal tracking-[-0.1px] justify-center",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
