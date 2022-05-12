import {
  Grid,
  Card,
  CardActionArea,
  CardContent,
  Typography
} from "@material-ui/core";
import PeopleIcon from "@material-ui/icons/People";

type TabProps = {
  isActive: boolean;
  text: string;
  onClickCallback: (text: string) => void;
};

const Tab = (props: TabProps) => {
  const { isActive, text, onClickCallback } = { ...props };

  const onCardClick = () => onClickCallback(text);

  return (
    <Card
      elevation={2}
      style={{
        background: isActive ? "#008e5c" : "white",
        color: isActive ? "white" : "#008e5c",
        width: "100%"
      }}
    >
      <CardActionArea onClick={onCardClick}>
        <CardContent>
          <Grid container direction="row" spacing={1}>
            <Grid item>
              <PeopleIcon />
            </Grid>
            <Grid item>
              <Typography
                style={{
                  textTransform: "uppercase",
                  fontWeight: "700",
                  fontSize: "0.9rem"
                }}
              >
                {text}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Tab;
