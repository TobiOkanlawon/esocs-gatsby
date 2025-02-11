import React from "react";
import BaseLayout from "./BaseLayout";
import Banner, { BannerProps } from "../components/shared/Banner";

type Props = {
  children: React.ReactNode;
} & BannerProps;

const Layout: React.FC<Props> = ({ children, title, subTitle, image }) => {
  return (
    <BaseLayout>
      <Banner title={title} subTitle={subTitle} image={image} />
      {children}
    </BaseLayout>
  );
};

export default Layout;
