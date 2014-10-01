/*
Navicat MySQL Data Transfer

Source Server         : LTT
Source Server Version : 50616
Source Host           : localhost:3306
Source Database       : crm-test

Target Server Type    : MYSQL
Target Server Version : 50616
File Encoding         : 65001

Date: 2014-09-16 09:50:34
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
  `code` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `postcode` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
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
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `description` text COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of fqa_category
-- ----------------------------
INSERT INTO `fqa_category` VALUES ('1', 'General', 'ssssssssss', '2014-09-09 08:43:50', '2014-09-11 08:09:59');
INSERT INTO `fqa_category` VALUES ('2', 'Getting Started', '', '2014-09-09 08:43:50', '2014-09-09 08:43:50');
INSERT INTO `fqa_category` VALUES ('3', 'Pricing', '', '2014-09-09 08:43:50', '2014-09-09 08:43:50');
INSERT INTO `fqa_category` VALUES ('4', 'Other', '', '2014-09-09 08:43:50', '2014-09-09 08:43:50');

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
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of fqas
-- ----------------------------
INSERT INTO `fqas` VALUES ('1', 'gggggggggg', '<p>gggggggggggggggg</p>\r\n', '7', '1', '2014-09-11 08:10:26', '2014-09-12 02:50:11');
INSERT INTO `fqas` VALUES ('2', 'How it works?', '<p>How it works?How it works?How it works?How it works?How it works?</p>\r\n', '0', '2', '2014-09-12 03:39:24', '2014-09-12 03:39:24');
INSERT INTO `fqas` VALUES ('3', 'test eee', '<p>javascript</p>\r\n', '0', '1', '2014-09-12 03:44:02', '2014-09-12 03:44:02');

-- ----------------------------
-- Table structure for `group_users`
-- ----------------------------
DROP TABLE IF EXISTS `group_users`;
CREATE TABLE `group_users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `description` text COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of group_users
-- ----------------------------
INSERT INTO `group_users` VALUES ('1', 'admin', '', '2014-09-09 08:43:48', '2014-09-09 08:43:48');
INSERT INTO `group_users` VALUES ('2', 'staff', '', '2014-09-09 08:43:48', '2014-09-09 08:43:48');
INSERT INTO `group_users` VALUES ('3', 'customer', '', '2014-09-09 08:43:48', '2014-09-09 08:43:48');
INSERT INTO `group_users` VALUES ('4', 'employee', '', '2014-09-09 08:43:48', '2014-09-09 08:43:48');

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
  `status` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of languages
-- ----------------------------
INSERT INTO `languages` VALUES ('1', 'English', 'en', '', '', 'publish', '2014-09-09 08:43:49', '2014-09-09 08:43:49');
INSERT INTO `languages` VALUES ('2', 'العربية', 'sa', '', '', 'publish', '2014-09-09 08:43:49', '2014-09-09 08:43:49');

-- ----------------------------
-- Table structure for `messages`
-- ----------------------------
DROP TABLE IF EXISTS `messages`;
CREATE TABLE `messages` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `content` text COLLATE utf8_unicode_ci NOT NULL,
  `activated` tinyint(4) NOT NULL,
  `type` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `status` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `assign_to` int(11) NOT NULL,
  `from` int(11) NOT NULL,
  `link` text COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=56 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of messages
-- ----------------------------
INSERT INTO `messages` VALUES ('1', 'Support ticket from customerTK1-1', '<a href=\"http://localhost:8000/manager/tickets/TK1-1\">At TK1-1</a>', '1', 'work', '', '3', '1', '', '2014-09-09 08:47:01', '2014-09-11 08:34:53');
INSERT INTO `messages` VALUES ('2', 'Support ticket Admin tttttttttttttttttt - TK1-1', '<p>ssssssssssssss</p>\r\n<a href=\"http://localhost:8000/client/tickets/TK1-1\">At TK1-1</a>', '1', 'work', '', '2', '3', '', '2014-09-09 08:47:39', '2014-09-09 08:47:58');
INSERT INTO `messages` VALUES ('3', 'Titcket CRM From customer - tttttttttttttttttt - TK1-1', '<p>dddddddddddddd</p>\r\n - <a href=\"http://localhost:8000/manager/tickets/TK1-1\">Visit</a>', '1', 'work', '', '3', '2', '', '2014-09-09 08:48:06', '2014-09-11 08:34:21');
INSERT INTO `messages` VALUES ('4', 'Support ticket from customerTK2-1', '<a href=\"http://192.168.1.123:8000/manager/tickets/TK2-1\">At TK2-1</a>', '1', 'work', '', '5', '1', '', '2014-09-11 01:20:14', '2014-09-11 02:12:45');
INSERT INTO `messages` VALUES ('5', 'Support ticket Admin i felling tired - TK2-1', '<p>&aacute;dfafasdfasdfas</p>\r\n<a href=\"http://192.168.1.123:8000/client/tickets/TK2-1\">At TK2-1</a>', '0', 'work', '', '2', '1', '', '2014-09-11 01:38:47', '2014-09-11 01:38:47');
INSERT INTO `messages` VALUES ('6', 'Support ticket from customerTK10-1', '<a href=\"http://192.168.1.123:8000/manager/tickets/TK10-1\">At TK10-1</a>', '1', 'work', '', '5', '1', '', '2014-09-11 02:16:41', '2014-09-11 02:58:25');
INSERT INTO `messages` VALUES ('7', 'Support ticket from customerTK11-1', '<a href=\"http://192.168.1.123:8000/manager/tickets/TK11-1\">At TK11-1</a>', '1', 'work', '', '5', '1', '', '2014-09-11 02:18:09', '2014-09-11 08:32:49');
INSERT INTO `messages` VALUES ('8', 'Support ticket from customerTK12-1', '<a href=\"http://192.168.1.123:8000/manager/tickets/TK12-1\">At TK12-1</a>', '1', 'work', '', '5', '1', '', '2014-09-11 02:19:05', '2014-09-11 08:32:54');
INSERT INTO `messages` VALUES ('9', 'Support ticket from customerTK13-1', '<a href=\"http://192.168.1.123:8000/manager/tickets/TK13-1\">At TK13-1</a>', '1', 'work', '', '5', '1', '', '2014-09-11 02:24:51', '2014-09-11 08:32:45');
INSERT INTO `messages` VALUES ('10', 'Support ticket from customerTK14-1', '<a href=\"http://192.168.1.123:8000/manager/tickets/TK14-1\">At TK14-1</a>', '1', 'work', '', '5', '1', '', '2014-09-11 02:25:22', '2014-09-11 02:58:31');
INSERT INTO `messages` VALUES ('11', 'Support ticket from customerTK15-1', '<a href=\"http://192.168.1.123:8000/manager/tickets/TK15-1\">At TK15-1</a>', '1', 'work', '', '5', '1', '', '2014-09-11 02:25:43', '2014-09-11 02:30:40');
INSERT INTO `messages` VALUES ('12', 'Support ticket from customerTK16-1', '<a href=\"http://192.168.1.123:8000/manager/tickets/TK16-1\">At TK16-1</a>', '1', 'work', '', '5', '1', '', '2014-09-11 02:33:21', '2014-09-11 08:26:33');
INSERT INTO `messages` VALUES ('13', 'Support ticket from customerTK17-1', '<a href=\"http://192.168.1.123:8000/manager/tickets/TK17-1\">At TK17-1</a>', '1', 'work', '', '5', '1', '', '2014-09-11 02:38:56', '2014-09-11 02:58:21');
INSERT INTO `messages` VALUES ('14', 'Support ticket from customerTK19-1', '<a href=\"http://192.168.1.123:8000/manager/tickets/TK19-1\">At TK19-1</a>', '1', 'work', '', '5', '1', '', '2014-09-11 04:01:54', '2014-09-11 06:04:07');
INSERT INTO `messages` VALUES ('15', 'Support ticket Admin truyen oi cai project nay nham qua - TK18-6', '<p>nhỏm &ocirc;ng nậu mi</p>\r\n<a href=\"http://192.168.1.123:8000/client/tickets/TK18-6\">At TK18-6</a>', '1', 'work', '', '6', '1', '', '2014-09-11 05:06:56', '2014-09-11 08:20:42');
INSERT INTO `messages` VALUES ('16', 'Support ticket from customerTK20-3', '<a href=\"http://192.168.1.123:8000/manager/tickets/TK20-3\">At TK20-3</a>', '1', 'work', '', '3', '3', '', '2014-09-11 08:28:26', '2014-09-11 08:32:47');
INSERT INTO `messages` VALUES ('17', 'Please confirm ticket TK21-7', 'You have created <a href=\'http://192.168.1.123:8000/client/tickets/TK21-7\'>TK21-7</a> \n                if customer agree or after 2 days no actions come from customer. We will change status of ticket to resolved.', '1', 'work', '', '7', '1', '', '2014-09-11 08:32:13', '2014-09-11 08:39:22');
INSERT INTO `messages` VALUES ('18', 'Support ticket Admin thang truyen xau trai - TK21-7', '<p>tao sẽ l&agrave;m việc với m&agrave;y thế nh&eacute;</p>\r\n<a href=\"http://192.168.1.123:8000/client/tickets/TK21-7\">At TK21-7</a>', '1', 'work', '', '7', '5', '', '2014-09-11 08:33:20', '2014-09-11 08:34:58');
INSERT INTO `messages` VALUES ('19', 'Support ticket Admin ggggggggggg - TK20-3', '<p>clct</p>\r\n<a href=\"http://192.168.1.123:8000/client/tickets/TK20-3\">At TK20-3</a>', '1', 'work', '', '2', '3', '', '2014-09-11 08:33:26', '2014-09-12 01:41:14');
INSERT INTO `messages` VALUES ('20', 'Support ticket Admin ggggggggggg - TK20-3', '<p>&#39;;;;;;;;;;;;;;</p>\r\n<a href=\"http://192.168.1.123:8000/client/tickets/TK20-3\">At TK20-3</a>', '1', 'work', '', '2', '3', '', '2014-09-11 08:33:56', '2014-09-11 11:03:36');
INSERT INTO `messages` VALUES ('21', 'Titcket CRM From customer - thang truyen xau trai - TK21-7', '<p>M&agrave;y l&agrave; thằng n&agrave;o con cờ h&oacute; kia</p>\r\n - <a href=\"http://192.168.1.123:8000/manager/tickets/TK21-7\">Visit</a>', '1', 'work', '', '5', '7', '', '2014-09-11 08:35:15', '2014-09-11 08:39:59');
INSERT INTO `messages` VALUES ('22', 'Support ticket Admin thang truyen xau trai - TK21-7', '<p>cc m&agrave;y muốn g&igrave; , &nbsp; &nbsp;</p>\r\n\r\n<p><img alt=\"\" src=\"http://img2.blog.zdn.vn/491958http://img2.blog.zdn.vn/49195803.jpg03.jpg\" style=\"width: 225px; height: 225px;\" /> s</p>\r\n<a href=\"http://192.168.1.123:8000/client/tickets/TK21-7\">At TK21-7</a>', '1', 'work', '', '7', '1', '', '2014-09-11 08:53:27', '2014-09-12 02:23:39');
INSERT INTO `messages` VALUES ('23', 'Support ticket Admin truyen oi cai project nay nham qua - TK18-6', '<p>ddddddddddd&nbsp; &ocirc;ng bỏ t&ugrave; b&acirc;y giờ</p>\r\n<a href=\"http://192.168.1.123:8000/client/tickets/TK18-6\">At TK18-6</a>', '1', 'work', '', '6', '1', '', '2014-09-11 10:31:42', '2014-09-12 07:30:50');
INSERT INTO `messages` VALUES ('24', 'Close ticketTK21-7', '<p>Thank you!, we happy when have served customer</p>\n                                                        </br><a href=\"http://192.168.1.123:8000/client/tickets/TK21-7\">Conplete ticket TK21-7</a>\n                                                        </br><a href=\"http://192.168.1.123:8000/client/races/TK21-7\">Please Race ticket at </a>', '1', 'work', '', '7', '1', '', '2014-09-11 10:57:54', '2014-09-12 01:32:56');
INSERT INTO `messages` VALUES ('25', 'Close ticketTK19-1', '<p>Thank you!, we happy when have served customer</p>\n                                                        </br><a href=\"http://192.168.1.123:8000/client/tickets/TK19-1\">Conplete ticket TK19-1</a>\n                                                        </br><a href=\"http://192.168.1.123:8000/client/races/TK19-1\">Please Race ticket at </a>', '1', 'work', '', '2', '1', '', '2014-09-11 11:02:52', '2014-09-11 11:03:19');
INSERT INTO `messages` VALUES ('26', 'Racing for me from ticketTK19-1', '<p>Customer have race for you with level <b>happy</b> <h3></h3>', '1', 'race', '', '5', '2', '', '2014-09-11 11:03:29', '2014-09-12 04:13:31');
INSERT INTO `messages` VALUES ('27', 'Support ticket from customerTK22-1', '<a href=\"http://192.168.1.123:8000/manager/tickets/TK22-1\">At TK22-1</a>', '1', 'work', '', '3', '1', '', '2014-09-12 01:39:37', '2014-09-12 01:40:02');
INSERT INTO `messages` VALUES ('28', 'Titcket CRM From customer - ttttttttttttttt - TK22-1', '<p>ffffffffffffff</p>\r\n - <a href=\"http://192.168.1.123:8000/manager/tickets/TK22-1\">Visit</a>', '1', 'work', '', '3', '2', '', '2014-09-12 01:42:05', '2014-09-12 01:44:15');
INSERT INTO `messages` VALUES ('29', 'Titcket CRM From customer - sssssssssssss - TK15-1', '<p><img alt=\"\" src=\"http://cdn-i.imagechef.com/ic/templimg2/Typewriter.jpg\" style=\"width: 400px; height: 400px;\" />sssssssssssss</p>\r\n - <a href=\"http://192.168.1.123:8000/manager/tickets/TK15-1\">Visit</a>', '1', 'work', '', '5', '2', '', '2014-09-12 02:24:12', '2014-09-12 04:13:24');
INSERT INTO `messages` VALUES ('30', 'Support ticket Admin sssssssssssss - TK15-1', '<p>sssssssssssssssss &nbsp;&nbsp;<img alt=\"\" src=\"http://t9.imagechef.com/ic/imgout/samp4e001d6748e63f74.jpg\" /></p>\r\n<a href=\"http://192.168.1.123:8000/client/tickets/TK15-1\">At TK15-1</a>', '0', 'work', '', '2', '1', '', '2014-09-12 02:25:00', '2014-09-12 02:25:00');
INSERT INTO `messages` VALUES ('31', 'Support ticket Admin uiuiuiuiuiuiuiuiuiuiuiuiui - TK10-1', 'sssssssssss<a href=\"http://192.168.1.123:8000/client/tickets/TK10-1\">At TK10-1</a>', '0', 'work', '', '2', '1', '', '2014-09-12 02:35:39', '2014-09-12 02:35:39');
INSERT INTO `messages` VALUES ('32', 'Support ticket Admin test one clich create a ticket - TK25-7', '<p>ăn shit đi bạn <img alt=\"\" src=\"http://192.168.1.123:8000/asset/share/uploads/ticket/09-12-2014_AngryKid.gif\" /><img alt=\"\" src=\"http://192.168.1.123:8000/asset/share/uploads/ticket/09-12-2014_AngryKid.gif\" style=\"width: 86px; height: 100px; float: left;\" /></p>\r\n<a href=\"http://192.168.1.123:8000/client/tickets/TK25-7\">At TK25-7</a>', '1', 'work', '', '7', '1', '', '2014-09-12 03:16:31', '2014-09-12 04:18:44');
INSERT INTO `messages` VALUES ('33', 'Support ticket from customerTK26-1', '<a href=\"http://192.168.1.123:8000/manager/tickets/TK26-1\">At TK26-1</a>', '1', 'work', '', '5', '1', '', '2014-09-12 03:26:45', '2014-09-12 04:13:12');
INSERT INTO `messages` VALUES ('34', 'Support ticket Admin test one clich create a ticket - TK25-7', '<p><img alt=\"\" src=\"http://3.bp.blogspot.com/-3uMxP4GZK74/UswwND989fI/AAAAAAAAFMo/rLoVHVlCi2Q/s1600/anh-dong-ban-chim.gif\" style=\"width: 240px; height: 320px;\" /></p>\r\n<a href=\"http://192.168.1.123:8000/client/tickets/TK25-7\">At TK25-7</a>', '1', 'work', '', '7', '1', '', '2014-09-12 03:36:18', '2014-09-12 04:16:15');
INSERT INTO `messages` VALUES ('35', 'Please confirm ticket TK25-7', 'You have created <a href=\'http://192.168.1.123:8000/client/tickets/TK25-7\'>TK25-7</a> \n                if customer agree or after 2 days no actions come from customer. We will change status of ticket to resolved.', '1', 'work', '', '7', '1', '', '2014-09-12 03:49:14', '2014-09-12 04:16:07');
INSERT INTO `messages` VALUES ('36', 'Please confirm ticket TK25-7', 'You have created <a href=\'http://192.168.1.123:8000/client/tickets/TK25-7\'>TK25-7</a> \n                if customer agree or after 2 days no actions come from customer. We will change status of ticket to resolved.', '1', 'work', '', '7', '1', '', '2014-09-12 04:10:38', '2014-09-12 04:12:43');
INSERT INTO `messages` VALUES ('37', 'Please confirm ticket TK27-7', 'You have created <a href=\'http://192.168.1.123:8000/client/tickets/TK27-7\'>TK27-7</a> \n                if customer agree or after 2 days no actions come from customer. We will change status of ticket to resolved.', '1', 'work', '', '7', '1', '', '2014-09-12 04:18:33', '2014-09-12 04:18:56');
INSERT INTO `messages` VALUES ('38', 'Support ticket Admin Truyen yeu ha tester - TK27-7', '<p>shit</p>\r\n<a href=\"http://192.168.1.123:8000/client/tickets/TK27-7\">At TK27-7</a>', '1', 'work', '', '7', '5', '', '2014-09-12 04:20:38', '2014-09-12 04:20:51');
INSERT INTO `messages` VALUES ('39', 'Titcket CRM From customer - Truyen yeu ha tester - TK27-7', '<p>con kẹc ta n&egrave;</p>\r\n - <a href=\"http://192.168.1.123:8000/manager/tickets/TK27-7\">Visit</a>', '1', 'work', '', '5', '7', '', '2014-09-12 04:21:12', '2014-09-12 04:21:28');
INSERT INTO `messages` VALUES ('40', 'Support ticket Admin Test ticket by thanhtruyen admin - TK30-10', '<p>fffffffffffffffffffffffff</p>\r\n<a href=\"http://192.168.1.123:8000/client/tickets/TK30-10\">At TK30-10</a>', '0', 'work', '', '9', '1', '', '2014-09-12 06:48:42', '2014-09-12 06:48:42');
INSERT INTO `messages` VALUES ('41', 'Support ticket Admin Test ticket by thanhtruyen admin - TK30-10', '<p>fffffffffffffffffffffffff</p>\r\n<a href=\"http://192.168.1.123:8000/client/tickets/TK30-10\">At TK30-10</a>', '0', 'work', '', '10', '1', '', '2014-09-12 06:48:42', '2014-09-12 06:48:42');
INSERT INTO `messages` VALUES ('42', 'Support ticket Admin Test ticket by thanhtruyen admin - TK30-10', '<p>fffffffffffff</p>\r\n<a href=\"http://192.168.1.123:8000/client/tickets/TK30-10\">At TK30-10</a>', '0', 'work', '', '9', '1', '', '2014-09-12 06:50:03', '2014-09-12 06:50:03');
INSERT INTO `messages` VALUES ('43', 'Support ticket Admin Test ticket by thanhtruyen admin - TK30-10', '<p>fffffffffffff</p>\r\n<a href=\"http://192.168.1.123:8000/client/tickets/TK30-10\">At TK30-10</a>', '0', 'work', '', '10', '1', '', '2014-09-12 06:50:03', '2014-09-12 06:50:03');
INSERT INTO `messages` VALUES ('44', 'Support ticket Admin Test ticket by thanhtruyen admin - TK30-10', '<p>ddddddddd</p>\r\n<a href=\"http://192.168.1.123:8000/client/tickets/TK30-10\">At TK30-10</a>', '0', 'work', '', '9', '1', '', '2014-09-12 06:51:05', '2014-09-12 06:51:05');
INSERT INTO `messages` VALUES ('45', 'Support ticket Admin Test ticket by thanhtruyen admin - TK30-10', '<p>ddddddddd</p>\r\n<a href=\"http://192.168.1.123:8000/client/tickets/TK30-10\">At TK30-10</a>', '0', 'work', '', '10', '1', '', '2014-09-12 06:51:05', '2014-09-12 06:51:05');
INSERT INTO `messages` VALUES ('46', 'Support ticket Admin Test ticket by thanhtruyen admin - TK30-10', '<p>dddddddddd</p>\r\n<a href=\"http://192.168.1.123:8000/client/tickets/TK30-10\">At TK30-10</a>', '0', 'work', '', '9', '1', '', '2014-09-12 06:52:09', '2014-09-12 06:52:09');
INSERT INTO `messages` VALUES ('47', 'Support ticket Admin Test ticket by thanhtruyen admin - TK30-10', '<p>dddddddddd</p>\r\n<a href=\"http://192.168.1.123:8000/client/tickets/TK30-10\">At TK30-10</a>', '0', 'work', '', '10', '1', '', '2014-09-12 06:52:09', '2014-09-12 06:52:09');
INSERT INTO `messages` VALUES ('48', 'Support ticket Admin Test ticket by thanhtruyen admin - TK30-10', '<p>dddddddddddd</p>\r\n<a href=\"http://192.168.1.123:8000/client/tickets/TK30-10\">At TK30-10</a>', '0', 'work', '', '9', '1', '', '2014-09-12 06:54:25', '2014-09-12 06:54:25');
INSERT INTO `messages` VALUES ('49', 'Support ticket Admin Test ticket by thanhtruyen admin - TK30-10', '<p>dddddddddddd</p>\r\n<a href=\"http://192.168.1.123:8000/client/tickets/TK30-10\">At TK30-10</a>', '0', 'work', '', '10', '1', '', '2014-09-12 06:54:25', '2014-09-12 06:54:25');
INSERT INTO `messages` VALUES ('50', 'Support ticket Admin Test ticket by thanhtruyen admin - TK30-10', '<p>ssssssssssssss</p>\r\n<a href=\"http://192.168.1.123:8000/client/tickets/TK30-10\">At TK30-10</a>', '0', 'work', '', '9', '1', '', '2014-09-12 06:55:46', '2014-09-12 06:55:46');
INSERT INTO `messages` VALUES ('51', 'Support ticket Admin Test ticket by thanhtruyen admin - TK30-10', '<p>ssssssssssssss</p>\r\n<a href=\"http://192.168.1.123:8000/client/tickets/TK30-10\">At TK30-10</a>', '0', 'work', '', '10', '1', '', '2014-09-12 06:55:46', '2014-09-12 06:55:46');
INSERT INTO `messages` VALUES ('52', 'Support ticket Admin sssssss - TK31-10', '<p>sssssssss</p>\r\n<a href=\"http://192.168.1.123:8000/client/tickets/TK31-10\">At TK31-10</a>', '0', 'work', '', '9', '1', '', '2014-09-12 06:59:47', '2014-09-12 06:59:47');
INSERT INTO `messages` VALUES ('53', 'Support ticket Admin sssssss - TK31-10', '<p>sssssssss</p>\r\n<a href=\"http://192.168.1.123:8000/client/tickets/TK31-10\">At TK31-10</a>', '0', 'work', '', '10', '1', '', '2014-09-12 06:59:47', '2014-09-12 06:59:47');
INSERT INTO `messages` VALUES ('54', 'Close ticketTK31-10', '<p>Thank you!, we happy when have served customer</p>\n                                                        </br><a href=\"http://192.168.1.123:8000/client/tickets/TK31-10\">Conplete ticket TK31-10</a>\n                                                        </br><a href=\"http://192.168.1.123:8000/client/races/TK31-10\">Please Race ticket at </a>', '0', 'work', '', '10', '1', '', '2014-09-12 07:07:58', '2014-09-12 07:07:58');
INSERT INTO `messages` VALUES ('55', 'Support ticket Admin truyen oi cai project nay nham qua - TK18-6', '<p>cccccccccccccc</p>\r\n<a href=\"http://192.168.1.123:8000/client/tickets/TK18-6\">At TK18-6</a>', '1', 'work', '', '6', '1', '', '2014-09-12 07:44:21', '2014-09-12 07:49:04');

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
INSERT INTO `migrations` VALUES ('2014_09_09_031256_create_uploads_table', '1');
INSERT INTO `migrations` VALUES ('2014_09_09_031543_create_tickets_table', '1');
INSERT INTO `migrations` VALUES ('2014_09_09_032327_create_ticketActivity_table', '1');
INSERT INTO `migrations` VALUES ('2014_09_09_032800_create_supportType_table', '1');
INSERT INTO `migrations` VALUES ('2014_09_09_033138_create_supportTickets_table', '1');
INSERT INTO `migrations` VALUES ('2014_09_09_033639_create_status_table', '1');
INSERT INTO `migrations` VALUES ('2014_09_09_033805_create_setting_table', '1');
INSERT INTO `migrations` VALUES ('2014_09_09_034530_create_sector_table', '1');
INSERT INTO `migrations` VALUES ('2014_09_09_034653_create_race_table', '1');
INSERT INTO `migrations` VALUES ('2014_09_09_035014_create_purchases_table', '1');
INSERT INTO `migrations` VALUES ('2014_09_09_035433_create_purchaseProducts_table', '1');
INSERT INTO `migrations` VALUES ('2014_09_09_035815_create_purchaseGroupProducts_table', '1');
INSERT INTO `migrations` VALUES ('2014_09_09_040020_create_purchaseDetail_table', '1');
INSERT INTO `migrations` VALUES ('2014_09_09_040309_create_profiles_table', '1');
INSERT INTO `migrations` VALUES ('2014_09_09_040746_create_priority_table', '1');
INSERT INTO `migrations` VALUES ('2014_09_09_040841_create_news_table', '1');
INSERT INTO `migrations` VALUES ('2014_09_09_041044_create_newCategory_table', '1');
INSERT INTO `migrations` VALUES ('2014_09_09_041315_create_message_table', '1');
INSERT INTO `migrations` VALUES ('2014_09_09_041624_create_language_table', '1');
INSERT INTO `migrations` VALUES ('2014_09_09_041942_create_groupUsers_table', '1');
INSERT INTO `migrations` VALUES ('2014_09_09_042132_create_fqas_table', '1');
INSERT INTO `migrations` VALUES ('2014_09_09_042313_create_fqaCategory_table', '1');
INSERT INTO `migrations` VALUES ('2014_09_09_042434_create_countries_table', '1');

-- ----------------------------
-- Table structure for `new_category`
-- ----------------------------
DROP TABLE IF EXISTS `new_category`;
CREATE TABLE `new_category` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `description` text COLLATE utf8_unicode_ci NOT NULL,
  `parent_id` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of new_category
-- ----------------------------
INSERT INTO `new_category` VALUES ('1', 'Common', 'aaaaaaaaaaaaaaaiiiiiii', '0', '2014-09-09 08:43:51', '2014-09-11 07:56:57');

-- ----------------------------
-- Table structure for `news`
-- ----------------------------
DROP TABLE IF EXISTS `news`;
CREATE TABLE `news` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `permalink` text COLLATE utf8_unicode_ci NOT NULL,
  `content` text COLLATE utf8_unicode_ci NOT NULL,
  `category_id` int(11) NOT NULL,
  `description` text COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of news
-- ----------------------------
INSERT INTO `news` VALUES ('1', 'hhhhhhhhhhhhhhhh', 'hhhhhhhhhhhhhhhh', '<p>hhhhhhhhhhhhhhhhhhhhhh</p>\r\n', '1', '', '2014-09-11 07:57:41', '2014-09-11 07:57:41');

-- ----------------------------
-- Table structure for `priority`
-- ----------------------------
DROP TABLE IF EXISTS `priority`;
CREATE TABLE `priority` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `description` text COLLATE utf8_unicode_ci,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of priority
-- ----------------------------

-- ----------------------------
-- Table structure for `profiles`
-- ----------------------------
DROP TABLE IF EXISTS `profiles`;
CREATE TABLE `profiles` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `address` text COLLATE utf8_unicode_ci NOT NULL,
  `website` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `phone_number` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `sector_id` int(11) NOT NULL,
  `employee_count` int(11) NOT NULL,
  `contact_employee_company` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `company_name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `activity` int(11) NOT NULL,
  `field_id` int(11) NOT NULL,
  `country` int(11) NOT NULL,
  `birth_day` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of profiles
-- ----------------------------
INSERT INTO `profiles` VALUES ('1', '1', 'da nang', '', '98908908098', '0', '0', '', '', '0', '0', '0', '0000-00-00 00:00:00', '2014-09-09 08:43:48', '2014-09-09 09:16:37');
INSERT INTO `profiles` VALUES ('2', '2', 'Nguyễn kim', 'nguyemkim.com', '3333333333333333333', '1', '3', 'Nguyễn anh tài', 'Nguyễn kim', '0', '0', '0', '0000-00-00 00:00:00', '2014-09-09 08:45:12', '2014-09-09 08:55:21');
INSERT INTO `profiles` VALUES ('3', '3', '', '', '', '0', '0', '', '', '0', '0', '0', '0000-00-00 00:00:00', '2014-09-09 08:46:42', '2014-09-09 08:46:42');
INSERT INTO `profiles` VALUES ('5', '5', '', '', '', '0', '0', '', '', '0', '0', '0', '0000-00-00 00:00:00', '2014-09-09 09:35:33', '2014-09-09 09:35:33');
INSERT INTO `profiles` VALUES ('6', '6', 'SFR', 'sfr-creative.com ', '0972102103', '1', '10', 'SFR company', 'SFR', '0', '0', '0', '0000-00-00 00:00:00', '2014-09-09 09:38:11', '2014-09-09 09:40:33');
INSERT INTO `profiles` VALUES ('7', '7', '', '', '0972102013', '2', '10', 'Anh Tuan', 'SFR', '0', '0', '0', '0000-00-00 00:00:00', '2014-09-10 02:26:16', '2014-09-10 02:26:16');
INSERT INTO `profiles` VALUES ('8', '8', 'Đà Nẵng - Việt Nam', '', '0974191000', '0', '0', '', '', '0', '0', '0', '0000-00-00 00:00:00', '2014-09-11 09:02:19', '2014-09-11 09:02:19');
INSERT INTO `profiles` VALUES ('9', '9', '', '', '23343434', '2', '3', 'Lương thanh truyền', 'SAMSUNG', '0', '0', '0', '0000-00-00 00:00:00', '2014-09-12 02:09:34', '2014-09-12 02:09:34');
INSERT INTO `profiles` VALUES ('10', '10', 'Da nang', '', '980989333', '0', '0', '', '', '0', '0', '0', '0000-00-00 00:00:00', '2014-09-12 02:12:56', '2014-09-12 02:12:56');

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
  `note` text COLLATE utf8_unicode_ci NOT NULL,
  `expiry` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of purchase_detail
-- ----------------------------
INSERT INTO `purchase_detail` VALUES ('1', '2', '2', '2014-09-12 00:00:00', '0000-00-00 00:00:00', '0', '2014-09-12 01:46:39', '2014-09-12 01:46:39', '', '6');
INSERT INTO `purchase_detail` VALUES ('2', '3', '2', '2014-09-12 00:00:00', '0000-00-00 00:00:00', '0', '2014-09-12 03:40:42', '2014-09-12 03:40:42', '', '6');
INSERT INTO `purchase_detail` VALUES ('3', '4', '2', '2014-09-12 00:00:00', '0000-00-00 00:00:00', '0', '2014-09-12 03:49:39', '2014-09-12 03:49:39', '', '6');
INSERT INTO `purchase_detail` VALUES ('4', '5', '1', '2014-09-12 00:00:00', '0000-00-00 00:00:00', '0', '2014-09-12 03:53:39', '2014-09-12 03:53:39', '', '5');
INSERT INTO `purchase_detail` VALUES ('5', '6', '1', '2014-09-12 00:00:00', '0000-00-00 00:00:00', '0', '2014-09-12 03:54:51', '2014-09-12 03:54:51', '', '6');
INSERT INTO `purchase_detail` VALUES ('6', '7', '2', '2014-09-26 00:00:00', '0000-00-00 00:00:00', '0', '2014-09-12 03:56:47', '2014-09-12 03:56:47', '', '6');
INSERT INTO `purchase_detail` VALUES ('7', '8', '2', '2014-09-19 00:00:00', '0000-00-00 00:00:00', '0', '2014-09-12 03:59:01', '2014-09-12 03:59:01', '', '6');
INSERT INTO `purchase_detail` VALUES ('8', '9', '2', '2014-09-12 00:00:00', '0000-00-00 00:00:00', '0', '2014-09-12 03:59:31', '2014-09-12 03:59:31', '', '6');

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
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of purchase_group_products
-- ----------------------------
INSERT INTO `purchase_group_products` VALUES ('1', 'Default', '', '2014-09-09 08:43:51', '2014-09-09 08:43:51');

-- ----------------------------
-- Table structure for `purchase_products`
-- ----------------------------
DROP TABLE IF EXISTS `purchase_products`;
CREATE TABLE `purchase_products` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `description` text COLLATE utf8_unicode_ci NOT NULL,
  `group_products` int(11) NOT NULL,
  `cost` decimal(8,2) NOT NULL,
  `discount` int(11) NOT NULL,
  `amount_in` int(11) NOT NULL,
  `activated` tinyint(4) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of purchase_products
-- ----------------------------
INSERT INTO `purchase_products` VALUES ('1', 'ffffffffffffffffffff', 'ffffffffffffffffffffffff', '1', '20000.00', '0', '0', '1', '2014-09-11 02:46:08', '2014-09-11 02:46:08');
INSERT INTO `purchase_products` VALUES ('2', 'CRM', '', '1', '120.00', '1', '0', '1', '2014-09-12 01:45:36', '2014-09-12 01:45:36');

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
  `customer_order` text COLLATE utf8_unicode_ci NOT NULL,
  `note` text COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of purchases
-- ----------------------------
INSERT INTO `purchases` VALUES ('8', '1', '0', 'CRM8-OTHER', '0', 'Name:\r\nAddress\r\nPhone', '', '2014-09-12 03:59:01', '2014-09-12 03:59:01');
INSERT INTO `purchases` VALUES ('9', '1', '9', 'CRM9-CUSTOMER', '0', '', 'tttttttttttt', '2014-09-12 03:59:31', '2014-09-12 03:59:31');

-- ----------------------------
-- Table structure for `races`
-- ----------------------------
DROP TABLE IF EXISTS `races`;
CREATE TABLE `races` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `code_ticket` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `comment` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `level_comment` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `score` int(11) NOT NULL,
  `happy` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `unhappy` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of races
-- ----------------------------
INSERT INTO `races` VALUES ('1', 'TK19-1', '', 'happy', '0', '', '', '2014-09-11 11:03:29', '2014-09-11 11:03:29');
INSERT INTO `races` VALUES ('2', 'TK31-10', '', 'happy', '0', '', '', '2014-09-12 07:12:33', '2014-09-12 07:12:33');

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
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of sector
-- ----------------------------
INSERT INTO `sector` VALUES ('1', 'Common', 'dddđ', '2014-09-09 08:43:51', '2014-09-11 07:51:49');
INSERT INTO `sector` VALUES ('2', 'Bussiness', 'ddddddđ', '2014-09-09 08:43:51', '2014-09-11 05:02:32');

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
INSERT INTO `setting` VALUES ('host_email_admin', 'Email admin', '', '13', null);
INSERT INTO `setting` VALUES ('host_encryption', 'Email Encryption', 'tls', '6', null);
INSERT INTO `setting` VALUES ('host_mail', 'Email Host', 'smtp.gmail.com', '4', null);
INSERT INTO `setting` VALUES ('host_password', 'Email Password', '', '8', null);
INSERT INTO `setting` VALUES ('host_port', 'Email Port', '587', '5', null);
INSERT INTO `setting` VALUES ('host_username', 'Email Username', '', '7', null);
INSERT INTO `setting` VALUES ('phone', 'Phone', '8-8-8-8', '11', null);
INSERT INTO `setting` VALUES ('site_name', 'Website Name', 'CRM', '1', null);
INSERT INTO `setting` VALUES ('twitter', 'Twitter', 'Twitter', '13', null);

-- ----------------------------
-- Table structure for `status`
-- ----------------------------
DROP TABLE IF EXISTS `status`;
CREATE TABLE `status` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of status
-- ----------------------------
INSERT INTO `status` VALUES ('1', 'New', '2014-09-09 08:43:48', '2014-09-09 08:43:48');
INSERT INTO `status` VALUES ('2', 'In process', '2014-09-09 08:43:48', '2014-09-09 08:43:48');
INSERT INTO `status` VALUES ('3', 'Resolve', '2014-09-09 08:43:48', '2014-09-09 08:43:48');
INSERT INTO `status` VALUES ('4', 'Close', '2014-09-09 08:43:48', '2014-09-09 08:43:48');

-- ----------------------------
-- Table structure for `support_tickets`
-- ----------------------------
DROP TABLE IF EXISTS `support_tickets`;
CREATE TABLE `support_tickets` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `ticket_id` varchar(11) COLLATE utf8_unicode_ci NOT NULL,
  `user_id` int(11) NOT NULL,
  `content` text COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=38 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of support_tickets
-- ----------------------------
INSERT INTO `support_tickets` VALUES ('5', 'TK4-2', '2', '<p>jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj</p>\r\n', '2014-09-11 01:58:00', '2014-09-11 01:58:00');
INSERT INTO `support_tickets` VALUES ('6', 'TK5-2', '2', '<p>uuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu</p>\r\n', '2014-09-11 02:00:04', '2014-09-11 02:00:04');
INSERT INTO `support_tickets` VALUES ('7', 'TK18-6', '1', '<p>nhỏm &ocirc;ng nậu mi</p>\r\n', '2014-09-11 05:06:56', '2014-09-11 05:06:56');
INSERT INTO `support_tickets` VALUES ('8', 'TK18-6', '6', '<p>Ăn shit đi m&agrave;y</p>\r\n', '2014-09-11 08:21:10', '2014-09-11 08:21:10');
INSERT INTO `support_tickets` VALUES ('9', 'TK21-7', '5', '<p>tao sẽ l&agrave;m việc với m&agrave;y thế nh&eacute;</p>\r\n', '2014-09-11 08:33:20', '2014-09-11 08:33:20');
INSERT INTO `support_tickets` VALUES ('10', 'TK20-3', '3', '<p>clct</p>\r\n', '2014-09-11 08:33:26', '2014-09-11 08:33:26');
INSERT INTO `support_tickets` VALUES ('11', 'TK20-3', '3', '<p>&#39;;;;;;;;;;;;;;</p>\r\n', '2014-09-11 08:33:55', '2014-09-11 08:33:55');
INSERT INTO `support_tickets` VALUES ('12', 'TK21-7', '7', '<p>M&agrave;y l&agrave; thằng n&agrave;o con cờ h&oacute; kia</p>\r\n', '2014-09-11 08:35:15', '2014-09-11 08:35:15');
INSERT INTO `support_tickets` VALUES ('13', 'TK21-7', '1', '<p>cc m&agrave;y muốn g&igrave; , &nbsp; &nbsp;</p>\r\n\r\n<p><img alt=\"\" src=\"http://img2.blog.zdn.vn/491958http://img2.blog.zdn.vn/49195803.jpg03.jpg\" style=\"width: 225px; height: 225px;\" /> s</p>\r\n', '2014-09-11 08:53:27', '2014-09-11 08:53:27');
INSERT INTO `support_tickets` VALUES ('14', 'TK18-6', '8', '<p>ch&agrave;o c&aacute;c đại ca</p>\r\n', '2014-09-11 09:12:54', '2014-09-11 09:12:54');
INSERT INTO `support_tickets` VALUES ('15', 'TK18-6', '1', '<p>ddddddddddd&nbsp; &ocirc;ng bỏ t&ugrave; b&acirc;y giờ</p>\r\n', '2014-09-11 10:31:42', '2014-09-11 10:31:42');
INSERT INTO `support_tickets` VALUES ('16', 'TK22-1', '2', '<p>ffffffffffffff</p>\r\n', '2014-09-12 01:42:05', '2014-09-12 01:42:05');
INSERT INTO `support_tickets` VALUES ('17', 'TK15-1', '2', '<p><img alt=\"\" src=\"http://cdn-i.imagechef.com/ic/templimg2/Typewriter.jpg\" style=\"width: 400px; height: 400px;\" />sssssssssssss</p>\r\n', '2014-09-12 02:24:12', '2014-09-12 02:24:12');
INSERT INTO `support_tickets` VALUES ('18', 'TK15-1', '1', '<p>sssssssssssssssss &nbsp;&nbsp;<img alt=\"\" src=\"http://t9.imagechef.com/ic/imgout/samp4e001d6748e63f74.jpg\" /></p>\r\n', '2014-09-12 02:25:00', '2014-09-12 02:25:00');
INSERT INTO `support_tickets` VALUES ('19', 'TK10-1', '1', 'sssssssssss', '2014-09-12 02:35:39', '2014-09-12 02:35:39');
INSERT INTO `support_tickets` VALUES ('20', 'TK25-7', '1', '<p>ăn shit đi bạn <img alt=\"\" src=\"http://192.168.1.123:8000/asset/share/uploads/ticket/09-12-2014_AngryKid.gif\" /><img alt=\"\" src=\"http://192.168.1.123:8000/asset/share/uploads/ticket/09-12-2014_AngryKid.gif\" style=\"width: 86px; height: 100px; float: left;\" /></p>\r\n', '2014-09-12 03:16:31', '2014-09-12 03:16:31');
INSERT INTO `support_tickets` VALUES ('21', 'TK25-7', '7', '<p>dai ca cua ca vung</p>\r\n\r\n<hr />\r\n<p>&nbsp;</p>\r\n', '2014-09-12 03:18:26', '2014-09-12 03:18:26');
INSERT INTO `support_tickets` VALUES ('22', 'TK25-7', '7', '<p><img alt=\"\" src=\"http://192.168.1.123:8000/asset/share/uploads/ticket/09-12-2014_AngryKid.gif\" />được rồi dm bạn ha ha ha ha</p>\r\n', '2014-09-12 03:31:05', '2014-09-12 03:31:05');
INSERT INTO `support_tickets` VALUES ('23', 'TK25-7', '1', '<p><img alt=\"\" src=\"http://3.bp.blogspot.com/-3uMxP4GZK74/UswwND989fI/AAAAAAAAFMo/rLoVHVlCi2Q/s1600/anh-dong-ban-chim.gif\" style=\"width: 240px; height: 320px;\" /></p>\r\n', '2014-09-12 03:36:17', '2014-09-12 03:36:17');
INSERT INTO `support_tickets` VALUES ('24', 'TK27-7', '5', '<p>shit</p>\r\n', '2014-09-12 04:20:38', '2014-09-12 04:20:38');
INSERT INTO `support_tickets` VALUES ('25', 'TK27-7', '7', '<p>con kẹc ta n&egrave;</p>\r\n', '2014-09-12 04:21:12', '2014-09-12 04:21:12');
INSERT INTO `support_tickets` VALUES ('26', 'TK30-10', '1', '<p>fffffffffffffffffffffffff</p>\r\n', '2014-09-12 06:48:41', '2014-09-12 06:48:41');
INSERT INTO `support_tickets` VALUES ('27', 'TK30-10', '1', '<p>fffffffffffff</p>\r\n', '2014-09-12 06:50:03', '2014-09-12 06:50:03');
INSERT INTO `support_tickets` VALUES ('28', 'TK30-10', '1', '<p>ddddddddd</p>\r\n', '2014-09-12 06:51:05', '2014-09-12 06:51:05');
INSERT INTO `support_tickets` VALUES ('29', 'TK30-10', '1', '<p>dddddddddd</p>\r\n', '2014-09-12 06:52:09', '2014-09-12 06:52:09');
INSERT INTO `support_tickets` VALUES ('30', 'TK30-10', '1', '<p>dddddddddddd</p>\r\n', '2014-09-12 06:54:25', '2014-09-12 06:54:25');
INSERT INTO `support_tickets` VALUES ('31', 'TK30-10', '1', '<p>ssssssssssssss</p>\r\n', '2014-09-12 06:55:45', '2014-09-12 06:55:45');
INSERT INTO `support_tickets` VALUES ('32', 'TK31-10', '10', '<p>s</p>\r\n', '2014-09-12 06:58:30', '2014-09-12 06:58:30');
INSERT INTO `support_tickets` VALUES ('33', 'TK31-10', '10', '<p>aaaaaaaaaaaaaaaaaaaaaaaa</p>\r\n', '2014-09-12 06:59:08', '2014-09-12 06:59:08');
INSERT INTO `support_tickets` VALUES ('34', 'TK31-10', '1', '<p>sssssssss</p>\r\n', '2014-09-12 06:59:47', '2014-09-12 06:59:47');
INSERT INTO `support_tickets` VALUES ('35', 'TK18-6', '6', '<p>https://fbcdn-sphotos-g-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-9/10599310_839126306127004_9097091204114847520_n.jpg?oh=ef8e8bd67678b685ee0220dcf1b554d5&amp;oe=5489FABA&amp;__gda__=1419199499_cb80a50c5d53519b7deb8da54587152e</p>\r\n', '2014-09-12 07:31:32', '2014-09-12 07:31:32');
INSERT INTO `support_tickets` VALUES ('36', 'TK18-6', '6', '<p><img alt=\"\" src=\"https://fbcdn-sphotos-g-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-9/10599310_839126306127004_9097091204114847520_n.jpg?oh=ef8e8bd67678b685ee0220dcf1b554d5&amp;oe=5489FABA&amp;__gda__=1419199499_cb80a50c5d53519b7deb8da54587152e\" style=\"width: 525px; height: 666px;\" /></p>\r\n', '2014-09-12 07:31:43', '2014-09-12 07:31:43');
INSERT INTO `support_tickets` VALUES ('37', 'TK18-6', '1', '<p>cccccccccccccc</p>\r\n', '2014-09-12 07:44:21', '2014-09-12 07:44:21');

-- ----------------------------
-- Table structure for `support_type`
-- ----------------------------
DROP TABLE IF EXISTS `support_type`;
CREATE TABLE `support_type` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `description` text COLLATE utf8_unicode_ci,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of support_type
-- ----------------------------
INSERT INTO `support_type` VALUES ('1', 'Cleaning problem', '2014-09-09 08:43:50', '2014-09-09 08:43:50', null);
INSERT INTO `support_type` VALUES ('2', 'Utility services', '2014-09-09 08:43:50', '2014-09-09 08:43:50', null);
INSERT INTO `support_type` VALUES ('3', 'Maintenance', '2014-09-09 08:43:50', '2014-09-09 08:43:50', null);
INSERT INTO `support_type` VALUES ('4', 'Safe and Security', '2014-09-09 08:43:50', '2014-09-09 08:43:50', null);

-- ----------------------------
-- Table structure for `ticket_activity`
-- ----------------------------
DROP TABLE IF EXISTS `ticket_activity`;
CREATE TABLE `ticket_activity` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `ticket_id` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `event` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `title` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `content` text COLLATE utf8_unicode_ci NOT NULL,
  `author_id` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=69 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of ticket_activity
-- ----------------------------
INSERT INTO `ticket_activity` VALUES ('1', 'TK1-1', 'Created', '<b>SFR Default</b> Created the ticket', '', '1', '2014-09-09 08:47:01', '2014-09-09 08:47:01');
INSERT INTO `ticket_activity` VALUES ('2', 'TK1-1', 'Replied', '<b>Staff 001</b> Replied the ticket', '<p>ssssssssssssss</p>\r\n', '3', '2014-09-09 08:47:39', '2014-09-09 08:47:39');
INSERT INTO `ticket_activity` VALUES ('3', 'TK1-1', 'Replied', '<b> customer</b> Replied the ticket', '<p>dddddddddddddd</p>\r\n', '2', '2014-09-09 08:48:06', '2014-09-09 08:48:06');
INSERT INTO `ticket_activity` VALUES ('4', 'TK2-1', 'Created', '<b>SFR Default</b> Created the ticket', '', '1', '2014-09-11 01:20:14', '2014-09-11 01:20:14');
INSERT INTO `ticket_activity` VALUES ('5', 'TK2-1', 'Replied', '<b>SFR Default</b> Replied the ticket', '<p>&aacute;dfafasdfasdfas</p>\r\n', '1', '2014-09-11 01:38:47', '2014-09-11 01:38:47');
INSERT INTO `ticket_activity` VALUES ('6', 'TK3-2', 'Created', '<b>Nguyen kim customer</b> Created the ticket', '', '2', '2014-09-11 01:52:37', '2014-09-11 01:52:37');
INSERT INTO `ticket_activity` VALUES ('7', 'TK4-2', 'Created', '<b>Nguyen kim customer</b> Created the ticket', '', '2', '2014-09-11 01:53:11', '2014-09-11 01:53:11');
INSERT INTO `ticket_activity` VALUES ('8', 'TK4-2', 'Replied', '<b> customer</b> Replied the ticket', '<p>uuuuuuuuuuuu</p>\r\n', '2', '2014-09-11 01:54:50', '2014-09-11 01:54:50');
INSERT INTO `ticket_activity` VALUES ('9', 'TK4-2', 'Replied', '<b> customer</b> Replied the ticket', '<p>jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj</p>\r\n', '2', '2014-09-11 01:58:00', '2014-09-11 01:58:00');
INSERT INTO `ticket_activity` VALUES ('10', 'TK5-2', 'Created', '<b>Nguyen kim customer</b> Created the ticket', '', '2', '2014-09-11 01:59:24', '2014-09-11 01:59:24');
INSERT INTO `ticket_activity` VALUES ('11', 'TK5-2', 'Replied', '<b> customer</b> Replied the ticket', '<p>uuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu</p>\r\n', '2', '2014-09-11 02:00:04', '2014-09-11 02:00:04');
INSERT INTO `ticket_activity` VALUES ('12', 'TK9-6', 'Created', '<b>Onizuka Eikichi</b> Created the ticket', '', '6', '2014-09-11 02:11:03', '2014-09-11 02:11:03');
INSERT INTO `ticket_activity` VALUES ('13', 'TK14-1', 'Created', '<b>SFR Default</b> Created the ticket', '', '1', '2014-09-11 02:25:22', '2014-09-11 02:25:22');
INSERT INTO `ticket_activity` VALUES ('14', 'TK18-6', 'Created', '<b>Onizuka Eikichi</b> Created the ticket', '', '6', '2014-09-11 02:58:02', '2014-09-11 02:58:02');
INSERT INTO `ticket_activity` VALUES ('15', 'TK19-1', 'Created', '<b>SFR Default</b> Created the ticket', '', '1', '2014-09-11 04:01:54', '2014-09-11 04:01:54');
INSERT INTO `ticket_activity` VALUES ('16', 'TK18-6', 'Replied', '<b>SFR Default</b> Replied the ticket', '<p>nhỏm &ocirc;ng nậu mi</p>\r\n', '1', '2014-09-11 05:06:56', '2014-09-11 05:06:56');
INSERT INTO `ticket_activity` VALUES ('17', 'TK18-6', 'Replied', '<b> Eikichi</b> Replied the ticket', '<p>Ăn shit đi m&agrave;y</p>\r\n', '6', '2014-09-11 08:21:10', '2014-09-11 08:21:10');
INSERT INTO `ticket_activity` VALUES ('18', 'TK20-3', 'Created', '<b>Staff 001</b> Created the ticket', '', '3', '2014-09-11 08:28:26', '2014-09-11 08:28:26');
INSERT INTO `ticket_activity` VALUES ('19', 'TK21-7', 'Created', '<b>Anh Tuan</b> Created the ticket', '', '7', '2014-09-11 08:28:42', '2014-09-11 08:28:42');
INSERT INTO `ticket_activity` VALUES ('20', 'TK21-7', 'Updated', '<b> Default</b> Updated the ticket', '<i>Assign staff to</i> <b>  Anh Tuan  </b>', '1', '2014-09-11 08:32:18', '2014-09-11 08:32:18');
INSERT INTO `ticket_activity` VALUES ('21', 'TK21-7', 'Replied', '<b>Anh Tuan Nguyen</b> Replied the ticket', '<p>tao sẽ l&agrave;m việc với m&agrave;y thế nh&eacute;</p>\r\n', '5', '2014-09-11 08:33:20', '2014-09-11 08:33:20');
INSERT INTO `ticket_activity` VALUES ('22', 'TK20-3', 'Replied', '<b>Staff 001</b> Replied the ticket', '<p>clct</p>\r\n', '3', '2014-09-11 08:33:26', '2014-09-11 08:33:26');
INSERT INTO `ticket_activity` VALUES ('23', 'TK20-3', 'Replied', '<b>Staff 001</b> Replied the ticket', '<p>&#39;;;;;;;;;;;;;;</p>\r\n', '3', '2014-09-11 08:33:55', '2014-09-11 08:33:55');
INSERT INTO `ticket_activity` VALUES ('24', 'TK21-7', 'Replied', '<b> Tuan</b> Replied the ticket', '<p>M&agrave;y l&agrave; thằng n&agrave;o con cờ h&oacute; kia</p>\r\n', '7', '2014-09-11 08:35:15', '2014-09-11 08:35:15');
INSERT INTO `ticket_activity` VALUES ('25', 'TK21-7', 'Replied', '<b>SFR Default</b> Replied the ticket', '<p>cc m&agrave;y muốn g&igrave; , &nbsp; &nbsp;</p>\r\n\r\n<p><img alt=\"\" src=\"http://img2.blog.zdn.vn/491958http://img2.blog.zdn.vn/49195803.jpg03.jpg\" style=\"width: 225px; height: 225px;\" /> s</p>\r\n', '1', '2014-09-11 08:53:27', '2014-09-11 08:53:27');
INSERT INTO `ticket_activity` VALUES ('26', 'TK18-6', 'Replied', '<b> Cuto</b> Replied the ticket', '<p>ch&agrave;o c&aacute;c đại ca</p>\r\n', '8', '2014-09-11 09:12:54', '2014-09-11 09:12:54');
INSERT INTO `ticket_activity` VALUES ('27', 'TK18-6', 'Replied', '<b>SFR Default</b> Replied the ticket', '<p>ddddddddddd&nbsp; &ocirc;ng bỏ t&ugrave; b&acirc;y giờ</p>\r\n', '1', '2014-09-11 10:31:42', '2014-09-11 10:31:42');
INSERT INTO `ticket_activity` VALUES ('28', 'TK21-7', 'Updated', '<b> Default</b> Updated the ticket', 'Change <i>status </i> <b>  In process </b> to <b> Resolve </b>', '1', '2014-09-11 10:57:50', '2014-09-11 10:57:50');
INSERT INTO `ticket_activity` VALUES ('29', 'TK21-7', 'Updated', '<b> Default</b> Closed the ticket', '', '1', '2014-09-11 10:57:54', '2014-09-11 10:57:54');
INSERT INTO `ticket_activity` VALUES ('30', 'TK19-1', 'Updated', '<b> Default</b> Updated the ticket', 'Change <i>status </i> <b>  New </b> to <b> Resolve </b>', '1', '2014-09-11 11:02:46', '2014-09-11 11:02:46');
INSERT INTO `ticket_activity` VALUES ('31', 'TK19-1', 'Updated', '<b> Default</b> Closed the ticket', '', '1', '2014-09-11 11:02:51', '2014-09-11 11:02:51');
INSERT INTO `ticket_activity` VALUES ('32', 'TK22-1', 'Created', '<b>SFR Default</b> Created the ticket', '', '1', '2014-09-12 01:39:37', '2014-09-12 01:39:37');
INSERT INTO `ticket_activity` VALUES ('33', 'TK22-1', 'Replied', '<b> customer</b> Replied the ticket', '<p>ffffffffffffff</p>\r\n', '2', '2014-09-12 01:42:05', '2014-09-12 01:42:05');
INSERT INTO `ticket_activity` VALUES ('34', 'TK15-1', 'Replied', '<b> customer</b> Replied the ticket', '<p><img alt=\"\" src=\"http://cdn-i.imagechef.com/ic/templimg2/Typewriter.jpg\" style=\"width: 400px; height: 400px;\" />sssssssssssss</p>\r\n', '2', '2014-09-12 02:24:12', '2014-09-12 02:24:12');
INSERT INTO `ticket_activity` VALUES ('35', 'TK15-1', 'Replied', '<b>SFR Default</b> Replied the ticket', '<p>sssssssssssssssss &nbsp;&nbsp;<img alt=\"\" src=\"http://t9.imagechef.com/ic/imgout/samp4e001d6748e63f74.jpg\" /></p>\r\n', '1', '2014-09-12 02:25:00', '2014-09-12 02:25:00');
INSERT INTO `ticket_activity` VALUES ('36', 'TK10-1', 'Replied', '<b>SFR Default</b> Replied the ticket', 'sssssssssss', '1', '2014-09-12 02:35:39', '2014-09-12 02:35:39');
INSERT INTO `ticket_activity` VALUES ('37', 'TK23-7', 'Created', '<b>Anh Tuan</b> Created the ticket', '', '7', '2014-09-12 03:02:52', '2014-09-12 03:02:52');
INSERT INTO `ticket_activity` VALUES ('38', 'TK24-7', 'Created', '<b>Anh Tuan</b> Created the ticket', '', '7', '2014-09-12 03:03:03', '2014-09-12 03:03:03');
INSERT INTO `ticket_activity` VALUES ('39', 'TK25-7', 'Created', '<b>Anh Tuan</b> Created the ticket', '', '7', '2014-09-12 03:05:11', '2014-09-12 03:05:11');
INSERT INTO `ticket_activity` VALUES ('40', 'TK25-7', 'Replied', '<b>SFR Default</b> Replied the ticket', '<p>ăn shit đi bạn <img alt=\"\" src=\"http://192.168.1.123:8000/asset/share/uploads/ticket/09-12-2014_AngryKid.gif\" /><img alt=\"\" src=\"http://192.168.1.123:8000/asset/share/uploads/ticket/09-12-2014_AngryKid.gif\" style=\"width: 86px; height: 100px; float: left;\" /></p>\r\n', '1', '2014-09-12 03:16:31', '2014-09-12 03:16:31');
INSERT INTO `ticket_activity` VALUES ('41', 'TK25-7', 'Replied', '<b> Tuan</b> Replied the ticket', '<p>dai ca cua ca vung</p>\r\n\r\n<hr />\r\n<p>&nbsp;</p>\r\n', '7', '2014-09-12 03:18:26', '2014-09-12 03:18:26');
INSERT INTO `ticket_activity` VALUES ('42', 'TK26-1', 'Created', '<b>SFR Default</b> Created the ticket', '', '1', '2014-09-12 03:26:45', '2014-09-12 03:26:45');
INSERT INTO `ticket_activity` VALUES ('43', 'TK25-7', 'Replied', '<b> Tuan</b> Replied the ticket', '<p><img alt=\"\" src=\"http://192.168.1.123:8000/asset/share/uploads/ticket/09-12-2014_AngryKid.gif\" />được rồi dm bạn ha ha ha ha</p>\r\n', '7', '2014-09-12 03:31:05', '2014-09-12 03:31:05');
INSERT INTO `ticket_activity` VALUES ('44', 'TK25-7', 'Replied', '<b>SFR Default</b> Replied the ticket', '<p><img alt=\"\" src=\"http://3.bp.blogspot.com/-3uMxP4GZK74/UswwND989fI/AAAAAAAAFMo/rLoVHVlCi2Q/s1600/anh-dong-ban-chim.gif\" style=\"width: 240px; height: 320px;\" /></p>\r\n', '1', '2014-09-12 03:36:18', '2014-09-12 03:36:18');
INSERT INTO `ticket_activity` VALUES ('45', 'TK25-7', 'Updated', '<b> Default</b> Updated the ticket', '<i>Assign staff to</i> <b>  Anh Tuan  </b>', '1', '2014-09-12 04:14:26', '2014-09-12 04:14:26');
INSERT INTO `ticket_activity` VALUES ('46', 'TK27-7', 'Created', '<b>Anh Tuan</b> Created the ticket', '', '7', '2014-09-12 04:17:40', '2014-09-12 04:17:40');
INSERT INTO `ticket_activity` VALUES ('47', 'TK27-7', 'Updated', '<b> Default</b> Updated the ticket', '<i>Assign staff to</i> <b>  Anh Tuan  </b>', '1', '2014-09-12 04:18:27', '2014-09-12 04:18:27');
INSERT INTO `ticket_activity` VALUES ('48', 'TK27-7', 'Updated', '<b> Default</b> Updated the ticket', 'Change <i>status </i> <b>  New </b> to <b> In process </b>', '1', '2014-09-12 04:18:27', '2014-09-12 04:18:27');
INSERT INTO `ticket_activity` VALUES ('49', 'TK27-7', 'Replied', '<b>Anh Tuan Nguyen</b> Replied the ticket', '<p>shit</p>\r\n', '5', '2014-09-12 04:20:38', '2014-09-12 04:20:38');
INSERT INTO `ticket_activity` VALUES ('50', 'TK27-7', 'Replied', '<b> Tuan</b> Replied the ticket', '<p>con kẹc ta n&egrave;</p>\r\n', '7', '2014-09-12 04:21:12', '2014-09-12 04:21:12');
INSERT INTO `ticket_activity` VALUES ('51', 'TK28-10', 'Created', '<b>Hung William</b> Created the ticket', '', '10', '2014-09-12 06:37:46', '2014-09-12 06:37:46');
INSERT INTO `ticket_activity` VALUES ('52', 'TK29-10', 'Created', '<b>Hung William</b> Created the ticket', '', '10', '2014-09-12 06:40:32', '2014-09-12 06:40:32');
INSERT INTO `ticket_activity` VALUES ('53', 'TK30-10', 'Created', '<b>Hung William</b> Created the ticket', '', '10', '2014-09-12 06:43:32', '2014-09-12 06:43:32');
INSERT INTO `ticket_activity` VALUES ('54', 'TK30-10', 'Replied', '<b>SFR Default</b> Replied the ticket', '<p>fffffffffffffffffffffffff</p>\r\n', '1', '2014-09-12 06:48:42', '2014-09-12 06:48:42');
INSERT INTO `ticket_activity` VALUES ('55', 'TK30-10', 'Replied', '<b>SFR Default</b> Replied the ticket', '<p>fffffffffffff</p>\r\n', '1', '2014-09-12 06:50:03', '2014-09-12 06:50:03');
INSERT INTO `ticket_activity` VALUES ('56', 'TK30-10', 'Replied', '<b>SFR Default</b> Replied the ticket', '<p>ddddddddd</p>\r\n', '1', '2014-09-12 06:51:05', '2014-09-12 06:51:05');
INSERT INTO `ticket_activity` VALUES ('57', 'TK30-10', 'Replied', '<b>SFR Default</b> Replied the ticket', '<p>dddddddddd</p>\r\n', '1', '2014-09-12 06:52:09', '2014-09-12 06:52:09');
INSERT INTO `ticket_activity` VALUES ('58', 'TK30-10', 'Replied', '<b>SFR Default</b> Replied the ticket', '<p>dddddddddddd</p>\r\n', '1', '2014-09-12 06:54:25', '2014-09-12 06:54:25');
INSERT INTO `ticket_activity` VALUES ('59', 'TK30-10', 'Replied', '<b>SFR Default</b> Replied the ticket', '<p>ssssssssssssss</p>\r\n', '1', '2014-09-12 06:55:45', '2014-09-12 06:55:45');
INSERT INTO `ticket_activity` VALUES ('60', 'TK31-10', 'Created', '<b>Hung William</b> Created the ticket', '', '10', '2014-09-12 06:56:31', '2014-09-12 06:56:31');
INSERT INTO `ticket_activity` VALUES ('61', 'TK31-10', 'Replied', '<b> William</b> Replied the ticket', '<p>s</p>\r\n', '10', '2014-09-12 06:58:30', '2014-09-12 06:58:30');
INSERT INTO `ticket_activity` VALUES ('62', 'TK31-10', 'Replied', '<b> William</b> Replied the ticket', '<p>aaaaaaaaaaaaaaaaaaaaaaaa</p>\r\n', '10', '2014-09-12 06:59:08', '2014-09-12 06:59:08');
INSERT INTO `ticket_activity` VALUES ('63', 'TK31-10', 'Replied', '<b>SFR Default</b> Replied the ticket', '<p>sssssssss</p>\r\n', '1', '2014-09-12 06:59:47', '2014-09-12 06:59:47');
INSERT INTO `ticket_activity` VALUES ('64', 'TK31-10', 'Updated', '<b> Default</b> Updated the ticket', 'Change <i>status </i> <b>  In process </b> to <b> Resolve </b>', '1', '2014-09-12 07:07:54', '2014-09-12 07:07:54');
INSERT INTO `ticket_activity` VALUES ('65', 'TK31-10', 'Updated', '<b> Default</b> Closed the ticket', '', '1', '2014-09-12 07:07:58', '2014-09-12 07:07:58');
INSERT INTO `ticket_activity` VALUES ('66', 'TK18-6', 'Replied', '<b> Eikichi</b> Replied the ticket', '<p>https://fbcdn-sphotos-g-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-9/10599310_839126306127004_9097091204114847520_n.jpg?oh=ef8e8bd67678b685ee0220dcf1b554d5&amp;oe=5489FABA&amp;__gda__=1419199499_cb80a50c5d53519b7deb8da54587152e</p>\r\n', '6', '2014-09-12 07:31:32', '2014-09-12 07:31:32');
INSERT INTO `ticket_activity` VALUES ('67', 'TK18-6', 'Replied', '<b> Eikichi</b> Replied the ticket', '<p><img alt=\"\" src=\"https://fbcdn-sphotos-g-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-9/10599310_839126306127004_9097091204114847520_n.jpg?oh=ef8e8bd67678b685ee0220dcf1b554d5&amp;oe=5489FABA&amp;__gda__=1419199499_cb80a50c5d53519b7deb8da54587152e\" style=\"width: 525px; height: 666px;\" /></p>\r\n', '6', '2014-09-12 07:31:43', '2014-09-12 07:31:43');
INSERT INTO `ticket_activity` VALUES ('68', 'TK18-6', 'Replied', '<b>SFR Default</b> Replied the ticket', '<p>cccccccccccccc</p>\r\n', '1', '2014-09-12 07:44:21', '2014-09-12 07:44:21');

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
  `status` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `author_id` int(11) NOT NULL,
  `resolved_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `closed_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `close` tinyint(4) NOT NULL DEFAULT '0',
  `overdue` tinyint(4) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of tickets
-- ----------------------------
INSERT INTO `tickets` VALUES ('1', 'TK1-1', '2', '3', 'tttttttttttttttttt', '<p>tttttttttttttttttttttttt</p>\r\n', '1', 'nomal', '2', '2014-08-09 08:47:01', '2014-09-09 08:47:39', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0', '0');
INSERT INTO `tickets` VALUES ('2', 'TK2-1', '2', '5', 'i felling tired', '<p>i want kaj;fkj ;ljal f</p>\r\n', '1', 'nomal', '2', '2014-09-11 01:20:14', '2014-09-11 01:38:47', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0', '0');
INSERT INTO `tickets` VALUES ('3', 'TK3-2', '2', '0', 'sssssssssssssssssssssssss', '<p>sssssssssssssssssssss</p>\r\n', '1', 'nomal', '1', '2014-09-11 01:52:37', '2014-09-11 01:52:37', '2', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0', '0');
INSERT INTO `tickets` VALUES ('4', 'TK4-2', '2', '0', '77777777777777', '<p>7777777777777777777777777</p>\r\n', '1', 'nomal', '2', '2014-09-11 01:53:11', '2014-09-11 01:54:50', '2', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0', '0');
INSERT INTO `tickets` VALUES ('5', 'TK5-2', '2', '0', 'good morning cu Tuan', '<p>sssssssssssssssssssssssssssssssss</p>\r\n', '1', 'nomal', '2', '2014-09-11 01:59:24', '2014-09-11 02:00:04', '2', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0', '0');
INSERT INTO `tickets` VALUES ('6', 'TK6-6', '6', '0', 'truyen oi la truyen', '<p>dm doi nay anh khong lam thi em lam cho nhe</p>\r\n', '2', 'hight', '1', '2014-09-11 02:09:41', '2014-09-11 02:09:41', '6', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0', '0');
INSERT INTO `tickets` VALUES ('7', 'TK7-6', '6', '0', 'truyen oi la truyen', '<p>dm doi nay anh khong lam thi em lam cho nhe</p>\r\n', '2', 'hight', '1', '2014-09-11 02:10:07', '2014-09-11 02:10:07', '6', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0', '0');
INSERT INTO `tickets` VALUES ('8', 'TK8-6', '6', '0', 'truyen oi la truyen', '<p>dm doi nay anh khong lam thi em lam cho nhe</p>\r\n', '2', 'hight', '1', '2014-09-11 02:10:16', '2014-09-11 02:10:16', '6', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0', '0');
INSERT INTO `tickets` VALUES ('9', 'TK9-6', '6', '0', 'truyen oi la truyen', '<p>a b c d e f g h&nbsp;</p>\r\n', '2', 'hight', '1', '2014-09-11 02:11:03', '2014-09-11 02:11:03', '6', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0', '0');
INSERT INTO `tickets` VALUES ('10', 'TK10-1', '2', '5', 'uiuiuiuiuiuiuiuiuiuiuiuiui', '<p>yyyyyyyyyyyyyyyyyyyy</p>\r\n', '1', 'nomal', '2', '2014-09-11 02:16:40', '2014-09-12 02:35:39', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0', '0');
INSERT INTO `tickets` VALUES ('11', 'TK11-1', '2', '5', 'uiuiuiuiuiuiuiuiuiuiuiuiuiasd asd sd a', '<p>yyyyyyyyyyyyyyyyyyyy đ&aacute; d&aacute; đsd</p>\r\n', '1', 'nomal', '1', '2014-09-11 02:18:09', '2014-09-11 02:18:10', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0', '0');
INSERT INTO `tickets` VALUES ('12', 'TK12-1', '2', '5', 'uiuiuiuiuiuiuiuiuiuiuiuiuiasd asd sd a', '<p>yyyyyyyyyyyyyyyyyyyy đ&aacute; d&aacute; đsd</p>\r\n', '1', 'nomal', '1', '2014-09-11 02:19:05', '2014-09-11 02:19:05', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0', '0');
INSERT INTO `tickets` VALUES ('13', 'TK13-1', '2', '5', 'sssssssssssssssssssss', '<p>ssssssssssssssssssssssssssssssssss</p>\r\n', '1', 'nomal', '1', '2014-09-11 02:24:51', '2014-09-11 02:24:51', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0', '0');
INSERT INTO `tickets` VALUES ('14', 'TK14-1', '2', '5', 'sssssssssssssssssssss', '<p>ssssssssssssssssssssssssssssssssss</p>\r\n', '1', 'nomal', '1', '2014-09-11 02:25:22', '2014-09-11 02:25:22', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0', '0');
INSERT INTO `tickets` VALUES ('15', 'TK15-1', '2', '5', 'sssssssssssss', '<p>sssssssssssssssss</p>\r\n', '1', 'nomal', '2', '2014-09-11 02:25:43', '2014-09-12 02:24:12', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0', '0');
INSERT INTO `tickets` VALUES ('16', 'TK16-1', '2', '5', 'sssssssssssss', '<p>sssssssssssssssss</p>\r\n', '1', 'nomal', '1', '2014-09-11 02:33:21', '2014-09-11 02:33:21', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0', '0');
INSERT INTO `tickets` VALUES ('17', 'TK17-1', '2', '5', 'wwwwwwwwwwwwwwwwwwwwwwwwwwww', '<p>wwwwwwwwwwwwwwwwwwwwwwwwww</p>\r\n', '1', 'nomal', '1', '2014-09-11 02:38:56', '2014-09-11 02:38:56', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0', '0');
INSERT INTO `tickets` VALUES ('18', 'TK18-6', '6', '0', 'truyen oi cai project nay nham qua', '<p>truyen an shit</p>\r\n', '2', 'hight', '2', '2014-09-11 02:58:01', '2014-09-11 05:06:56', '6', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0', '0');
INSERT INTO `tickets` VALUES ('19', 'TK19-1', '2', '5', 'jjjjjjjjjjjjjjjjjjjjjjjj', '<p>jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj</p>\r\n', '1', 'nomal', '3', '2014-09-11 04:01:54', '2014-09-11 11:02:51', '1', '2014-09-11 11:02:47', '2014-09-11 11:02:47', '1', '0');
INSERT INTO `tickets` VALUES ('20', 'TK20-3', '2', '3', 'ggggggggggg', '<p>gggggggggggggggg</p>\r\n', '1', 'nomal', '2', '2014-09-11 08:28:26', '2014-09-11 08:33:26', '3', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0', '0');
INSERT INTO `tickets` VALUES ('21', 'TK21-7', '7', '5', 'thang truyen xau trai', '<p>thang hung xau gai</p>\r\n', '2', 'hight', '3', '2014-09-11 08:28:42', '2014-09-11 10:57:54', '7', '2014-09-11 10:57:50', '2014-09-11 10:57:50', '1', '0');
INSERT INTO `tickets` VALUES ('22', 'TK22-1', '2', '3', 'ttttttttttttttt', '<p>tttttttttttttttttttttttttt</p>\r\n', '1', 'nomal', '2', '2014-09-12 01:39:37', '2014-09-12 01:42:05', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0', '0');
INSERT INTO `tickets` VALUES ('23', 'TK23-7', '7', '0', 'Ticket la clgt?', '<p>truyền ăn shit của tuấn</p>\r\n', '2', 'hight', '1', '2014-09-12 03:02:52', '2014-09-12 03:02:52', '7', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0', '0');
INSERT INTO `tickets` VALUES ('24', 'TK24-7', '7', '0', 'Ticket la clgt?', '<p>truyền ăn shit của tuấn</p>\r\n', '3', 'nomal', '1', '2014-09-12 03:03:03', '2014-09-12 03:03:03', '7', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0', '0');
INSERT INTO `tickets` VALUES ('25', 'TK25-7', '7', '5', 'test one clich create a ticket', '<p>if have tow ticket false, else true</p>\r\n', '2', 'hight', '2', '2014-09-12 03:05:11', '2014-09-12 04:14:26', '7', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0', '0');
INSERT INTO `tickets` VALUES ('26', 'TK26-1', '2', '5', 'New ticket', '<p><span style=\"color: rgb(60, 118, 61); font-family: \'Open Sans\', Arial, sans-serif; line-height: 18.5714302062988px; background-color: rgb(223, 240, 216);\">New ticketNew ticketNew ticketNew ticketNew ticket</span></p>\r\n', '1', 'nomal', '1', '2014-09-12 03:26:45', '2014-09-12 03:26:45', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0', '0');
INSERT INTO `tickets` VALUES ('27', 'TK27-7', '7', '5', 'Truyen yeu ha tester', '<p>Hot hot qua chi la hot</p>\r\n', '1', 'nomal', '2', '2014-09-12 04:17:40', '2014-09-12 04:18:27', '7', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0', '0');
INSERT INTO `tickets` VALUES ('28', 'TK28-10', '9', '0', 'Test ticket by thanhtruyen admin', '<p>please give a litte money</p>\r\n', '2', 'urgent', '1', '2014-09-12 06:37:46', '2014-09-12 06:37:46', '10', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0', '0');
INSERT INTO `tickets` VALUES ('29', 'TK29-10', '9', '0', 'Test ticket by thanhtruyen admin', '<p>please give me a litte&nbsp;</p>\r\n', '3', 'hight', '1', '2014-09-12 06:40:32', '2014-09-12 06:40:32', '10', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0', '0');
INSERT INTO `tickets` VALUES ('30', 'TK30-10', '9', '0', 'Test ticket by thanhtruyen admin', '<p>ssssssssssssssssssss</p>\r\n', '4', 'urgent', '2', '2014-09-12 06:43:32', '2014-09-12 06:48:42', '10', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0', '0');
INSERT INTO `tickets` VALUES ('31', 'TK31-10', '9', '0', 'sssssss', '<p>ssssssssssssssssssssssss</p>\r\n', '1', 'nomal', '3', '2014-09-12 06:56:31', '2014-09-12 07:07:58', '10', '2014-09-12 07:07:54', '2014-09-12 07:07:54', '1', '0');

-- ----------------------------
-- Table structure for `uploads`
-- ----------------------------
DROP TABLE IF EXISTS `uploads`;
CREATE TABLE `uploads` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `path` text COLLATE utf8_unicode_ci NOT NULL,
  `type` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `size` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `type_file` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `ticket_id` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `customer_id` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of uploads
-- ----------------------------
INSERT INTO `uploads` VALUES ('1', '09-09-2014_Facepalm-1.gif', 'asset/share/uploads/images/personal/09-09-2014_Facepalm-1.gif', 'image/gif', '', 'image', '', '2014-09-09 09:42:01', '2014-09-09 09:42:01', null, '6');
INSERT INTO `uploads` VALUES ('2', '09-11-2014_934759_746043042126719_6994068541971541974_n.jpg', 'asset/share/uploads/ticket/09-11-2014_934759_746043042126719_6994068541971541974_n.jpg', 'image/jpeg', '', 'ticket', 'TK4-2', '2014-09-11 01:53:11', '2014-09-11 01:53:11', null, null);
INSERT INTO `uploads` VALUES ('3', '09-11-2014_10559779_10152276062618525_8116249068943288011_n.jpg', 'asset/share/uploads/ticket/09-11-2014_10559779_10152276062618525_8116249068943288011_n.jpg', 'image/jpeg', '', 'ticket', 'TK5-2', '2014-09-11 01:59:24', '2014-09-11 01:59:24', null, null);
INSERT INTO `uploads` VALUES ('4', '09-11-2014_010llisallindsay.gif', 'asset/share/uploads/ticket/09-11-2014_010llisallindsay.gif', 'image/gif', '', 'ticket', 'TK9-6', '2014-09-11 02:11:03', '2014-09-11 02:11:03', null, null);
INSERT INTO `uploads` VALUES ('5', '09-11-2014_20142390288e-dc39-4f04-96b7-d71e3b10ef10.gif', 'asset/share/uploads/ticket/09-11-2014_20142390288e-dc39-4f04-96b7-d71e3b10ef10.gif', 'image/gif', '', 'ticket', 'TK18-6', '2014-09-11 02:58:02', '2014-09-11 02:58:02', null, null);
INSERT INTO `uploads` VALUES ('6', '09-11-2014_AngryKid.gif', 'asset/share/uploads/ticket/09-11-2014_AngryKid.gif', 'image/gif', '', 'ticket', 'TK21-7', '2014-09-11 08:28:42', '2014-09-11 08:28:42', null, null);
INSERT INTO `uploads` VALUES ('7', '09-12-2014_10011186_698268453555779_4273170521825775242_n.jpg', 'asset/share/uploads/images/personal/09-12-2014_10011186_698268453555779_4273170521825775242_n.jpg', 'image/jpeg', '', 'image', '', '2014-09-12 02:14:11', '2014-09-12 02:14:11', null, '10');
INSERT INTO `uploads` VALUES ('8', '09-12-2014_tomqua.gif', 'asset/share/uploads/ticket/09-12-2014_tomqua.gif', 'image/gif', '', 'ticket', 'TK23-7', '2014-09-12 03:02:52', '2014-09-12 03:02:52', null, null);
INSERT INTO `uploads` VALUES ('9', '09-12-2014_tomqua.gif', 'asset/share/uploads/ticket/09-12-2014_tomqua.gif', 'image/gif', '', 'ticket', 'TK24-7', '2014-09-12 03:03:03', '2014-09-12 03:03:03', null, null);
INSERT INTO `uploads` VALUES ('10', '09-12-2014_AngryKid.gif', 'asset/share/uploads/ticket/09-12-2014_AngryKid.gif', 'image/gif', '', 'ticket', 'TK25-7', '2014-09-12 03:05:11', '2014-09-12 03:05:11', null, null);
INSERT INTO `uploads` VALUES ('11', '09-12-2014_01641.gif', 'asset/share/uploads/ticket/09-12-2014_01641.gif', 'image/gif', '', 'ticket', 'TK27-7', '2014-09-12 04:17:40', '2014-09-12 04:17:40', null, null);

-- ----------------------------
-- Table structure for `users`
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `group_users` int(11) NOT NULL,
  `activated` tinyint(4) NOT NULL DEFAULT '0',
  `remember_token` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `manager_id` int(11) NOT NULL,
  `staff_id` int(11) NOT NULL,
  `customer_id` int(11) NOT NULL,
  `employee_id` int(11) NOT NULL,
  `first_name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `last_name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `count_access` int(11) NOT NULL DEFAULT '0',
  `code_forget` text COLLATE utf8_unicode_ci NOT NULL,
  `username` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `last_login` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `ip` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `lock_screen` int(11) NOT NULL DEFAULT '15',
  `permission` text COLLATE utf8_unicode_ci NOT NULL,
  `avatar` text COLLATE utf8_unicode_ci NOT NULL,
  `trash` tinyint(4) NOT NULL DEFAULT '0',
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES ('1', 'luong@email.com', '$2y$10$FeGV/pPv3eFTX3bXftZko.d4YRPWX5uGpUkZlQ4jnmJvkubqqBKc2', '1', '1', 'hlJlkudL0vyuCDLS3BT9sC4Hsdt5DCCm6sipVW2MSwC4CBoXyS04ihHqfE5J', '0', '0', '0', '0', 'SFR', 'Default', '34', '', 'luong@email.com', '2014-09-12 08:08:20', '192.168.1.123', '15', '', '', '0', '2014-09-09 08:43:47', '2014-09-12 08:08:20');
INSERT INTO `users` VALUES ('2', 'customer01@gmail.com', '$2y$10$JII9uvunboqfq4wnRvGQSu14kAaKmXbv1Qi9yqQMU7MclsIZFDItS', '3', '1', 'BtEtqcsFxlLhSf627JScxjcPsecEAQXMq0pTyMIL4GzDL567Fbxb0R9EtcuL', '1', '0', '0', '0', 'Nguyen kim', 'customer', '8', '3189b93f88e7f00336ca1135873ccf60', '', '2014-09-12 03:20:09', '192.168.1.123', '15', '', '', '0', '2014-09-09 08:45:12', '2014-09-12 03:30:04');
INSERT INTO `users` VALUES ('3', 'staff01@gmail.com', '$2y$10$5oJ/08NfR/JefbrxdqxMH.eCknlTVhRhbulyMGlHBHS3xlp1c4Whu', '2', '1', 'aHEfJcyI6oM4GdFnSeD7FGme5Y4em8zgosTA9kINqWlKd46Q7W8uJ8IOxvIM', '1', '0', '0', '0', 'Staff', '001', '5', 'f040c13172481a9d60aab68619ca3430', '', '2014-09-12 01:42:14', '192.168.1.123', '15', '', '', '0', '2014-09-09 08:46:42', '2014-09-12 02:09:54');
INSERT INTO `users` VALUES ('5', 'nguyen.anh.tuan.241@gmail.com', '$2y$10$xo.UyC9Dak0eDgsoZcs2Je9myV/5Coi/j4Ih6rQaZ86T5AXuJ53ja', '2', '1', 'QSUspjuBargHKSHz3qqAgpoehd8Qj2BbESdVw7qy4g21UNnpVtStYE4srbLa', '1', '0', '0', '0', 'Anh Tuan', 'Nguyen', '11', 'c4827eaa4e752a7716ec0b0a8c3e6060', '', '2014-09-12 07:48:22', '192.168.1.105', '15', '', '', '0', '2014-09-09 09:35:33', '2014-09-12 07:48:45');
INSERT INTO `users` VALUES ('6', 'tuan.rambo.01@gmail.com', '$2y$10$nYuE5GqDu7eJYFgxI3O/p.BAClxvxeAd.U3Zif.N9MS9v68dViAly', '3', '1', 'bvacurDyaTEuSRma1ziF9QH4LGc3dvqmrC1MRqo5zTjuXXINeltpZlLWldg4', '0', '5', '0', '0', 'Onizuka', 'Eikichi', '9', 'c11ac31e5104d75efa1a01ee228b79f9', '', '2014-09-12 07:48:53', '192.168.1.105', '15', '', 'asset/share/uploads/images/personal/09-09-2014_Facepalm-1.gif', '0', '2014-09-09 09:38:11', '2014-09-12 07:48:53');
INSERT INTO `users` VALUES ('7', 'tuan.rambo.03@gmail.com', '$2y$10$e11ayFQBshk8Syu0HxLlOe8SQIY9x3opxg2uVaLmC3AKvHM3Cri1y', '3', '1', 'l474vn6QNQ1EuHbYnzTZvVJDDoYwT09GiiCwCk5RvaW52Jd6ngEBxUnXkAhH', '0', '0', '0', '0', 'Anh', 'Tuan', '6', '0b9105a5851f9ed5f9bfc19040e2dc29', '', '2014-09-12 07:47:37', '192.168.1.105', '15', '', '', '0', '2014-09-10 02:26:16', '2014-09-12 07:48:12');
INSERT INTO `users` VALUES ('8', 'tuan.rambo.04@gmail.com', '$2y$10$.0Rcxh7Cd9fsG6mbdrIBneTRn8RVtyYFiS0lgdMhZfqCTYB2v1fwm', '4', '1', 'ycdIt8LcAxam8Cy3WGkpGWZ4vdcTuuCBy6WiAElyosyNF70mxNqvOF6cCZ0R', '0', '0', '6', '0', 'Truyen Cuto', 'Cuto', '2', 'a0db89107a6f211b726da5f3d109705b', '', '2014-09-12 07:29:44', '192.168.1.105', '15', '', '', '0', '2014-09-11 09:02:19', '2014-09-12 07:29:54');
INSERT INTO `users` VALUES ('9', 'taikhoanlive102@outlook.com.vn', '$2y$10$iJdgR5XvVqL/oThJkt1o9.PrjIiklBkQrPtK/eVVzssr7xzM5b7uK', '3', '1', 'lJ67HJXQ02xHMeDdrw9rwTATLHHiTvUO95f9RCg7nZuj7LyCEqpvq4vS8tQZ', '0', '0', '0', '0', 'Lương', 'thanh truyền', '3', 'f61e6be02634cf8682113744badea4f1', '', '2014-09-12 03:19:57', '192.168.1.123', '15', '', '', '0', '2014-09-12 02:09:34', '2014-09-12 03:19:57');
INSERT INTO `users` VALUES ('10', 'taikhoanlive100@outlook.com.vn', '$2y$10$k1VIgHjoYVrpW2JCqRd6N.P7rcoSAczNynjGqPcL.uaw5OjEoQM1q', '4', '1', 'QO8PS3dlp9Nf33uT5sh32iqTWY6vrh0flIXK6IjHU2GVyb6CXjloQ4qrkoTi', '0', '0', '9', '0', 'Hung', 'William', '4', '90d54d434c8e5ed3927b9652854cdedc', '', '2014-09-12 08:05:27', '192.168.1.123', '15', '', 'asset/share/uploads/images/personal/09-12-2014_10011186_698268453555779_4273170521825775242_n.jpg', '0', '2014-09-12 02:12:56', '2014-09-12 08:08:15');
