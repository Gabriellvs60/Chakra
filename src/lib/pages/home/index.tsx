import { NextSeo } from "next-seo";

import LayoutTemplate from "lib/components/layout/LayoutTemplate";

const Home = () => {
  return (
    <LayoutTemplate>
      <NextSeo title="Home" />
      <span>Content</span>
    </LayoutTemplate>
  );
};

export default Home;
