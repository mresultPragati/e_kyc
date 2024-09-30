import React from "react";
import {
  Column,
  ContactUs,
  Copyright,
  FooterWrapper,
  Logo,
  SectionWrapper,
  SocialIcons,
  SocialMediaText,
  WorkingHours,
} from "./FooterStyled";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";

export const Footer = () => {
  return (
    <>
      {/* <footer itemType="https://schema.org/WPFooter" id="colophon"> */}
      <FooterWrapper>
        <SectionWrapper
          sx={{
            display: {
              xs: "block",
              md: "flex",
            },
          }}
        >
          <Column>
            <a href="https://sahayogmultistate.com">
              <Logo
                src="https://sahayogmultistate.com/wp-content/uploads/2024/05/Sahayog-Website-Logo-2-1.png"
                alt="Sahayog Logo"
              />
            </a>
            <SocialMediaText>
              Connect with us on the below social media accounts!
            </SocialMediaText>
            <SocialIcons>
              <a
                href="https://www.facebook.com/sahayogmultistate"
                target="_blank"
                rel="noreferrer"
              >
                <span>
                  {" "}
                  <FacebookRoundedIcon />{" "}
                </span>
              </a>
              <a
                href="https://www.youtube.com/@sahayoggroup"
                target="_blank"
                rel="noreferrer"
              >
                <span>
                  <YouTubeIcon />
                </span>
              </a>
              <a
                href="https://www.instagram.com/sahayogmultistatesociety/"
                target="_blank"
                rel="noreferrer"
              >
                <span>
                  <InstagramIcon />
                </span>
              </a>
            </SocialIcons>
          </Column>

          <Column>
            <WorkingHours>
              <h4>Working Hours</h4>
              <p>Monday-Friday: 10:00am – 06:00pm</p>
              <p>Saturday: 10:00am – 04:00pm</p>
            </WorkingHours>
          </Column>

          <Column>
            <ContactUs>
              <h4>Contact Us</h4>
              <ul>
                <li>
                  <span>📍</span>
                  <span>
                    Shri Ji Complex, Gayatri Mandir Road, Opp. Bisen Petrol
                    Pump, Gondia, Maharashtra - 441614
                  </span>
                </li>
                <li>
                  <a href="tel:918327278888">
                    <span>📞</span>
                    <span>+918327278888</span>
                  </a>
                </li>
                <li>
                  <span>✉️</span>
                  <span>info@sahayogmultistate.com</span>
                </li>
              </ul>
            </ContactUs>
          </Column>
        </SectionWrapper>

        <Copyright>
          © 2024 Sahayog Multi-State Credit Co-operative Society Ltd. – All
          rights reserved.
          <br />A UNIT OF SAHAYOG MULTISTATE CREDIT COOPERATIVE
        </Copyright>
      </FooterWrapper>
      {/* </footer> */}
    </>
  );
};
