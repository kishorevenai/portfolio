import { Box } from "@mui/material";
import { useState } from "react";

const Main = () => {
  const content = [
    { title: "About Me" },
    { title: "Projects" },
    { title: "Github" },
    { title: "Contact Me" },
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);

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
