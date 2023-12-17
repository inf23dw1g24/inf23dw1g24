'use strict';

var utils = require('../utils/writer.js');
var Calendar = require('../service/CalendarService');


module.exports.addCalendar = function addCalendar (req, res, next, body, userId) {
  Calendar.addCalendar(body, userId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteCalendar = function deleteCalendar (req, res, next, userId, calendarId) {
  Calendar.deleteCalendar(userId, calendarId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAllCalendars = function getAllCalendars (req, res, next, userId) {
  Calendar.getAllCalendars(userId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getcalendarById = function getcalendarById (req, res, next, userId, calendarId) {
  Calendar.getcalendarById(userId, calendarId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateCalendar = function updateCalendar (req, res, next, body, userId, calendarId) {
  Calendar.updateCalendar(body, userId, calendarId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
