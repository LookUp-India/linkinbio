import { Button } from 'baseui/button';
import {
  ALIGN,
  HeaderNavigation,
  StyledNavigationItem,
  StyledNavigationList,
} from 'baseui/header-navigation';
import { graphql, useStaticQuery } from 'gatsby';
import * as React from 'react';
import Link from 'common/link';
import { StaticImage } from 'gatsby-plugin-image';
import SocialLink from 'common/socialLink';

const config = require('data/config');

const Header = ({ siteTitle }) => (
  <HeaderNavigation
    overrides={{
      Root: {
        style: {
          justifyContent: 'space-between',
        },
      },
    }}
  >
    <StyledNavigationList $align={ALIGN.left}>
      <StyledNavigationItem>
        <Link href="/">
          <StaticImage
            placeholder="blurred"
            src="../../static/images/titleLogo.png"
            height={70}
          />
        </Link>
      </StyledNavigationItem>
    </StyledNavigationList>
    <StyledNavigationList $align={ALIGN.right}>
      <StyledNavigationItem>
        <SocialLink href={config.socialLinks.instagram}>Instagram</SocialLink>
      </StyledNavigationItem>
      <StyledNavigationItem>
        <Link href={`mailto:${config.contact.email}`}>
          <Button>Let's talk</Button>
        </Link>
      </StyledNavigationItem>
    </StyledNavigationList>
  </HeaderNavigation>
);

export default Header;
