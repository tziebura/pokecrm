import React from 'react';
import { Helmet } from 'react-helmet';

const author = 'Tomasz Ziebura';
const meta = (author, title, description, keywords) => [
  {
    name: 'author',
    content: author,
  },
  {
    name: `description`,
    content: description,
  },
  {
    name: `keywords`,
    content: keywords,
  },
  {
    property: `og:title`,
    content: title,
  },
  {
    property: `og:description`,
    content: description,
  },
  {
    property: `og:type`,
    content: `website`,
  },
  {
    name: `twitter:card`,
    cotent: `summary`,
  },
  {
    name: `twitter:creator`,
    content: author,
  },
  {
    name: `twitter:title`,
    content: title,
  },
  {
    name: `twitter:description`,
    content: description,
  }
]
export const Head = ({ pageTitle, title, description, keywords }) => (
  <Helmet>
    <title>{ pageTitle ? `${pageTitle} - ${title}` : `${title}` }</title>
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    { meta(
      author,
      pageTitle ? `${pageTitle} - ${title}` : `${title}`,
      description,
      keywords.join(","),
      ).map(({ name, content}, key)=> <meta key={ key } name={ name } content={ content } /> )
    }
  </Helmet>
);

Head.defaultProps = {
  title: 'PokeCRM',
  keywords: ['JS','JSX','React'],
  description: 'Some description',
}