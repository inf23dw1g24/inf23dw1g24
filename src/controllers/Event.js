'use strict';

var utils = require('../utils/writer.js');
var Event = require('../service/EventService');

module.exports.addEvent = function addEvent (req, res, next, body, userId, calendarId) {
  Event.addEvent(body, userId, calendarId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteEvent = function deleteEvent (req, res, next, userId, calendarId, eventId) {
  Event.deleteEvent(userId, calendarId, eventId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAllEvents = function getAllEvents (req, res, next, userId, calendarId) {
  Event.getAllEvents(userId, calendarId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getEventById = function getEventById (req, res, next, userId, calendarId, eventId) {
  Event.getEventById(userId, calendarId, eventId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};


module.exports.updateEvent = function updateEvent (req, res, next, body, userId, calendarId, eventId) {
  Event.updateEvent(body, userId, calendarId, eventId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
