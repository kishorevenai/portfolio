import { Box } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();
  const content = [
    { title: "About Me", link: "about", externalLink: null },
    { title: "Projects", link: "projects", externalLink: null },
    {
      title: "Github",
      link: "github",
      externalLink: "https://github.com/kishorevenai",
    },
    {
      title: "Contact Me",
      link: "contact",
      externalLink: null,
    },
  ];

  const handleRoute = (link: string, externalLink: string) => {
    if (externalLink === null) {
      navigate(link);
    } else {
      window.open(externalLink);
    }
  };

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <Box
      sx={{
        height: "100vh",
        overflowY: "scroll",
        backgroundColor: "#1c1ce9",
        perspective: "50px",
        display: "flex",
        justifyContent: "end",
        alignItems: "start",
        overflowX: "hidden",
      }}
    >
      <div
        style={{
          transform: "rotateY(-1deg)",
          transition: "transform 0.4s ease-in-out",
          width: "60%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "end",
          alignItems: "start",
        }}
      >
        {content.map((item, index) => (
          <h1
            key={index}
            onClick={() => handleRoute(item.link, item.externalLink as string)}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            style={{
              fontSize: "200px",
              fontWeight: 900,
              color: hoveredIndex === index ? "transparent" : "#000",
              WebkitTextStroke: hoveredIndex === index ? "2px black" : "0px",
              transform: hoveredIndex === index ? "scale(1.1)" : "scale(1)",
              transition: "all 0.3s ease-in-out",
              cursor: "pointer",
            }}
          >
            {item.title}
          </h1>
        ))}
      </div>
    </Box>
  );
};

export default Main;
