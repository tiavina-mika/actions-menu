/** @jsxRuntime classic /
/* @jsx jsx */
/** @jsxImportSource @emotion/react */
import { Typography } from "@mui/material";
import { LAYOUT_CONTENT_PADDING } from "../utils/constants";
import Footer from "../components/Footer";
import ActionsModal from "./ActionsModal";

const classes = {
  root: {
    minHeight: "100vh"
  },
  content: {
    padding: LAYOUT_CONTENT_PADDING
  }
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
      <div
        css={classes.content}
        className="stretchSelf flexRow center spaceBetween"
      >
        <Typography variant="h3">Hello</Typography>
        <ActionsModal title="What we do?" menus={menus} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
