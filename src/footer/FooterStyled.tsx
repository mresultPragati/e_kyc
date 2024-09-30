import { Box } from "@mui/material";
import styled from "styled-components";

export const FooterWrapper = styled.div`
  background-color: #1c1c1c;
  padding: 20px;
  color: white;
  margin-top: 2rem;
  width: auto;
`;

export const SectionWrapper = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  padding: "20px 0",
  borderBottom: "1px solid #444",
});

// export const SectionWrapper = styled.div`
//   display: flex;
//   justify-content: space-between;
//   padding: 20px 0;
//   border-bottom: 1px solid #444;
// `;

export const Column = styled.div`
  flex: 1;
  padding: 10px;
  text-wrap: balance;
`;

export const Logo = styled.img`
  max-width: 200px;
`;

export const SocialMediaText = styled.p`
  margin-bottom: 15px;
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 10px;

  a {
    display: flex;
    align-items: center;
    color: #fff;
    text-decoration: none;

    span {
      margin-right: 5px;
    }
  }
`;

export const WorkingHours = styled.div`
  h4 {
    color: #9ccc65;
    margin-bottom: 10px;
  }

  p {
    margin-bottom: 10px;
    line-height: 1.5;
  }
`;

export const ContactUs = styled.div`
  h4 {
    color: #9ccc65;
    margin-bottom: 10px;
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      display: flex;
      align-items: center;
      margin-bottom: 10px;
      color: #fff;

      a {
        text-decoration: none;
        color: inherit;
      }
    }

    span {
      margin-right: 10px;
    }
  }
`;

export const Copyright = styled.div`
  padding: 20px 0;
  text-align: center;
  border-top: 1px solid #444;
  font-size: 14px;
  color: #9ccc65;
`;
