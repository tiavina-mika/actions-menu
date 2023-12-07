/** @jsxRuntime classic /
/* @jsx jsx */
/** @jsxImportSource @emotion/react */
import { IconButton, Menu, MenuItem, alpha } from "@mui/material";
import { Theme } from "@emotion/react";
import { MouseEvent, useState } from "react";

const classes = {
  menu: (theme: Theme) => ({
    "& .MuiPaper-root": {
      borderRadius: 6,
      marginTop: theme.spacing(1),
      minWidth: 180,
      color:
        theme.palette.mode === "light"
          ? "rgb(55, 65, 81)"
          : theme.palette.grey[300],
      boxShadow:
        "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
      "& .MuiMenu-list": {
        padding: "4px 0"
      },
      "& .MuiMenuItem-root": {
        "& .MuiSvgIcon-root": {
          fontSize: 18,
          color: theme.palette.text.secondary,
          marginRight: theme.spacing(1.5)
        },
        "&:active": {
          backgroundColor: alpha(
            theme.palette.primary.main,
            theme.palette.action.selectedOpacity
          )
        }
      }
    }
  })
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
        <MenuItem onClick={handleClose} disableRipple>
          Edit name
        </MenuItem>
      </Menu>
    </div>
  );
};

export default ActionsModal;
