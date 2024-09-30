import React from "react";
import { HomeAboutUsBox, HomeDivBox, HomeServiceBox } from "./HomeStyled";
import { Box } from "@mui/material";

export const Home = () => {
  return (
    <>
      <div>
        <img
          style={{ width: "100%" }}
          src="https://static.ambitionbox.com/assets/v2/images/rs:fit:1280:960:false:false/bG9jYWw6Ly8vbG9nb3Mvb3JpZ2luYWxzL3NhaGF5b2ctbXVsdGlzdGF0ZS1jcmVkaXQtY28tb3BlcmF0aXZlLXNvY2lldHkuanBn.png"
        />
      </div>

      <Box sx={{ display: { xs: "block", md: "flex" } }}>
        <HomeDivBox color="#84c14b">
          <h4>Focus on Rural Banking </h4>
          <p>
            We prioritise the security of the deposits by helping farmers to
            understand their banking needs. It is our duty &amp; goal to
            contribute to society’s economic and social development.
          </p>{" "}
        </HomeDivBox>

        <HomeDivBox color="#f5f5f5">
          <h4>Growth of Clients </h4>
          <p>
            We prioritise the safety of the account holder’s capital &amp; give
            them the maximum benefit of their wealth. Account holders can get
            attractive principal and interest.
          </p>{" "}
        </HomeDivBox>

        <HomeDivBox color="#009be9">
          <h4>Empowering Women </h4>
          <p>
            By making women financially strong, there will be economic progress
            in the family, which will result in the economic and social
            development of the country.
          </p>{" "}
        </HomeDivBox>
      </Box>

      <HomeAboutUsBox
        sx={{
          display: {
            xs: "block",
            md: "flex",
          },
        }}
      >
        <Box sx={{ width: { xs: "auto", md: "50%" }, margin: "2rem 2rem" }}>
          <h6>
            <span>About Us </span>
          </h6>
          <h2>
            Providing Convenient &amp; Accessible Banking Services in rural
            Maharashtra
          </h2>{" "}
          <p>
            Sahayog Multi-state Credit Co-operative Society was started with a
            vision to provide convenient &amp; accessible banking services to
            the rural part of India, primarily the middle and lower middle
            class, weaker sections, women and farmers. We prioritise the
            security of their deposits, helping salaried businesswomen and
            farmers to understand their banking needs. It is our duty &amp; goal
            to contribute to society’s economic and social development by
            providing schemes, accessible loans, projects, and facilities.
          </p>{" "}
        </Box>
        <iframe
          frameBorder={0}
          allowFullScreen={false}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          title="Sh.Jayeshchandra Ramade, CMD Sahayog at 50th branch of Sahyog Multistate Credit Co-operative Society"
          width="440"
          height="260"
          src="https://www.youtube.com/embed/0CaAghwGmS4?controls=1&amp;rel=0&amp;playsinline=0&amp;modestbranding=0&amp;autoplay=0&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fsahayogmultistate.com&amp;widgetid=1"
          id="widget2"
        ></iframe>{" "}
      </HomeAboutUsBox>

      <HomeServiceBox>
        <h6>
          <span>Our Services </span>
        </h6>
        <p>
          With our unwavering faith and determination in the motto of “Where man
          is worthy than money”, we are moving on the path of progress with the
          trust of respected members, account holders, agents, and employees,
          self-valuable guidance. Sahayog Multi State Credit Co-op. Society Ltd.
          has provided continuous service to its numerous members.
        </p>{" "}
      </HomeServiceBox>
    </>
  );
};
