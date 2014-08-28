/*
Navicat MySQL Data Transfer

Source Server         : LTT
Source Server Version : 50616
Source Host           : localhost:3306
Source Database       : mini_crm

Target Server Type    : MYSQL
Target Server Version : 50616
File Encoding         : 65001

Date: 2014-08-28 18:05:20
*/

SET FOREIGN_KEY_CHECKS=0;
-- ----------------------------
-- Table structure for `countries`
-- ----------------------------
DROP TABLE IF EXISTS `countries`;
CREATE TABLE `countries` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `area` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `code` int(11) NOT NULL,
  `description` text COLLATE utf8_unicode_ci NOT NULL,
  `language` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of countries
-- ----------------------------

-- ----------------------------
-- Table structure for `fqa_category`
-- ----------------------------
DROP TABLE IF EXISTS `fqa_category`;
CREATE TABLE `fqa_category` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `description` text COLLATE utf8_unicode_ci,
  `created_at` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of fqa_category
-- ----------------------------
INSERT INTO `fqa_category` VALUES ('1', 'General', null, '2014-08-04 14:48:58', '2014-08-04 14:48:58');
INSERT INTO `fqa_category` VALUES ('2', 'Getting Started', null, '2014-08-04 14:49:06', '2014-08-04 14:49:06');
INSERT INTO `fqa_category` VALUES ('3', 'Pricing', null, '2014-08-04 14:49:08', '2014-08-04 14:49:08');
INSERT INTO `fqa_category` VALUES ('4', 'Other', null, '2014-08-04 14:49:12', '2014-08-04 14:49:12');

-- ----------------------------
-- Table structure for `fqas`
-- ----------------------------
DROP TABLE IF EXISTS `fqas`;
CREATE TABLE `fqas` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `content` text COLLATE utf8_unicode_ci NOT NULL,
  `view` int(11) NOT NULL,
  `category_id` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of fqas
-- ----------------------------
INSERT INTO `fqas` VALUES ('3', 'Why should I use CRM', 'CRM is the abbreviation for customer relationship management.Customer relationship management entails all aspects of interaction that a company has with a customer, whether it is sales or service-related. While the phrase customer relationship management is most commonly used to describe a business-customer relationship, CRM systems are also used to manage business contacts, clients, contract wins and sales leads.', '2', '1', '2014-08-01 08:01:30', '2014-08-04 09:15:19');
INSERT INTO `fqas` VALUES ('4', 'Can I use other support software systems', 'CRM is the abbreviation for customer relationship management.Customer relationship management entails all aspects of interaction that a company has with a customer, whether it is sales or service-related. While the phrase customer relationship management is most commonly used to describe a business-customer relationship, CRM systems are also used to manage business contacts, clients, contract wins and sales leads.', '2', '3', '2014-08-01 09:00:17', '2014-08-04 09:15:07');
INSERT INTO `fqas` VALUES ('5', 'How do I sign up to CRM', 'CRM is the abbreviation for customer relationship management.Customer relationship management entails all aspects of interaction that a company has with a customer, whether it is sales or service-related. While the phrase customer relationship management is most commonly used to describe a business-customer relationship, CRM systems are also used to manage business contacts, clients, contract wins and sales leads.', '2', '1', '2014-08-01 09:17:53', '2014-08-04 01:38:56');
INSERT INTO `fqas` VALUES ('7', 'What is my own support website', 'CRM is the abbreviation for customer relationship management.Customer relationship management entails all aspects of interaction that a company has with a customer, whether it is sales or service-related. While the phrase customer relationship management is most commonly used to describe a business-customer relationship, CRM systems are also used to manage business contacts, clients, contract wins and sales leads.', '5', '2', '2014-08-02 02:07:46', '2014-08-16 11:21:28');
INSERT INTO `fqas` VALUES ('8', 'How do I log in to CRM', '<p>CRM is the abbreviation for customer relationship management.Customer relationship management entails all aspects of interaction that a company has with a customer, whether it is sales or service-related. While the phrase customer relationship management is most commonly used to describe a business-customer relationship, CRM systems are also used to manage business contacts, clients, contract wins and sales leads.</p>\r\n', '2', '1', '2014-08-02 02:09:43', '2014-08-15 11:16:42');
INSERT INTO `fqas` VALUES ('9', 'How do customers log in to my support website', 'CRM is the abbreviation for customer relationship management.Customer relationship management entails all aspects of interaction that a company has with a customer, whether it is sales or service-related. While the phrase customer relationship management is most commonly used to describe a business-customer relationship, CRM systems are also used to manage business contacts, clients, contract wins and sales leads.', '2', '2', '2014-08-02 03:50:40', '2014-08-04 08:44:18');
INSERT INTO `fqas` VALUES ('10', 'How do customers open a ticket', 'CRM is the abbreviation for customer relationship management.Customer relationship management entails all aspects of interaction that a company has with a customer, whether it is sales or service-related. While the phrase customer relationship management is most commonly used to describe a business-customer relationship, CRM systems are also used to manage business contacts, clients, contract wins and sales leads.', '2', '2', '0000-00-00 00:00:00', '0000-00-00 00:00:00');
INSERT INTO `fqas` VALUES ('11', 'How long is the free trial ', 'CRM is the abbreviation for customer relationship management.Customer relationship management entails all aspects of interaction that a company has with a customer, whether it is sales or service-related. While the phrase customer relationship management is most commonly used to describe a business-customer relationship, CRM systems are also used to manage business contacts, clients, contract wins and sales leads.', '3', '2', '0000-00-00 00:00:00', '0000-00-00 00:00:00');
INSERT INTO `fqas` VALUES ('12', 'What plans does CRM  offer', 'CRM is the abbreviation for customer relationship management.Customer relationship management entails all aspects of interaction that a company has with a customer, whether it is sales or service-related. While the phrase customer relationship management is most commonly used to describe a business-customer relationship, CRM systems are also used to manage business contacts, clients, contract wins and sales leads.', '7', '2', '0000-00-00 00:00:00', '2014-08-15 09:45:58');
INSERT INTO `fqas` VALUES ('13', 'Which plan should I choose', 'CRM is the abbreviation for customer relationship management.Customer relationship management entails all aspects of interaction that a company has with a customer, whether it is sales or service-related. While the phrase customer relationship management is most commonly used to describe a business-customer relationship, CRM systems are also used to manage business contacts, clients, contract wins and sales leads.', '4', '2', '0000-00-00 00:00:00', '2014-08-13 10:45:44');
INSERT INTO `fqas` VALUES ('14', 'How payments are made', 'CRM is the abbreviation for customer relationship management.Customer relationship management entails all aspects of interaction that a company has with a customer, whether it is sales or service-related. While the phrase customer relationship management is most commonly used to describe a business-customer relationship, CRM systems are also used to manage business contacts, clients, contract wins and sales leads.', '4', '2', '0000-00-00 00:00:00', '2014-08-05 11:07:44');
INSERT INTO `fqas` VALUES ('15', 'Can you send me updates about CRM', 'CRM is the abbreviation for customer relationship management.Customer relationship management entails all aspects of interaction that a company has with a customer, whether it is sales or service-related. While the phrase customer relationship management is most commonly used to describe a business-customer relationship, CRM systems are also used to manage business contacts, clients, contract wins and sales leads.', '5', '2', '0000-00-00 00:00:00', '2014-08-09 04:55:17');
INSERT INTO `fqas` VALUES ('18', 'Can I use other support software systems', '<p>CRM is the abbreviation for customer relationship management.Customer relationship management entails all aspects of interaction that a company has with a customer, whether it is sales or service-related. While the phrase customer relationship management is most commonly used to describe a business-customer relationship, CRM systems are also used to manage business contacts, clients, contract wins and sales leads.</p>\r\n', '0', '3', '2014-08-19 01:57:27', '2014-08-19 01:57:27');

