import type { Schema, Attribute } from '@strapi/strapi';

export interface BlogArticleHeadline extends Schema.Component {
  collectionName: 'components_blog_article_headlines';
  info: {
    displayName: 'headline';
  };
  attributes: {
    headline: Attribute.String & Attribute.Required;
    slug: Attribute.String & Attribute.Required;
  };
}

export interface BlogArticleImage extends Schema.Component {
  collectionName: 'components_blog_article_images';
  info: {
    displayName: 'image';
    description: '';
  };
  attributes: {
    info_blocks: Attribute.Relation<
      'blog-article.image',
      'oneToMany',
      'api::info-block.info-block'
    >;
  };
}

export interface BlogArticleLandscapeimage extends Schema.Component {
  collectionName: 'components_blog_article_landscapeimages';
  info: {
    displayName: 'landscapeimage';
  };
  attributes: {
    iamge: Attribute.Media & Attribute.Required;
    imageCaption: Attribute.String;
  };
}

export interface BlogArticleParagraphWithImage extends Schema.Component {
  collectionName: 'components_blog_article_paragraph_with_images';
  info: {
    displayName: 'ParagraphWithImage';
  };
  attributes: {
    paragraph: Attribute.RichText & Attribute.Required;
    image: Attribute.Media & Attribute.Required;
    isLandscape: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<true>;
    imageShowsRight: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<true>;
    imageCaption: Attribute.String;
  };
}

export interface BlogArticleParagraph extends Schema.Component {
  collectionName: 'components_blog_article_paragraphs';
  info: {
    displayName: 'paragraph';
  };
  attributes: {
    paragraph: Attribute.RichText;
  };
}

export interface InfoBlockButton extends Schema.Component {
  collectionName: 'components_info_block_buttons';
  info: {
    displayName: 'button';
    description: '';
  };
  attributes: {
    text: Attribute.String & Attribute.Required;
    color: Attribute.Enumeration<['turquoise', 'orange', 'biege']> &
      Attribute.Required &
      Attribute.DefaultTo<'turquoise'>;
    slug: Attribute.String & Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Shared {
    export interface Components {
      'blog-article.headline': BlogArticleHeadline;
      'blog-article.image': BlogArticleImage;
      'blog-article.landscapeimage': BlogArticleLandscapeimage;
      'blog-article.paragraph-with-image': BlogArticleParagraphWithImage;
      'blog-article.paragraph': BlogArticleParagraph;
      'info-block.button': InfoBlockButton;
    }
  }
}
