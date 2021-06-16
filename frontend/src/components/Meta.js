import React from "react";
import { Helmet } from "react-helmet";

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keyword" content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: "Welcome to MyBuyTech",
  description: "The best tech products at the best prices!",
  keywords: "electronics, buy electronics, cheap electroincs",
};

export default Meta;
