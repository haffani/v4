import React from 'react';
import { FormattedIcon } from '@components/icons';
import { socialMedia } from '@config';
import styled from 'styled-components';
import { theme, mixins, media } from '@styles';

import GatsbyIcon from '../components/icons/gatby';
import ReactIcon from '../components/icons/react';
import NetlifyIcon from '../components/icons/netlify';
import pciplogo from '../images/pcipro.png';
const { colors, fontSizes, fonts } = theme;

const StyledPostName = styled.h5`
  display: inline-block;
  margin: 0 0 10px;
  font-size: ${fontSizes.smish};
  color: ${colors.lightestSlate};
`;

const StyledContainer = styled.footer`
  ${mixins.flexCenter};
  flex-direction: column;
  padding: 15px;
  text-align: center;
  height: auto;
  min-height: 70px;
  svg {
    height: 1.5rem;
    width: 1.5rem;
    margin: 0.4rem;
  }
`;

const StyledLogo = styled.div`
  img {
    width: 250px;
    &:hover,
    &:focus {
      svg {
        fill: ${colors.transGreen};
      }
    }
  }
`;

const StyledSocial = styled.div`
  color: ${colors.lightSlate};
  width: 100%;
  max-width: 270px;
  margin: 0 auto 10px;
  display: none;
  ${media.tablet`display: block;`};
`;
const StyledSocialList = styled.ul`
  ${mixins.flexBetween};
  padding: 0;
  margin: 0;
  list-style: none;
`;
const StyledSocialLink = styled.a`
  padding: 10px;
  svg {
    width: 20px;
    height: 20px;
  }
`;
const StyledMetadata = styled.div`
  font-family: ${fonts.SFMono};
  font-size: ${fontSizes.xs};
  line-height: 1;
`;
const StyledGitHubLink = styled.a`
  color: ${colors.lightSlate};
  padding: 10px;
`;

const Footer = () => (
  <StyledContainer>
    <StyledSocial>
      <StyledSocialList>
        {socialMedia &&
          socialMedia.map(({ name, url }, i) => (
            <li key={i}>
              <StyledSocialLink
                href={url}
                target="_blank"
                rel="nofollow noopener noreferrer"
                aria-label={name}>
                <FormattedIcon name={name} />
              </StyledSocialLink>
            </li>
          ))}
      </StyledSocialList>
    </StyledSocial>
    <StyledMetadata tabindex="-1">
      <StyledLogo tabindex="-1">
        <img src={pciplogo} alt="Logo" />
      </StyledLogo>
      <br />
      <br />

      <StyledPostName>HAMZA EL AFFANI 2024 | Payment Software Engineer | PCIP™</StyledPostName>
      <br />
      <StyledGitHubLink
        href="https://github.com/haffani/v4"
        target="_blank"
        rel="nofollow noopener noreferrer">
        <div>
          Built with
          <GatsbyIcon /> <ReactIcon /> <NetlifyIcon />{' '}
        </div>
      </StyledGitHubLink>
    </StyledMetadata>
  </StyledContainer>
);

export default Footer;
