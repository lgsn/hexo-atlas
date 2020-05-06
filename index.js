/* global hexo */

'use strict';
if (!(hexo.config.photo && hexo.config.photo.enabled === false)) {
  hexo.config.archive_generator = Object.assign({
    per_page: 10,
    yearly: true,
    monthly: true,
    daily: false
  }, hexo.config.archive_generator);
  hexo.extend.generator.register('photo', require('./lib/generator'));
}
