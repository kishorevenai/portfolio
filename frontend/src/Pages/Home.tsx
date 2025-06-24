import { useRef, useEffect } from "react";
import { Box } from "@mui/material";
import Main from "../Components/Main";
import profile from "../../src/assets/profile.png";
import Footer from "../Components/Footer";

const Home = () => {
  const imgRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e: any) => {
      const { clientX, clientY } = e;
      const moveX = (clientX / window.innerWidth - 0.5) * 30; // adjust strength here
      const moveY = (clientY / window.innerHeight - 0.5) * 30;

      if (imgRef.current) {
        //@ts-ignore
        imgRef.current.style.transform = `translate(${moveX}px, ${moveY}px)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <img
        ref={imgRef}
        src={profile}
        alt="profile"
        style={{
          zIndex: 500,
          position: "absolute",
          height: "1000px",
          left: 0,
          bottom: 0,
          transition: "transform 0.2s ease-out",
          pointerEvents: "none", // prevents interference with mouse events
        }}
      />

      <Main />
      <Footer />
    </Box>
  );
};

export default Home;
