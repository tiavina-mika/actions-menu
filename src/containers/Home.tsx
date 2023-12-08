/** @jsxRuntime classic /
/* @jsx jsx */
/** @jsxImportSource @emotion/react */
import { Typography } from "@mui/material";
import { LAYOUT_CONTENT_PADDING } from "../utils/constants";
import Footer from "../components/Footer";
import ActionsModal from "./ActionsModal";
import { Theme } from "@emotion/react";

const classes = {
  root: {
    minHeight: "100vh"
  },
  content: {
    padding: LAYOUT_CONTENT_PADDING
  },
  header: (theme: Theme) => ({
    borderBottom: "1px solid " + theme.palette.grey[300],
    padding: `12px ${LAYOUT_CONTENT_PADDING}px`
  })
};

const Home = () => {
  const menus = [
    {
      label: "Edit name",
      onClick: () => console.log("clicked")
    }
  ];
  return (
    <div className="flexColumn spaceBetween" css={classes.root}>
      <div className="stretchSelf">
        <div css={classes.header} className="flexRow center spaceBetween">
          <Typography variant="h3">Mik.</Typography>
          <ActionsModal title="What we do?" menus={menus} />
        </div>
        <div css={classes.content}>
          <Typography className="grey800">
            Click the icon in the top right corner to open the menu
          </Typography>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