-- ----------------------------
-- Table structure for `group_users`
-- ----------------------------
DROP TABLE IF EXISTS `group_users`;
CREATE TABLE `group_users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `description` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of group_users
-- ----------------------------
INSERT INTO `group_users` VALUES ('1', 'admin', '', '2014-07-15 04:30:54', '2014-07-15 04:30:54');
INSERT INTO `group_users` VALUES ('2', 'staff', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00');
INSERT INTO `group_users` VALUES ('3', 'customer', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00');
INSERT INTO `group_users` VALUES ('4', 'employee', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00');

-- ----------------------------
-- Table structure for `history`
-- ----------------------------
DROP TABLE IF EXISTS `history`;
CREATE TABLE `history` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `status` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `content` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `ip` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `position` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `link` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of history
-- ----------------------------

-- ----------------------------
-- Table structure for `languages`
-- ----------------------------
DROP TABLE IF EXISTS `languages`;
CREATE TABLE `languages` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `code` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `postcode` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `area` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `status` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of languages
-- ----------------------------
INSERT INTO `languages` VALUES ('1', 'English', 'en', '', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'publish');
INSERT INTO `languages` VALUES ('2', 'العربية', 'sa', '', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'publish');

-- ----------------------------
-- Table structure for `messages`
-- ----------------------------
DROP TABLE IF EXISTS `messages`;
CREATE TABLE `messages` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `content` text COLLATE utf8_unicode_ci,
  `activated` tinyint(4) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `type` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `status` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `assign_to` int(11) DEFAULT NULL,
  `from` int(11) DEFAULT NULL,
  `link` text COLLATE utf8_unicode_ci,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=199 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of messages
-- ----------------------------
INSERT INTO `messages` VALUES ('133', 'Support ticket from customerTK72-1', '<a href=\"http://192.168.1.123:8000/manager/tickets/TK72-1\">At TK72-1</a>', '1', '2014-08-20 08:18:49', '2014-08-20 01:18:49', 'work', null, '98', '1', null);
INSERT INTO `messages` VALUES ('134', 'Support ticket from customer TK73-110', '<a href=\"http://192.168.1.123:8000/manager/tickets/TK73-110\">At TK73-110</a>', '1', '2014-08-20 09:24:32', '2014-08-20 02:24:32', 'work', null, '93', '1', null);
INSERT INTO `messages` VALUES ('135', 'Support ticket from customer TK73-110', '<a href=\"http://192.168.1.123:8000/manager/tickets/TK73-110\">At TK73-110</a>', '1', '2014-08-20 09:24:33', '2014-08-20 02:24:33', 'work', null, '93', '1', null);
INSERT INTO `messages` VALUES ('136', 'Support ticket Admin Can you help me? - TK72-1', '<p>ffffffffffffffffffffffffffffffffffff</p>\r\n<a href=\"http://192.168.1.123:8000/client/tickets/TK72-1\">At TK72-1</a>', '0', '2014-08-20 02:23:10', '2014-08-20 02:23:10', 'work', null, '141', '98', null);
INSERT INTO `messages` VALUES ('137', 'Support ticket Admin eeeeeeeeeeee - TK73-110', '<p>fffffffffffffffff</p>\r\n<a href=\"http://192.168.1.123:8000/client/tickets/TK73-110\">At TK73-110</a>', '1', '2014-08-23 15:04:01', '2014-08-23 08:04:01', 'work', null, '99', '93', null);
INSERT INTO `messages` VALUES ('138', 'Support ticket Admin eeeeeeeeeeee - TK73-110', '<p>fffffffffffffffff</p>\r\n<a href=\"http://192.168.1.123:8000/client/tickets/TK73-110\">At TK73-110</a>', '1', '2014-08-23 15:03:56', '2014-08-23 08:03:56', 'work', null, '99', '93', null);
INSERT INTO `messages` VALUES ('139', 'Support ticket Admin eeeeeeeeeeee - TK73-110', '<p>fffffffffffffffff</p>\r\n<a href=\"http://192.168.1.123:8000/client/tickets/TK73-110\">At TK73-110</a>', '0', '2014-08-20 02:31:39', '2014-08-20 02:31:39', 'work', null, '110', '93', null);
INSERT INTO `messages` VALUES ('140', 'Support ticket Admin eeeeeeeeeeee - TK73-110', '<p>fffffffffffffffff</p>\r\n<a href=\"http://192.168.1.123:8000/client/tickets/TK73-110\">At TK73-110</a>', '1', '2014-08-23 11:16:08', '2014-08-23 04:16:08', 'work', null, '99', '93', null);
INSERT INTO `messages` VALUES ('141', 'Support ticket Admin eeeeeeeeeeee - TK73-110', '<p>fffffffffffffffff</p>\r\n<a href=\"http://192.168.1.123:8000/client/tickets/TK73-110\">At TK73-110</a>', '0', '2014-08-20 02:34:08', '2014-08-20 02:34:08', 'work', null, '110', '93', null);
INSERT INTO `messages` VALUES ('142', 'Support ticket from customer TK79-107', '<a href=\"http://192.168.1.123:8000/manager/tickets/TK79-107\">At TK79-107</a>', '1', '2014-08-23 14:40:02', '2014-08-23 07:40:02', 'work', null, '98', '1', null);
INSERT INTO `messages` VALUES ('143', 'Support ticket from customer TK80-107', '<a href=\"http://192.168.1.123:8000/manager/tickets/TK80-107\">At TK80-107</a>', '1', '2014-08-23 14:44:33', '2014-08-23 07:44:33', 'work', null, '98', '1', null);
INSERT INTO `messages` VALUES ('144', 'Support ticket from customer TK81-107', '<a href=\"http://192.168.1.123:8000/manager/tickets/TK81-107\">At TK81-107</a>', '0', '2014-08-22 01:45:20', '2014-08-22 01:45:20', 'work', null, '93', '1', null);
INSERT INTO `messages` VALUES ('145', 'Support ticket from customer TK82-99', '<a href=\"http://192.168.1.123:8000/manager/tickets/TK82-99\">At TK82-99</a>', '0', '2014-08-22 01:45:35', '2014-08-22 01:45:35', 'work', null, '93', '1', null);
INSERT INTO `messages` VALUES ('146', 'Close ticketTK82-99', '<p>Thank you!, we happy when served customer</p>\n                                                </br><a href=\"http://192.168.1.123:8000/client/tickets/TK82-99\">Conplete ticket TK82-99</a>\n                                                </br><a href=\"http://192.168.1.123:8000/client/races/TK82-99\">Please Race ticket at </a>', '1', '2014-08-23 14:31:47', '2014-08-23 07:31:47', 'work', null, '99', '1', null);
INSERT INTO `messages` VALUES ('147', 'Support ticket from customerTK92-1', '<a href=\"http://192.168.1.123:8000/manager/tickets/TK92-1\">At TK92-1</a>', '0', '2014-08-22 07:33:28', '2014-08-22 07:33:28', 'work', null, '93', '1', null);
INSERT INTO `messages` VALUES ('148', 'Support ticket Admin tjuuuuuuuuuu - TK92-1', '<p>&#39;f</p>\r\n<a href=\"http://192.168.1.123:8000/client/tickets/TK92-1\">At TK92-1</a>', '1', '2014-08-25 10:14:35', '2014-08-25 03:14:35', 'work', null, '107', '1', null);
INSERT INTO `messages` VALUES ('149', 'Support ticket Admin tjuuuuuuuuuu - TK92-1', '<p>klgh</p>\r\n<a href=\"http://192.168.1.123:8000/client/tickets/TK92-1\">At TK92-1</a>', '1', '2014-08-25 10:14:35', '2014-08-25 03:14:35', 'work', null, '107', '1', null);
INSERT INTO `messages` VALUES ('150', 'Support ticket from customerTK93-1', '<a href=\"http://192.168.1.123:8000/manager/tickets/TK93-1\">At TK93-1</a>', '1', '2014-08-23 14:45:53', '2014-08-23 07:45:53', 'work', null, '98', '1', null);
INSERT INTO `messages` VALUES ('151', 'Support ticket from customerTK94-1', '<a href=\"http://192.168.1.123:8000/manager/tickets/TK94-1\">At TK94-1</a>', '0', '2014-08-23 02:08:27', '2014-08-23 02:08:27', 'work', null, '143', '1', null);
INSERT INTO `messages` VALUES ('152', 'Support ticket Admin rjartujhs - TK94-1', '<p>;kjm;/</p>\r\n<a href=\"http://192.168.1.123:8000/client/tickets/TK94-1\">At TK94-1</a>', '1', '2014-08-23 15:04:08', '2014-08-23 08:04:08', 'work', null, '99', '1', null);
INSERT INTO `messages` VALUES ('153', 'Support ticket Admin rjartujhs - TK94-1', '<p>ddddddd</p>\r\n<a href=\"http://192.168.1.123:8000/client/tickets/TK94-1\">At TK94-1</a>', '1', '2014-08-23 11:02:23', '2014-08-23 04:02:23', 'work', null, '99', '1', null);
INSERT INTO `messages` VALUES ('154', 'Titcket CRM From customer - rjartujhs - TK94-1', '<p>s</p>\r\n - <a href=\"http://192.168.1.123:8000/manager/tickets/TK94-1\">Visit</a>', '0', '2014-08-23 04:14:49', '2014-08-23 04:14:49', 'work', null, '143', '99', null);
INSERT INTO `messages` VALUES ('155', 'Support ticket Admin ffffff - TK105-99', '<p>dddddđ</p>\r\n<a href=\"http://192.168.1.123:8000/client/tickets/TK105-99\">At TK105-99</a>', '1', '2014-08-23 15:07:01', '2014-08-23 08:07:01', 'work', null, '99', '1', null);
INSERT INTO `messages` VALUES ('156', 'Titcket CRM From customer - rjartujhs - TK94-1', '<p>7i</p>\r\n - <a href=\"http://192.168.1.123:8000/manager/tickets/TK94-1\">Visit</a>', '0', '2014-08-23 04:15:50', '2014-08-23 04:15:50', 'work', null, '143', '99', null);
INSERT INTO `messages` VALUES ('157', 'Close ticketTK105-99', '<p>Thank you!, we happy when served customer</p>\n                                                </br><a href=\"http://192.168.1.123:8000/client/tickets/TK105-99\">Conplete ticket TK105-99</a>\n                                                </br><a href=\"http://192.168.1.123:8000/client/races/TK105-99\">Please Race ticket at </a>', '1', '2014-08-23 14:31:55', '2014-08-23 07:31:55', 'work', null, '99', '1', null);
INSERT INTO `messages` VALUES ('158', 'Support ticket from customer TK105-99', '<a href=\"http://192.168.1.123:8000/manager/tickets/TK105-99\">At TK105-99</a>', '1', '2014-08-23 15:07:08', '2014-08-23 08:07:08', 'work', null, '98', '1', null);
INSERT INTO `messages` VALUES ('159', 'Support ticket from customer TK105-99', '<a href=\"http://192.168.1.123:8000/manager/tickets/TK105-99\">At TK105-99</a>', '1', '2014-08-23 15:07:08', '2014-08-23 08:07:08', 'work', null, '98', '1', null);
INSERT INTO `messages` VALUES ('160', 'Close ticketTK105-99', '<p>Thank you!, we happy when served customer</p>\n                                                </br><a href=\"http://192.168.1.123:8000/client/tickets/TK105-99\">Conplete ticket TK105-99</a>\n                                                </br><a href=\"http://192.168.1.123:8000/client/races/TK105-99\">Please Race ticket at </a>', '1', '2014-08-23 13:14:23', '2014-08-23 06:14:23', 'work', null, '99', '1', null);
INSERT INTO `messages` VALUES ('161', 'Titcket CRM From customer - ffffff - TK105-99', '<p>dddddddđ</p>\r\n - <a href=\"http://192.168.1.123:8000/manager/tickets/TK105-99\">Visit</a>', '1', '2014-08-23 14:44:45', '2014-08-23 07:44:45', 'work', null, '98', '99', null);
INSERT INTO `messages` VALUES ('162', 'Racing for me from ticketTK105-99', '<p>Customer have race for you with level <b>unhappy</b> <h3></h3>', '1', '2014-08-23 14:44:15', '2014-08-23 07:44:15', 'race', null, '98', '99', null);
INSERT INTO `messages` VALUES ('163', 'Support ticket from customer TK103-99', '<a href=\"http://192.168.1.123:8000/manager/tickets/TK103-99\">At TK103-99</a>', '1', '2014-08-23 14:40:07', '2014-08-23 07:40:07', 'work', null, '98', '1', null);
INSERT INTO `messages` VALUES ('164', 'Support ticket from customer TK103-99', '<a href=\"http://192.168.1.123:8000/manager/tickets/TK103-99\">At TK103-99</a>', '1', '2014-08-23 13:42:46', '2014-08-23 06:42:46', 'work', null, '98', '1', null);
INSERT INTO `messages` VALUES ('165', 'Support ticket Admin reeeeeeeeeeeeeeeg - TK103-99', '<p>ffffffffff</p>\r\n<a href=\"http://192.168.1.123:8000/client/tickets/TK103-99\">At TK103-99</a>', '1', '2014-08-23 15:04:04', '2014-08-23 08:04:04', 'work', null, '99', '1', null);
INSERT INTO `messages` VALUES ('166', 'Support ticket Admin reeeeeeeeeeeeeeeg - TK103-99', '<p>eeeeeeeeeeeeeeeeeeeeeeeeeeeee</p>\r\n<a href=\"http://192.168.1.123:8000/client/tickets/TK103-99\">At TK103-99</a>', '1', '2014-08-23 13:44:26', '2014-08-23 06:44:26', 'work', null, '99', '98', null);
INSERT INTO `messages` VALUES ('167', 'Titcket CRM From customer - adfijsd;fsdfjjsdfljsdjfl - TK108-98', '<p>alfjlasf</p>\r\n - <a href=\"http://192.168.1.123:8000/manager/tickets/TK108-98\">Visit</a>', '0', '2014-08-23 11:18:02', '2014-08-23 11:18:02', 'work', null, '98', '102', null);
INSERT INTO `messages` VALUES ('168', 'Support ticket from customer TK112-107', '<a href=\"http://192.168.1.123:8000/manager/tickets/TK112-107\">At TK112-107</a>', '0', '2014-08-25 02:36:57', '2014-08-25 02:36:57', 'work', null, '98', '1', null);
INSERT INTO `messages` VALUES ('169', 'Close ticketTK112-107', '<p>Thank you!, we happy when served customer</p>\n                                                </br><a href=\"http://192.168.1.123:8000/client/tickets/TK112-107\">Conplete ticket TK112-107</a>\n                                                </br><a href=\"http://192.168.1.123:8000/client/races/TK112-107\">Please Race ticket at </a>', '1', '2014-08-25 10:14:13', '2014-08-25 03:14:13', 'work', null, '107', '1', null);
INSERT INTO `messages` VALUES ('170', 'Support ticket Admin ancvg;QÁDA - TK111-113', '<p>anh da doc, chu co the ve</p>\r\n<a href=\"http://192.168.1.123:8000/client/tickets/TK111-113\">At TK111-113</a>', '1', '2014-08-25 11:39:46', '2014-08-25 04:39:46', 'work', null, '113', '1', null);
INSERT INTO `messages` VALUES ('171', 'Support ticket from customer TK105-99', '<a href=\"http://192.168.1.123:8000/manager/tickets/TK105-99\">At TK105-99</a>', '0', '2014-08-25 09:50:15', '2014-08-25 09:50:15', 'work', null, '98', '1', null);
INSERT INTO `messages` VALUES ('172', 'Support ticket from customerTK113-1', '<a href=\"http://192.168.1.123:8000/manager/tickets/TK113-1\">At TK113-1</a>', '0', '2014-08-26 01:24:08', '2014-08-26 01:24:08', 'work', null, '143', '1', null);
INSERT INTO `messages` VALUES ('173', 'Support ticket Admin ddddddddd - TK113-1', '<p>ffffffffffffliafjs</p>\r\n\r\n<p>&nbsp;</p>\r\n<a href=\"http://192.168.1.123:8000/client/tickets/TK113-1\">At TK113-1</a>', '1', '2014-08-27 10:59:40', '2014-08-27 03:59:40', 'work', null, '99', '1', null);
INSERT INTO `messages` VALUES ('174', 'Support ticket from customer TK113-1', '<a href=\"http://192.168.1.123:8000/manager/tickets/TK113-1\">At TK113-1</a>', '0', '2014-08-26 04:08:04', '2014-08-26 04:08:04', 'work', null, '143', '1', null);
INSERT INTO `messages` VALUES ('175', 'Support ticket Admin uuuuuuuu - TK109-98', '<p>faljflaf</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n<a href=\"http://192.168.1.123:8000/client/tickets/TK109-98\">At TK109-98</a>', '1', '2014-08-27 10:59:40', '2014-08-27 03:59:40', 'work', null, '99', '1', null);
INSERT INTO `messages` VALUES ('176', 'Support ticket Admin i think , i will pass - TK112-107', '<p>dddddddddd</p>\r\n<a href=\"http://192.168.1.123:8000/client/tickets/TK112-107\">At TK112-107</a>', '0', '2014-08-26 08:23:40', '2014-08-26 08:23:40', 'work', null, '107', '1', null);
INSERT INTO `messages` VALUES ('177', 'Support ticket Admin ancvg;QÁDA - TK111-113', '<p>test data sad</p>\r\n<a href=\"http://192.168.1.123:8000/client/tickets/TK111-113\">At TK111-113</a>', '1', '2014-08-26 16:09:28', '2014-08-26 09:09:28', 'work', null, '113', '1', null);
INSERT INTO `messages` VALUES ('178', 'Support ticket Admin ancvg;QÁDA - TK111-113', '<p>met qua di oi troi oi la troi</p>\r\n<a href=\"http://192.168.1.123:8000/client/tickets/TK111-113\">At TK111-113</a>', '1', '2014-08-26 16:09:28', '2014-08-26 09:09:28', 'work', null, '113', '1', null);
INSERT INTO `messages` VALUES ('179', 'Please confirm ticket TK112-107', 'You have created <a href=\'http://192.168.1.123:8000/client/tickets/TK112-107\'>TK112-107</a> \n                       if customer agree or after 2 days no actions come from customer. We will change status of ticket to resolved.', '0', '2014-08-26 09:16:45', '2014-08-26 09:16:45', 'work', null, '107', '1', null);
INSERT INTO `messages` VALUES ('180', 'Support ticket Admin ancvg;QÁDA - TK110-113', '<p>DDDDDD</p>\r\n<a href=\"http://192.168.1.123:8000/client/tickets/TK110-113\">At TK110-113</a>', '1', '2014-08-26 18:09:36', '2014-08-26 11:09:36', 'work', null, '113', '1', null);
INSERT INTO `messages` VALUES ('181', 'Support ticket Admin ancvg;QÁDA - TK110-113', '<p>HHHHHHHHHHHHHH</p>\r\n<a href=\"http://192.168.1.123:8000/client/tickets/TK110-113\">At TK110-113</a>', '1', '2014-08-26 17:59:09', '2014-08-26 10:59:09', 'work', null, '113', '1', null);
INSERT INTO `messages` VALUES ('182', 'Close ticketTK112-107', '<p>Thank you!, we happy when have served customer</p>\n                                                        </br><a href=\"http://192.168.1.123:8000/client/tickets/TK112-107\">Conplete ticket TK112-107</a>\n                                                        </br><a href=\"http://192.168.1.123:8000/client/races/TK112-107\">Please Race ticket at </a>', '0', '2014-08-26 11:21:26', '2014-08-26 11:21:26', 'work', null, '107', '1', null);
INSERT INTO `messages` VALUES ('183', 'Close ticketTK112-107', '<p>Thank you!, we happy when have served customer</p>\n                                                        </br><a href=\"http://192.168.1.123:8000/client/tickets/TK112-107\">Conplete ticket TK112-107</a>\n                                                        </br><a href=\"http://192.168.1.123:8000/client/races/TK112-107\">Please Race ticket at </a>', '0', '2014-08-26 11:22:16', '2014-08-26 11:22:16', 'work', null, '107', '1', null);
INSERT INTO `messages` VALUES ('184', 'Close ticketTK114-99', '<p>Thank you!, we happy when have served customer</p>\n                                                        </br><a href=\"http://192.168.1.123:8000/client/tickets/TK114-99\">Conplete ticket TK114-99</a>\n                                                        </br><a href=\"http://192.168.1.123:8000/client/races/TK114-99\">Please Race ticket at </a>', '1', '2014-08-27 10:59:40', '2014-08-27 03:59:40', 'work', null, '99', '1', null);
INSERT INTO `messages` VALUES ('185', 'Close ticketTK114-99', '<p>Thank you!, we happy when have served customer</p>\n                                                        </br><a href=\"http://192.168.1.123:8000/client/tickets/TK114-99\">Conplete ticket TK114-99</a>\n                                                        </br><a href=\"http://192.168.1.123:8000/client/races/TK114-99\">Please Race ticket at </a>', '1', '2014-08-27 10:59:40', '2014-08-27 03:59:40', 'work', null, '99', '1', null);
INSERT INTO `messages` VALUES ('186', 'Titcket CRM From customer - I need you help me - TK114-99', '<p>sssssssssss</p>\r\n - <a href=\"http://192.168.1.123:8000/manager/tickets/TK114-99\">Visit</a>', '0', '2014-08-27 02:08:22', '2014-08-27 02:08:22', 'work', null, '93', '99', null);
INSERT INTO `messages` VALUES ('187', 'Close ticketTK114-99', '<p>Thank you!, we happy when have served customer</p>\n                                                        </br><a href=\"http://192.168.1.123:8000/client/tickets/TK114-99\">Conplete ticket TK114-99</a>\n                                                        </br><a href=\"http://192.168.1.123:8000/client/races/TK114-99\">Please Race ticket at </a>', '1', '2014-08-27 10:59:40', '2014-08-27 03:59:40', 'work', null, '99', '1', null);
INSERT INTO `messages` VALUES ('188', 'Support ticket Admin I need you help me - TK114-99', '<p>dm</p>\r\n<a href=\"http://192.168.1.123:8000/client/tickets/TK114-99\">At TK114-99</a>', '1', '2014-08-27 10:59:40', '2014-08-27 03:59:40', 'work', null, '99', '1', null);
INSERT INTO `messages` VALUES ('189', 'Please confirm ticket TK114-99', 'You have created <a href=\'http://192.168.1.123:8000/client/tickets/TK114-99\'>TK114-99</a> \n                if customer agree or after 2 days no actions come from customer. We will change status of ticket to resolved.', '1', '2014-08-27 10:59:40', '2014-08-27 03:59:40', 'work', null, '99', '1', null);
INSERT INTO `messages` VALUES ('190', 'Close ticketTK102-99', '<p>Thank you!, we happy when have served customer</p>\n                                                        </br><a href=\"http://192.168.1.123:8000/client/tickets/TK102-99\">Conplete ticket TK102-99</a>\n                                                        </br><a href=\"http://192.168.1.123:8000/client/races/TK102-99\">Please Race ticket at </a>', '1', '2014-08-27 10:59:40', '2014-08-27 03:59:40', 'work', null, '99', '1', null);
INSERT INTO `messages` VALUES ('191', 'Close ticketTK114-99', '<p>Thank you!, we happy when have served customer</p>\n                                                        </br><a href=\"http://192.168.1.123:8000/client/tickets/TK114-99\">Conplete ticket TK114-99</a>\n                                                        </br><a href=\"http://192.168.1.123:8000/client/races/TK114-99\">Please Race ticket at </a>', '1', '2014-08-27 10:59:32', '2014-08-27 03:59:32', 'work', null, '99', '1', null);
INSERT INTO `messages` VALUES ('192', 'Close ticketTK112-107', '<p>Thank you!, we happy when have served customer</p>\n                                                        </br><a href=\"http://192.168.1.123:8000/client/tickets/TK112-107\">Conplete ticket TK112-107</a>\n                                                        </br><a href=\"http://192.168.1.123:8000/client/races/TK112-107\">Please Race ticket at </a>', '0', '2014-08-27 04:08:32', '2014-08-27 04:08:32', 'work', null, '107', '1', null);
INSERT INTO `messages` VALUES ('193', 'Support ticket Admin 3000 tu vung oxford - TK116-99', '<p>sssssssssssss</p>\r\n<a href=\"http://192.168.1.123:8000/client/tickets/TK116-99\">At TK116-99</a>', '1', '2014-08-27 11:22:43', '2014-08-27 04:22:43', 'work', null, '99', '1', null);
INSERT INTO `messages` VALUES ('194', 'Close ticketTK110-113', '<p>Thank you!, we happy when have served customer</p>\n                                                        </br><a href=\"http://192.168.1.123:8000/client/tickets/TK110-113\">Conplete ticket TK110-113</a>\n                                                        </br><a href=\"http://192.168.1.123:8000/client/races/TK110-113\">Please Race ticket at </a>', '1', '2014-08-27 13:37:38', '2014-08-27 06:37:38', 'work', null, '113', '1', null);
INSERT INTO `messages` VALUES ('195', 'Close ticketTK117-99', '<p>Thank you!, we happy when have served customer</p>\n                                                        </br><a href=\"http://192.168.1.123:8000/client/tickets/TK117-99\">Conplete ticket TK117-99</a>\n                                                        </br><a href=\"http://192.168.1.123:8000/client/races/TK117-99\">Please Race ticket at </a>', '1', '2014-08-28 10:56:43', '2014-08-28 03:56:43', 'work', null, '99', '1', null);
INSERT INTO `messages` VALUES ('196', 'Racing for me from ticketTK117-99', '<p>Customer have race for you with level <b>unhappy</b> <h3></h3>', '0', '2014-08-28 03:57:04', '2014-08-28 03:57:04', 'race', null, '93', '99', null);
INSERT INTO `messages` VALUES ('197', 'Close ticketTK111-113', '<p>Thank you!, we happy when have served customer</p>\n                                                        </br><a href=\"http://192.168.1.123:8000/client/tickets/TK111-113\">Conplete ticket TK111-113</a>\n                                                        </br><a href=\"http://192.168.1.123:8000/client/races/TK111-113\">Please Race ticket at </a>', '1', '2014-08-28 10:58:48', '2014-08-28 03:58:48', 'work', null, '113', '1', null);
INSERT INTO `messages` VALUES ('198', 'Racing for me from ticketTK111-113', '<p>Customer have race for you with level <b>happy</b> <h3></h3>', '0', '2014-08-28 03:59:07', '2014-08-28 03:59:07', 'race', null, '93', '113', null);

-- ----------------------------
-- Table structure for `migrations`
-- ----------------------------
DROP TABLE IF EXISTS `migrations`;
CREATE TABLE `migrations` (
  `migration` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of migrations
-- ----------------------------
INSERT INTO `migrations` VALUES ('2014_07_14_023454_create_users_table', '1');
INSERT INTO `migrations` VALUES ('2014_07_14_091006_create_profiles_table', '1');
INSERT INTO `migrations` VALUES ('2014_07_15_035916_create_group_users_table', '1');
INSERT INTO `migrations` VALUES ('2014_07_18_092923_create_history_table', '2');
INSERT INTO `migrations` VALUES ('2014_07_21_013927_create_products_table', '2');
INSERT INTO `migrations` VALUES ('2014_07_21_014305_create_purchases_table', '2');
INSERT INTO `migrations` VALUES ('2014_07_21_020452_creat_purchase_detail_table', '2');
INSERT INTO `migrations` VALUES ('2014_07_21_020535_creat_group_product_table', '2');
INSERT INTO `migrations` VALUES ('2014_07_21_023110_create_countries_table', '2');
INSERT INTO `migrations` VALUES ('2014_07_21_023130_create_language_table', '2');
INSERT INTO `migrations` VALUES ('2014_07_21_024052_create_sector_table', '2');
INSERT INTO `migrations` VALUES ('2014_07_22_101640_create_SupportTickets_table', '3');
INSERT INTO `migrations` VALUES ('2014_07_22_111143_create_languages_table', '3');
INSERT INTO `migrations` VALUES ('2014_07_22_100450_create_tickets_table', '4');
INSERT INTO `migrations` VALUES ('2014_07_23_033629_create_support_type_table', '5');
INSERT INTO `migrations` VALUES ('2014_07_23_094515_create_Support_qa_table', '6');
INSERT INTO `migrations` VALUES ('2014_07_28_023737_create_races_table', '7');
INSERT INTO `migrations` VALUES ('2014_08_01_033234_create_fqas_table', '8');
INSERT INTO `migrations` VALUES ('2014_08_06_012812_create_News_table', '9');
INSERT INTO `migrations` VALUES ('2014_08_06_021445_create_newcategory_table', '10');

-- ----------------------------
-- Table structure for `new_category`
-- ----------------------------
DROP TABLE IF EXISTS `new_category`;
CREATE TABLE `new_category` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `description` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `parent_id` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of new_category
-- ----------------------------
INSERT INTO `new_category` VALUES ('1', 'Product CRM', '', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00');
INSERT INTO `new_category` VALUES ('2', 'Product HRM', '', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00');
INSERT INTO `new_category` VALUES ('3', 'Common', '', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00');

-- ----------------------------
-- Table structure for `news`
-- ----------------------------
DROP TABLE IF EXISTS `news`;
CREATE TABLE `news` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `permalink` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `content` text COLLATE utf8_unicode_ci NOT NULL,
  `category_id` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `description` text COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of news
-- ----------------------------
INSERT INTO `news` VALUES ('2', 'CRM for iOS: Rebuilt, Re-awesome', 'CRM_for_iOS', 'asdl;jlaksdj alskdj lka klasjdl', '3', '2014-08-06 02:41:59', '2014-08-06 03:06:10', '');
INSERT INTO `news` VALUES ('7', 'The Sweetest Form of Customer Service (Bonus: Recipe Inside)', 'the_sweetest_form_of_customer_service_bonus_recipe_inside', '<p style=\"margin: 0px 0px 17px; padding: 0px; font-size: 14px; direction: ltr; font-family: \'Helvetica Neue\', Helvetica, Helvetica, Arial, sans-serif; line-height: 1.6; color: rgb(69, 73, 81);\"><img alt=\"The sweetest form of customer service\" class=\"noborder alignnone\" height=\"317\" src=\"http://d13f94alzxkv7n.cloudfront.net/blog/2014/07/sweetest-form-of-self-service.jpg\" style=\"height: auto; max-width: 100%; vertical-align: middle; border: none; box-shadow: none; border-top-left-radius: 3px; border-top-right-radius: 3px; border-bottom-right-radius: 3px; border-bottom-left-radius: 3px;\" width=\"700\" /></p>\r\n\r\n<p style=\"margin: 0px 0px 17px; padding: 0px; font-size: 14px; direction: ltr; font-family: \'Helvetica Neue\', Helvetica, Helvetica, Arial, sans-serif; line-height: 1.6; color: rgb(69, 73, 81);\">There is a little irony that those of us in the customer service space have been observing since customer support first went online.</p>\r\n\r\n<p style=\"margin: 0px 0px 17px; padding: 0px; font-size: 14px; direction: ltr; font-family: \'Helvetica Neue\', Helvetica, Helvetica, Arial, sans-serif; line-height: 1.6; color: rgb(69, 73, 81);\">Initially, customers wanted to be able to resolve their issues over email.</p>\r\n\r\n<p style=\"margin: 0px 0px 17px; padding: 0px; font-size: 14px; direction: ltr; font-family: \'Helvetica Neue\', Helvetica, Helvetica, Arial, sans-serif; line-height: 1.6; color: rgb(69, 73, 81);\">Then they began to expect a response within 24 hours.</p>\r\n\r\n<p style=\"margin: 0px 0px 17px; padding: 0px; font-size: 14px; direction: ltr; font-family: \'Helvetica Neue\', Helvetica, Helvetica, Arial, sans-serif; line-height: 1.6; color: rgb(69, 73, 81);\">Now, 39% of modern consumers&nbsp;<a href=\"http://www.fastcompany.com/3013177/creative-conversations/why-the-future-of-customer-service-is-self-service\" style=\"color: rgb(28, 88, 109); text-decoration: none;\">expect a reply within four hours</a>. Active Twitter and Facebook users expect to hear back even faster.</p>\r\n\r\n<p style=\"margin: 0px 0px 17px; padding: 0px; font-size: 14px; direction: ltr; font-family: \'Helvetica Neue\', Helvetica, Helvetica, Arial, sans-serif; line-height: 1.6; color: rgb(69, 73, 81);\">Businesses are responding with all hands on deck, manning every touchpoint &ndash; live chat, social media customer service, phone, email &ndash; to serve their busy, multitasking user base.</p>\r\n\r\n<p style=\"margin: 0px 0px 17px; padding: 0px; font-size: 14px; direction: ltr; font-family: \'Helvetica Neue\', Helvetica, Helvetica, Arial, sans-serif; line-height: 1.6; color: rgb(69, 73, 81);\">But here&rsquo;s something interesting: a&nbsp;<a href=\"http://www.fastcompany.com/3013177/creative-conversations/why-the-future-of-customer-service-is-self-service\" style=\"color: rgb(28, 88, 109); text-decoration: none;\">much quieter</a>&nbsp;70% of consumers expect the companies they work with to offer a self-service support center. In other words, a silent majority of customers would rather pop into your website, leaf through your how-to resources by themselves and resolve their own issues.</p>\r\n\r\n<p style=\"margin: 0px 0px 17px; padding: 0px; font-size: 14px; direction: ltr; font-family: \'Helvetica Neue\', Helvetica, Helvetica, Arial, sans-serif; line-height: 1.6; color: rgb(69, 73, 81);\"><b style=\"line-height: inherit;\">They want gratification so instant that they&rsquo;d rather not talk to you at all.</b></p>\r\n\r\n<p style=\"margin: 0px 0px 17px; padding: 0px; font-size: 14px; direction: ltr; font-family: \'Helvetica Neue\', Helvetica, Helvetica, Arial, sans-serif; line-height: 1.6; color: rgb(69, 73, 81);\">There are a few reasons consumers prefer to DIY:</p>\r\n\r\n<ul style=\"margin: 0px 0px 10px 25px; padding-right: 0px; padding-left: 0px; font-size: 16px; direction: ltr; color: rgb(69, 73, 81); font-family: \'Helvetica Neue\', Helvetica, Helvetica, Arial, sans-serif; line-height: 16px;\">\r\n	<li style=\"margin: 0.5em 0px; padding: 0px; font-size: 14px; direction: ltr; line-height: 1.6;\">They may not want to share sensitive information on the phone or online</li>\r\n	<li style=\"margin: 0.5em 0px; padding: 0px; font-size: 14px; direction: ltr; line-height: 1.6;\">They think they&rsquo;re going to have to wait to talk to a human</li>\r\n	<li style=\"margin: 0.5em 0px; padding: 0px; font-size: 14px; direction: ltr; line-height: 1.6;\">They would really just rather do it themselves</li>\r\n	<li style=\"margin: 0.5em 0px; padding: 0px; font-size: 14px; direction: ltr; line-height: 1.6;\">They know your support office is closed for the day</li>\r\n	<li style=\"margin: 0.5em 0px; padding: 0px; font-size: 14px; direction: ltr; line-height: 1.6;\">They think they&rsquo;re going to have to contact you several times</li>\r\n</ul>\r\n\r\n<p style=\"margin: 0px 0px 17px; padding: 0px; font-size: 14px; direction: ltr; font-family: \'Helvetica Neue\', Helvetica, Helvetica, Arial, sans-serif; line-height: 1.6; color: rgb(69, 73, 81);\">This is no coincidence.</p>\r\n\r\n<p style=\"margin: 0px 0px 17px; padding: 0px; font-size: 14px; direction: ltr; font-family: \'Helvetica Neue\', Helvetica, Helvetica, Arial, sans-serif; line-height: 1.6; color: rgb(69, 73, 81);\">The people behind self-serve frozen yogurt shops already know the powerful psychology of DIY. You walk in knowing that every topping you could ever want is already prepared, in anticipation of you.</p>\r\n\r\n<p style=\"margin: 0px 0px 17px; padding: 0px; font-size: 14px; direction: ltr; font-family: \'Helvetica Neue\', Helvetica, Helvetica, Arial, sans-serif; line-height: 1.6; color: rgb(69, 73, 81);\">The cup of yogurt you make yourself is always going to the perfect one &ndash; the perfect solution. No one else could ever really get it&nbsp;<i style=\"line-height: inherit;\">just right</i>.</p>\r\n\r\n<p style=\"margin: 0px 0px 17px; padding: 0px; font-size: 14px; direction: ltr; font-family: \'Helvetica Neue\', Helvetica, Helvetica, Arial, sans-serif; line-height: 1.6; color: rgb(69, 73, 81);\">This is what we tell our own customers: anticipate your customers&rsquo; needs and then get out of the way.</p>\r\n', '3', '2014-08-06 03:06:42', '2014-08-06 03:06:42', '');
INSERT INTO `news` VALUES ('8', 'What is CRM?', 'what_is_crm', '<div class=\"faqb\" style=\"margin: 0px; padding: 19.546875px 29.328125px 0px; border: 0px; font-family: \'open sans\', arial; line-height: 15.600000381469727px; vertical-align: baseline; outline: none; clear: right; float: left; min-height: 180px; width: 430.3125px; color: rgb(68, 68, 68);\">\r\n<p style=\"margin: 0px 0px 20px; padding: 0px; border: 0px; font-family: inherit; font-size: 14px; font-style: inherit; font-variant: inherit; font-weight: inherit; line-height: 22px; vertical-align: baseline; outline: none;\">CRM is a Software as a Service (SaaS) solution that delivers complete CRM functionality at a fraction of the price of other offerings. With CRM you can manage all your Sales, Marketing, Customer Support &amp; Service, Inventory Management and Email within in a single business system.</p>\r\n</div>\r\n\r\n<div class=\"faqb\" style=\"margin: 0px; padding: 19.546875px 29.328125px 0px; border: 0px; font-family: \'open sans\', arial; line-height: 15.600000381469727px; vertical-align: baseline; outline: none; clear: right; float: left; min-height: 180px; width: 430.3125px; color: rgb(68, 68, 68);\">\r\n<h3 style=\"margin: 0px; padding: 0px 0px 20px; border: 0px; font-family: inherit; font-size: 16px; font-style: inherit; font-variant: inherit; font-weight: inherit; line-height: 23px; vertical-align: baseline; outline: none; color: rgb(51, 51, 51);\">What types of payment do you accept?</h3>\r\n\r\n<p style=\"margin: 0px 0px 20px; padding: 0px; border: 0px; font-family: inherit; font-size: 14px; font-style: inherit; font-variant: inherit; font-weight: inherit; line-height: 22px; vertical-align: baseline; outline: none;\">We accept payment via Visa, MasterCard, American Express and PayPal. We also accept payment via bank transfer or check transfer for yearly subscriptions. For further details, please contact sales@completerpm.com.</p>\r\n</div>\r\n\r\n<div class=\"faqb\" style=\"margin: 0px; padding: 19.546875px 29.328125px 0px; border: 0px; font-family: \'open sans\', arial; line-height: 15.600000381469727px; vertical-align: baseline; outline: none; clear: right; float: left; min-height: 180px; width: 430.3125px; color: rgb(68, 68, 68);\">\r\n<h3 style=\"margin: 0px; padding: 0px 0px 20px; border: 0px; font-family: inherit; font-size: 16px; font-style: inherit; font-variant: inherit; font-weight: inherit; line-height: 23px; vertical-align: baseline; outline: none; color: rgb(51, 51, 51);\">Can I get a demo of CRM?</h3>\r\n\r\n<p style=\"margin: 0px 0px 20px; padding: 0px; border: 0px; font-family: inherit; font-size: 14px; font-style: inherit; font-variant: inherit; font-weight: inherit; line-height: 22px; vertical-align: baseline; outline: none;\">Yes, we would be happy to demonstrate CRM via a Web-conference at your convenience. The demo lasts anywhere from 45 minutes to one hour. To schedule your personal session, please contact&nbsp;</p>\r\n</div>\r\n\r\n<div class=\"faqb\" style=\"margin: 0px; padding: 19.546875px 29.328125px 0px; border: 0px; font-family: \'open sans\', arial; line-height: 15.600000381469727px; vertical-align: baseline; outline: none; clear: right; float: left; min-height: 180px; width: 430.3125px; color: rgb(68, 68, 68);\">\r\n<h3 style=\"margin: 0px; padding: 0px 0px 20px; border: 0px; font-family: inherit; font-size: 16px; font-style: inherit; font-variant: inherit; font-weight: inherit; line-height: 23px; vertical-align: baseline; outline: none; color: rgb(51, 51, 51);\">Is my data safe?</h3>\r\n\r\n<p style=\"margin: 0px 0px 20px; padding: 0px; border: 0px; font-family: inherit; font-size: 14px; font-style: inherit; font-variant: inherit; font-weight: inherit; line-height: 22px; vertical-align: baseline; outline: none;\">We&rsquo;re fanatical about keeping your data safe and secure. Our facilities feature stringent 24/7/365 security with video monitoring, biometric access, and advanced fire/flood/theft monitoring systems. Our robust network security system employs the latest encryption and intrusion detection/prevention technologies.</p>\r\n</div>\r\n\r\n<div class=\"faqb\" style=\"margin: 0px; padding: 19.546875px 29.328125px 0px; border: 0px; font-family: \'open sans\', arial; line-height: 15.600000381469727px; vertical-align: baseline; outline: none; clear: right; float: left; min-height: 180px; width: 430.3125px; color: rgb(68, 68, 68);\">\r\n<h3 style=\"margin: 0px; padding: 0px 0px 20px; border: 0px; font-family: inherit; font-size: 16px; font-style: inherit; font-variant: inherit; font-weight: inherit; line-height: 23px; vertical-align: baseline; outline: none; color: rgb(51, 51, 51);\">Does CRM support multiple languages?</h3>\r\n\r\n<p style=\"margin: 0px 0px 20px; padding: 0px; border: 0px; font-family: inherit; font-size: 14px; font-style: inherit; font-variant: inherit; font-weight: inherit; line-height: 22px; vertical-align: baseline; outline: none;\">Yes, we support 13 languages viz., English (USA), English (UK), Chinese, French, German, Italian, Japanese, Polish, Portuguese, Portuguese (Brazil), Spanish, Swedish and Vietnamese.</p>\r\n</div>\r\n\r\n<div class=\"faqb\" style=\"margin: 0px; padding: 19.546875px 29.328125px 0px; border: 0px; font-family: \'open sans\', arial; line-height: 15.600000381469727px; vertical-align: baseline; outline: none; clear: right; float: left; min-height: 180px; width: 430.3125px; color: rgb(68, 68, 68);\">\r\n<h3 style=\"margin: 0px; padding: 0px 0px 20px; border: 0px; font-family: inherit; font-size: 16px; font-style: inherit; font-variant: inherit; font-weight: inherit; line-height: 23px; vertical-align: baseline; outline: none; color: rgb(51, 51, 51);\">Are you US/EU Safe Harbor Compliant?</h3>\r\n\r\n<p style=\"margin: 0px 0px 20px; padding: 0px; border: 0px; font-family: inherit; font-size: 14px; font-style: inherit; font-variant: inherit; font-weight: inherit; line-height: 22px; vertical-align: baseline; outline: none;\">Yes. We comply with the EU Safe Harbor framework as set forth by the Department of Commerce (USA). This also applies to the collection, use, and retention of user data from the European Union. For more information, please read our&nbsp;<a href=\"http://www.zoho.com/privacy.html\" style=\"margin: 0px; padding: 0px; border: 0px; font-family: inherit; font-size: inherit; font-style: inherit; font-variant: inherit; font-weight: inherit; line-height: inherit; vertical-align: baseline; outline: none; color: rgb(51, 51, 51);\" target=\"_self\">US/EU Safe Harbor Privacy Policy</a>.</p>\r\n</div>\r\n\r\n<div class=\"faqb\" style=\"margin: 0px; padding: 19.546875px 29.328125px 0px; border: 0px; font-family: \'open sans\', arial; line-height: 15.600000381469727px; vertical-align: baseline; outline: none; clear: right; float: left; min-height: 180px; width: 430.3125px; color: rgb(68, 68, 68);\">\r\n<h3 style=\"margin: 0px; padding: 0px 0px 20px; border: 0px; font-family: inherit; font-size: 16px; font-style: inherit; font-variant: inherit; font-weight: inherit; line-height: 23px; vertical-align: baseline; outline: none; color: rgb(51, 51, 51);\">Can I upgrade, downgrade or cancel anytime?</h3>\r\n\r\n<p style=\"margin: 0px 0px 20px; padding: 0px; border: 0px; font-family: inherit; font-size: 14px; font-style: inherit; font-variant: inherit; font-weight: inherit; line-height: 22px; vertical-align: baseline; outline: none;\">Of course. CRM is a pay-as-you-go service (monthly or yearly), so you can make changes whenever you need.</p>\r\n</div>\r\n\r\n<div class=\"faqb\" style=\"margin: 0px; padding: 19.546875px 29.328125px 0px; border: 0px; font-family: \'open sans\', arial; line-height: 15.600000381469727px; vertical-align: baseline; outline: none; clear: right; float: left; min-height: 180px; width: 430.3125px; color: rgb(68, 68, 68);\">\r\n<h3 style=\"margin: 0px; padding: 0px 0px 20px; border: 0px; font-family: inherit; font-size: 16px; font-style: inherit; font-variant: inherit; font-weight: inherit; line-height: 23px; vertical-align: baseline; outline: none; color: rgb(51, 51, 51);\">How do I upgrade my Free Edition to a Paid Edition?</h3>\r\n\r\n<p style=\"margin: 0px 0px 20px; padding: 0px; border: 0px; font-family: inherit; font-size: 14px; font-style: inherit; font-variant: inherit; font-weight: inherit; line-height: 22px; vertical-align: baseline; outline: none;\">Simply log in to CRM, click the Upgrade Link on the Home Page, and follow the steps on the Subscription Page.</p>\r\n</div>\r\n', '1', '2014-08-06 03:09:15', '2014-08-06 03:09:15', '');
INSERT INTO `news` VALUES ('9', 'Document Management', 'document_management', '<p style=\"margin: 0px 0px 17px; padding: 0px; font-size: 14px; direction: ltr; font-family: \'Helvetica Neue\', Helvetica, Helvetica, Arial, sans-serif; line-height: 1.6; color: rgb(69, 73, 81);\"><img alt=\"The sweetest form of customer service\" class=\"noborder alignnone\" height=\"317\" src=\"http://d13f94alzxkv7n.cloudfront.net/blog/2014/07/sweetest-form-of-self-service.jpg\" style=\"height: auto; max-width: 100%; vertical-align: middle; border: none; box-shadow: none; border-top-left-radius: 3px; border-top-right-radius: 3px; border-bottom-right-radius: 3px; border-bottom-left-radius: 3px;\" width=\"700\" /></p>\r\n', '1', '2014-08-06 04:00:20', '2014-08-09 03:38:39', '');

-- ----------------------------
-- Table structure for `priority`
-- ----------------------------
DROP TABLE IF EXISTS `priority`;
CREATE TABLE `priority` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of priority
-- ----------------------------
INSERT INTO `priority` VALUES ('1', 'Nomal', null, null);
INSERT INTO `priority` VALUES ('2', 'Hight', null, null);
INSERT INTO `priority` VALUES ('3', 'Urgent', null, null);

-- ----------------------------
-- Table structure for `profiles`
-- ----------------------------
DROP TABLE IF EXISTS `profiles`;
CREATE TABLE `profiles` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `address` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `website` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `phone_number` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `sector_id` int(255) NOT NULL,
  `employee_count` int(11) NOT NULL,
  `contact_employee_company` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `company_name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `activity` int(11) DEFAULT NULL,
  `field_id` int(11) DEFAULT NULL,
  `country` int(11) DEFAULT NULL,
  `birth_day` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=94 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of profiles
