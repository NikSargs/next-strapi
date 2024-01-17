'use strict';

/**
 * third-type service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::third-type.third-type');
