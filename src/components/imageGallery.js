import { styled } from 'baseui';
import { FlexGrid, FlexGridItem } from 'baseui/flex-grid';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import * as React from 'react';

const Image = styled(Img, {
  objectFit: 'cover',
  objectPosition: '100% 0',
  width: '100%',
  height: '100%',
  maxHeight: '25rem',
});

const nodeURL = 'https://www.instagram.com/p';

const ImageGallery = () => {
  const {
    allInstaNode: { edges },
  } = useStaticQuery(graphql`
    {
      allInstaNode(sort: { fields: timestamp, order: DESC }, limit: 30) {
        edges {
          node {
            id
            caption
            localFile {
              childImageSharp {
                fluid(maxWidth: 1000, quality: 100) {
                  ...GatsbyImageSharpFluid
                  ...GatsbyImageSharpFluidLimitPresentationSize
                }
              }
            }
          }
        }
      }
    }
  `);

  const renderImages = () => {
    const images = edges.map(({ node }) => {
      const {
        id,
        caption,
        localFile: { childImageSharp },
      } = node;
      var urlMatches = caption.match(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi);

      var link = '';
      if (urlMatches == null) {
        link = nodeURL + '/' + id;
      } else {
        link = urlMatches[0];
      }

      return (
        <FlexGridItem key={id} flexGridItemIndex={id}>
          <a href={`${link}`} target="_blank">
            <Image
              loading="lazy"
              alt={caption || ''}
              fluid={childImageSharp.fluid}
            />
          </a>
        </FlexGridItem>
      );
    });

    return images;
  };

  return (
    <FlexGrid
      // Brackets specify the options for different breakpoints
      // 1 column for small devices
      // 2 columns for medium devices
      // 3 columns for large devices
      flexGridColumnCount={[3, 4, 5]}
      flexGridColumnGap={['scale0', 'scale200']}
      flexGridRowGap={['scale0', 'scale200']}
    >
      {renderImages()}
    </FlexGrid>
  );
};

export default ImageGallery;
