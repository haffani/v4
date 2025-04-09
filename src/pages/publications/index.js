import React from 'react';
import { graphql, Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import kebabCase from 'lodash/kebabCase';
import PropTypes from 'prop-types';
import { Layout } from '@components';
import { IconZap } from '@components/icons';
import styled from 'styled-components';
import { theme, mixins, media, Main } from '@styles';
const { colors, fontSizes, fonts } = theme;
import bazel from '../../images/bazel.png'
import shorturi from '../../images/shorturi.png'
import emv from '../../images/emv.png';
import docker from '../../images/docker.png';
import graphql1 from '../../images/graphql1.png';
import rou7 from '../../images/rou7.png';
import spring from '../../images/spring.png';
import observable from '../../images/observable.png';

const images = {
  bazel,
  shorturi,
  emv,
  docker,
  spring,
  rou7,
  graphql1,
  observable
};

const StyledMainContainer = styled(Main)`
  & > header {
    text-align: center;
    margin-bottom: 100px;

    a {
      &:hover,
      &:focus {
        cursor: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='48' viewport='0 0 100 100' style='fill:black;font-size:24px;'><text y='50%'>⚡</text></svg>")
            20 0,
          auto;
      }
    }
  }

  footer {
    ${mixins.flexBetween};
    margin-top: 20px;
    width: 100%;
  }
`;
const StyledGrid = styled.div`
  margin-top: 50px;

  .posts {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 15px;
    position: relative;
    ${media.desktop`grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));`};
  }
`;
const StyledPostInner = styled.div`
  ${mixins.boxShadow};
  ${mixins.flexBetween};
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  padding: 2rem 1.75rem;
  height: 100%;
  border-radius: ${theme.borderRadius};
  transition: ${theme.transition};
  background-color: ${colors.lightNavy};
  header,
  a {
    width: 100%;
  }
`;
const StyledPost = styled.div`
  transition: ${theme.transition};
  cursor: default;
  &:hover,
  &:focus {
    outline: 0;
    ${StyledPostInner} {
      transform: translateY(-5px);
    }
  }
`;
const StyledPostHeader = styled.div`
  ${mixins.flexBetween};
  margin-bottom: 30px;
`;
const StyledFolder = styled.div`
  color: ${colors.green};
  svg {
    width: 40px;
    height: 40px;
  }
`;
const StyledPostName = styled.h5`
  margin: 0 0 10px;
  font-size: ${fontSizes.xxl};
  color: ${colors.lightestSlate};
`;
const StyledPostDescription = styled.div`
  font-size: 17px;
  color: ${colors.lightSlate};
`;
const StyledDate = styled.span`
  text-transform: uppercase;
  font-family: ${fonts.SFMono};
  font-size: ${fontSizes.xs};
  color: ${colors.lightSlate};
`;
const StyledTags = styled.ul`
  display: flex;
  align-items: flex-end;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;
  list-style: none;

  li {
    font-family: ${fonts.SFMono};
    font-size: ${fontSizes.xs};
    color: ${colors.green};
    line-height: 1.75;
    margin-right: 15px;
    &:last-of-type {
      margin-right: 0;
    }
    a {
      ${mixins.inlineLink};
    }
  }
`;

const PublicationsPage = ({ location, data }) => {
  const posts = data.allMarkdownRemark.edges;

  return (
    <Layout location={location}>
      <Helmet>
        <title>Publications | Hamza AFFANI</title>
        <link rel="canonical" href="https://haffani.netlify.com/publications" />
      </Helmet>

      <StyledMainContainer>
        <header>
          <h1 className="big-title">Publications</h1>
          <p className="subtitle">
            <a href="https://haffani.netlify.com/" target="_blank" rel="noopener noreferrer">
              Here is a collection of my posts
            </a>
          </p>
        </header>

        <StyledGrid>
          <div className="posts">
            {posts.length > 0 &&
              posts.map(({ node }, i) => {
                const { frontmatter } = node;
                const { title, description, slug, date, img, tags } = frontmatter;
                const d = new Date(date);

                return (
                  <StyledPost key={i} tabIndex="0">
                    <StyledPostInner>
                      <header>
                        <Link to={slug}>
                          <StyledPostHeader>
                            <StyledFolder>
                              {img ? (
                                <img
                                  src={images[img]}
                                  alt={img}
                                  width="200"
                                />
                              ) : (
                                <IconZap />
                              )}
                            </StyledFolder>
                          </StyledPostHeader>
                          <StyledPostName>{title}</StyledPostName>
                          <StyledPostDescription>{description}</StyledPostDescription>
                        </Link>
                      </header>
                      <footer>
                        <StyledDate>{`${d.toLocaleDateString('fr-FR')}`}</StyledDate>
                        <StyledTags>
                          {tags.map((tag, i) => (
                            <li key={i}>
                              <Link to={`/publications/tags/${kebabCase(tag)}/`}>#{tag}</Link>
                            </li>
                          ))}
                        </StyledTags>
                      </footer>
                    </StyledPostInner>
                  </StyledPost>
                );
              })}
          </div>
        </StyledGrid>
      </StyledMainContainer>
    </Layout>
  );
};

PublicationsPage.propTypes = {
  location: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
};

export default PublicationsPage;

export const pageQuery = graphql`
  {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/posts/" }, frontmatter: { draft: { ne: true } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            title
            description
            slug
            date
            tags
            img
            draft
          }
          html
        }
      }
    }
  }
`;
