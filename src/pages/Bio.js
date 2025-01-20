import React from "react";
import profileImage from "../images/IMG_1693.jpg"; 
import { FaLinkedin, FaGithub, FaYoutube } from "react-icons/fa";

const Bio = () => {
  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh", // Use a slightly taller height for better spacing
        textAlign: "center",
        padding: "20px", // Add padding to the section
        boxSizing: "border-box",
      }}
    >
      {/* Heading */}
      <h2
        style={{
          marginBottom: "20px", // Add spacing below the heading
          fontSize: "2.75rem",
          fontWeight: "600",
        }}
      >
        Hi World, I am Esther Ngeno
      </h2>

      {/* Profile Image */}
      <div
        style={{
          marginBottom: "30px", // Add more spacing below the image
        }}
      >
        <img
          src={profileImage}
          alt="Profile"
          style={{
            borderRadius: "50%",
            width: "200px",
            height: "250px",
            transition: "transform 0.4s ease",
          }}
          onMouseEnter={(e) => (e.target.style.transform = "scale(1.2)")}
          onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
        />
      </div>

      {/* Paragraph */}
      <div>
        <p
          style={{
            marginBottom: "30px", // Add more spacing below the paragraph
            maxWidth: "600px", // Restrict the paragraph width for better readability
            lineHeight: "1.6", // Add spacing between lines
            fontWeight: "600",
          }}
        >
          Hi, I'm Mario Yonan, a software engineer from Egypt, dedicated to
          crafting elegant and efficient web solutions. Beyond coding, I enjoy
          exploring innovative tech trends, always on the lookout for fresh
          inspirations and the next intriguing project.
        </p>
      </div>

      {/* Social Media Links */}
      <div
        style={{
          display: "flex",
          gap: "20px", // Add spacing between the social media icons
          marginTop: "10px", // Add spacing above the icons
        }}
      >
        <a
          href="https://www.linkedin.com/in/esther-ngeno-7a8a1a145/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "rgba(191, 214, 196, 0.9)", fontSize: "50px" }}
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/EstherNgeno"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "rgba(191, 214, 196, 0.9)", fontSize: "50px" }}
        >
          <FaGithub />
        </a>
        <a
          href="https://www.youtube.com/@estherngeno2216"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "rgba(191, 214, 196, 0.9)", fontSize: "50px" }}
        >
          <FaYoutube />
        </a>
      </div>
    </section>
  );
};

export default Bio;
