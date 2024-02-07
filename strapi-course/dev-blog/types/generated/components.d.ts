import type { Schema, Attribute } from '@strapi/strapi';

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
      'seo.seo-connection': SeoSeoConnection;
    }
  }
}
