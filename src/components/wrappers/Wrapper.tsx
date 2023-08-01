import { PropsWithChildren, ReactNode } from "react";

const Wrapper = ({ children }: PropsWithChildren<{}>) => {
  return <div className="mx-auto container max-h-max">{children}</div>;
};

export default Wrapper;
