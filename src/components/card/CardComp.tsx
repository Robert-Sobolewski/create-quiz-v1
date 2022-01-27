import {
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import Card from "@mui/material/Card";

const CardComp = (props: any) => {
  return (
    <div style={{ overflow: "hidden" }} className="card-comp">
      <Card sx={{ minWidth: 200, maxWidth: 300 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={props.flag}
            alt={props.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {props.name}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default CardComp;
