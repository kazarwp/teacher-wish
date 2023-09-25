import React from "react";
import { Paper, Text, Avatar } from "@mantine/core";

import icon from "../images/kub.jpg";

export const Header: React.FC = () => {
  return (
    <Paper
      shadow="xs"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        margin: '0 0 25px 0',
        padding: '5px 0 5px'
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <Avatar
          size="md"
          src={icon}
          alt="Icon"
          style={{ marginRight: 10, marginLeft: 20 }}
        />

        <Text size="lg">
          Куб.Расписание 
        </Text>
      </div>
    </Paper>
  );
};