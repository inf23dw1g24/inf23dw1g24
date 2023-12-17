'use strict';

var utils = require('../utils/writer.js');
var Category = require('../service/CategoryService');

module.exports.addcategory = function addcategory (req, res, next, body, userId, calendarId) {
  Category.addcategory(body, userId, calendarId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteCategory = function deleteCategory (req, res, next, userId, calendarId, categoryId) {
  Category.deleteCategory(userId, calendarId, categoryId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAllCategories = function getAllCategories (req, res, next, userId, calendarId) {
  Category.getAllCategories(userId, calendarId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getCategoryById = function getCategoryById (req, res, next, userId, calendarId, categoryId) {
  Category.getCategoryById(userId, calendarId, categoryId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateCategory = function updateCategory (req, res, next, body, userId, calendarId, categoryId) {
  Category.updateCategory(body, userId, calendarId, categoryId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
