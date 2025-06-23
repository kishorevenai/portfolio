import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";

const Footer = () => {
  return (
    <Grid
      container
      spacing={2}
      direction={"row"}
      sx={{
        zIndex: "1000",
        bottom: "0px",
        position: "absolute",
        width: "100%",
        height: "200px",
      }}
    >
      <Grid size={6} sx={{ paddingLeft: "20px" }}>
        <Typography color="primary" variant="h1">
          PORT <br />
          FOLIO
        </Typography>

        <Grid container spacing={2} direction={"row"}>
          <Grid size={4}>
            <Typography color="primary" variant="body1">
              Studio of Eric Van Holtz <br /> Web Developer
            </Typography>
          </Grid>
          <Grid size={4}>
            <Typography color="primary" variant="body1">
              Portland Oregon <br /> kishorevenai@gmail.com
            </Typography>
          </Grid>
          <Grid size={4}>
            <Typography color="primary">01 about</Typography>
            <br />
            <Typography color="primary">02 journal</Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "end",
          justifyContent: "end",
          paddingRight: "30px",
        }}
        size={6}
      >
        <Typography color="primary">03 twitter</Typography>
        <br />
        <Typography color="primary">04 instagram</Typography>
        <br />
        <Typography color="primary">05 linkedin</Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
