/** @jsxRuntime classic /
/* @jsx jsx */
/** @jsxImportSource @emotion/react */
import {
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Typography,
  alpha
} from "@mui/material";
import { Theme } from "@emotion/react";
import { MouseEvent, useState } from "react";
import { LAYOUT_CONTENT_PADDING } from "../utils/constants";

const classes = {
  menu: (theme: Theme) => ({
    "& .MuiPaper-root": {
      position: "relative" as const,
      "&::before": {
        content: '" "',
        position: "absolute" as const,
        inset: 0,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        height: 3,
        top: 0,
        borderImageSlice: 1,
        backdropFilter: "blur(20px)",
        background: `
          linear-gradient(
            90.7deg, 
            rgba(232, 235, 255, 0.5) -1.45%, 
            rgba(208, 185, 255, 0.5) 15.95%, 
            rgba(172, 108, 255, 0.5) 29.51%, 
            rgba(158, 173, 250, 0.5) 51.8%, 
            rgba(61, 90, 241, 0.5) 94.87%)
          border-box
        `
      },
      borderRadius: 6,
      boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
      backgroundColor: "#fff",
      zIndex: 1000,
      marginTop: theme.spacing(1),
      minWidth: `calc(100vw - ${LAYOUT_CONTENT_PADDING}px)`,
      color:
        theme.palette.mode === "light"
          ? "rgb(55, 65, 81)"
          : theme.palette.grey[300],
      "& .MuiMenu-list": {
        padding: "2px 0"
      },
      "& .MuiMenuItem-root": {
        "&:active": {
          backgroundColor: alpha(
            theme.palette.primary.main,
            theme.palette.action.selectedOpacity
          )
        }
      }
    }
  }),
  header: {
    paddingTop: 19,
    paddingBottom: 7,
    "&:hover": {
      backgroundColor: "transparent"
    }
  }
};

const ActionsModal = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        id="actions-menu"
        aria-controls={open ? "actions-menu-control" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <img alt="menus" src="/icons/more-vert.svg" />
      </IconButton>
      <Menu
        id="actions-menu-control"
        MenuListProps={{
          "aria-labelledby": "actions-menu"
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        css={classes.menu}
      >
        <MenuItem disableRipple disableTouchRipple css={classes.header}>
          <Stack spacing={0.5}>
            <Typography>Actions</Typography>
            <Typography
              css={{ fontWeight: 700, lineHeight: 1.36 }}
              variant="h2"
            >
              What we do?
            </Typography>
          </Stack>
        </MenuItem>
        <Divider />
        <MenuItem
          onClick={handleClose}
          className="grey800"
          disableRipple
          css={{
            fontSize: 14,
            paddingTop: 9,
            paddingBottom: 9,
            fontWeight: 400
          }}
        >
          Edit name
        </MenuItem>
        <Divider />
      </Menu>
    </div>
  );
};

export default ActionsModal;
