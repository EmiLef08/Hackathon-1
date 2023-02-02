import React from "react";
import { Box } from "grommet";

function CityBox() {
  return (
    <Box
      direction="row"
      border={{ color: "brand", size: "large" }}
      pad="medium"
    >
      <Box pad="small" background="dark-3" />
      <Box pad="medium" background="light-3" />
    </Box>
  );
}
export default CityBox;
