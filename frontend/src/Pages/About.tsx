import { Typography } from "@mui/material";
import { useRef } from "react";

const About = () => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left; // mouse X inside element
    const y = e.clientY - rect.top; // mouse Y inside element

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * 5; // max 5 deg
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
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "99vw",
        height: "100vh",
        paddingTop: "10px",
        perspective: "1000px", // higher for more depth
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={cardRef}
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
        <Typography
          color="white"
          sx={{
            fontSize: "100px",
          }}
        >
          About Me
        </Typography>

        <Typography color="white" variant="h3">
          Hi, I'm Kishore – a passionate Full-Stack Developer with 2+ years of
          hands-on experience building dynamic, scalable, and user-friendly web
          applications. I specialize in JavaScript, TypeScript, React.js,
          Node.js, PostgreSQL, and Redis, with practical exposure to modern
          tools like Docker, Kafka, and AWS. From engineering real-time trading
          engines and collaborative community platforms to crafting workflow
          automation tools inspired by Zapier, I enjoy solving complex problems
          through elegant code and innovative architecture. I’ve contributed to
          startups like Altheal Holistic LLP and Ace Assured, where I turned
          design ideas into powerful, production-ready systems. I’m always eager
          to learn, experiment, and push the boundaries of what’s possible on
          the web. When I’m not coding, I’m exploring new tech, optimizing
          system performance, or refining UI/UX for better user engagement.
          Let’s build something amazing together.
        </Typography>
      </div>
      <div>HAIIIIII</div>
    </div>
  );
};

export default About;
