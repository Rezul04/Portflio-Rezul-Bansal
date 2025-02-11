import { cn } from "../../lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  link
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  link?: string;
}) => {
  return (
    <a
      href={link}
      target="_blank"
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 md:p-2 lg:p-4 border border-transparent justify-between flex flex-col space-y-4 border-2 border-white/20 z-[10000] bg-blue-300/10  hover:border-blue-500",
        className
      )}
    >
      {header}
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        {icon}
        <div className="font-serif font-semibold my-2 tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent group-hover/bento:from-sky-400 group-hover/bento:to-emerald-300">
          {title}
        </div>
        <div className="font-serif font-normal text-white/60 text-xs group-hover/bento:text-white">
          {description}
        </div>
      </div>
    </a>
  );
};
