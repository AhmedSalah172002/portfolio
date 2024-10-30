import { Box } from "@mui/material";
import React from "react";
import styles from "../app/page.module.css";
const Code = ({
  title,
  subject,
  tools,
  role,
  description,
}: {
  title: string;
  subject: string;
  tools: string[];
  role: string;
  description: string;
}) => {
  return (
    <Box>
      <Box
        sx={{
          borderRadius: "8px 8px 0px 0px",
          padding: "15px",
          border: "3px solid rgb(49 46 129)",
          backgroundImage: "linear-gradient(to right,#0d1224, #0a0d37)",
          display: "flex",
        }}
      >
        <div className={styles.editorHeader}>
          <div style={{ backgroundColor: "rgb(248 113 113)" }}></div>
          <div style={{ backgroundColor: "rgb(251 146 60)" }}></div>
          <div style={{ backgroundColor: "rgb(187 247 208)" }}></div>
        </div>
        <p style={{textAlign:'center', color: 'rgb(34 211 238)',fontSize:'1.2rem', width:'100%'}}>{title}</p>
      </Box>
      <Box
        sx={{
          minHeight:'330px',
          borderRadius: " 0px 0px 8px 8px",
          backgroundImage: "linear-gradient(to right,#0d1224, #0a0d37)",
          padding: "25px",
          border: "2px solid ",
          borderColor:
            "transparent rgb(49 46 129) rgb(49 46 129) rgb(49 46 129)",
          fontSize: { md: ".975rem", lg: "1rem" },
          lineHeight: { md: "1.25rem", lg: "1.5rem" },
          display: "flex",
          flexDirection: "column",
          gap: "3px",
        }}
      >
        <div style={{ display: "flex", gap: "10px" }}>
          <span style={{ color: "rgb(236 72 153)" }}>const</span> {subject}{" "}
          <span style={{ color: "rgb(236 72 153)" }}>=</span>{" "}
          <span style={{ color: "rgb(156 163 175)" }}>{"{"}</span>
        </div>
        <div style={{ display: "flex", gap: "10px", marginLeft: "25px" }}>
          name :
          <span style={{ color: "rgb(252 211 77)" }}>
            {" "}
            <span style={{ color: "rgb(156 163 175)" }}>'</span>
            {title}
            <span style={{ color: "rgb(156 163 175)" }}>'</span>
          </span>
          <span style={{ color: "rgb(156 163 175)" }}>,</span>
        </div>
        <div
          style={{
            display: "flex",
            gap: "10px",
            flexWrap: "wrap",
            marginLeft: "25px",
          }}
        >
          tools :<span style={{ color: "rgb(156 163 175)" }}>{"["}</span>
          {tools?.map((tool, index) => (
            <>
              <span key={index}>
                <span style={{ color: "rgb(156 163 175)" }}>'</span>
                <span style={{ color: "rgb(252 211 77)" }}> {tool} </span>
                <span style={{ color: "rgb(156 163 175)" }}>'</span>
              </span>
              {index + 1 < tools.length && (
                <span style={{ color: "rgb(156 163 175)" }}>,</span>
              )}
            </>
          ))}
          <span style={{ color: "rgb(156 163 175)" }}>{"]"}</span>
          <span style={{ color: "rgb(156 163 175)" }}>,</span>
        </div>

        <div style={{ display: "flex", gap: "10px", marginLeft: "25px" }}>
          myRole :<span style={{ color: "rgb(251 146 60)" }}>{role} </span>
          <span style={{ color: "rgb(156 163 175)" }}>,</span>
        </div>

        <div style={{ display: "flex", gap: "10px", marginLeft: "25px" }}>
          <span>
            Description :<span style={{ color: "rgb(34 211 238)",margin:'0px 5px' }}>{description} </span>
            <span style={{ color: "rgb(156 163 175)" }}>,</span>
          </span>
        </div>

        <div style={{ display: "flex", gap: "10px" }}>
          <span style={{ color: "rgb(156 163 175)", marginRight: "3px" }}>
            {"};"}
          </span>
        </div>
      </Box>
    </Box>
  );
};

export default Code;
