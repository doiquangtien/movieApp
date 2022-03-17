import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import img from "../../../img/johnwick.jpg";
import Item from "../../item/Item";
function Listmovie() {
    const arrOdd = [
      {
        name: "Có cái nịt",
        trailer:"https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761",
        img: img,
        desc: " John Wick is a 2014 American neo-noir action thriller film directed by Chad Stahelski, in his directorial debut, and written by Derek Kolstad. It stars Keanu Reeves, Michael Nyqvist, Alfie Allen, Adrianne Palicki, Bridget Moynahan, Dean Winters, Ian McShane, John Leguizamo, and Willem Dafoe. It is the first installment in the John Wick franchise.",
      },
      {
        name: "Có cái nịt",
        trailer:"https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761",
        img: img,
        desc: " John Wick is a 2014 American neo-noir action thriller film directed by Chad Stahelski, in his directorial debut, and written by Derek Kolstad. It stars Keanu Reeves, Michael Nyqvist, Alfie Allen, Adrianne Palicki, Bridget Moynahan, Dean Winters, Ian McShane, John Leguizamo, and Willem Dafoe. It is the first installment in the John Wick franchise.",
      },
      {
        name: "Có cái nịt",
        trailer:"https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761",
        img: img,
        desc: " John Wick is a 2014 American neo-noir action thriller film directed by Chad Stahelski, in his directorial debut, and written by Derek Kolstad. It stars Keanu Reeves, Michael Nyqvist, Alfie Allen, Adrianne Palicki, Bridget Moynahan, Dean Winters, Ian McShane, John Leguizamo, and Willem Dafoe. It is the first installment in the John Wick franchise.",
      },
      {
        name: "Có cái nịt",
        trailer:"https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761",
        img: img,
        desc: " John Wick is a 2014 American neo-noir action thriller film directed by Chad Stahelski, in his directorial debut, and written by Derek Kolstad. It stars Keanu Reeves, Michael Nyqvist, Alfie Allen, Adrianne Palicki, Bridget Moynahan, Dean Winters, Ian McShane, John Leguizamo, and Willem Dafoe. It is the first installment in the John Wick franchise.",
      },
      {
        name: "Có cái nịt",
        trailer:"https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761",
        img: img,
        desc: " John Wick is a 2014 American neo-noir action thriller film directed by Chad Stahelski, in his directorial debut, and written by Derek Kolstad. It stars Keanu Reeves, Michael Nyqvist, Alfie Allen, Adrianne Palicki, Bridget Moynahan, Dean Winters, Ian McShane, John Leguizamo, and Willem Dafoe. It is the first installment in the John Wick franchise.",
      },
      {
        name: "Có cái nịt",
        trailer:"https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761",
        img: img,
        desc: " John Wick is a 2014 American neo-noir action thriller film directed by Chad Stahelski, in his directorial debut, and written by Derek Kolstad. It stars Keanu Reeves, Michael Nyqvist, Alfie Allen, Adrianne Palicki, Bridget Moynahan, Dean Winters, Ian McShane, John Leguizamo, and Willem Dafoe. It is the first installment in the John Wick franchise.",
      },
      {
        name: "Có cái nịt",
        trailer:"https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761",
        img: img,
        desc: " John Wick is a 2014 American neo-noir action thriller film directed by Chad Stahelski, in his directorial debut, and written by Derek Kolstad. It stars Keanu Reeves, Michael Nyqvist, Alfie Allen, Adrianne Palicki, Bridget Moynahan, Dean Winters, Ian McShane, John Leguizamo, and Willem Dafoe. It is the first installment in the John Wick franchise.",
      },
      {
        name: "Có cái nịt",
        trailer:"https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761",
        img: img,
        desc: " John Wick is a 2014 American neo-noir action thriller film directed by Chad Stahelski, in his directorial debut, and written by Derek Kolstad. It stars Keanu Reeves, Michael Nyqvist, Alfie Allen, Adrianne Palicki, Bridget Moynahan, Dean Winters, Ian McShane, John Leguizamo, and Willem Dafoe. It is the first installment in the John Wick franchise.",
      },
      {
        name: "Có cái nịt",
        trailer:"https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761",
        img: img,
        desc: " John Wick is a 2014 American neo-noir action thriller film directed by Chad Stahelski, in his directorial debut, and written by Derek Kolstad. It stars Keanu Reeves, Michael Nyqvist, Alfie Allen, Adrianne Palicki, Bridget Moynahan, Dean Winters, Ian McShane, John Leguizamo, and Willem Dafoe. It is the first installment in the John Wick franchise.",
      },
      {
        name: "Có cái nịt",
        trailer:"https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761",
        img: img,
        desc: " John Wick is a 2014 American neo-noir action thriller film directed by Chad Stahelski, in his directorial debut, and written by Derek Kolstad. It stars Keanu Reeves, Michael Nyqvist, Alfie Allen, Adrianne Palicki, Bridget Moynahan, Dean Winters, Ian McShane, John Leguizamo, and Willem Dafoe. It is the first installment in the John Wick franchise.",
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
    ];
  const properties = {
    duration: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: false,
    indicators: false,
    responsive: [
      {
          breakpoint: 1024,
          settings: {
              slidesToShow: 6,
              slidesToScroll: 6
          }
      },
      {
          breakpoint: 550,
          settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
             
          }
      }
  ],
  };

  return (
    <div style={{margin:'-12px'}}>
      
      <Slide style={{position:'relative'}} {...properties}>
      {arrOdd.map((odd, i) => (
        <div key={i} style={{padding:'12px'}}>
          <Item data={odd}/>
        </div>  
        ))}
      </Slide>
    </div>
  );
}

export default Listmovie;
