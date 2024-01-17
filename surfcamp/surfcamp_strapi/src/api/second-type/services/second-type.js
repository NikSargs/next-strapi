'use strict';

/**
 * second-type service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::second-type.second-type');
