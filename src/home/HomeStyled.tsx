import { Box } from "@mui/material";
import styled from "styled-components";

export const HomeDivBox = styled.div`
  padding: 30px;
  background-color: ${(props) => props.color || "white"};
  text-align: center;
`;

export const HomeAboutUsBox = styled(Box)({
  backgroundColor: "#f3f1ed",
  transition:
    "background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s",
  marginTop: 0,
  marginBottom: 0,
  padding: "100px 0",
  display: "flex",
  justifyContent: "space-between",
});

// export const HomeAboutUsBox = styled.div`
//   background-color: #f3f1ed;
//   transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s;
//   margin-top: 0;
//   margin-bottom: 0;
//   padding: 100px 0;
//   display: flex;
//   justify-content: space-between;
// `;

export const HomeServiceBox = styled.div`
  text-align: center;
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  max-width: 500px;
`;
