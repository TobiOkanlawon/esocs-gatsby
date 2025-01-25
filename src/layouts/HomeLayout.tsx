import React from "react";
import BaseLayout from "./BaseLayout";

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return <BaseLayout>{children}</BaseLayout>;
};

export default Layout;