-- ----------------------------
INSERT INTO `profiles` VALUES ('8', '1', '565 ngô quyền, đà nẵng', 'Fsoft.com', '84555451515', '1', '120', '', '2014-07-17 04:39:37', '2014-07-17 08:58:26', 'SFR', null, null, null, '2014-07-30 15:04:21');
INSERT INTO `profiles` VALUES ('47', '98', 'sssssssssadas', '', 'ddddddddddddddddddd', '0', '0', '', '2014-07-29 10:19:29', '2014-07-30 07:54:46', 'dddddddddddd', null, null, null, '2014-07-30 14:54:46');
INSERT INTO `profiles` VALUES ('48', '99', 'da nang,viet nam', 'http://sfr.com.vn', '098989898', '2', '3', 'Nguyễn thành luân', '2014-07-29 11:16:11', '2014-07-30 02:40:16', 'GREEN GLOBAL s', null, null, null, '2014-07-30 09:40:16');
INSERT INTO `profiles` VALUES ('51', '102', '', '', '6465465465', '2', '3', 'LUONG THANH TRUYEN', '2014-07-30 03:44:40', '2014-07-30 03:44:40', 'CNTT DA NANG', null, null, null, null);
INSERT INTO `profiles` VALUES ('54', '105', '', '', '0846454654', '0', '50', 'Nguyễn anh tài', '2014-07-31 04:32:29', '2014-07-31 04:32:29', 'Nguyen kim', null, null, null, null);
INSERT INTO `profiles` VALUES ('55', '106', '', '', '6765465465456', '0', '20', 'Nguyễn anh tài', '2014-07-31 04:36:01', '2014-07-31 04:36:01', 'Nguyen kim', null, null, null, null);
INSERT INTO `profiles` VALUES ('56', '107', '', '', '89Y987889790', '0', '20', 'Nguyễn anh tài', '2014-07-31 04:49:51', '2014-07-31 04:49:51', 'Nguyen kim', null, null, null, null);
INSERT INTO `profiles` VALUES ('57', '93', '', '', '', '0', '0', '', '0000-00-00 00:00:00', '2014-07-31 08:25:09', '', null, null, null, '2014-07-31 15:25:09');
INSERT INTO `profiles` VALUES ('58', '110', 'ss', '', '3333333333333', '0', '0', '', '0000-00-00 00:00:00', '2014-07-31 11:01:28', '33333333333333', null, null, null, '2014-07-31 18:01:28');
INSERT INTO `profiles` VALUES ('59', '111', '', '', '', '0', '0', '', '2014-08-01 03:06:39', '2014-08-01 03:06:39', null, null, null, null, null);
INSERT INTO `profiles` VALUES ('61', '113', 'Đà Nẵng VN', '', '0974999888', '2', '5', 'Shinosuke', '2014-08-01 08:37:02', '2014-08-11 03:18:38', 'SFR', null, null, null, '2014-08-11 10:18:38');
INSERT INTO `profiles` VALUES ('62', '114', '', '', '354465465', '0', '6', 'Nguyen huy tuong', '2014-08-02 01:19:42', '2014-08-02 01:19:42', 'SFR', null, null, null, null);
INSERT INTO `profiles` VALUES ('67', '119', '', '', '2350U250', '2', '3', 'SSSSSSSSSSSSSSSSS', '2014-08-05 11:05:57', '2014-08-05 11:07:18', 'CNTT', null, null, null, '2014-08-05 18:07:18');
INSERT INTO `profiles` VALUES ('71', '123', '', '', '09711111111', '0', '5', 'nguyen van a', '2014-08-06 07:00:50', '2014-08-06 07:00:50', 'ABC', null, null, null, null);
INSERT INTO `profiles` VALUES ('79', '131', '', '', '', '0', '0', '', '2014-08-16 09:50:56', '2014-08-16 09:50:56', null, null, null, null, null);
INSERT INTO `profiles` VALUES ('80', '132', '', '', '', '0', '0', '', '2014-08-18 02:36:08', '2014-08-18 02:36:08', null, null, null, null, null);
INSERT INTO `profiles` VALUES ('81', '133', '', '', 'dfsssssssssssssssssss', '1', '3', 'sssssss', '2014-08-18 08:47:22', '2014-08-18 08:47:22', 'fdsssssssss', null, null, null, null);
INSERT INTO `profiles` VALUES ('88', '140', 'vn24s', '', '0000-0', '1', '3', 'truyen', '2014-08-19 04:51:45', '2014-08-21 01:21:12', 'vn24s', null, null, null, '2014-08-21 08:21:12');
INSERT INTO `profiles` VALUES ('89', '141', 'Fsoft', '', '0972101203', '1', '10', 'Anh Dai', '2014-08-19 04:54:43', '2014-08-19 06:50:26', 'Fsoft', null, null, null, '2014-08-19 13:50:26');
INSERT INTO `profiles` VALUES ('90', '142', 'nguyen', '', '0972101021', '0', '0', '', '2014-08-20 02:07:00', '2014-08-20 02:17:30', null, null, null, null, '2014-08-20 09:17:30');
INSERT INTO `profiles` VALUES ('91', '143', 'aaaaaaaa', '', 'aaaaaaa', '0', '0', '', '2014-08-20 03:28:55', '2014-08-20 03:28:55', null, null, null, null, '2014-08-28 16:11:11');
INSERT INTO `profiles` VALUES ('92', '144', '', '', '232323235434444444444', '1', '3', '444444444444444', '2014-08-21 01:19:46', '2014-08-21 01:19:46', 'opera', null, null, null, null);
INSERT INTO `profiles` VALUES ('93', '145', '', '', '', '0', '0', '', '2014-08-26 04:28:33', '2014-08-26 04:28:33', null, null, null, null, null);

