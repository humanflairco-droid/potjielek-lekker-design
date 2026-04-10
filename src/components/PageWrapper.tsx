import { ReactNode } from "react";

const PageWrapper = ({ children }: { children: ReactNode }) => (
  <main className="page-enter min-h-screen">{children}</main>
);

export default PageWrapper;
