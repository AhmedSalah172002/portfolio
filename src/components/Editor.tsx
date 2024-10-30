import { Box } from "@mui/material";
import React from "react";
import styles from "../app/page.module.css";

const Editor = () => {
  return (
    <Box>
      <Box
        sx={{
          borderRadius: "8px 8px 0px 0px",
          padding: "15px",
          border: "3px solid rgb(49 46 129)",
          backgroundImage: "linear-gradient(to right,#0d1224, #0a0d37)",
        }}
      >
        <div className={styles.editorHeader}>
          <div style={{ backgroundColor: "rgb(248 113 113)" }}></div>
          <div style={{ backgroundColor: "rgb(251 146 60)" }}></div>
          <div style={{ backgroundColor: "rgb(187 247 208)" }}></div>
        </div>
      </Box>
      <Box
        sx={{
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
          <span style={{ color: "rgb(236 72 153)" }}>const</span> coder{" "}
          <span style={{ color: "rgb(236 72 153)" }}>=</span>{" "}
          <span style={{ color: "rgb(156 163 175)" }}>{"{"}</span>
        </div>
        <div style={{ display: "flex", gap: "10px", marginLeft: "25px" }}>
          name :
          <span style={{ color: "rgb(252 211 77)" }}>
            {" "}
            <span style={{ color: "rgb(156 163 175)" }}>'</span>Ahmed Salah
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
          skills :<span style={{ color: "rgb(156 163 175)" }}>{"["}</span>
          <span>
            <span style={{ color: "rgb(156 163 175)" }}>'</span>
            <span style={{ color: "rgb(252 211 77)" }}> React </span>
            <span style={{ color: "rgb(156 163 175)" }}>'</span>
          </span>
          <span style={{ color: "rgb(156 163 175)" }}>,</span>{" "}
          <span>
            <span style={{ color: "rgb(156 163 175)" }}>'</span>
            <span style={{ color: "rgb(252 211 77)" }}> NextJS </span>
            <span style={{ color: "rgb(156 163 175)" }}>'</span>
          </span>
          <span style={{ color: "rgb(156 163 175)" }}>,</span>{" "}
          <span>
            <span style={{ color: "rgb(156 163 175)" }}>'</span>
            <span style={{ color: "rgb(252 211 77)" }}> Redux </span>
            <span style={{ color: "rgb(156 163 175)" }}>'</span>
          </span>
          <span style={{ color: "rgb(156 163 175)" }}>,</span>{" "}
          <span>
            <span style={{ color: "rgb(156 163 175)" }}>'</span>
            <span style={{ color: "rgb(252 211 77)" }}> Express </span>
            <span style={{ color: "rgb(156 163 175)" }}>'</span>
          </span>
          <span style={{ color: "rgb(156 163 175)" }}>,</span>{" "}
          <span>
            <span style={{ color: "rgb(156 163 175)" }}>'</span>
            <span style={{ color: "rgb(252 211 77)" }}> NodeJs </span>
            <span style={{ color: "rgb(156 163 175)" }}>'</span>
          </span>
          <span style={{ color: "rgb(156 163 175)" }}>,</span>{" "}
          <span>
            <span style={{ color: "rgb(156 163 175)" }}>'</span>
            <span style={{ color: "rgb(252 211 77)" }}> MySql </span>
            <span style={{ color: "rgb(156 163 175)" }}>'</span>
          </span>
          <span style={{ color: "rgb(156 163 175)" }}>,</span>{" "}
          <span>
            <span style={{ color: "rgb(156 163 175)" }}>'</span>
            <span style={{ color: "rgb(252 211 77)" }}> MongoDB </span>
            <span style={{ color: "rgb(156 163 175)" }}>'</span>
          </span>
          <span style={{ color: "rgb(156 163 175)" }}>,</span>{" "}
          <span>
            <span style={{ color: "rgb(156 163 175)" }}>'</span>
            <span style={{ color: "rgb(252 211 77)" }}> Postgres </span>
            <span style={{ color: "rgb(156 163 175)" }}>'</span>
          </span>
          <span style={{ color: "rgb(156 163 175)" }}>,</span>{" "}
          <span>
            <span style={{ color: "rgb(156 163 175)" }}>'</span>
            <span style={{ color: "rgb(252 211 77)" }}> Git </span>
            <span style={{ color: "rgb(156 163 175)" }}>'</span>
          </span>
          <span style={{ color: "rgb(156 163 175)" }}>,</span>{" "}
          <span>
            <span style={{ color: "rgb(156 163 175)" }}>'</span>
            <span style={{ color: "rgb(252 211 77)" }}> Docker </span>
            <span style={{ color: "rgb(156 163 175)" }}>'</span>
          </span>
          <span style={{ color: "rgb(156 163 175)" }}>,</span>{" "}
          <span>
            <span style={{ color: "rgb(156 163 175)" }}>'</span>
            <span style={{ color: "rgb(252 211 77)" }}> AWS </span>
            <span style={{ color: "rgb(156 163 175)" }}>'</span>
          </span>
          <span style={{ color: "rgb(156 163 175)" }}>{"]"}</span>
          <span style={{ color: "rgb(156 163 175)" }}>,</span>
        </div>

        <div style={{ display: "flex", gap: "10px", marginLeft: "25px" }}>
          hardWorker :<span style={{ color: "rgb(251 146 60)" }}>true </span>
          <span style={{ color: "rgb(156 163 175)" }}>,</span>
        </div>
        <div style={{ display: "flex", gap: "10px", marginLeft: "25px" }}>
          quickLearner :<span style={{ color: "rgb(251 146 60)" }}>true </span>
          <span style={{ color: "rgb(156 163 175)" }}>,</span>
        </div>
        <div style={{ display: "flex", gap: "10px", marginLeft: "25px" }}>
          problemSolver :<span style={{ color: "rgb(251 146 60)" }}>true </span>
          <span style={{ color: "rgb(156 163 175)" }}>,</span>
        </div>

        <div style={{ display: "flex", gap: "10px", marginLeft: "25px" }}>
          <span style={{ color: "rgb(74 222 128)" }}>hireable :</span>
          <span>
            <span style={{ color: "rgb(251 146 60)" }}>function </span>
            <span style={{ color: "rgb(156 163 175)", marginRight: "3px" }}>
              {"("}
            </span>
            <span style={{ color: "rgb(156 163 175)" }}>{")"}</span>
          </span>
          <span style={{ color: "rgb(156 163 175)" }}>{"{"}</span>
        </div>
        <div style={{ display: "flex", gap: "10px", marginLeft: "50px" }}>
          <span style={{ color: "rgb(251 146 60)" }}>return </span>
          <span style={{ color: "rgb(156 163 175)", marginRight: "3px" }}>
            {"("}
          </span>
        </div>
        <div style={{ display: "flex", gap: "10px", marginLeft: "75px" }}>
          <span>
            {" "}
            <span style={{ color: "rgb(34 211 238)" }}>this.</span>hardWorker
          </span>
          <span style={{ color: "rgb(252 211 77)" }}>&&</span>
        </div>
        <div style={{ display: "flex", gap: "10px", marginLeft: "75px" }}>
          <span>
            {" "}
            <span style={{ color: "rgb(34 211 238)" }}>this.</span>problemSolver
          </span>
          <span style={{ color: "rgb(252 211 77)" }}>&&</span>
        </div>
        <div style={{ display: "flex", gap: "10px", marginLeft: "75px" }}>
          <span>
            {" "}
            <span style={{ color: "rgb(34 211 238)" }}>this.</span>skills.length
          </span>
          <span style={{ color: "rgb(252 211 77)" }}>{">="}</span>
          <span style={{ color: "rgb(251 146 60)" }}>{"5"}</span>
        </div>
        <div style={{ display: "flex", gap: "10px", marginLeft: "50px" }}>
          <span style={{ color: "rgb(156 163 175)", marginRight: "3px" }}>
            {");"}
          </span>
        </div>
        <div style={{ display: "flex", gap: "10px", marginLeft: "25px" }}>
          <span style={{ color: "rgb(156 163 175)", marginRight: "3px" }}>
            {"};"}
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

export default Editor;
