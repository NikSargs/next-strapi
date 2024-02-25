import type { Schema, Attribute } from '@strapi/strapi';

export interface LayoutFeaturedCourse extends Schema.Component {
  collectionName: 'components_layout_featured_courses';
  info: {
    displayName: 'featuredCourse';
    description: '';
  };
  attributes: {
    course: Attribute.Relation<
      'layout.featured-course',
      'oneToOne',
      'api::course.course'
    >;
    heading: Attribute.String;
    announcment: Attribute.Text;
  };
}

export interface LayoutHero extends Schema.Component {
  collectionName: 'components_layout_heroes';
  info: {
    displayName: 'Hero';
  };
  attributes: {
    callToAction: Attribute.String & Attribute.Required;
    image: Attribute.Media;
    buttons: Attribute.Component<'layout.link', true>;
  };
}

export interface LayoutLink extends Schema.Component {
  collectionName: 'components_layout_links';
  info: {
    displayName: 'link';
  };
  attributes: {
    text: Attribute.String;
    url: Attribute.String;
  };
}

export interface LayoutServicePreview extends Schema.Component {
  collectionName: 'components_layout_service_previews';
  info: {
    displayName: 'servicePreview';
  };
  attributes: {
    services: Attribute.Relation<
      'layout.service-preview',
      'oneToMany',
      'api::service.service'
    >;
  };
}

export interface SeoSeoConnection extends Schema.Component {
  collectionName: 'components_seo_seo_connections';
  info: {
    displayName: 'seoConnection';
    icon: 'search';
  };
  attributes: {
    seoTitle: Attribute.String;
    seoDescription: Attribute.Text;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'layout.featured-course': LayoutFeaturedCourse;
      'layout.hero': LayoutHero;
      'layout.link': LayoutLink;
      'layout.service-preview': LayoutServicePreview;
      'seo.seo-connection': SeoSeoConnection;
    }
  }
}
