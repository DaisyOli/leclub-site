import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
};

export default function Container({ children }: ContainerProps) {
  return (
    <div className="mx-auto h-full w-full max-w-[1440px] px-8 lg:px-12">
      {children}
    </div>
  );
}