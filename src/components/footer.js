import { Paragraph1 } from 'baseui/typography';
import Link from 'common/link';
import SocialLink from 'common/socialLink';
import { legalName, author, authorUrl } from 'data/config';
import * as React from 'react';

const Footer = () => {
  return (
    <footer>
      <Paragraph1
        overrides={{
          Block: {
            style: {
              textAlign: 'center',
            },
          },
        }}
      >
        Made by <SocialLink href={authorUrl}>{author}</SocialLink>
      </Paragraph1>
    </footer>
  );
};

export default Footer;
