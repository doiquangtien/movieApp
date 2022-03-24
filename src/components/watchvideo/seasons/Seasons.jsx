import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import { Link } from "react-router-dom";

function Seasons({ data, season, details }) {
  return (
    data && (
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "end",
          marginBottom: " 20px",
        }}
      >
        <div style={{ marginRight: "20px" }}>
          <PopupState variant="popover" popupId="demo-popup-menu">
            {(popupState) => (
              <React.Fragment>
                <Button
                  style={{
                    backgroundColor: "#2d2f34",
                    color: "#fff",
                    width: "110px",
                  }}
                  variant="contained"
                  {...bindTrigger(popupState)}
                >
                  Season {season}
                </Button>
                <Menu {...bindMenu(popupState)}>
                  <div
                    style={{
                      width: "110px",
                    }}
                  >
                    {data.map((ses, i) => {
                      return (
                        <Link
                          style={{ textDecoration: "none" }}
                          key={i}
                          to={
                            `/watch/tv/` +
                            details +
                            "/season/" +
                            ses.season_number +
                            "/esp/1"
                          }
                        >
                          <MenuItem
                            style={{ color: "#000" }}
                            onClick={popupState.close}
                          >
                            Season {ses.season_number}
                          </MenuItem>
                        </Link>
                      );
                    })}
                  </div>
                </Menu>
              </React.Fragment>
            )}
          </PopupState>
        </div>
      </div>
    )
  );
}

export default Seasons;
