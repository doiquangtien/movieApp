import { useState } from "react";
import clsx from "clsx";
import img from "../../img/banner1.jpg";
import video from "../../img/video.mp4";
import Item from "../itemCard/Itemcard";
import { useParams } from "react-router-dom";
import { Box, Container, Grid } from "@mui/material";

function Listmovie() {
  const { type } = useParams();
  const [list, setlist] = useState(12);

  function jsUcfirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const arrOdd = [
    {
      name: "Có cái nịt",
      trailer: video,
      img: img,
      desc: " Lorem ipsum dolor, sit amet consectetur adipisicing",
    },
    {
      name: "Có cái nịt 1",
      trailer:
        "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761",
      img: img,
      desc: " Lorem ipsum dolor, sit amet consectetur adipisicing",
    },
    {
      name: "Có cái nịt",
      trailer:
        "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761",
      img: img,
      desc: " Lorem ipsum dolor, sit amet consectetur adipisicing",
    },
    {
      name: "Có cái nịt",
      trailer:
        "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761",
      img: img,
      desc: " Lorem ipsum dolor, sit amet consectetur adipisicing",
    },
    {
      name: "Có cái nịt",
      trailer:
        "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761",
      img: img,
      desc: " Lorem ipsum dolor, sit amet consectetur adipisicing",
    },
    {
      name: "Có cái nịt",
      trailer:
        "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761",
      img: img,
      desc: " Lorem ipsum dolor, sit amet consectetur adipisicing",
    },
    {
      name: "Có cái nịt",
      trailer:
        "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761",
      img: img,
      desc: " Lorem ipsum dolor, sit amet consectetur adipisicing",
    },
    {
      name: "Có cái nịt",
      trailer:
        "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761",
      img: img,
      desc: " Lorem ipsum dolor, sit amet consectetur adipisicing",
    },
    {
      name: "Có cái nịt",
      trailer:
        "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761",
      img: img,
      desc: " Lorem ipsum dolor, sit amet consectetur adipisicing",
    },
    {
      name: "Có cái nịt",
      trailer:
        "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761",
      img: img,
      desc: " Lorem ipsum dolor, sit amet consectetur adipisicing",
    },
    {
      name: "Có cái nịt",
      trailer:
        "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761",
      img: img,
      desc: " Lorem ipsum dolor, sit amet consectetur adipisicing",
    },
    {
      name: "Có cái nịt",
      trailer:
        "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761",
      img: img,
      desc: " Lorem ipsum dolor, sit amet consectetur adipisicing",
    },
    {
      name: "Có cái nịt",
      trailer:
        "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761",
      img: img,
      desc: " Lorem ipsum dolor, sit amet consectetur adipisicing",
    },
    {
      name: "Có cái nịt",
      trailer:
        "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761",
      img: img,
      desc: " Lorem ipsum dolor, sit amet consectetur adipisicing",
    },
    {
      name: "Có cái nịt",
      trailer:
        "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761",
      img: img,
      desc: " Lorem ipsum dolor, sit amet consectetur adipisicing",
    },
    {
      name: "Có cái nịt",
      trailer:
        "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761",
      img: img,
      desc: " Lorem ipsum dolor, sit amet consectetur adipisicing",
    },
    {
      name: "Có cái nịt",
      trailer:
        "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761",
      img: img,
      desc: " Lorem ipsum dolor, sit amet consectetur adipisicing",
    },
    {
      name: "Có cái nịt",
      trailer:
        "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761",
      img: img,
      desc: " Lorem ipsum dolor, sit amet consectetur adipisicing",
    },
    {
      name: "Có cái nịt",
      trailer:
        "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761",
      img: img,
      desc: " Lorem ipsum dolor, sit amet consectetur adipisicing",
    },
    {
      name: "Có cái nịt",
      trailer:
        "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761",
      img: img,
      desc: " Lorem ipsum dolor, sit amet consectetur adipisicing",
    },
    {
      name: "Có cái nịt 123",
      trailer:
        "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761",
      img: img,
      desc: " Lorem ipsum dolor, sit amet consectetur adipisicing",
    },
  ];

  let arr = arrOdd.slice(0, list);
  const handleMore = () => {
    arr = arrOdd.slice(
      0,
      setlist((prev) => {
        return prev + 6;
      })
    );
  };
  const handleCollect = () => {
    arr = arrOdd.slice(0, setlist(12));
  };
  return (
    <Container maxWidth="1400px">
      <Box
        sx={{
          flexGrow: 1,
          margin: "0 36px",
        }}
      >
        <span style={{ color: "#fff", fontSize: "24px" }}>
          List {jsUcfirst(type)}
        </span>

        <Grid container spacing={2}>
          {arr.map((odd, i) => (
            <Grid key={i} item md={2}>
              <Item data={odd} />
            </Grid>
          ))}
        </Grid>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          {arr.length < arrOdd.length ? (
            <button
              onClick={handleMore}
              style={{
                backgroundColor: "#1e70a8",
                color: "#fff",
                width: "100px",
                height: "40px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                fontSize: "16px",
              }}
            >
              Xem thêm
            </button>
          ) : (
            <button
              onClick={handleCollect}
              style={{
                backgroundColor: "#1e70a8",
                color: "#fff",
                width: "100px",
                height: "40px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                fontSize: "16px",
              }}
            >
              Thu vào
            </button>
          )}
        </div>
      </Box>
    </Container>
  );
}

export default Listmovie;