-- ----------------------------
-- Table structure for `purchase_detail`
-- ----------------------------
DROP TABLE IF EXISTS `purchase_detail`;
CREATE TABLE `purchase_detail` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `purchase_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `deadline_from` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `deadline_to` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `status` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `note` text COLLATE utf8_unicode_ci,
  `expiry` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of purchase_detail
-- ----------------------------
INSERT INTO `purchase_detail` VALUES ('1', '1', '8', '2014-07-22 00:00:00', '0000-00-00 00:00:00', '0', '2014-07-20 00:00:00', '0000-00-00 00:00:00', null, '12');
INSERT INTO `purchase_detail` VALUES ('2', '1', '7', '2014-07-22 00:00:00', '0000-00-00 00:00:00', '0', '2014-07-20 00:00:00', '0000-00-00 00:00:00', null, '12');
INSERT INTO `purchase_detail` VALUES ('3', '3', '8', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0', '0000-00-00 00:00:00', '0000-00-00 00:00:00', null, '24');
INSERT INTO `purchase_detail` VALUES ('4', '3', '7', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0', '0000-00-00 00:00:00', '0000-00-00 00:00:00', null, '12');
INSERT INTO `purchase_detail` VALUES ('9', '12', '6', '2014-08-15 00:00:00', '0000-00-00 00:00:00', '0', '2014-08-15 08:33:35', '2014-08-15 08:33:35', null, '0');
INSERT INTO `purchase_detail` VALUES ('10', '13', '6', '2014-08-15 00:00:00', '0000-00-00 00:00:00', '0', '2014-08-15 08:39:40', '2014-08-15 08:39:40', null, '0');
INSERT INTO `purchase_detail` VALUES ('11', '14', '6', '2014-08-15 00:00:00', '0000-00-00 00:00:00', '0', '2014-08-15 08:42:56', '2014-08-15 08:42:56', null, '0');
INSERT INTO `purchase_detail` VALUES ('12', '15', '6', '2014-08-15 00:00:00', '0000-00-00 00:00:00', '0', '2014-08-15 08:51:37', '2014-08-15 08:51:37', null, '1');
INSERT INTO `purchase_detail` VALUES ('13', '16', '6', '2014-08-15 00:00:00', '0000-00-00 00:00:00', '0', '2014-08-15 08:52:06', '2014-08-15 08:52:06', null, '23');
INSERT INTO `purchase_detail` VALUES ('14', '17', '6', '2014-08-18 00:00:00', '0000-00-00 00:00:00', '0', '2014-08-18 01:24:54', '2014-08-18 01:24:54', null, '4');
INSERT INTO `purchase_detail` VALUES ('15', '18', '6', '2014-08-21 00:00:00', '0000-00-00 00:00:00', '0', '2014-08-21 01:37:28', '2014-08-21 01:37:28', null, '12');

-- ----------------------------
-- Table structure for `purchase_group_products`
-- ----------------------------
DROP TABLE IF EXISTS `purchase_group_products`;
CREATE TABLE `purchase_group_products` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `description` text COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of purchase_group_products
-- ----------------------------
INSERT INTO `purchase_group_products` VALUES ('1', 'RMP', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00');
INSERT INTO `purchase_group_products` VALUES ('2', 'HRM', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00');
INSERT INTO `purchase_group_products` VALUES ('3', 'CRM', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00');

-- ----------------------------
-- Table structure for `purchase_products`
-- ----------------------------
DROP TABLE IF EXISTS `purchase_products`;
CREATE TABLE `purchase_products` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `description` text COLLATE utf8_unicode_ci NOT NULL,
  `group_products` int(11) NOT NULL,
  `cost` decimal(8,3) NOT NULL,
  `discount` decimal(11,2) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `activated` tinyint(4) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of purchase_products
-- ----------------------------
INSERT INTO `purchase_products` VALUES ('6', 'Manager RMP', '', '1', '1200.000', '0.00', '2014-07-21 04:47:51', '2014-08-21 01:39:12', '1');
INSERT INTO `purchase_products` VALUES ('7', 'Full HRM', '', '2', '12.200', '0.00', '2014-07-21 04:48:21', '2014-07-21 04:48:21', '1');
INSERT INTO `purchase_products` VALUES ('8', 'Medium RMP', 's', '1', '10.000', '0.00', '2014-07-21 05:03:29', '2014-08-21 01:38:54', '1');

-- ----------------------------
-- Table structure for `purchases`
-- ----------------------------
DROP TABLE IF EXISTS `purchases`;
CREATE TABLE `purchases` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `customer_id` int(11) NOT NULL,
  `code` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `total` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `note` text COLLATE utf8_unicode_ci,
  `customer_order` text COLLATE utf8_unicode_ci,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of purchases
-- ----------------------------
INSERT INTO `purchases` VALUES ('1', '1', '99', 'CRM1-57', '0', '0000-00-00 00:00:00', '0000-00-00 00:00:00', null, null);
INSERT INTO `purchases` VALUES ('3', '1', '114', 'CRM3-114', '0', '0000-00-00 00:00:00', '0000-00-00 00:00:00', null, null);
INSERT INTO `purchases` VALUES ('15', '1', '99', 'CRM15-OTHER', '0', '2014-08-15 08:51:37', '2014-08-15 08:51:37', '', '');
INSERT INTO `purchases` VALUES ('16', '1', '99', 'CRM16-OTHER', '0', '2014-08-15 08:52:06', '2014-08-15 08:52:06', '3', 'Nguyen van a : 8707-\r\nJLkljalkfjlfj jal fjlj alkf\r\n\r\n\r\nasfka;lf');
INSERT INTO `purchases` VALUES ('17', '1', '99', 'CRM17-OTHER', '0', '2014-08-18 01:24:54', '2014-08-18 01:24:54', '', 'sdsdsdsdsdsdsd');
INSERT INTO `purchases` VALUES ('18', '1', '107', 'CRM18-OTHER', '0', '2014-08-21 01:37:28', '2014-08-21 01:37:28', 'afffffffffffffffffffffff', '');

-- ----------------------------
-- Table structure for `races`
-- ----------------------------
DROP TABLE IF EXISTS `races`;
CREATE TABLE `races` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `code_ticket` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `comment` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `level_comment` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `score` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `happy` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `unhappy` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of races
-- ----------------------------
INSERT INTO `races` VALUES ('9', 'TK40-130', '', 'unhappy', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00', null, null);
INSERT INTO `races` VALUES ('10', 'TK95-99', '', 'happy', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00', null, null);
INSERT INTO `races` VALUES ('11', 'TK112-107', '', 'happy', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00', null, null);
INSERT INTO `races` VALUES ('12', 'TK111-113', '', 'happy', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00', null, null);
INSERT INTO `races` VALUES ('13', 'TK117-99', '', 'unhappy', '', '2014-08-28 03:57:04', '2014-08-28 03:57:04', null, null);

-- ----------------------------
-- Table structure for `sector`
-- ----------------------------
DROP TABLE IF EXISTS `sector`;
CREATE TABLE `sector` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `description` text COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of sector
-- ----------------------------
INSERT INTO `sector` VALUES ('1', 'Construction', '1', '0000-00-00 00:00:00', '2014-04-02 17:00:00');
INSERT INTO `sector` VALUES ('2', 'Education', '1', '0000-00-00 00:00:00', '2014-04-02 17:00:00');
INSERT INTO `sector` VALUES ('3', 'Finance', '1', '0000-00-00 00:00:00', '2014-04-02 17:00:00');
INSERT INTO `sector` VALUES ('4', 'Healthcare', '1', '0000-00-00 00:00:00', '2014-04-02 17:00:00');
INSERT INTO `sector` VALUES ('5', 'IT', '1', '0000-00-00 00:00:00', '2014-04-02 17:00:00');
INSERT INTO `sector` VALUES ('6', 'Logistics', '1', '0000-00-00 00:00:00', '2014-04-02 17:00:00');
INSERT INTO `sector` VALUES ('7', 'Pharmaceuticals', '1', '0000-00-00 00:00:00', '2014-04-02 17:00:00');

-- ----------------------------
-- Table structure for `setting`
-- ----------------------------
DROP TABLE IF EXISTS `setting`;
CREATE TABLE `setting` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL DEFAULT '',
  `title` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `value` text COLLATE utf8_unicode_ci,
  `order` int(11) DEFAULT NULL,
  `type` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of setting
-- ----------------------------
INSERT INTO `setting` VALUES ('address', 'Address', 'Arap ', '10', null);
INSERT INTO `setting` VALUES ('debug', 'Debug (true/false)', 'false', '3', null);
INSERT INTO `setting` VALUES ('email_contact', 'E-mail contact', 'test@completermp.com', '9', null);
INSERT INTO `setting` VALUES ('facebook', 'Facebook', 'Facebook', '12', null);
INSERT INTO `setting` VALUES ('footer_text', 'Footer', 'DEVELOPMENT BY SFR', '2', null);
INSERT INTO `setting` VALUES ('google', 'Google', 'Google', '14', null);
INSERT INTO `setting` VALUES ('google_map', 'Google Map', 'Google Map', '15', null);
INSERT INTO `setting` VALUES ('host_encryption', 'Email Encryption', 'tls', '6', null);
INSERT INTO `setting` VALUES ('host_mail', 'Email Host', 'smtp.gmail.com', '4', null);
INSERT INTO `setting` VALUES ('host_password', 'Email Password', '@CODE18061989', '8', null);
INSERT INTO `setting` VALUES ('host_port', 'Email Port', '587', '5', null);
INSERT INTO `setting` VALUES ('host_username', 'Email Username', 'ltt.develop@gmail.com', '7', null);
INSERT INTO `setting` VALUES ('phone', 'Phone', '333-333-333', '11', null);
INSERT INTO `setting` VALUES ('site_name', 'Website Name', 'CRM', '1', null);
INSERT INTO `setting` VALUES ('twitter', 'Twitter', 'Twitter', '13', null);

-- ----------------------------
-- Table structure for `status`
-- ----------------------------
DROP TABLE IF EXISTS `status`;
CREATE TABLE `status` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of status
-- ----------------------------
INSERT INTO `status` VALUES ('1', 'New', null, null);
INSERT INTO `status` VALUES ('2', 'In process', null, null);
INSERT INTO `status` VALUES ('3', 'Resolve', '2014-08-27 13:16:01', '2014-08-27 13:16:01');
INSERT INTO `status` VALUES ('4', 'Close', null, null);

-- ----------------------------
-- Table structure for `support_tickets`
-- ----------------------------
DROP TABLE IF EXISTS `support_tickets`;
CREATE TABLE `support_tickets` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `ticket_id` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `user_id` int(11) NOT NULL,
  `content` text COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=103 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of support_tickets
-- ----------------------------
INSERT INTO `support_tickets` VALUES ('66', 'TK72-1', '98', '<p>ffffffffffffffffffffffffffffffffffff</p>\r\n', '2014-08-20 02:23:10', '2014-08-20 02:23:10');
INSERT INTO `support_tickets` VALUES ('67', 'TK73-110', '93', '<p>fffffffffffffffff</p>\r\n', '2014-08-20 02:24:48', '2014-08-20 02:24:48');
INSERT INTO `support_tickets` VALUES ('68', 'TK73-110', '93', '<p>fffffffffffffffff</p>\r\n', '2014-08-20 02:31:39', '2014-08-20 02:31:39');
INSERT INTO `support_tickets` VALUES ('69', 'TK73-110', '93', '<p>fffffffffffffffff</p>\r\n', '2014-08-20 02:34:08', '2014-08-20 02:34:08');
INSERT INTO `support_tickets` VALUES ('70', 'TK92-1', '1', '<p>&#39;f</p>\r\n', '2014-08-22 07:33:47', '2014-08-22 07:33:47');
INSERT INTO `support_tickets` VALUES ('71', 'TK92-1', '1', '<p>klgh</p>\r\n', '2014-08-22 07:35:06', '2014-08-22 07:35:06');
INSERT INTO `support_tickets` VALUES ('72', 'TK94-1', '1', '<p>;kjm;/</p>\r\n', '2014-08-23 02:08:55', '2014-08-23 02:08:55');
INSERT INTO `support_tickets` VALUES ('73', 'TK94-1', '1', '<p>ddddddd</p>\r\n', '2014-08-23 02:28:57', '2014-08-23 02:28:57');
INSERT INTO `support_tickets` VALUES ('74', 'TK95-99', '99', '<p>sssssssssssssssssssss</p>\r\n', '2014-08-23 03:08:45', '2014-08-23 03:08:45');
INSERT INTO `support_tickets` VALUES ('75', 'TK105-99', '99', '<p>ssssssssssssssssssssssssssssssss</p>\r\n', '2014-08-23 04:02:11', '2014-08-23 04:02:11');
INSERT INTO `support_tickets` VALUES ('76', 'TK105-99', '1', '<p>dddddđ</p>\r\n', '2014-08-23 04:14:00', '2014-08-23 04:14:00');
INSERT INTO `support_tickets` VALUES ('77', 'TK94-1', '99', '<p>s</p>\r\n', '2014-08-23 04:14:49', '2014-08-23 04:14:49');
INSERT INTO `support_tickets` VALUES ('78', 'TK105-99', '1', '<p>dddddđ</p>\r\n', '2014-08-23 04:14:55', '2014-08-23 04:14:55');
INSERT INTO `support_tickets` VALUES ('79', 'TK94-1', '99', '<p>7i</p>\r\n', '2014-08-23 04:15:49', '2014-08-23 04:15:49');
INSERT INTO `support_tickets` VALUES ('80', 'TK105-99', '99', '<p>dddddddd</p>\r\n', '2014-08-23 04:25:34', '2014-08-23 04:25:34');
INSERT INTO `support_tickets` VALUES ('81', 'TK105-99', '99', '<p>dddddddđ</p>\r\n', '2014-08-23 04:33:19', '2014-08-23 04:33:19');
INSERT INTO `support_tickets` VALUES ('82', 'TK103-99', '1', '<p>ffffffffff</p>\r\n', '2014-08-23 06:41:49', '2014-08-23 06:41:49');
INSERT INTO `support_tickets` VALUES ('83', 'TK104-99', '99', '<p>ggggggggggggggggg</p>\r\n', '2014-08-23 06:42:11', '2014-08-23 06:42:11');
INSERT INTO `support_tickets` VALUES ('84', 'TK103-99', '98', '<p>eeeeeeeeeeeeeeeeeeeeeeeeeeeee</p>\r\n', '2014-08-23 06:42:55', '2014-08-23 06:42:55');
INSERT INTO `support_tickets` VALUES ('85', 'TK101-99', '99', '<p style=\"margin: 0px; padding: 6px 0px; border: 0px; outline: 0px; vertical-align: baseline; font-family: Arial, sans-serif; color: rgb(34, 34, 34); line-height: 1.5em; font-size: 1.166em !important;\">What&#39;s going on with line 2 of&nbsp;<a href=\"http://www.ibm.com/developerworks/library/mo-nodejs-2/#listing2\" style=\"margin: 0px; padding: 0px; border: 0px; outline: 0px; font-size: inherit; vertical-align: baseline; color: rgb(116, 82, 133);\">Listing 2</a>? Functions may be passed as parameters in JavaScript, which enables asynchronous execution. These functions-as-parameters are typically referred to as&nbsp;<em style=\"margin: 0px; padding: 0px; border: 0px; outline: 0px; font-size: inherit; vertical-align: baseline;\">callback functions</em>. Essentially, you call functions with a parameter that is expected to be called upon completion of the function. When calling asynchronous functions like this, execution proceeds directly to the next line of code without waiting. Utilizing this characteristic of JavaScript allows you to write asynchronous Node applications that are highly concurrent. In addition to writing functions with callbacks, you should prefer asynchronous functions to synchronous functions provided by modules. For example, you should use functions like&nbsp;<code style=\"margin: 0px; padding: 0px; border: 0px; outline: 0px; font-size: 0.95em !important; vertical-align: baseline; font-family: \'Andale Mono\', \'Lucida Console\', Monaco, Liberation, fixed, monospace; line-height: 1.5em; color: rgb(0, 0, 0) !important;\">readFile</code>&nbsp;instead of&nbsp;<code style=\"margin: 0px; padding: 0px; border: 0px; outline: 0px; font-size: 0.95em !important; vertical-align: baseline; font-family: \'Andale Mono\', \'Lucida Console\', Monaco, Liberation, fixed, monospace; line-height: 1.5em; color: rgb(0, 0, 0) !important;\">readFileSync</code>&nbsp;to read from the file system.</p>\r\n\r\n<p style=\"margin: 0px; padding: 6px 0px; border: 0px; outline: 0px; vertical-align: baseline; font-family: Arial, sans-serif; color: rgb(34, 34, 34); line-height: 1.5em; font-size: 1.166em !important;\">Asynchronous code is not just about callbacks. Node is event-driven. Let&#39;s examine the behavior of making an asynchronous HTTP request using Node&#39;s core&nbsp;<code style=\"margin: 0px; padding: 0px; border: 0px; outline: 0px; font-size: 0.95em !important; vertical-align: baseline; font-family: \'Andale Mono\', \'Lucida Console\', Monaco, Liberation, fixed, monospace; line-height: 1.5em; color: rgb(0, 0, 0) !important;\">http module</code>:</p>\r\n', '2014-08-23 07:07:41', '2014-08-23 07:07:41');
INSERT INTO `support_tickets` VALUES ('86', 'TK101-99', '99', '<p>kkk</p>\r\n', '2014-08-23 07:33:28', '2014-08-23 07:33:28');
INSERT INTO `support_tickets` VALUES ('87', 'TK101-99', '99', '<p>kkk</p>\r\n', '2014-08-23 07:33:41', '2014-08-23 07:33:41');
INSERT INTO `support_tickets` VALUES ('88', 'TK101-99', '99', '<p>dddddđ</p>\r\n', '2014-08-23 07:35:03', '2014-08-23 07:35:03');
INSERT INTO `support_tickets` VALUES ('89', 'TK108-98', '102', '<p>alfjlasf</p>\r\n', '2014-08-23 11:18:02', '2014-08-23 11:18:02');
INSERT INTO `support_tickets` VALUES ('90', 'TK111-113', '1', '<p>anh da doc, chu co the ve</p>\r\n', '2014-08-25 04:32:10', '2014-08-25 04:32:10');
INSERT INTO `support_tickets` VALUES ('91', 'TK113-1', '1', '<p>ffffffffffffliafjs</p>\r\n\r\n<p>&nbsp;</p>\r\n', '2014-08-26 04:07:20', '2014-08-26 04:07:20');
INSERT INTO `support_tickets` VALUES ('92', 'TK109-98', '1', '<p>faljflaf</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n', '2014-08-26 07:36:12', '2014-08-26 07:36:12');
INSERT INTO `support_tickets` VALUES ('93', 'TK112-107', '1', '<p>dddddddddd</p>\r\n', '2014-08-26 08:23:40', '2014-08-26 08:23:40');
INSERT INTO `support_tickets` VALUES ('94', 'TK111-113', '1', '<p>test data sad</p>\r\n', '2014-08-26 08:32:38', '2014-08-26 08:32:38');
INSERT INTO `support_tickets` VALUES ('95', 'TK111-113', '1', '<p>met qua di oi troi oi la troi</p>\r\n', '2014-08-26 08:38:49', '2014-08-26 08:38:49');
INSERT INTO `support_tickets` VALUES ('96', 'TK110-113', '1', '<p>DDDDDD</p>\r\n', '2014-08-26 10:33:58', '2014-08-26 10:33:58');
INSERT INTO `support_tickets` VALUES ('97', 'TK110-113', '1', '<p>HHHHHHHHHHHHHH</p>\r\n', '2014-08-26 10:34:42', '2014-08-26 10:34:42');
INSERT INTO `support_tickets` VALUES ('98', 'TK114-99', '99', '<p>alo fuck you!</p>\r\n', '2014-08-27 01:34:27', '2014-08-27 01:34:27');
INSERT INTO `support_tickets` VALUES ('99', 'TK114-99', '99', '<p>sssssssssss</p>\r\n', '2014-08-27 02:08:22', '2014-08-27 02:08:22');
INSERT INTO `support_tickets` VALUES ('100', 'TK114-99', '1', '<p>dm</p>\r\n', '2014-08-27 02:37:06', '2014-08-27 02:37:06');
INSERT INTO `support_tickets` VALUES ('102', 'TK116-99', '1', '<p>sssssssssssss</p>\r\n', '2014-08-27 04:14:04', '2014-08-27 04:14:04');

-- ----------------------------
-- Table structure for `support_type`
-- ----------------------------
DROP TABLE IF EXISTS `support_type`;
CREATE TABLE `support_type` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of support_type
-- ----------------------------
INSERT INTO `support_type` VALUES ('1', 'Cleaning problem', '0000-00-00 00:00:00', '0000-00-00 00:00:00');
INSERT INTO `support_type` VALUES ('2', 'Utility services', '0000-00-00 00:00:00', '0000-00-00 00:00:00');
INSERT INTO `support_type` VALUES ('3', 'Maintenance', '0000-00-00 00:00:00', '0000-00-00 00:00:00');
INSERT INTO `support_type` VALUES ('4', 'Safe and Security', '0000-00-00 00:00:00', '0000-00-00 00:00:00');

-- ----------------------------
-- Table structure for `ticket_activity`
-- ----------------------------
DROP TABLE IF EXISTS `ticket_activity`;
CREATE TABLE `ticket_activity` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `ticket_id` varchar(11) COLLATE utf8_unicode_ci DEFAULT NULL,
  `event` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `content` text COLLATE utf8_unicode_ci,
  `author_id` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `title` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=116 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of ticket_activity
-- ----------------------------
INSERT INTO `ticket_activity` VALUES ('1', 'TK96-99', 'Create', null, '99', '2014-08-23 10:01:08', '2014-08-23 10:01:08', '<b> tttd</br> Create the ticket');
INSERT INTO `ticket_activity` VALUES ('2', 'TK95-99', 'Reply', '<p>sssssssssssssssssssss</p>\r\n', '99', '2014-08-23 03:08:45', '2014-08-23 03:08:45', '<b> tttd</br> Reply the ticket');
INSERT INTO `ticket_activity` VALUES ('3', 'TK104-99', 'Create', null, '99', '2014-08-23 03:48:17', '2014-08-23 03:48:17', '<b> tttd</br> Create the ticket');
INSERT INTO `ticket_activity` VALUES ('4', 'TK105-99', 'Create', null, '99', '2014-08-23 03:57:44', '2014-08-23 03:57:44', '<b> tttd</br> Create the ticket');
INSERT INTO `ticket_activity` VALUES ('5', 'TK105-99', 'Reply', '<p>ssssssssssssssssssssssssssssssss</p>\r\n', '99', '2014-08-23 04:02:11', '2014-08-23 04:02:11', '<b> tttd</b> Reply the ticket');
INSERT INTO `ticket_activity` VALUES ('6', 'TK94-1', 'Reply', '<p>s</p>\r\n', '99', '2014-08-23 04:14:49', '2014-08-23 04:14:49', '<b> tttd</b> Reply the ticket');
INSERT INTO `ticket_activity` VALUES ('7', 'TK105-99', 'Reply', '<p>dddddđ</p>\r\n', '1', '2014-08-23 04:14:55', '2014-08-23 04:14:55', '<b> tran duc</b> Reply the ticket');
INSERT INTO `ticket_activity` VALUES ('8', 'TK94-1', 'Reply', '<p>7i</p>\r\n', '99', '2014-08-23 04:15:50', '2014-08-23 04:15:50', '<b> tttd</b> Reply the ticket');
INSERT INTO `ticket_activity` VALUES ('9', 'TK105-99', 'Reply', '<p>dddddddd</p>\r\n', '99', '2014-08-23 04:25:34', '2014-08-23 04:25:34', '<b> tttd</b> Reply the ticket');
INSERT INTO `ticket_activity` VALUES ('10', 'TK105-99', 'Update', 'Change status close to in-process', '1', '2014-08-23 04:29:56', '2014-08-23 04:29:56', '<b> tran duc</b> Update the ticket');
INSERT INTO `ticket_activity` VALUES ('11', 'TK105-99', 'Update', 'Change <i>status</i> <b>in-process</b> to <b>resolve</b>', '1', '2014-08-23 04:30:49', '2014-08-23 04:30:49', '<b> tran duc</b> Update the ticket');
INSERT INTO `ticket_activity` VALUES ('12', 'TK105-99', 'Update', 'Change <i>status</i> <b>resolve</b> to <b>close</b>', '1', '2014-08-23 04:33:09', '2014-08-23 04:33:09', '<b> tran duc</b> Update the ticket');
INSERT INTO `ticket_activity` VALUES ('13', 'TK105-99', 'Reply', '<p>dddddddđ</p>\r\n', '99', '2014-08-23 04:33:19', '2014-08-23 04:33:19', '<b> tttd</b> Reply the ticket');
INSERT INTO `ticket_activity` VALUES ('14', 'TK103-99', 'Update', 'Change <i>status</i> <b>new</b> to <b>in-process</b>', '1', '2014-08-23 06:41:43', '2014-08-23 06:41:43', '<b> tran duc</b> Update the ticket');
INSERT INTO `ticket_activity` VALUES ('15', 'TK103-99', 'Reply', '<p>ffffffffff</p>\r\n', '1', '2014-08-23 06:41:49', '2014-08-23 06:41:49', '<b> tran duc</b> Reply the ticket');
INSERT INTO `ticket_activity` VALUES ('16', 'TK104-99', 'Reply', '<p>ggggggggggggggggg</p>\r\n', '99', '2014-08-23 06:42:11', '2014-08-23 06:42:11', '<b> tttd</b> Reply the ticket');
INSERT INTO `ticket_activity` VALUES ('17', 'TK103-99', 'Reply', '<p>eeeeeeeeeeeeeeeeeeeeeeeeeeeee</p>\r\n', '98', '2014-08-23 06:42:55', '2014-08-23 06:42:55', '<b> lui</b> Reply the ticket');
INSERT INTO `ticket_activity` VALUES ('18', 'TK101-99', 'Reply', '<p style=\"margin: 0px; padding: 6px 0px; border: 0px; outline: 0px; vertical-align: baseline; font-family: Arial, sans-serif; color: rgb(34, 34, 34); line-height: 1.5em; font-size: 1.166em !important;\">What&#39;s going on with line 2 of&nbsp;<a href=\"http://www.ibm.com/developerworks/library/mo-nodejs-2/#listing2\" style=\"margin: 0px; padding: 0px; border: 0px; outline: 0px; font-size: inherit; vertical-align: baseline; color: rgb(116, 82, 133);\">Listing 2</a>? Functions may be passed as parameters in JavaScript, which enables asynchronous execution. These functions-as-parameters are typically referred to as&nbsp;<em style=\"margin: 0px; padding: 0px; border: 0px; outline: 0px; font-size: inherit; vertical-align: baseline;\">callback functions</em>. Essentially, you call functions with a parameter that is expected to be called upon completion of the function. When calling asynchronous functions like this, execution proceeds directly to the next line of code without waiting. Utilizing this characteristic of JavaScript allows you to write asynchronous Node applications that are highly concurrent. In addition to writing functions with callbacks, you should prefer asynchronous functions to synchronous functions provided by modules. For example, you should use functions like&nbsp;<code style=\"margin: 0px; padding: 0px; border: 0px; outline: 0px; font-size: 0.95em !important; vertical-align: baseline; font-family: \'Andale Mono\', \'Lucida Console\', Monaco, Liberation, fixed, monospace; line-height: 1.5em; color: rgb(0, 0, 0) !important;\">readFile</code>&nbsp;instead of&nbsp;<code style=\"margin: 0px; padding: 0px; border: 0px; outline: 0px; font-size: 0.95em !important; vertical-align: baseline; font-family: \'Andale Mono\', \'Lucida Console\', Monaco, Liberation, fixed, monospace; line-height: 1.5em; color: rgb(0, 0, 0) !important;\">readFileSync</code>&nbsp;to read from the file system.</p>\r\n\r\n<p style=\"margin: 0px; padding: 6px 0px; border: 0px; outline: 0px; vertical-align: baseline; font-family: Arial, sans-serif; color: rgb(34, 34, 34); line-height: 1.5em; font-size: 1.166em !important;\">Asynchronous code is not just about callbacks. Node is event-driven. Let&#39;s examine the behavior of making an asynchronous HTTP request using Node&#39;s core&nbsp;<code style=\"margin: 0px; padding: 0px; border: 0px; outline: 0px; font-size: 0.95em !important; vertical-align: baseline; font-family: \'Andale Mono\', \'Lucida Console\', Monaco, Liberation, fixed, monospace; line-height: 1.5em; color: rgb(0, 0, 0) !important;\">http module</code>:</p>\r\n', '99', '2014-08-23 07:07:41', '2014-08-23 07:07:41', '<b> tttd</b> Reply the ticket');
INSERT INTO `ticket_activity` VALUES ('19', 'TK101-99', 'Reply', '<p>kkk</p>\r\n', '99', '2014-08-23 07:33:41', '2014-08-23 07:33:41', '<b> tttd</b> Reply the ticket');
INSERT INTO `ticket_activity` VALUES ('20', 'TK101-99', 'Reply', '<p>dddddđ</p>\r\n', '99', '2014-08-23 07:35:03', '2014-08-23 07:35:03', '<b> tttd</b> Reply the ticket');
INSERT INTO `ticket_activity` VALUES ('21', 'TK106-99', 'Create', null, '99', '2014-08-23 07:53:28', '2014-08-23 07:53:28', '<b> tttd</b> Create the ticket');
INSERT INTO `ticket_activity` VALUES ('22', 'TK103-99', 'Update', 'Change <i>status</i> <b>in-process</b> to <b>resolve</b>', '98', '2014-08-23 07:57:31', '2014-08-23 07:57:31', '<b> lui</b> Update the ticket');
INSERT INTO `ticket_activity` VALUES ('23', 'TK103-99', 'Update', 'Change <i>status</i> <b>resolve</b> to <b>close</b>', '98', '2014-08-23 07:58:45', '2014-08-23 07:58:45', '<b> lui</b> Update the ticket');
INSERT INTO `ticket_activity` VALUES ('24', 'TK103-99', 'Update', 'Change <i>status</i> <b>close</b> to <b>resolve</b>', '98', '2014-08-23 07:58:55', '2014-08-23 07:58:55', '<b> lui</b> Update the ticket');
INSERT INTO `ticket_activity` VALUES ('25', 'TK108-98', 'Create', null, '98', '2014-08-23 10:45:52', '2014-08-23 10:45:52', '<b> lui</b> Create the ticket');
INSERT INTO `ticket_activity` VALUES ('26', 'TK109-98', 'Create', null, '98', '2014-08-23 10:51:28', '2014-08-23 10:51:28', '<b> lui</b> Create the ticket');
INSERT INTO `ticket_activity` VALUES ('27', 'TK108-98', 'Reply', '<p>alfjlasf</p>\r\n', '102', '2014-08-23 11:18:02', '2014-08-23 11:18:02', '<b> luong</b> Reply the ticket');
INSERT INTO `ticket_activity` VALUES ('28', 'TK110-113', 'Create', null, '113', '2014-08-25 01:49:00', '2014-08-25 01:49:00', '<b> MR/MS</b> Create the ticket');
INSERT INTO `ticket_activity` VALUES ('29', 'TK111-113', 'Create', null, '113', '2014-08-25 01:49:20', '2014-08-25 01:49:20', '<b> MR/MS</b> Create the ticket');
INSERT INTO `ticket_activity` VALUES ('30', 'TK112-107', 'Create', null, '107', '2014-08-25 02:36:09', '2014-08-25 02:36:09', '<b> MR/MS</b> Create the ticket');
INSERT INTO `ticket_activity` VALUES ('31', 'TK111-113', 'Reply', '<p>anh da doc, chu co the ve</p>\r\n', '1', '2014-08-25 04:32:10', '2014-08-25 04:32:10', '<b> tran duc</b> Reply the ticket');
INSERT INTO `ticket_activity` VALUES ('32', 'TK105-99', 'Update', 'Change <i>status</i> <b>close</b> to <b>resovle</b>', '1', '2014-08-25 09:50:15', '2014-08-25 09:50:15', '<b> tran duc</b> Update the ticket');
INSERT INTO `ticket_activity` VALUES ('33', 'TK113-1', 'Create', null, '1', '2014-08-26 01:24:08', '2014-08-26 01:24:08', '<b> tran duc</b> Create the ticket');
INSERT INTO `ticket_activity` VALUES ('34', 'TK113-1', 'Reply', '<p>ffffffffffffliafjs</p>\r\n\r\n<p>&nbsp;</p>\r\n', '1', '2014-08-26 04:07:20', '2014-08-26 04:07:20', '<b> tran duc</b> Reply the ticket');
INSERT INTO `ticket_activity` VALUES ('35', 'TK113-1', 'Update', 'Change <i>status</i> <b>in-process</b> to <b>close</b>', '1', '2014-08-26 04:08:04', '2014-08-26 04:08:04', '<b> tran duc</b> Update the ticket');
INSERT INTO `ticket_activity` VALUES ('36', 'TK111-113', 'Update', '<i>Assign to</i> <b>0</b>', '1', '2014-08-26 07:04:08', '2014-08-26 07:04:08', '<b> tran duc</b> Update the ticket');
INSERT INTO `ticket_activity` VALUES ('37', 'TK111-113', 'Update', 'Change <i>status</i> <b>in-process</b> to <b>2</b>', '1', '2014-08-26 07:04:08', '2014-08-26 07:04:08', '<b> tran duc</b> Update the ticket');
INSERT INTO `ticket_activity` VALUES ('38', 'TK111-113', 'Update', '<i>Assign to</i> <b>143</b>', '1', '2014-08-26 07:05:44', '2014-08-26 07:05:44', '<b> tran duc</b> Update the ticket');
INSERT INTO `ticket_activity` VALUES ('39', 'TK111-113', 'Update', 'Change <i>status</i> <b>2</b> to <b>3</b>', '1', '2014-08-26 07:07:37', '2014-08-26 07:07:37', '<b> tran duc</b> Update the ticket');
INSERT INTO `ticket_activity` VALUES ('40', 'TK111-113', 'Update', 'Change <i>status</i> <b>2</b> to <b>3</b>', '1', '2014-08-26 07:19:58', '2014-08-26 07:19:58', '<b> tran duc</b> Update the ticket');
INSERT INTO `ticket_activity` VALUES ('41', 'TK111-113', 'Update', 'Change <i>status</i> <b>3</b> to <b>4</b>', '1', '2014-08-26 07:22:24', '2014-08-26 07:22:24', '<b> tran duc</b> Update the ticket');
INSERT INTO `ticket_activity` VALUES ('42', 'TK111-113', 'Update', 'Change <i>status</i> <b>4</b> to <b>2</b>', '1', '2014-08-26 07:24:13', '2014-08-26 07:24:13', '<b> tran duc</b> Update the ticket');
INSERT INTO `ticket_activity` VALUES ('43', 'TK109-98', 'Update', 'Change <i>status</i> <b>new</b> to <b>4</b>', '1', '2014-08-26 07:33:34', '2014-08-26 07:33:34', '<b> tran duc</b> Update the ticket');
INSERT INTO `ticket_activity` VALUES ('44', 'TK109-98', 'Reply', '<p>faljflaf</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n', '1', '2014-08-26 07:36:12', '2014-08-26 07:36:12', '<b> tran duc</b> Reply the ticket');
INSERT INTO `ticket_activity` VALUES ('45', 'TK112-107', 'Update', 'Change <i>status</i> <b>new</b> to <b>2</b>', '1', '2014-08-26 07:44:42', '2014-08-26 07:44:42', '<b> tran duc</b> Update the ticket');
INSERT INTO `ticket_activity` VALUES ('46', 'TK112-107', 'Update', 'Change <i>status</i> <b>2</b> to <b>4</b>', '1', '2014-08-26 07:47:24', '2014-08-26 07:47:24', '<b> tran duc</b> Update the ticket');
INSERT INTO `ticket_activity` VALUES ('47', 'TK112-107', 'Reply', '<p>dddddddddd</p>\r\n', '1', '2014-08-26 08:23:40', '2014-08-26 08:23:40', '<b> tran duc</b> Reply the ticket');
INSERT INTO `ticket_activity` VALUES ('48', 'TK112-107', 'Update', 'Change <i>status</i> <b>in-process</b> to <b>4</b>', '1', '2014-08-26 08:31:00', '2014-08-26 08:31:00', '<b> tran duc</b> Update the ticket');
INSERT INTO `ticket_activity` VALUES ('49', 'TK111-113', 'Reply', '<p>test data sad</p>\r\n', '1', '2014-08-26 08:32:39', '2014-08-26 08:32:39', '<b> tran duc</b> Reply the ticket');
INSERT INTO `ticket_activity` VALUES ('50', 'TK111-113', 'Reply', '<p>met qua di oi troi oi la troi</p>\r\n', '1', '2014-08-26 08:38:49', '2014-08-26 08:38:49', '<b> tran duc</b> Reply the ticket');
INSERT INTO `ticket_activity` VALUES ('51', 'TK110-113', 'Update', 'Change <i>status</i> <b>new</b> to <b>2</b>', '1', '2014-08-26 10:07:00', '2014-08-26 10:07:00', '<b> tran duc</b> Update the ticket');
INSERT INTO `ticket_activity` VALUES ('52', 'TK110-113', 'Update', '<i>Assign to</i> <b>Staff 02</b>', '1', '2014-08-26 10:17:27', '2014-08-26 10:17:27', '<b> tran duc</b> Update the ticket');
INSERT INTO `ticket_activity` VALUES ('53', 'TK110-113', 'Reply', '<p>DDDDDD</p>\r\n', '1', '2014-08-26 10:33:58', '2014-08-26 10:33:58', '<b> tran duc</b> Reply the ticket');
INSERT INTO `ticket_activity` VALUES ('54', 'TK110-113', 'Reply', '<p>HHHHHHHHHHHHHH</p>\r\n', '1', '2014-08-26 10:34:42', '2014-08-26 10:34:42', '<b> tran duc</b> Reply the ticket');
INSERT INTO `ticket_activity` VALUES ('55', 'TK110-113', 'Update', 'Change <i>status</i> <b>in-process</b> to <b>3</b>', '1', '2014-08-26 10:38:27', '2014-08-26 10:38:27', '<b> tran duc</b> Update the ticket');
INSERT INTO `ticket_activity` VALUES ('56', 'TK110-113', 'Update', 'Change <i>status</i> <b>3</b> to <b>In process</b>', '1', '2014-08-26 10:45:15', '2014-08-26 10:45:15', '<b> tran duc</b> Update the ticket');
INSERT INTO `ticket_activity` VALUES ('57', 'TK110-113', 'Update', 'Change <i>status</i> <b>{\"id\":2,\"name\":\"In process\",\"created_at\":null,\"updated_at\":null}</b> to <b>Resovel</b>', '1', '2014-08-26 10:45:45', '2014-08-26 10:45:45', '<b> tran duc</b> Update the ticket');
INSERT INTO `ticket_activity` VALUES ('58', 'TK110-113', 'Update', 'Change <i>status</i> <b>Resovel</b> to <b>In process</b>', '1', '2014-08-26 10:46:11', '2014-08-26 10:46:11', '<b> tran duc</b> Update the ticket');
INSERT INTO `ticket_activity` VALUES ('59', 'TK110-113', 'Update', 'Array', '1', '2014-08-26 10:51:48', '2014-08-26 10:51:48', '<b> tran duc</b> Update the ticket');
INSERT INTO `ticket_activity` VALUES ('60', 'TK110-113', 'Update', 'Array', '1', '2014-08-26 10:53:10', '2014-08-26 10:53:10', '<b> tran duc</b> Update the ticket');
INSERT INTO `ticket_activity` VALUES ('61', 'TK110-113', 'Update', 'Change <i>status </i> <b>  In process </b> to <b> Resovel </b>', '1', '2014-08-26 10:53:50', '2014-08-26 10:53:50', '<b> tran duc</b> Update the ticket');
INSERT INTO `ticket_activity` VALUES ('62', 'TK110-113', 'Update', 'Change <i>status </i> <b>  Resovel </b> to <b> In process </b>', '1', '2014-08-26 10:53:54', '2014-08-26 10:53:54', '<b> tran duc</b> Update the ticket');
INSERT INTO `ticket_activity` VALUES ('63', 'TK112-107', 'Update', 'Change <i>status </i> <b>  Close </b> to <b> In process </b>', '1', '2014-08-26 11:01:38', '2014-08-26 11:01:38', '<b> tran duc</b> Update the ticket');
INSERT INTO `ticket_activity` VALUES ('64', 'TK112-107', 'Update', '<i>Assign to</i> <b>Staff 01</b>', '1', '2014-08-26 11:02:02', '2014-08-26 11:02:02', '<b> tran duc</b> Update the ticket');
INSERT INTO `ticket_activity` VALUES ('65', 'TK112-107', 'Update', '<i>Assign to</i> <b>ABC</b>', '1', '2014-08-26 11:04:24', '2014-08-26 11:04:24', '<b> tran duc</b> Update the ticket');
INSERT INTO `ticket_activity` VALUES ('66', 'TK112-107', 'Update', '<i>Assign staff to</i> <b>ABC</b>', '1', '2014-08-26 11:05:58', '2014-08-26 11:05:58', '<b> tran duc</b> Update the ticket');
INSERT INTO `ticket_activity` VALUES ('67', 'TK112-107', 'Update', '<i>Assign staff to</i> <b>  Staff 01  </b>', '1', '2014-08-26 11:08:56', '2014-08-26 11:08:56', '<b> tran duc</b> Update the ticket');
INSERT INTO `ticket_activity` VALUES ('68', 'TK112-107', 'Update', '<i>Assign staff to</i> <b>  Staff 02  </b>', '1', '2014-08-26 11:09:12', '2014-08-26 11:09:12', '<b> tran duc</b> Update the ticket');
INSERT INTO `ticket_activity` VALUES ('69', 'TK114-99', 'Create', null, '99', '2014-08-27 01:30:57', '2014-08-27 01:30:57', '<b> tttd</b> Create the ticket');
INSERT INTO `ticket_activity` VALUES ('70', 'TK114-99', 'Replied', '<p>alo fuck you!</p>\r\n', '99', '2014-08-27 01:34:27', '2014-08-27 01:34:27', '<b> tttd</b> Replied the ticket');
INSERT INTO `ticket_activity` VALUES ('71', 'TK114-99', 'Updated', '<i>Assign staff to</i> <b>  Staff 01  </b>', '1', '2014-08-27 01:35:41', '2014-08-27 01:35:41', '<b> tran duc</b> Updated the ticket');
INSERT INTO `ticket_activity` VALUES ('72', 'TK114-99', 'Updated', 'Change <i>status </i> <b>  In process </b> to <b> Resovel </b>', '1', '2014-08-27 01:41:47', '2014-08-27 01:41:47', '<b> tran duc</b> Updated the ticket');
INSERT INTO `ticket_activity` VALUES ('73', 'TK114-99', 'Updated', 'Change <i>status </i> <b>  Resovel </b> to <b> In process </b>', '1', '2014-08-27 01:41:55', '2014-08-27 01:41:55', '<b> tran duc</b> Updated the ticket');
INSERT INTO `ticket_activity` VALUES ('74', 'TK114-99', 'Updated', '<i>Assign staff to</i> <b>  Staff 02  </b>', '1', '2014-08-27 01:42:03', '2014-08-27 01:42:03', '<b> tran duc</b> Updated the ticket');
INSERT INTO `ticket_activity` VALUES ('75', 'TK114-99', 'Updated', '<strong> Closed ticket </strong>', '1', '2014-08-27 01:48:52', '2014-08-27 01:48:52', '<b> tran duc</b> Closed the ticket');
INSERT INTO `ticket_activity` VALUES ('76', 'TK114-99', 'Replied', '<p>sssssssssss</p>\r\n', '99', '2014-08-27 02:08:22', '2014-08-27 02:08:22', '<b> tttd</b> Replied the ticket');
INSERT INTO `ticket_activity` VALUES ('77', 'TK114-99', 'Updated', 'Change <i>status </i> <b>  New </b> to <b> In process </b>', '1', '2014-08-27 02:18:40', '2014-08-27 02:18:40', '<b> tran duc</b> Updated the ticket');
INSERT INTO `ticket_activity` VALUES ('78', 'TK114-99', 'Updated', 'Change <i>status </i> <b>  In process </b> to <b> Resovel </b>', '1', '2014-08-27 02:18:50', '2014-08-27 02:18:50', '<b> tran duc</b> Updated the ticket');
INSERT INTO `ticket_activity` VALUES ('79', 'TK114-99', 'Updated', null, '1', '2014-08-27 02:18:59', '2014-08-27 02:18:59', '<b> tran duc</b> Closed the ticket');
INSERT INTO `ticket_activity` VALUES ('80', 'TK114-99', 'Replied', '<p>dm</p>\r\n', '1', '2014-08-27 02:37:06', '2014-08-27 02:37:06', '<b> tran duc</b> Replied the ticket');
INSERT INTO `ticket_activity` VALUES ('81', 'TK114-99', 'Updated', 'Change <i>status </i> <b>  Resovel </b> to <b> In process </b>', '1', '2014-08-27 02:47:54', '2014-08-27 02:47:54', '<b> tran duc</b> Updated the ticket');
INSERT INTO `ticket_activity` VALUES ('82', 'TK114-99', 'Updated', 'Change <i>status </i> <b>  In process </b> to <b> Resovel </b>', '1', '2014-08-27 02:48:48', '2014-08-27 02:48:48', '<b> tran duc</b> Updated the ticket');
INSERT INTO `ticket_activity` VALUES ('83', 'TK114-99', 'Updated', 'Change <i>status </i> <b>  Resovel </b> to <b> In process </b>', '1', '2014-08-27 02:49:47', '2014-08-27 02:49:47', '<b> tran duc</b> Updated the ticket');
INSERT INTO `ticket_activity` VALUES ('84', 'TK102-99', 'Updated', 'Change <i>status </i> <b>  New </b> to <b> In process </b>', '1', '2014-08-27 02:54:54', '2014-08-27 02:54:54', '<b> tran duc</b> Updated the ticket');
INSERT INTO `ticket_activity` VALUES ('85', 'TK102-99', 'Updated', 'Change <i>status </i> <b>  In process </b> to <b> Resovel </b>', '1', '2014-08-27 02:55:28', '2014-08-27 02:55:28', '<b> tran duc</b> Updated the ticket');
INSERT INTO `ticket_activity` VALUES ('86', 'TK102-99', 'Updated', null, '1', '2014-08-27 02:55:40', '2014-08-27 02:55:40', '<b> tran duc</b> Closed the ticket');
INSERT INTO `ticket_activity` VALUES ('87', 'TK115-99', 'Created', null, '99', '2014-08-27 02:58:49', '2014-08-27 02:58:49', '<b> tttd</b> Created the ticket');
INSERT INTO `ticket_activity` VALUES ('88', 'TK115-99', 'Updated', 'Change <i>status </i> <b>  New </b> to <b> Resovel </b>', '1', '2014-08-27 03:03:43', '2014-08-27 03:03:43', '<b> tran duc</b> Updated the ticket');
INSERT INTO `ticket_activity` VALUES ('89', 'TK114-99', 'Updated', 'Change <i>status </i> <b>  In process </b> to <b> Resovel </b>', '1', '2014-08-27 03:09:26', '2014-08-27 03:09:26', '<b> tran duc</b> Updated the ticket');
INSERT INTO `ticket_activity` VALUES ('90', 'TK114-99', 'Updated', null, '1', '2014-08-27 03:09:31', '2014-08-27 03:09:31', '<b> tran duc</b> Closed the ticket');
INSERT INTO `ticket_activity` VALUES ('91', 'TK112-107', 'Updated', 'Change <i>status </i> <b>  In process </b> to <b> Resovel </b>', '1', '2014-08-27 03:27:25', '2014-08-27 03:27:25', '<b> tran duc</b> Updated the ticket');
INSERT INTO `ticket_activity` VALUES ('92', 'TK102-99', 'Updated', '<i>Assign staff to</i> <b>  Staff 02  </b>', '1', '2014-08-27 03:28:31', '2014-08-27 03:28:31', '<b> tran duc</b> Updated the ticket');
INSERT INTO `ticket_activity` VALUES ('93', 'TK102-99', 'Updated', '<i>Assign staff to</i> <b>  Staff 02  </b>', '1', '2014-08-27 03:28:48', '2014-08-27 03:28:48', '<b> tran duc</b> Updated the ticket');
INSERT INTO `ticket_activity` VALUES ('94', 'TK115-99', 'Updated', 'Change <i>status </i> <b>  Resovel </b> to <b> In process </b>', '1', '2014-08-27 03:39:46', '2014-08-27 03:39:46', '<b> tran duc</b> Updated the ticket');
INSERT INTO `ticket_activity` VALUES ('95', 'TK112-107', 'Updated', 'Change <i>status </i> <b>  Resovel </b> to <b> In process </b>', '1', '2014-08-27 04:06:11', '2014-08-27 04:06:11', '<b> tran duc</b> Updated the ticket');
INSERT INTO `ticket_activity` VALUES ('96', 'TK112-107', 'Updated', 'Change <i>status </i> <b>  In process </b> to <b> Resovel </b>', '1', '2014-08-27 04:08:01', '2014-08-27 04:08:01', '<b> tran duc</b> Updated the ticket');
INSERT INTO `ticket_activity` VALUES ('97', 'TK112-107', 'Updated', null, '1', '2014-08-27 04:08:32', '2014-08-27 04:08:32', '<b> tran duc</b> Closed the ticket');
INSERT INTO `ticket_activity` VALUES ('98', 'TK116-99', 'Created', null, '99', '2014-08-27 04:12:12', '2014-08-27 04:12:12', '<b> tttd</b> Created the ticket');
INSERT INTO `ticket_activity` VALUES ('99', 'TK116-99', 'Replied', '<p>sssssssssssss</p>\r\n', '1', '2014-08-27 04:14:05', '2014-08-27 04:14:05', '<b> tran duc</b> Replied the ticket');
INSERT INTO `ticket_activity` VALUES ('100', 'TK110-113', 'Updated', 'Change <i>status </i> <b>  In process </b> to <b> Resovel </b>', '1', '2014-08-27 04:47:44', '2014-08-27 04:47:44', '<b> tran duc</b> Updated the ticket');
INSERT INTO `ticket_activity` VALUES ('101', 'TK110-113', 'Updated', null, '1', '2014-08-27 04:47:49', '2014-08-27 04:47:49', '<b> tran duc</b> Closed the ticket');
INSERT INTO `ticket_activity` VALUES ('102', 'TK117-99', 'Created', null, '99', '2014-08-27 07:13:40', '2014-08-27 07:13:40', '<b>customer 1 tttd</b> Created the ticket');
INSERT INTO `ticket_activity` VALUES ('103', 'TK116-99', 'Updated', 'Change <i>status </i> <b>  In process </b> to <b> Resolve </b>', '1', '2014-08-28 01:24:53', '2014-08-28 01:24:53', '<b> tran duc</b> Updated the ticket');
INSERT INTO `ticket_activity` VALUES ('104', 'TK117-99', 'Updated', '<i>Assign staff to</i> <b>  Staff 02  </b>', '1', '2014-08-28 03:55:33', '2014-08-28 03:55:33', '<b> tran duc</b> Updated the ticket');
INSERT INTO `ticket_activity` VALUES ('105', 'TK117-99', 'Updated', 'Change <i>status </i> <b>  New </b> to <b> Resolve </b>', '1', '2014-08-28 03:55:40', '2014-08-28 03:55:40', '<b> tran duc</b> Updated the ticket');
INSERT INTO `ticket_activity` VALUES ('106', 'TK117-99', 'Updated', null, '1', '2014-08-28 03:55:48', '2014-08-28 03:55:48', '<b> tran duc</b> Closed the ticket');
INSERT INTO `ticket_activity` VALUES ('107', 'TK111-113', 'Updated', '<i>Assign staff to</i> <b>  Staff 02  </b>', '1', '2014-08-28 03:57:34', '2014-08-28 03:57:34', '<b> tran duc</b> Updated the ticket');
INSERT INTO `ticket_activity` VALUES ('108', 'TK111-113', 'Updated', 'Change <i>status </i> <b>  New </b> to <b> In process </b>', '1', '2014-08-28 03:57:35', '2014-08-28 03:57:35', '<b> tran duc</b> Updated the ticket');
INSERT INTO `ticket_activity` VALUES ('109', 'TK111-113', 'Updated', 'Change <i>status </i> <b>  In process </b> to <b> Resolve </b>', '1', '2014-08-28 03:57:39', '2014-08-28 03:57:39', '<b> tran duc</b> Updated the ticket');
INSERT INTO `ticket_activity` VALUES ('110', 'TK111-113', 'Updated', null, '1', '2014-08-28 03:57:44', '2014-08-28 03:57:44', '<b> tran duc</b> Closed the ticket');
INSERT INTO `ticket_activity` VALUES ('111', 'TK118-113', 'Created', null, '113', '2014-08-28 04:00:16', '2014-08-28 04:00:16', '<b>Shinosuke MR/MS</b> Created the ticket');
INSERT INTO `ticket_activity` VALUES ('112', 'TK40-113', 'Updated', '<i>Assign staff to</i> <b>  ABC  </b>', '1', '2014-08-28 08:56:54', '2014-08-28 08:56:54', '<b> tran duc</b> Updated the ticket');
INSERT INTO `ticket_activity` VALUES ('113', 'TK40-113', 'Updated', 'Change <i>status </i> <b>  In process </b> to <b> New </b>', '1', '2014-08-28 08:56:54', '2014-08-28 08:56:54', '<b> tran duc</b> Updated the ticket');
INSERT INTO `ticket_activity` VALUES ('114', 'TK40-113', 'Updated', '<i>Assign staff to</i> <b>  ABC  </b>', '1', '2014-08-28 09:07:57', '2014-08-28 09:07:57', '<b> tran duc</b> Updated the ticket');
INSERT INTO `ticket_activity` VALUES ('115', 'TK40-113', 'Updated', '<i>Assign staff to</i> <b>  ABC  </b>', '1', '2014-08-28 09:14:08', '2014-08-28 09:14:08', '<b> tran duc</b> Updated the ticket');

-- ----------------------------
-- Table structure for `ticket_history`
-- ----------------------------
DROP TABLE IF EXISTS `ticket_history`;
CREATE TABLE `ticket_history` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `ticket_id` varchar(11) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `status` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `support_type` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `priority` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `description` text COLLATE utf8_unicode_ci,
  `ip` text COLLATE utf8_unicode_ci,
  `location` text COLLATE utf8_unicode_ci,
  `type_history` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=49 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of ticket_history
-- ----------------------------
INSERT INTO `ticket_history` VALUES ('1', 'code01', '2008-08-25 11:42:48', '2014-08-25 11:57:23', 'close', null, 'urgent', null, null, null, null);
INSERT INTO `ticket_history` VALUES ('2', 'code02', '2009-08-25 11:42:00', '2014-08-25 11:57:29', 'close', null, 'nomal', null, null, null, null);
INSERT INTO `ticket_history` VALUES ('3', 'code01', '2010-08-25 11:42:00', '2014-08-25 11:57:33', 'resolve', null, 'nomal', null, null, null, null);
INSERT INTO `ticket_history` VALUES ('4', 'code02', '2011-08-25 11:42:00', '2014-08-25 11:57:37', 'new', null, 'nomal', null, null, null, null);
INSERT INTO `ticket_history` VALUES ('5', 'code01', '2012-08-25 11:42:08', '2014-08-25 11:57:41', 'new', null, 'nomal', null, null, null, null);
INSERT INTO `ticket_history` VALUES ('6', 'code01', '2013-08-25 11:42:08', '2014-08-25 11:57:47', 'new', null, 'hight', null, null, null, null);
INSERT INTO `ticket_history` VALUES ('7', 'code01', '2013-05-25 11:42:08', '2014-08-25 11:58:02', 'new', null, 'hight', null, null, null, null);
INSERT INTO `ticket_history` VALUES ('8', 'code03', '2014-06-25 11:42:09', '2014-08-25 11:58:06', 'new', null, 'hight', null, null, null, null);
INSERT INTO `ticket_history` VALUES ('9', 'code01', '2014-07-25 11:42:09', '2014-08-25 11:58:09', 'new', null, 'hight', null, null, null, null);
INSERT INTO `ticket_history` VALUES ('10', 'code02', '2014-08-25 11:42:09', '2014-08-25 11:42:09', 'new', null, 'hight', null, null, null, null);
INSERT INTO `ticket_history` VALUES ('11', 'code01', '2014-08-25 11:42:42', '2014-08-25 11:42:42', 'close', null, 'urgent', null, null, null, null);
INSERT INTO `ticket_history` VALUES ('12', 'code05', '2014-08-25 11:42:43', '2014-08-25 11:42:43', 'new', null, 'urgent', null, null, null, null);
INSERT INTO `ticket_history` VALUES ('13', 'code01', '2014-06-25 11:42:43', '2014-08-25 11:58:22', 'new', null, 'urgent', null, null, null, null);
INSERT INTO `ticket_history` VALUES ('14', 'code01', '2014-07-25 11:42:51', '2014-08-25 11:58:25', 'new', null, 'nomal', null, null, null, null);
INSERT INTO `ticket_history` VALUES ('15', 'code01', '2014-04-25 11:42:51', '2014-08-25 11:58:33', 'new', null, 'nomal', null, null, null, null);
INSERT INTO `ticket_history` VALUES ('16', 'code01', '2014-08-25 11:42:51', '2014-08-25 11:42:51', 'close', null, 'nomal', null, null, null, null);
INSERT INTO `ticket_history` VALUES ('17', 'code03', '2014-08-25 11:42:52', '2014-08-25 11:42:52', 'close', null, 'nomal', null, null, null, null);
INSERT INTO `ticket_history` VALUES ('18', 'code01', '2014-08-25 11:42:52', '2014-08-25 11:42:52', 'resolve', null, 'nomal', null, null, null, null);
INSERT INTO `ticket_history` VALUES ('19', 'code01', '2014-08-25 11:42:53', '2014-08-25 11:42:53', 'resolve', null, 'nomal', null, null, null, null);
INSERT INTO `ticket_history` VALUES ('20', 'TK106-99', '2014-08-25 11:42:53', '2014-08-25 11:42:53', 'new', null, 'nomal', null, null, null, null);
INSERT INTO `ticket_history` VALUES ('21', 'TK103-99', '2014-08-25 11:42:53', '2014-08-25 11:42:53', 'close', null, 'nomal', null, null, null, null);
INSERT INTO `ticket_history` VALUES ('23', 'TK103-99', '2014-08-25 11:42:54', '2014-08-25 11:42:54', 'new', null, 'nomal', null, null, null, null);
INSERT INTO `ticket_history` VALUES ('24', 'TK103-94', '2014-08-25 11:42:54', '2014-08-25 11:42:54', 'new', null, 'nomal', null, null, null, null);
INSERT INTO `ticket_history` VALUES ('25', 'TK108-98', '2014-08-25 11:42:55', '2014-08-25 11:42:55', 'new', null, 'nomal', null, null, null, null);
INSERT INTO `ticket_history` VALUES ('26', 'TK109-98', '2014-08-25 11:42:47', '2014-08-25 11:42:47', 'new', null, 'urgent', null, null, null, null);
INSERT INTO `ticket_history` VALUES ('27', 'TK110-113', '2014-08-25 11:42:47', '2014-08-25 11:42:47', 'new', null, 'urgent', null, null, null, null);
INSERT INTO `ticket_history` VALUES ('28', 'TK111-113', '2014-08-25 11:42:46', '2014-08-25 11:42:46', 'new', null, 'urgent', null, null, null, null);
INSERT INTO `ticket_history` VALUES ('29', 'TK112-107', '2014-08-25 11:43:03', '2014-08-25 11:43:03', 'new', null, 'nomal', null, null, null, null);
INSERT INTO `ticket_history` VALUES ('30', 'TK113-1', '2014-08-26 01:24:08', '2014-08-26 01:24:08', 'new', null, 'nomal', null, null, null, null);
INSERT INTO `ticket_history` VALUES ('31', 'TK113-1', '2014-08-26 04:08:04', '2014-08-26 04:08:04', 'close', null, 'nomal', null, null, null, null);
INSERT INTO `ticket_history` VALUES ('32', 'TK111-113', '2014-08-26 07:19:59', '2014-08-26 07:19:59', '3', null, 'hight', null, null, null, null);
INSERT INTO `ticket_history` VALUES ('33', 'TK111-113', '2014-08-26 07:22:24', '2014-08-26 07:22:24', '4', null, 'hight', null, null, null, null);
INSERT INTO `ticket_history` VALUES ('34', 'TK111-113', '2014-08-26 07:24:13', '2014-08-26 07:24:13', '2', null, 'hight', null, null, null, null);
INSERT INTO `ticket_history` VALUES ('35', 'TK109-98', '2014-08-26 07:33:34', '2014-08-26 07:33:34', '4', null, 'nomal', null, null, null, null);
INSERT INTO `ticket_history` VALUES ('36', 'TK112-107', '2014-08-26 07:44:42', '2014-08-26 07:44:42', '2', null, 'hight', null, null, null, null);
INSERT INTO `ticket_history` VALUES ('37', 'TK112-107', '2014-08-26 07:47:24', '2014-08-26 07:47:24', '4', null, 'hight', null, null, null, null);
INSERT INTO `ticket_history` VALUES ('38', 'TK112-107', '2014-08-26 08:31:00', '2014-08-26 08:31:00', '4', null, 'hight', null, null, null, null);
INSERT INTO `ticket_history` VALUES ('39', 'TK110-113', '2014-08-26 10:07:00', '2014-08-26 10:07:00', '2', null, 'hight', null, null, null, null);
INSERT INTO `ticket_history` VALUES ('40', 'TK110-113', '2014-08-26 10:38:27', '2014-08-26 10:38:27', '3', null, 'hight', null, null, null, null);
INSERT INTO `ticket_history` VALUES ('41', 'TK110-113', '2014-08-26 10:45:15', '2014-08-26 10:45:15', '2', null, 'hight', null, null, null, null);
INSERT INTO `ticket_history` VALUES ('42', 'TK110-113', '2014-08-26 10:45:45', '2014-08-26 10:45:45', '3', null, 'hight', null, null, null, null);
INSERT INTO `ticket_history` VALUES ('43', 'TK110-113', '2014-08-26 10:46:11', '2014-08-26 10:46:11', '2', null, 'hight', null, null, null, null);
INSERT INTO `ticket_history` VALUES ('44', 'TK110-113', '2014-08-26 10:53:50', '2014-08-26 10:53:50', '3', null, 'hight', null, null, null, null);
INSERT INTO `ticket_history` VALUES ('45', 'TK110-113', '2014-08-26 10:53:54', '2014-08-26 10:53:54', '2', null, 'hight', null, null, null, null);
INSERT INTO `ticket_history` VALUES ('46', 'TK112-107', '2014-08-26 11:01:38', '2014-08-26 11:01:38', '2', null, 'hight', null, null, null, null);
INSERT INTO `ticket_history` VALUES ('47', 'TK114-99', '2014-08-27 01:30:57', '2014-08-27 01:30:57', 'new', null, 'nomal', null, null, null, null);
INSERT INTO `ticket_history` VALUES ('48', 'TK115-99', '2014-08-27 02:58:49', '2014-08-27 02:58:49', 'new', null, 'nomal', null, null, null, null);

-- ----------------------------
-- Table structure for `tickets`
-- ----------------------------
DROP TABLE IF EXISTS `tickets`;
CREATE TABLE `tickets` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `code` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `client_id` int(11) NOT NULL,
  `server_id` int(11) NOT NULL,
  `subject` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `description` text COLLATE utf8_unicode_ci NOT NULL,
  `support_type` int(11) NOT NULL,
  `priority` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `status` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `author_id` int(11) DEFAULT NULL,
  `resolved_at` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `closed_at` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `close` tinyint(2) unsigned zerofill NOT NULL,
  `overdue` tinyint(2) unsigned zerofill NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=119 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of tickets
-- ----------------------------
INSERT INTO `tickets` VALUES ('72', 'TK72-1', '141', '98', 'Can you help me?', '<p>ob la lallal la lal al</p>\r\n', '4', 'hight', '3', '2013-07-08 01:16:05', '2014-08-20 02:23:10', '110', '2013-07-27 15:34:24', '2014-08-28 09:04:48', '00', '00');
INSERT INTO `tickets` VALUES ('73', 'TK73-110', '99', '93', 'eeeeeeeeeeee', '<p>eeeeeeeeeeeeeeeeeeeeeeeeeee</p>\r\n', '1', 'nomal', '3', '2012-08-20 02:20:48', '2014-08-20 02:21:43', '110', '2012-08-28 09:04:51', '2014-08-28 09:05:17', '00', '00');
INSERT INTO `tickets` VALUES ('74', 'TK73-111', '99', '93', 'Can you help me?', '<p>ob la lallal la lal al</p>\r\n', '1', 'nomal', '3', '2010-08-20 02:20:48', '2014-08-20 02:21:43', null, '2010-08-28 09:04:53', '2014-08-28 09:05:09', '00', '00');
INSERT INTO `tickets` VALUES ('75', 'TK72-132', '141', '93', ' Hell with haggling! f', '<p>ob la lallal la lal al</p>\r\n', '2', 'nomal', '3', '2013-07-09 01:16:52', '2014-08-20 02:21:43', null, '2014-07-27 17:17:53', '2014-08-27 17:22:04', '00', '00');
INSERT INTO `tickets` VALUES ('76', 'TK73-113', '99', '93', ' Hell with haggling! t', '<p>ob la lallal la lal al</p>\r\n', '3', 'nomal', '1', '2014-07-08 02:20:48', '2014-08-20 02:21:43', null, '2014-08-27 08:40:04', '2014-08-27 08:40:04', '00', '00');
INSERT INTO `tickets` VALUES ('77', 'TK73-114', '99', '93', ' Hell with haggling! df', '<p>ob la lallal la lal al</p>\r\n', '4', 'nomal', '1', '2014-08-20 02:20:48', '2014-08-20 02:21:43', null, '2014-08-27 08:40:05', '2014-08-27 08:40:05', '00', '00');
INSERT INTO `tickets` VALUES ('78', 'TK73-115', '99', '93', ' Hell with haggling! 4', '<p>ob la lallal la lal al</p>\r\n', '2', 'nomal', '1', '2014-08-20 02:20:48', '2014-08-20 02:21:43', null, '2014-08-27 08:40:05', '2014-08-27 08:40:05', '00', '00');
INSERT INTO `tickets` VALUES ('79', 'TK79-107', '107', '98', ' Hell with haggling! 5', '<p>ob la lallal la lal al</p>\r\n', '1', 'nomal', '3', '2014-08-22 01:39:58', '2014-08-22 01:44:49', '107', '2014-08-27 08:40:06', '2014-08-27 08:40:06', '00', '00');
INSERT INTO `tickets` VALUES ('80', 'TK80-107', '107', '98', '   It serves you right', '<p>what the hell</p>\r\n', '3', 'hight', '3', '2014-08-22 01:41:38', '2014-08-22 01:45:06', '107', '2014-08-27 08:40:06', '2014-08-27 08:40:06', '00', '00');
INSERT INTO `tickets` VALUES ('81', 'TK81-107', '107', '93', 'Love me love my dog', '<p>what the hell</p>\r\n', '4', 'hight', '3', '2014-08-22 01:42:20', '2014-08-22 01:45:21', '107', '2014-08-27 08:40:07', '2014-08-27 08:40:07', '00', '00');
INSERT INTO `tickets` VALUES ('82', 'TK82-99', '99', '93', ' To eat well and can dress beautyfully', '<p>what the hell</p>\r\n', '4', 'nomal', '1', '2014-08-22 01:43:28', '2014-08-22 01:45:35', '99', '2014-08-27 08:40:07', '2014-08-27 08:40:07', '00', '00');
INSERT INTO `tickets` VALUES ('83', 'TK83-113', '113', '93', 'superman return', '<p><span style=\"color: rgb(0, 0, 0); font-family: arial, sans, sans-serif; font-weight: bold; line-height: normal; white-space: pre-wrap;\">To check whether the Entered Email and Password are vaild or Invaild when user is register</span></p>\r\n', '2', 'nomal', '1', '2014-08-22 02:23:47', '2014-08-22 02:23:47', '113', '2014-08-27 08:40:08', '2014-08-27 08:40:08', '00', '00');
INSERT INTO `tickets` VALUES ('84', 'TK84-113', '113', '93', 'Man of steel', '<p><span style=\"font-weight: bold; color: rgb(84, 84, 84); font-family: arial, sans-serif; font-size: small; line-height: 20.22222328186035px;\">Man</span><span style=\"color: rgb(84, 84, 84); font-family: arial, sans-serif; font-size: small; line-height: 20.22222328186035px;\">&nbsp;of&nbsp;</span><span style=\"font-weight: bold; color: rgb(84, 84, 84); font-family: arial, sans-serif; font-size: small; line-height: 20.22222328186035px;\">Steel</span><span style=\"color: rgb(84, 84, 84); font-family: arial, sans-serif; font-size: small; line-height: 20.22222328186035px;\">&nbsp;is a 2013 superhero film based on the DC Comics character ..... trademark winter mist and rough seas are passed&nbsp;</span><span style=\"font-weight: bold; color: rgb(84, 84, 84); font-family: arial, sans-serif; font-size: small; line-height: 20.22222328186035px;\">off</span><span style=\"color: rgb(84, 84, 84); font-family: arial, sans-serif; font-size: small; line-height: 20.22222328186035px;\">&nbsp;as Alaska in the film.&nbsp;</span></p>\r\n', '1', 'nomal', '1', '2014-08-22 02:30:12', '2014-08-22 02:30:12', '113', '2014-08-27 08:40:09', '2014-08-27 08:40:09', '00', '00');
INSERT INTO `tickets` VALUES ('86', 'TK40-112', '113', '93', 'dfdfdfdfdfdfdf', 'dfdfdfdfdfdf', '1', 'nomal', '3', '2014-05-26 10:38:51', '0000-00-00 00:00:00', '113', '2014-08-28 16:12:41', '2014-08-28 16:12:41', '00', '00');
INSERT INTO `tickets` VALUES ('87', 'TK40-110', '113', '93', '', '', '1', 'nomal', '3', '2014-05-25 10:38:56', '0000-00-00 00:00:00', '113', '2014-08-27 08:40:19', '2014-08-27 08:40:19', '00', '00');
INSERT INTO `tickets` VALUES ('88', 'TK40-110', '113', '98', '', '', '1', 'nomal', '3', '2014-05-18 10:39:02', '0000-00-00 00:00:00', '113', '2014-08-27 08:40:19', '2014-08-27 08:40:19', '00', '00');
INSERT INTO `tickets` VALUES ('89', 'TK40-104', '113', '98', '', '', '1', 'nomal', '3', '2014-06-18 10:39:08', '0000-00-00 00:00:00', '113', '2014-08-27 08:40:19', '2014-08-27 08:40:19', '00', '00');
INSERT INTO `tickets` VALUES ('90', 'TK40-130', '113', '98', '', '', '1', 'nomal', '1', '2014-06-22 10:39:13', '0000-00-00 00:00:00', '113', '2014-08-27 08:40:20', '2014-08-27 08:40:20', '00', '00');
INSERT INTO `tickets` VALUES ('91', 'TK40-113', '113', '143', 'ádddđ', 'sdsdsdsdsd', '1', 'nomal', '1', '2014-03-20 11:04:53', '2014-08-28 09:14:08', '113', '2014-08-28 16:14:08', '2014-08-28 16:14:08', '00', '00');
INSERT INTO `tickets` VALUES ('92', 'TK92-1', '107', '93', 'tjuuuuuuuuuu', '<p>jjjjjjjjjjjjjjjjjjj</p>\r\n', '3', 'nomal', '2', '2014-08-22 07:33:28', '2014-08-22 07:33:47', '1', '2014-08-27 08:40:21', '2014-08-27 08:40:21', '00', '00');
INSERT INTO `tickets` VALUES ('93', 'TK93-1', '114', '98', 'aaaaaaaaaaaaa', '<p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>\r\n', '1', 'nomal', '1', '2014-08-23 02:07:40', '2014-08-23 02:07:40', '1', '2014-08-27 08:40:22', '2014-08-27 08:40:22', '00', '00');
INSERT INTO `tickets` VALUES ('94', 'TK94-1', '99', '143', 'rjartujhs', '<p>rghsrghsrthsrrth</p>\r\n', '1', 'nomal', '2', '2014-08-23 02:08:27', '2014-08-23 02:28:57', '1', '2014-08-27 08:40:24', '2014-08-27 08:40:24', '00', '00');
INSERT INTO `tickets` VALUES ('95', 'TK95-99', '99', '93', 'CCssssssssssssss', '<p>đ&acirc;sdd asdasd &aacute; d&nbsp;</p>\r\n', '1', 'nomal', '1', '2014-08-23 02:59:49', '2014-08-23 02:59:49', '99', '2014-08-28 16:07:22', '2014-08-28 16:07:22', '00', '00');
INSERT INTO `tickets` VALUES ('96', 'TK96-99', '99', '93', 'CCssssssssssssss', '<p>đ&acirc;sdd asdasd &aacute; d&nbsp;</p>\r\n', '1', 'nomal', '1', '2014-08-23 03:00:16', '2014-08-23 03:00:16', '99', '2014-08-28 16:07:23', '2014-08-28 16:07:23', '00', '00');
INSERT INTO `tickets` VALUES ('97', 'TK97-99', '99', '93', 'ccccccccccccccccccccccccccc', '<p>ccccccccccccccccccccccccccccc</p>\r\n', '1', 'nomal', '1', '2014-08-23 03:30:08', '2014-08-23 03:30:08', '99', '2014-08-28 16:07:23', '2014-08-28 16:07:23', '00', '00');
INSERT INTO `tickets` VALUES ('98', 'TK98-99', '99', '93', 'ccccccccccccccccccccccccccc', '<p>ccccccccccccccccccccccccccccc</p>\r\n', '1', 'nomal', '1', '2014-08-23 03:30:26', '2014-08-23 03:30:26', '99', '2014-08-28 16:07:23', '2014-08-28 16:07:23', '00', '00');
INSERT INTO `tickets` VALUES ('99', 'TK99-99', '99', '93', 'ccccccccccccccccccccccccccc', '<p>ccccccccccccccccccccccccccccc</p>\r\n', '1', 'nomal', '1', '2014-08-23 03:30:48', '2014-08-23 03:30:48', '99', '2014-08-28 16:07:24', '2014-08-28 16:07:24', '00', '00');
INSERT INTO `tickets` VALUES ('100', 'TK100-99', '99', '93', 'ccccccccccccccccccccccccccc', '<p>ccccccccccccccccccccccccccccc</p>\r\n', '1', 'nomal', '1', '2014-08-23 03:31:27', '2014-08-23 03:31:27', '99', '2014-08-28 16:07:24', '2014-08-28 16:07:24', '00', '00');
INSERT INTO `tickets` VALUES ('101', 'TK101-99', '99', '93', 'ccccccccccccccccccccccccccc', '<p>ccccccccccccccccccccccccccccc</p>\r\n', '1', 'nomal', '2', '2014-08-23 03:33:57', '2014-08-23 07:35:03', '99', '2014-08-28 16:07:25', '2014-08-28 16:07:25', '00', '00');
INSERT INTO `tickets` VALUES ('103', 'TK103-99', '99', '98', 'reeeeeeeeeeeeeeeg', '<p>eeeeeeeeeeeeeeeeeeee</p>\r\n', '1', 'nomal', '3', '2014-08-23 03:35:28', '2014-08-23 07:58:55', '113', '2014-08-27 08:40:30', '2014-08-27 08:40:30', '00', '00');
INSERT INTO `tickets` VALUES ('104', 'TK104-99', '99', '0', 'reeeeeeeeeeeeeeeg', '<p>eeeeeeeeeeeeeeeeeeee</p>\r\n', '1', 'nomal', '1', '2014-08-23 03:48:17', '2014-08-23 03:48:17', '99', '2014-08-27 08:40:30', '2014-08-27 08:40:30', '00', '00');
INSERT INTO `tickets` VALUES ('105', 'TK105-99', '99', '98', 'ffffff', '<p>fffffffffffffffffffffffff</p>\r\n', '1', 'nomal', '3', '2014-08-23 03:57:44', '2014-08-25 09:50:15', '99', '2014-08-27 08:40:32', '2014-08-27 08:40:32', '00', '00');
INSERT INTO `tickets` VALUES ('106', 'TK106-99', '99', '98', 'dddddddddddddd', '<p>ddddddddddddd</p>\r\n', '1', 'nomal', '1', '2014-08-23 07:53:28', '2014-08-23 07:53:28', '99', '2014-08-27 08:40:33', '2014-08-27 08:40:33', '00', '00');
INSERT INTO `tickets` VALUES ('108', 'TK108-98', '102', '98', 'adfijsd;fsdfjjsdfljsdjfl', '<p>;gjlksjglkjklsjg;l</p>\r\n', '2', 'nomal', '2', '2014-08-23 10:45:52', '2014-08-23 11:18:02', '98', '2014-08-27 08:40:33', '2014-08-27 08:40:33', '00', '00');
INSERT INTO `tickets` VALUES ('109', 'TK109-98', '99', '98', 'uuuuuuuu', '<p>uuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu</p>\r\n', '1', 'nomal', '2', '2014-08-23 10:51:28', '2014-08-26 07:36:12', '98', '2014-08-27 08:40:35', '2014-08-27 08:40:35', '00', '00');
INSERT INTO `tickets` VALUES ('110', 'TK110-113', '113', '143', 'ancvg;QÁDA', '<p>ADADASDFSDF</p>\r\n', '2', 'hight', '3', '2014-08-25 01:49:00', '2014-08-27 04:47:49', '113', '2014-08-27 11:47:49', '2014-08-27 04:47:44', '01', '00');
INSERT INTO `tickets` VALUES ('111', 'TK111-113', '113', '93', 'ancvg;QÁDA', '<p>ADADASDFSDF</p>\r\n', '2', 'hight', '3', '2014-08-25 01:49:20', '2014-08-28 03:57:44', '113', '2014-08-28 10:57:44', '2014-08-28 03:57:39', '01', '00');
INSERT INTO `tickets` VALUES ('112', 'TK112-107', '107', '93', 'i think , i will pass', '<p>bla bla bla !</p>\r\n', '3', 'hight', '3', '2014-08-25 02:36:09', '2014-08-27 04:08:32', '107', '2014-08-27 11:08:32', '2014-08-27 04:08:01', '01', '00');
INSERT INTO `tickets` VALUES ('113', 'TK113-1', '99', '143', 'ddddddddd', '<p>sssssssssssssssssssssssssssssssssssssssssssssssssss</p>\r\n', '1', 'nomal', '3', '2014-08-26 01:24:08', '2014-08-26 04:08:04', '1', '2014-08-27 08:40:37', '2014-08-27 08:40:37', '00', '00');
INSERT INTO `tickets` VALUES ('114', 'TK114-99', '99', '93', 'I need you help me', '<p>ssssssssssssssssdasdasdad</p>\r\n', '3', 'hight', '3', '2014-08-27 01:30:57', '2014-08-27 03:09:31', '99', '2014-08-27 10:09:31', '2014-08-27 03:09:26', '01', '00');
INSERT INTO `tickets` VALUES ('115', 'TK115-99', '99', '0', 'sddddddddđ', '<p>dddddddddddddddddddđ</p>\r\n', '1', 'nomal', '2', '2014-08-27 02:58:48', '2014-08-27 03:39:46', '99', '2014-08-27 10:39:46', '2014-08-27 10:39:46', '00', '00');
INSERT INTO `tickets` VALUES ('116', 'TK116-99', '99', '0', '3000 tu vung oxford', '<p>learn &aacute;dđ</p>\r\n', '1', 'nomal', '3', '2014-08-27 04:12:12', '2014-08-28 01:24:53', '99', '2014-08-28 01:24:53', '2014-08-28 08:24:53', '00', '00');
INSERT INTO `tickets` VALUES ('117', 'TK117-99', '99', '93', 'aaaaaaaaaaaaaddsd', '<p>aaaaaaaaaaaaaaaa</p>\r\n', '1', 'nomal', '3', '2014-08-27 07:13:40', '2014-08-28 03:55:48', '99', '2014-08-28 10:55:48', '2014-08-28 03:55:40', '01', '00');
INSERT INTO `tickets` VALUES ('118', 'TK118-113', '113', '0', '12222222222', '<p>12222222222222222222222222222222</p>\r\n', '1', 'nomal', '1', '2014-08-28 04:00:16', '2014-08-28 04:00:16', '113', '2014-08-28 11:00:16', '2014-08-28 11:00:16', '00', '00');

-- ----------------------------
-- Table structure for `uploads`
-- ----------------------------
DROP TABLE IF EXISTS `uploads`;
CREATE TABLE `uploads` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `path` text COLLATE utf8_unicode_ci,
  `type` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `size` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `type_file` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `ticket_id` varchar(11) COLLATE utf8_unicode_ci DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `customer_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=58 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of uploads
