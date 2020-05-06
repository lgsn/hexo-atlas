'use strict';
const pagination = require('hexo-pagination');

const {sep, join } = require('path');

const fs = require('fs')

module.exports = function(locals) {

  let pathName = join(process.cwd(), this.theme.config.atlas_file_name)
  let allPhoto = fs.readdirSync(pathName);
  let photos = []

  if (allPhoto.length) {
    allPhoto.forEach(v => {
      photos = photos.concat(pagination('photo', allPhoto, {
        perPage: this.theme.config.atlas_page,
        layout: this.theme.config.atlas_module || 'atlas',
        format: 'page/%d/',
      }));
    })
  }
  return photos
};
