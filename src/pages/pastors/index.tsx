import React from "react";
import Layout from "../../layouts/PageLayout";
import { StyledSectionContainer } from "../../constants/css";
import Card from "../../components/Pastors/PastorCard";

const Pastors = () => {
  const data: any[] = [];
  return (
    <Layout
      title="Our Pastors"
      subTitle="Felis imperdiet proin fermentum leo vel orci porta non pulvinar neque laoreet suspendisse interdum consectetur libero, id faucibus nisl tincidunt eget nullam? Lorem ipsum dolor sit amet, consectetur adipiscing elit!"
    >
      <StyledSectionContainer>
        {data.map((d) => {
          return <Card />;
        })}
      </StyledSectionContainer>
    </Layout>
  );
};

export default Pastors;
