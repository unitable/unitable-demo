import React from "react";

const TableVis = ({ htmlString }) => {
  const createMarkup = () => {
    return { __html: htmlString };
  };

  return <div dangerouslySetInnerHTML={createMarkup()} />;
};

export default TableVis;
