import React from "react";
import { Box, CheckBox, Text, WorldMap } from "grommet";

const placeProps = (name, color, showDrop) => ({
  name,
  color,
  ...(showDrop
    ? {
        content: (
          <Box pad={{ horizontal: "medium", vertical: "xsmall" }}>
            <Text>{name}</Text>
          </Box>
        ),
        dropProps: {
          align: { left: "right" },
          background: { color, opacity: "strong" },
          elevation: "medium",
          margin: { left: "small" },
          round: "xsmall",
        },
      }
    : {}),
});
function Map() {
  const [showDrops, setShowDrops] = React.useState(true);
  return (
    <div>
      <Box align="end" pad="large">
        <CheckBox
          label="show"
          checked={showDrops}
          onChange={() => setShowDrops(!showDrops)}
        />
        <WorldMap
          fill="horizontal"
          places={[
            {
              location: [-33.8830555556, 151.216666667],
              ...placeProps("Sydney", "rgba(37, 62, 154, 0.8)", showDrops),
            },
            {
              location: [42.358056, -71.063611],
              ...placeProps("Boston ", "rgba(187, 157, 127, 0.95)", showDrops),
              onClick: () => {
                window.location.href = "/Boston";
              },
            },
            {
              location: [51.507222, -0.1275],
              ...placeProps("London", "rgba(0, 32, 60, 0.7)", showDrops),
            },
            {
              location: [-0.002222, -78.455833],
              ...placeProps("Quito", "rgba(37, 62, 154, 0.95)", showDrops),
              onClick: () => {
                window.location.href = "/Quito";
              },
            },
            {
              location: [34.05, -118.25],
              ...placeProps(
                "Los Angeles",
                "rgba(187, 157, 127, 0.95)",
                showDrops
              ),
              onClick: () => {
                window.location.href = "/LosAngeles";
              },
            },
            {
              location: [35.689722, 139.692222],
              ...placeProps("Tokyo", "rgba(0, 32, 60, 0.7)", showDrops),
              onClick: () => {
                window.location.href = "/Tokyo";
              },
            },
            {
              location: [78.22, 15.65],
              ...placeProps("Svalbard", "rgba(37, 62, 154, 0.8)", showDrops),
              onClick: () => {
                window.location.href = "/Svalbard";
              },
            },
            {
              location: [-54.801944, -68.303056],
              ...placeProps("Ushuaia", "rgba(187, 157, 127, 0.85)", showDrops),
            },
            {
              location: [-0.828097, 11.598909],
              ...placeProps("Gabon", "rgba(0, 32, 60, 0.7)", showDrops),
            },
          ]}
        />
      </Box>
    </div>
  );
}

export default Map;
