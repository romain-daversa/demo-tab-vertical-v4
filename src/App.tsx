import { Grid, Paper } from "@material-ui/core";
import { useState } from "react";
import Tab from "./Tab";

const data = [
  {
    text: "Canopy",
    body: "https://via.placeholder.com/600x400.jpg"
  },
  {
    text: "Sharepoint initiative",
    body: "https://via.placeholder.com/600x400/d15050/969696.jpg"
  },
  {
    text: "A new design for the industrialization site",
    body: "https://via.placeholder.com/600x400.jpg"
  },
  {
    text: "Sharepoint catalog",
    body: "https://via.placeholder.com/600x400/d15050/969696.jpg"
  },
  {
    text: "CRT recruits !",
    body: "https://via.placeholder.com/600x400.jpg"
  }
];

export default function App() {
  const [activeTab, setActiveTab] = useState(data[0]);

  const onTabClick = (text: string) => {
    const clickedTab = data.find((element) => element.text === text);
    if (clickedTab !== undefined) {
      setActiveTab(clickedTab);
    }
  };

  return (
    <Grid
      container
      spacing={2}
      direction="row"
      alignItems="stretch"
      justifyContent="center"
    >
      <Grid item md={3}>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={1}
        >
          {data.map((row) => (
            <Grid item key={row.text} style={{ width: "100%" }}>
              <Tab
                isActive={activeTab === row}
                text={row.text}
                onClickCallback={onTabClick}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item md={7}>
        <Paper
          style={{
            width: "100%",
            height: "100%",
            padding: "1%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <img src={activeTab.body} alt={activeTab.text} />
        </Paper>
      </Grid>
    </Grid>
  );
}
