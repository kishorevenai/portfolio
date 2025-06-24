import { Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import profile from "../assets/G.png";

const About = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [displayText, setDisplayText] = useState("");

  const fullText = `Hi, I'm Kishore – a passionate Full-Stack Developer with 2+ years of hands-on experience building dynamic, scalable, and user-friendly web applications. I specialize in JavaScript, TypeScript, React.js, Node.js, PostgreSQL, and Redis, with practical exposure to modern tools like Docker, Kafka, and AWS. From engineering real-time trading engines and collaborative community platforms to crafting workflow automation tools inspired by Zapier, I enjoy solving complex problems through elegant code and innovative architecture. I’ve contributed to startups like Altheal Holistic LLP and Ace Assured, where I turned design ideas into powerful, production-ready systems. I’m always eager to learn, experiment, and push the boundaries of what’s possible on the web. When I’m not coding, I’m exploring new tech, optimizing system performance, or refining UI/UX for better user engagement. Let’s build something amazing together.`;

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setDisplayText((prev) => prev + fullText[index]);
      index++;

      if (index >= fullText.length) {
        clearInterval(interval);
      }
    }, 10); // typing speed

    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * 5;
    const rotateY = ((x - centerX) / centerX) * 5;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (card) {
      card.style.transform = `rotateX(0deg) rotateY(0deg)`;
    }
  };

  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "99vw",
        height: "100vh",
        paddingTop: "10px",
        perspective: "1000px",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={profile}
        style={{
          width: "50%",
          top: 0,
          left: 0,
          position: "absolute",
        }}
      ></img>
      <motion.div
        ref={cardRef}
        initial={{ opacity: 0, filter: "blur(10px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        style={{
          transition: "transform 0.2s ease-out",
          transformStyle: "preserve-3d",
          flexDirection: "column",
          display: "flex",
          justifyContent: "start",
          alignItems: "start",
          width: "70%",
        }}
      >
        <Typography color="white" sx={{ fontSize: "100px" }}>
          About Me
        </Typography>

        <Typography color="white" variant="h3" sx={{ whiteSpace: "pre-line" }}>
          {displayText}
        </Typography>
      </motion.div>
    </div>
  );
};

export default About;
