'use strict';

/**
 * first-type service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::first-type.first-type');
