import { useState } from "react";
import clsx from "clsx";
import img from "../../img/banner1.jpg";
import video from "../../img/video.mp4";
import Item from "../item/Item";

function Listseries() {
  const [list, setlist] = useState(12);
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
      <div style={{ marginTop: "20px" }} className={clsx("grid", "wide")}>
        <div className="row">
          {arr.map((odd, i) => (
            <div key={i} className="col l-2 m-4 c-6 ">
              <Item data={odd}/>
            </div>
          ))}
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            marginBottom: "20px",
          }}
        >         
          {arr.length < arrOdd.length?(<button
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
      </button>)
        :(<button
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
        </button>)}
        </div>
      </div>
    );
  };


export default Listseries;