-- ----------------------------
INSERT INTO `uploads` VALUES ('3', '07-30-2014_mario2.png', 'asset/share/uploads/images/personal/07-30-2014_mario2.png', 'image/png', null, '', null, '99', '2014-07-30 02:52:36', '2014-07-30 02:52:36', null);
INSERT INTO `uploads` VALUES ('4', '07-30-2014_IBM.jpeg', 'asset/share/uploads/images/personal/07-30-2014_IBM.jpeg', 'image/jpeg', null, '', null, null, '2014-07-30 03:44:40', '2014-07-30 03:44:40', null);
INSERT INTO `uploads` VALUES ('5', '07-30-2014_chỉ mục.jpg', 'asset/share/uploads/images/personal/07-30-2014_chỉ mục.jpg', 'image/jpeg', null, '', null, '98', '2014-07-30 07:59:50', '2014-07-30 07:59:50', null);
INSERT INTO `uploads` VALUES ('12', '07-30-2014_Bug_16_04_2014_in_the _Morning.xlsx', 'asset/share/uploads/ticket/07-30-2014_Bug_16_04_2014_in_the _Morning.xlsx', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', null, 'ticket', 'TK51-1', null, '2014-07-30 09:33:14', '2014-07-30 09:33:14', null);
INSERT INTO `uploads` VALUES ('13', '07-31-2014_thanh-nien-game-gamebiz-nghe-nghiep-cua-cac-nhan-vat-game-noi-tieng-05.jpg', 'asset/share/uploads/ticket/07-31-2014_thanh-nien-game-gamebiz-nghe-nghiep-cua-cac-nhan-vat-game-noi-tieng-05.jpg', 'image/jpeg', null, 'ticket', 'TK53-107', null, '2014-07-31 06:37:31', '2014-07-31 06:37:31', null);
INSERT INTO `uploads` VALUES ('14', '07-31-2014_wbSeUjod6b.jpg', 'asset/share/uploads/ticket/07-31-2014_wbSeUjod6b.jpg', 'image/jpeg', null, 'ticket', 'TK54-107', null, '2014-07-31 06:45:27', '2014-07-31 06:45:27', null);
INSERT INTO `uploads` VALUES ('15', '07-31-2014_7amMar20.If i fail.jpg', 'asset/share/uploads/images/personal/07-31-2014_7amMar20.If i fail.jpg', 'image/jpeg', null, 'image', null, '93', '2014-07-31 08:25:09', '2014-07-31 08:25:09', null);
INSERT INTO `uploads` VALUES ('16', '07-31-2014_images.jpg', 'asset/share/uploads/images/personal/07-31-2014_images.jpg', 'image/jpeg', null, 'image', null, '107', '2014-07-31 08:38:10', '2014-07-31 08:38:10', null);
INSERT INTO `uploads` VALUES ('17', '07-31-2014_bg1.jpg', 'asset/share/uploads/images/personal/07-31-2014_bg1.jpg', 'image/jpeg', null, 'image', null, '110', '2014-07-31 11:01:39', '2014-07-31 11:01:39', null);
INSERT INTO `uploads` VALUES ('18', '08-01-2014_chỉ mục.jpg', 'asset/share/uploads/images/personal/08-01-2014_chỉ mục.jpg', 'image/jpeg', null, 'image', null, '112', '2014-08-01 03:46:41', '2014-08-01 03:46:41', null);
INSERT INTO `uploads` VALUES ('29', '08-04-2014_61_cycle_eight_24.gif', 'asset/share/uploads/ticket/08-04-2014_61_cycle_eight_24.gif', 'image/gif', null, 'ticket', 'TK61-115', null, '2014-08-04 06:12:06', '2014-08-04 06:12:06', null);
INSERT INTO `uploads` VALUES ('30', '08-04-2014_00050001326.pdf', 'asset/share/uploads/resource', 'application/pdf', null, 'document', null, null, '2014-08-04 06:34:02', '2014-08-04 06:34:02', '114');
INSERT INTO `uploads` VALUES ('31', '08-07-2014_SMB1-1BG.png', 'asset/share/uploads/images/personal/08-07-2014_SMB1-1BG.png', 'image/png', null, 'image', null, '124', '2014-08-07 09:43:19', '2014-08-07 09:43:19', null);
INSERT INTO `uploads` VALUES ('42', '08-08-2014_2dUKutER.pdf', 'asset/share/uploads/resource/08-08-2014_2dUKutER.pdf', 'application/pdf', null, 'document', null, null, '2014-08-08 09:15:08', '2014-08-08 09:15:08', '107');
INSERT INTO `uploads` VALUES ('43', '08-08-2014_4c545099-be81-4e7d-90c3-4904f42350c9_tkbtuan39.xls', 'asset/share/uploads/resource/08-08-2014_4c545099-be81-4e7d-90c3-4904f42350c9_tkbtuan39.xls', 'application/vnd.ms-excel', null, 'document', null, null, '2014-08-08 09:17:03', '2014-08-08 09:17:03', '107');
INSERT INTO `uploads` VALUES ('48', '08-08-2014_bi-applications-crm-analytics-1373603.pdf', 'asset/share/uploads/ticket/08-08-2014_bi-applications-crm-analytics-1373603.pdf', 'application/pdf', null, 'ticket', 'TK65-107', null, '2014-08-08 09:44:42', '2014-08-08 09:44:42', null);
INSERT INTO `uploads` VALUES ('49', '08-11-2014_1779847_779157438780166_545792806_n.jpg', 'asset/share/uploads/images/personal/08-11-2014_1779847_779157438780166_545792806_n.jpg', 'image/jpeg', null, 'image', null, '113', '2014-08-11 03:18:38', '2014-08-11 03:18:38', null);
INSERT INTO `uploads` VALUES ('50', '08-13-2014_CRM Requirement.docx', 'asset/share/uploads/resource/08-13-2014_CRM Requirement.docx', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', null, 'document', null, null, '2014-08-13 08:02:39', '2014-08-13 08:02:39', '113');
INSERT INTO `uploads` VALUES ('51', '08-13-2014_1779847_779157438780166_545792806_n.jpg', 'asset/share/uploads/images/personal/08-13-2014_1779847_779157438780166_545792806_n.jpg', 'image/jpeg', null, 'image', null, null, '2014-08-13 09:17:51', '2014-08-13 09:17:51', null);
INSERT INTO `uploads` VALUES ('53', '08-15-2014_CRUDpng.png', 'asset/share/uploads/images/personal/08-15-2014_CRUDpng.png', 'image/png', null, 'image', null, '1', '2014-08-15 11:09:18', '2014-08-15 11:09:18', null);
INSERT INTO `uploads` VALUES ('54', '08-16-2014_New Microsoft Word Document.docx', 'asset/share/uploads/resource/08-16-2014_New Microsoft Word Document.docx', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', null, 'document', null, null, '2014-08-16 10:40:40', '2014-08-16 10:40:40', '99');
INSERT INTO `uploads` VALUES ('55', '08-19-2014_CRM Requirement.docx', 'asset/share/uploads/ticket/08-19-2014_CRM Requirement.docx', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', null, 'ticket', 'TK71-113', null, '2014-08-19 02:02:24', '2014-08-19 02:02:24', null);
INSERT INTO `uploads` VALUES ('56', '08-25-2014_CRM Requirement.docx', 'asset/share/uploads/ticket/08-25-2014_CRM Requirement.docx', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', null, 'ticket', 'TK111-113', null, '2014-08-25 01:49:20', '2014-08-25 01:49:20', null);
INSERT INTO `uploads` VALUES ('57', '08-27-2014_3000-tu-vung-tieng-anh-thong-dung-nhat-cua-oxford.pdf', 'asset/share/uploads/ticket/08-27-2014_3000-tu-vung-tieng-anh-thong-dung-nhat-cua-oxford.pdf', 'application/pdf', null, 'ticket', 'TK116-99', null, '2014-08-27 04:12:12', '2014-08-27 04:12:12', null);

-- ----------------------------
-- Table structure for `users`
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `group_users` int(11) NOT NULL,
  `activated` tinyint(4) NOT NULL,
  `remember_token` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `manager_id` int(11) DEFAULT NULL,
  `staff_id` int(11) DEFAULT NULL,
  `customer_id` int(11) DEFAULT NULL,
  `employee_id` int(11) DEFAULT NULL,
  `first_name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `last_name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `count_access` int(11) DEFAULT NULL,
  `code_forget` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `username` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `last_login` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `ip` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `lock_screen` int(11) DEFAULT '10',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `permission` text COLLATE utf8_unicode_ci,
  `avatar` text COLLATE utf8_unicode_ci,
  `trash` tinyint(4) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=146 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES ('1', 'luong@email.com', '$2y$10$gNxsJa7TpGse.1JlmEqZLuMpDkWQ4I3cNbKkjqa6sVOa4zlh5WcEe', '1', '1', '6h70HQUV7To5WCQsunQ0mGzjQBIVPctPgtlKcZsFkInadEGTnh97HkdlhcTt', null, null, null, null, 'luong', 'tran duc', '138', null, 'luongtranduc', '2014-08-28 06:33:28', '192.168.1.108', '10', '2014-08-28 06:33:28', '2014-07-15 04:30:54', null, 'asset/share/uploads/images/personal/08-15-2014_CRUDpng.png', '0');
INSERT INTO `users` VALUES ('93', 'staff_02@gmail.com', '$2y$10$f.q0IiBtsSCnMAbSlhNQdeIWqK9VcZ/1KcyMBQRi6wH8k/k3FrUYW', '2', '1', 'wzqaxYYw4zAMtIshp8pdTLjtiZRcsp5ZFQ5YIJI6uEIYHttUMOwYJSH32R4e', '59', null, null, null, 'Staff 02', 'Lui', '11', null, '', '2014-08-20 09:34:44', '192.168.1.123', '10', '2014-08-20 02:34:44', '2014-07-29 08:36:23', null, 'asset/share/uploads/images/personal/07-31-2014_7amMar20.If i fail.jpg', '0');
INSERT INTO `users` VALUES ('98', 'staff_01@gmail.com', '$2y$10$1ok9TmjGEccRxJKUURa2heK.ngzEe6h7z1.L5rwUL8H9PxNQ.dfcG', '2', '1', 'zlV3ji1eJ8ASbaXFf0tPcbo11OLBS3D7CEg2OGizvwQr8rGm5lBW92vt86k6', '1', null, null, null, 'Staff 01', 'lui', '21', null, '', '2014-08-25 07:46:40', '192.168.1.123', '10', '2014-08-25 07:46:40', '2014-07-29 10:19:29', null, 'asset/share/uploads/images/personal/07-30-2014_chỉ mục.jpg', '0');
INSERT INTO `users` VALUES ('99', 'taikhoanlive100@outlook.com.vn', '$2y$10$gpcSyZSNoh.NRiUSNMeqVeqCeCkeVgylkp2uJqBWfdbh.fs0AJuDe', '3', '1', 'GjnlzmO9teS9WK1yTWhxpIQzLstYIvPzCM1Ad5tWrQhN15Lfz5hhHH1cwJpn', '1', null, null, null, 'customer 1', 'tttd', '16', null, '', '2014-08-28 10:58:16', '192.168.1.123', '10', '2014-08-28 03:58:16', '2014-07-29 11:16:11', null, 'asset/share/uploads/images/personal/07-30-2014_mario2.png', '0');
INSERT INTO `users` VALUES ('102', 'ltt.develop@gmail.com', '$2y$10$HS3awsbGkdjccTWC22T09OXaLdTeEWAltP.nVeIHjdSf8OBymqn6C', '3', '1', '40B2qmngueH01UXFGve4htOSrlpD7vnt0q8zGOMJ63fMN4hFL9mmqzCMOEqI', '1', null, null, null, 'truyen', 'luong', '6', null, '', '2014-08-23 18:18:20', '192.168.1.123', '10', '2014-08-23 11:18:20', '2014-07-30 03:44:40', null, 'asset/share/uploads/images/personal/07-30-2014_IBM.jpeg', '0');
INSERT INTO `users` VALUES ('107', 'taikhoanlive101@outlook.com.vn', '$2y$10$gNxsJa7TpGse.1JlmEqZLuMpDkWQ4I3cNbKkjqa6sVOa4zlh5WcEe', '3', '1', 'dGYJK9iqtD6yPHhWuWagt11KVxWgE1umTxHyHKsjj2M4ldtM6qNi1P6X4Ae1', null, null, null, null, 'Nguyễn anh tài', 'MR/MS', '31', '5111e3d5a14701293d85498684986be9', '', '2014-08-25 02:35:15', '192.168.1.123', '10', '2014-08-25 02:35:15', '2014-07-31 04:49:51', null, 'asset/share/uploads/images/personal/07-31-2014_images.jpg', '0');
INSERT INTO `users` VALUES ('110', 'taikhoanlike102@outlook.com.vn', '$2y$10$vWSnI6fE2.0W7VuP70hzp.hS61D915nhWZYLO.AsLhNvZgLjXyaOO', '4', '1', '7EWNVel2bZOmQ8WymOYgNMfbGfC5WLkyL1oXsPmiXRM2h5gKYRGumuLQuHnl', null, null, '99', null, 'Big', 'mrD', '5', '904c9f010c5ec373d76e1967877de62a', '', '2014-08-20 09:23:56', '192.168.1.123', '10', '2014-08-20 02:23:56', '2014-07-31 10:35:46', null, 'asset/share/uploads/images/personal/07-31-2014_bg1.jpg', '0');
INSERT INTO `users` VALUES ('113', 'nguyen.anh.tuan.241@gmail.com', '$2y$10$jdBMKTgm9U1RbJWQHOc/j.hrK54RfK4Q02.Q5bjV39RezoGv252vW', '3', '1', 'Hss9puWWUgMThede3rvB4T54RWVk11SXo0OQTZLC7hCDKU0j6nYArALz3gqf', null, null, null, null, 'Shinosuke', 'MR/MS', '54', 'c4827eaa4e752a7716ec0b0a8c3e6060', '', '2014-08-28 06:35:17', '192.168.1.108', '10', '2014-08-28 06:35:17', '2014-08-01 08:37:02', null, 'asset/share/uploads/images/personal/08-11-2014_1779847_779157438780166_545792806_n.jpg', '0');
INSERT INTO `users` VALUES ('114', 'thanhtruyen1001@gmail.com', '$2y$10$xnDi0s1nnSh9voXJQH6DLukeBuC7SugSWmjnB9/UDxZw2MHqIVP7i', '3', '1', 'pwRMN9R9cC8j79E1G8NcFzpqGRjh7uJTEXGIYXb4Olhy2R3UFKqVBeVcpmaq', null, null, null, null, 'Nguyen huy tuong', 'MR/MS', '5', '8375f102e968b323bb5099590d686660', '', '2014-08-09 10:12:54', '192.168.1.114', '10', '2014-08-09 03:12:54', '2014-08-02 01:19:42', null, null, '0');
INSERT INTO `users` VALUES ('119', 'customer_04@gmail.com', '$2y$10$Uz2LbdjJM0MFHu0eZ7sYG.0H7Xduw/qqWbD6yfX8e8f1BSO1oBMTu', '3', '1', 'x2elj6V0ZFDqLzGPj9cKSiTB9shngBvb3ee6hXt0nfEwlOY3FFPW5C1LKOhj', null, null, null, null, 'SSSSSSSSSSSSSSSSS', 'MR/MS', '3', '38c4bb8443f3139129250dfbb00c1e49', '', '2014-08-06 15:47:43', '192.168.1.114', '10', '2014-08-06 08:47:43', '2014-08-05 11:05:57', null, null, '0');
INSERT INTO `users` VALUES ('131', 'ltt.develop@gmail.com1', '$2y$10$PrUPpqXQrCdTYIG3w9sNWuDsCAca.Iv322iVOltM5xvWpJlUGkZOy', '4', '0', null, null, null, '99', null, 'staffssssssssss', 'ssssssssssssss', null, 'a1a030718e59c04aefb90e40f1197c30', '', null, '192.168.1.123', '10', '2014-08-16 09:50:56', '2014-08-16 09:50:56', null, null, '0');
INSERT INTO `users` VALUES ('132', 'haanh@gmail.com', '$2y$10$yjO24PbvC4oWRyM.M2id.uIyrhXLqTqX2wFRzJKsomVHQuIbajTrK', '4', '1', null, null, null, '113', null, 'Mai Ha', 'Nguyen', null, 'c0154f09143f687834a376b7c312414e', '', null, '192.168.1.105', '10', '2014-08-18 02:36:08', '2014-08-18 02:36:08', null, null, '0');
INSERT INTO `users` VALUES ('133', 'dddddd@s.com', '$2y$10$hr.QSDgkjocdfLkGRw0i3efvRw4.a6Yc0Y5UYK5rnXDIfx87gqBs.', '3', '1', null, '1', null, null, null, 'kjl', 'kjl', null, '0fd7ccf09a9a7b8deba6749c8fcda74a', '', null, '192.168.1.123', '10', '2014-08-18 08:47:22', '2014-08-18 08:47:22', null, null, '0');
INSERT INTO `users` VALUES ('140', 'vn24s.com@gmail.com', '$2y$10$.ZVr8JWwMoz.ckWpadwq/um.kg74KGJGYmNVlsHkBMEFyTbA3V7RS', '3', '1', 'JvVWOyQsCDFnOMZcDOzDKlbgDvUHRArZpmCJaWVdy1XPQcajtbWa327iecrJ', '1', null, null, null, 'truyen', 'MR/MS', '1', '3ceefd20906cb46d6f7c4aa1a5a2479b', '', '2014-08-28 16:09:12', '192.168.1.123', '10', '2014-08-19 04:52:55', '2014-08-19 04:51:45', null, null, '0');
INSERT INTO `users` VALUES ('141', 'anhtuan11tlt@gmail.com', '$2y$10$d/rUfe12d0v9CL3zjsCcIuBxcE2BaCPiHamta9w6Y.I05w.tuhyVG', '3', '1', 'JvVWOyQsCDFnOMZcDOzDKlbgDvUHRArZpmCJaWVdy1XPQcajtbWa327iecrJ', null, null, null, null, 'Anh Dai', 'MR/MS', '1', '525adfe5e824495ec1e39bdc3172ee11', '', '2014-08-19 14:32:58', '192.168.1.105', '10', '2014-08-19 07:32:58', '2014-08-19 04:54:43', null, null, '0');
INSERT INTO `users` VALUES ('142', 'tuan.rambo.01@gmail.com', '$2y$10$AcRsCaup7gjUwXb1Tu./g.fbHJiWv8R8thfuOZNPL4PmXHhTVytry', '4', '1', null, null, null, '113', null, 'Dai Ca', 'Nguyen', '1', 'c11ac31e5104d75efa1a01ee228b79f9', '', '2014-08-20 02:17:47', '192.168.1.104', '10', '2014-08-20 02:17:47', '2014-08-20 02:07:00', null, null, '0');
INSERT INTO `users` VALUES ('143', 'tuan.rambo.02@gmail.com', '$2y$10$OJC7GjC1Xt1EjmNPJaGHTOq6269/H.U5UKB8I7JH0MHse54YU/II.', '2', '1', 'Quw21dTE1PWWcFaQNax2aZreSNAq3N3UyZf3IKyMFPqtD0BrtdFBWcYVThOa', '1', null, null, null, 'ABC', 'XYZ', '3', '9fda156afb2ea11e3a60eb8d791be548', '', '2014-08-21 09:49:29', '192.168.1.107', '10', '2014-08-21 02:49:29', '2014-08-20 03:28:55', null, null, '0');
INSERT INTO `users` VALUES ('144', 'customer2@gmail.com', '$2y$10$/HybzP9QS2JKMffavWDDjO6I.7R8vSKBpKsqrP3XzcI2hfibwMqg2', '3', '1', null, '1', null, null, null, 'truyen1', 'luong 1', null, 'e117987839ea3d2477189334a9c5c2df', '', null, '192.168.1.123', '10', '2014-08-21 01:19:46', '2014-08-21 01:19:46', null, null, '0');
INSERT INTO `users` VALUES ('145', 'tuan.rambo.03@gmail.com', '$2y$10$wU9rWmIX9omxE/ea71W4GuxmrcZcMq8gF8Hrrq9NEQeE0XXBSY1ty', '4', '1', null, null, null, '113', null, 'nguyen', 'anh', null, '0b9105a5851f9ed5f9bfc19040e2dc29', '', null, '192.168.1.107', '10', '2014-08-26 04:28:33', '2014-08-26 04:28:33', null, null, '0');
