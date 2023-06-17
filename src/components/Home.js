import {
  Button,
  Grid,
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
} from "@mui/material";
import React, { useEffect, useState } from "react";

export default function Home() {
  const [APIData, setAPIData] = useState([]);

  const baseURL = `https://648d26482de8d0ea11e79e7a.mockapi.io/players`;

  useEffect(() => {
    fetch(baseURL)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP Status: ${response.status}`);
        }

        return response.json();
      })

      .then((data) => {
        setAPIData(data);
      })

      .catch((error) => console.log(error.message));
  }, []);
  return (
    <div>
      {APIData.map((data) => {
        return (
          <Grid item md={4}>
            <Card>
              <CardMedia
                component="img"
                height="240"
                image={data.img}
                alt={data.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {data.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {data.club}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">{data.nation}</Button>
                <Button size="small">Detail</Button>
              </CardActions>
            </Card>
          </Grid>
        );
      })}
    </div>
  );
}
