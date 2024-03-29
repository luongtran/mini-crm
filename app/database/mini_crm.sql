/*
Navicat MySQL Data Transfer

Source Server         : LTT
Source Server Version : 50616
Source Host           : localhost:3306
Source Database       : mini_crm

Target Server Type    : MYSQL
Target Server Version : 50616
File Encoding         : 65001

Date: 2014-08-15 18:38:35
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
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of fqas
-- ----------------------------
INSERT INTO `fqas` VALUES ('3', 'Why should I use CRM', 'CRM is the abbreviation for customer relationship management.Customer relationship management entails all aspects of interaction that a company has with a customer, whether it is sales or service-related. While the phrase customer relationship management is most commonly used to describe a business-customer relationship, CRM systems are also used to manage business contacts, clients, contract wins and sales leads.', '2', '1', '2014-08-01 08:01:30', '2014-08-04 09:15:19');
INSERT INTO `fqas` VALUES ('4', 'Can I use other support software systems', 'CRM is the abbreviation for customer relationship management.Customer relationship management entails all aspects of interaction that a company has with a customer, whether it is sales or service-related. While the phrase customer relationship management is most commonly used to describe a business-customer relationship, CRM systems are also used to manage business contacts, clients, contract wins and sales leads.', '2', '3', '2014-08-01 09:00:17', '2014-08-04 09:15:07');
INSERT INTO `fqas` VALUES ('5', 'How do I sign up to CRM', 'CRM is the abbreviation for customer relationship management.Customer relationship management entails all aspects of interaction that a company has with a customer, whether it is sales or service-related. While the phrase customer relationship management is most commonly used to describe a business-customer relationship, CRM systems are also used to manage business contacts, clients, contract wins and sales leads.', '2', '1', '2014-08-01 09:17:53', '2014-08-04 01:38:56');
INSERT INTO `fqas` VALUES ('7', 'What is my own support website', 'CRM is the abbreviation for customer relationship management.Customer relationship management entails all aspects of interaction that a company has with a customer, whether it is sales or service-related. While the phrase customer relationship management is most commonly used to describe a business-customer relationship, CRM systems are also used to manage business contacts, clients, contract wins and sales leads.', '4', '2', '2014-08-02 02:07:46', '2014-08-09 02:56:54');
INSERT INTO `fqas` VALUES ('8', 'How do I log in to CRM', '<p>CRM is the abbreviation for customer relationship management.Customer relationship management entails all aspects of interaction that a company has with a customer, whether it is sales or service-related. While the phrase customer relationship management is most commonly used to describe a business-customer relationship, CRM systems are also used to manage business contacts, clients, contract wins and sales leads.</p>\r\n', '2', '1', '2014-08-02 02:09:43', '2014-08-15 11:16:42');
INSERT INTO `fqas` VALUES ('9', 'How do customers log in to my support website', 'CRM is the abbreviation for customer relationship management.Customer relationship management entails all aspects of interaction that a company has with a customer, whether it is sales or service-related. While the phrase customer relationship management is most commonly used to describe a business-customer relationship, CRM systems are also used to manage business contacts, clients, contract wins and sales leads.', '2', '2', '2014-08-02 03:50:40', '2014-08-04 08:44:18');
INSERT INTO `fqas` VALUES ('10', 'How do customers open a ticket', 'CRM is the abbreviation for customer relationship management.Customer relationship management entails all aspects of interaction that a company has with a customer, whether it is sales or service-related. While the phrase customer relationship management is most commonly used to describe a business-customer relationship, CRM systems are also used to manage business contacts, clients, contract wins and sales leads.', '2', '2', '0000-00-00 00:00:00', '0000-00-00 00:00:00');
INSERT INTO `fqas` VALUES ('11', 'How long is the free trial ', 'CRM is the abbreviation for customer relationship management.Customer relationship management entails all aspects of interaction that a company has with a customer, whether it is sales or service-related. While the phrase customer relationship management is most commonly used to describe a business-customer relationship, CRM systems are also used to manage business contacts, clients, contract wins and sales leads.', '3', '2', '0000-00-00 00:00:00', '0000-00-00 00:00:00');
INSERT INTO `fqas` VALUES ('12', 'What plans does CRM  offer', 'CRM is the abbreviation for customer relationship management.Customer relationship management entails all aspects of interaction that a company has with a customer, whether it is sales or service-related. While the phrase customer relationship management is most commonly used to describe a business-customer relationship, CRM systems are also used to manage business contacts, clients, contract wins and sales leads.', '7', '2', '0000-00-00 00:00:00', '2014-08-15 09:45:58');
INSERT INTO `fqas` VALUES ('13', 'Which plan should I choose', 'CRM is the abbreviation for customer relationship management.Customer relationship management entails all aspects of interaction that a company has with a customer, whether it is sales or service-related. While the phrase customer relationship management is most commonly used to describe a business-customer relationship, CRM systems are also used to manage business contacts, clients, contract wins and sales leads.', '4', '2', '0000-00-00 00:00:00', '2014-08-13 10:45:44');
INSERT INTO `fqas` VALUES ('14', 'How payments are made', 'CRM is the abbreviation for customer relationship management.Customer relationship management entails all aspects of interaction that a company has with a customer, whether it is sales or service-related. While the phrase customer relationship management is most commonly used to describe a business-customer relationship, CRM systems are also used to manage business contacts, clients, contract wins and sales leads.', '4', '2', '0000-00-00 00:00:00', '2014-08-05 11:07:44');
INSERT INTO `fqas` VALUES ('15', 'Can you send me updates about CRM', 'CRM is the abbreviation for customer relationship management.Customer relationship management entails all aspects of interaction that a company has with a customer, whether it is sales or service-related. While the phrase customer relationship management is most commonly used to describe a business-customer relationship, CRM systems are also used to manage business contacts, clients, contract wins and sales leads.', '5', '2', '0000-00-00 00:00:00', '2014-08-09 04:55:17');

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
) ENGINE=InnoDB AUTO_INCREMENT=79 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of messages
-- ----------------------------
INSERT INTO `messages` VALUES ('77', 'Please confirm ticket TK68-1', 'You have created <a href=\'http://192.168.1.114:8000/client/tickets/TK68-1\'>TK68-1</a> \n                       if customer agree or after 2 days no actions come from customer. We will change status of ticket to resolved.', '0', '2014-08-15 02:56:44', '2014-08-15 02:56:44', 'work', null, '99', '1', null);
INSERT INTO `messages` VALUES ('78', 'Please confirm ticket TK68-1', 'You have created <a href=\'http://192.168.1.114:8000/client/tickets/TK68-1\'>TK68-1</a> \n                       if customer agree or after 2 days no actions come from customer. We will change status of ticket to resolved.', '0', '2014-08-15 02:57:34', '2014-08-15 02:57:34', 'work', null, '99', '1', null);

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
INSERT INTO `profiles` VALUES ('63', '115', '', '', '', '0', '0', '', '2014-08-02 01:28:24', '2014-08-04 02:43:35', '', null, null, null, '2014-08-04 09:43:35');
INSERT INTO `profiles` VALUES ('67', '119', '', '', '2350U250', '2', '3', 'SSSSSSSSSSSSSSSSS', '2014-08-05 11:05:57', '2014-08-05 11:07:18', 'CNTT', null, null, null, '2014-08-05 18:07:18');
INSERT INTO `profiles` VALUES ('71', '123', '', '', '09711111111', '0', '5', 'nguyen van a', '2014-08-06 07:00:50', '2014-08-06 07:00:50', 'ABC', null, null, null, null);
INSERT INTO `profiles` VALUES ('77', '129', 'SFR', '', '0974123321', '1', '5', 'NguyenTuan', '2014-08-13 08:05:15', '2014-08-13 09:32:33', 'SFR', null, null, null, '2014-08-13 16:32:33');
INSERT INTO `profiles` VALUES ('78', '130', 'SFR', 'http://sfr-creative.com', '0', '1', '1', 'ha ha ha ha', '2014-08-13 09:17:51', '2014-08-13 09:18:51', 'SFR', null, null, null, '2014-08-13 16:18:51');

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
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

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
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

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
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of purchase_products
-- ----------------------------
INSERT INTO `purchase_products` VALUES ('6', 'Manager RMP', 'd', '3', '0.000', '1.20', '2014-07-21 04:47:51', '2014-07-21 08:08:26', '1');
INSERT INTO `purchase_products` VALUES ('7', 'Full HRM', '', '2', '12.200', '0.00', '2014-07-21 04:48:21', '2014-07-21 04:48:21', '1');
INSERT INTO `purchase_products` VALUES ('8', 'Medium RMP', 's', '3', '10.000', '0.00', '2014-07-21 05:03:29', '2014-07-21 07:46:11', '1');

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
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of purchases
-- ----------------------------
INSERT INTO `purchases` VALUES ('1', '1', '99', 'CRM1-57', '0', '0000-00-00 00:00:00', '0000-00-00 00:00:00', null, null);
INSERT INTO `purchases` VALUES ('3', '1', '114', 'CRM3-114', '0', '0000-00-00 00:00:00', '0000-00-00 00:00:00', null, null);
INSERT INTO `purchases` VALUES ('15', '1', '99', 'CRM15-OTHER', '0', '2014-08-15 08:51:37', '2014-08-15 08:51:37', '', '');
INSERT INTO `purchases` VALUES ('16', '1', '99', 'CRM16-OTHER', '0', '2014-08-15 08:52:06', '2014-08-15 08:52:06', '3', 'Nguyen van a : 8707-\r\nJLkljalkfjlfj jal fjlj alkf\r\n\r\n\r\nasfka;lf');

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
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of races
-- ----------------------------
INSERT INTO `races` VALUES ('1', 'TK26-88', '', 'happy', '', '2014-07-29 03:08:43', '2014-07-29 03:56:48');
INSERT INTO `races` VALUES ('2', 'TK27-88', '', 'happy', '', '2014-07-29 04:40:48', '2014-07-29 04:40:48');
INSERT INTO `races` VALUES ('3', 'TK56-107', '', 'happy', '', '2014-07-31 09:13:58', '2014-07-31 09:13:58');
INSERT INTO `races` VALUES ('4', 'TK59-115', '', 'happy', '', '2014-08-02 03:10:25', '2014-08-02 03:10:25');

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
INSERT INTO `setting` VALUES ('host_mail', 'Email Host', 'gator3228.hostgator.com', '4', null);
INSERT INTO `setting` VALUES ('host_password', 'Email Password', 'Xqi1llvM:nx8', '8', null);
INSERT INTO `setting` VALUES ('host_port', 'Email Port', '587', '5', null);
INSERT INTO `setting` VALUES ('host_username', 'Email Username', 'abulayla', '7', null);
INSERT INTO `setting` VALUES ('phone', 'Phone', '333-333-333', '11', null);
INSERT INTO `setting` VALUES ('site_name', 'Website Name', 'CRM', '1', null);
INSERT INTO `setting` VALUES ('twitter', 'Twitter', 'Twitter', '13', null);

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
) ENGINE=InnoDB AUTO_INCREMENT=48 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of support_tickets
-- ----------------------------
INSERT INTO `support_tickets` VALUES ('4', 'TK51-1', '1', 'lkjasdkljaskl;djaskl;d', '2014-07-30 09:41:20', '2014-07-30 09:41:20');
INSERT INTO `support_tickets` VALUES ('5', 'TK54-107', '107', '<p>dddddddddddddddddddd</p>\r\n', '2014-07-31 07:36:18', '2014-07-31 07:36:18');
INSERT INTO `support_tickets` VALUES ('8', 'TK51-1', '98', '<blockquote>\r\n<p><strong><em><u>dddddddddddddddddddddddddddddd</u></em></strong></p>\r\n</blockquote>\r\n', '2014-07-31 09:47:51', '2014-07-31 09:47:51');
INSERT INTO `support_tickets` VALUES ('9', 'TK53-107', '93', '<p>ch&uacute; mi hỏi g&igrave;</p>\r\n', '2014-08-01 02:20:03', '2014-08-01 02:20:03');
INSERT INTO `support_tickets` VALUES ('10', 'TK53-107', '93', '<p>ch&uacute; mi hỏi g&igrave;</p>\r\n', '2014-08-01 02:20:15', '2014-08-01 02:20:15');
INSERT INTO `support_tickets` VALUES ('11', 'TK53-107', '99', '<p>giờ ch&uacute; muốn sao, ăn nc thể hả</p>\r\n', '2014-08-01 02:24:31', '2014-08-01 02:24:31');
INSERT INTO `support_tickets` VALUES ('12', 'TK53-107', '99', '<p>giờ ch&uacute; muốn sao, ăn nc thể hả</p>\r\n', '2014-08-01 02:24:49', '2014-08-01 02:24:49');
INSERT INTO `support_tickets` VALUES ('13', 'TK53-107', '93', '<p>ờ th&igrave; ch&uacute; th&iacute;ch g&igrave; cứ nc, quồn đ&aacute;nh nhau &agrave;</p>\r\n', '2014-08-01 02:26:13', '2014-08-01 02:26:13');
INSERT INTO `support_tickets` VALUES ('14', 'TK53-107', '99', '<p>&ocirc;ng tổ cha mi</p>\r\n', '2014-08-01 02:26:46', '2014-08-01 02:26:46');
INSERT INTO `support_tickets` VALUES ('15', 'TK53-107', '99', '<p>&ocirc;ng tổ cha mi , ti&ecirc;n sư bố nh&agrave; mầy</p>\r\n', '2014-08-01 02:27:33', '2014-08-01 02:27:33');
INSERT INTO `support_tickets` VALUES ('16', 'TK53-107', '93', '<p>m&agrave;y l&aacute;u lắm, để ta tiễn m&agrave;y đi&nbsp;</p>\r\n', '2014-08-01 02:27:59', '2014-08-01 02:27:59');
INSERT INTO `support_tickets` VALUES ('17', 'TK57-112', '1', '<p>ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss</p>\r\n', '2014-08-01 03:47:55', '2014-08-01 03:47:55');
INSERT INTO `support_tickets` VALUES ('18', 'TK57-112', '1', '<p>efffffffffffffffffffffffff</p>\r\n', '2014-08-01 03:56:19', '2014-08-01 03:56:19');
INSERT INTO `support_tickets` VALUES ('19', 'TK57-112', '112', '<p>ssssssssss</p>\r\n\r\n<p>&nbsp;</p>\r\n', '2014-08-01 04:00:09', '2014-08-01 04:00:09');
INSERT INTO `support_tickets` VALUES ('20', 'TK59-115', '98', '<p>ch&uacute; mi sao thế</p>\r\n', '2014-08-02 01:33:40', '2014-08-02 01:33:40');
INSERT INTO `support_tickets` VALUES ('21', 'TK59-115', '115', '<p>dfljflkjdffd</p>\r\n', '2014-08-02 01:34:39', '2014-08-02 01:34:39');
INSERT INTO `support_tickets` VALUES ('22', 'TK59-115', '98', '<p>ddddddddddddddddddddddddddd</p>\r\n', '2014-08-02 01:42:22', '2014-08-02 01:42:22');
INSERT INTO `support_tickets` VALUES ('23', 'TK59-115', '98', '<p>lkllllllllllllllllll</p>\r\n', '2014-08-02 01:48:41', '2014-08-02 01:48:41');
INSERT INTO `support_tickets` VALUES ('24', 'TK59-115', '98', '<p>ddddddddddddddđ</p>\r\n', '2014-08-02 01:51:24', '2014-08-02 01:51:24');
INSERT INTO `support_tickets` VALUES ('25', 'TK59-115', '98', '<p>ddddddddddddddđsssssss</p>\r\n', '2014-08-02 01:52:08', '2014-08-02 01:52:08');
INSERT INTO `support_tickets` VALUES ('26', 'TK59-115', '115', '<p>ssssssssssss</p>\r\n', '2014-08-02 01:57:55', '2014-08-02 01:57:55');
INSERT INTO `support_tickets` VALUES ('27', 'TK59-115', '115', '<p>eeeeeeeeeee</p>\r\n', '2014-08-02 02:35:10', '2014-08-02 02:35:10');
INSERT INTO `support_tickets` VALUES ('28', 'TK59-115', '98', '<p>dddddddddddddddddd</p>\r\n', '2014-08-02 02:54:51', '2014-08-02 02:54:51');
INSERT INTO `support_tickets` VALUES ('29', 'TK60-115', '93', '<p>jjjjjjjjjj</p>\r\n', '2014-08-04 03:23:06', '2014-08-04 03:23:06');
INSERT INTO `support_tickets` VALUES ('30', 'TK61-115', '1', '<p>sssssssssssssssssssssssss</p>\r\n', '2014-08-06 03:58:09', '2014-08-06 03:58:09');
INSERT INTO `support_tickets` VALUES ('31', 'TK61-115', '1', '<p>ed</p>\r\n\r\n<p>&nbsp;</p>\r\n', '2014-08-08 02:48:26', '2014-08-08 02:48:26');
INSERT INTO `support_tickets` VALUES ('40', 'TK64-107', '107', '<p>ttttttttttttttttttttttttttttttttsry ty setb rtaertaertaert aert aert ae rtaert</p>\r\n', '2014-08-08 09:43:29', '2014-08-08 09:43:29');
INSERT INTO `support_tickets` VALUES ('41', 'TK65-107', '107', '<p>s</p>\r\n', '2014-08-09 02:39:46', '2014-08-09 02:39:46');
INSERT INTO `support_tickets` VALUES ('42', 'TK68-1', '99', '<p>ddddddddddđ</p>\r\n', '2014-08-14 03:27:39', '2014-08-14 03:27:39');
INSERT INTO `support_tickets` VALUES ('43', 'TK68-1', '1', '<p>vvvvvvvvvvvvvvvvvvvvvvvvvvvv</p>\r\n', '2014-08-15 02:19:45', '2014-08-15 02:19:45');
INSERT INTO `support_tickets` VALUES ('44', 'TK68-1', '1', '<p>ddđ</p>\r\n', '2014-08-15 02:28:13', '2014-08-15 02:28:13');
INSERT INTO `support_tickets` VALUES ('45', 'TK68-1', '1', '<p>sdddd</p>\r\n', '2014-08-15 02:32:18', '2014-08-15 02:32:18');
INSERT INTO `support_tickets` VALUES ('46', 'TK68-1', '1', '<p>sddddddđ error email</p>\r\n', '2014-08-15 02:35:42', '2014-08-15 02:35:42');
INSERT INTO `support_tickets` VALUES ('47', 'TK68-1', '1', '<p>ddddddđ</p>\r\n', '2014-08-15 02:45:01', '2014-08-15 02:45:01');

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
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=69 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of tickets
-- ----------------------------
INSERT INTO `tickets` VALUES ('51', 'TK51-1', '99', '98', 'Fuck you!', '<p>are yoy kidding</p>\r\n', '1', 'nomal', 'in-process', '2014-07-30 09:33:14', '2014-07-30 09:41:20', '1');
INSERT INTO `tickets` VALUES ('53', 'TK53-107', '99', '93', 'Today i freedom, please fuck you with me', '<p>Today i freedom, please fuck you with me&nbsp;</p>\r\n', '1', 'nomal', 'in-process', '2014-07-31 06:37:31', '2014-08-01 02:20:03', '107');
INSERT INTO `tickets` VALUES ('54', 'TK54-107', '107', '0', '66666666', '<p>6666666666666666666666</p>\r\n', '1', 'nomal', 'in-process', '2014-07-31 06:45:27', '2014-07-31 07:36:18', '107');
INSERT INTO `tickets` VALUES ('57', 'TK57-112', '107', '0', 'test messsag', '<p>ljasdl;fkklajdf;lkjaf</p>\r\n\r\n<p>&nbsp;</p>\r\n', '4', 'nomal', 'in-process', '2014-08-01 03:47:31', '2014-08-01 03:47:55', '112');
INSERT INTO `tickets` VALUES ('58', 'TK58-112', '107', '0', 'dsssssssssssssss test employee', '<p>dddddddddddd</p>\r\n', '1', 'nomal', 'new', '2014-08-01 03:55:49', '2014-08-01 03:55:49', '112');
INSERT INTO `tickets` VALUES ('59', 'TK59-115', '114', '98', 'why my email is spam, i not belive into system ?', '<p>ssssssssssssssssssssssssssssssssssssssssssss</p>\r\n', '3', 'nomal', 'close', '2014-08-02 01:32:11', '2014-08-02 03:06:35', '115');
INSERT INTO `tickets` VALUES ('60', 'TK60-115', '114', '93', 'what you say', '<p>ssssssssssssssssssssssssssss</p>\r\n', '3', 'hight', 'in-process', '2014-08-04 02:44:03', '2014-08-04 03:23:06', '115');
INSERT INTO `tickets` VALUES ('61', 'TK61-115', '114', '0', 'sssssssssssssssssssssssssssss', '<p>sssssss</p>\r\n', '1', 'nomal', 'in-process', '2014-08-04 06:12:06', '2014-08-04 08:57:02', '115');
INSERT INTO `tickets` VALUES ('64', 'TK64-107', '107', '0', 'dddddddddđ', '<p>ddddddddddddddddđ</p>\r\n', '1', 'nomal', 'in-process', '2014-08-08 09:40:45', '2014-08-08 09:43:30', '107');
INSERT INTO `tickets` VALUES ('65', 'TK65-107', '107', '0', 'ehhhhhhhhh', '<p>hhh</p>\r\n', '1', 'nomal', 'new', '2014-08-08 09:44:42', '2014-08-08 09:44:42', '107');
INSERT INTO `tickets` VALUES ('66', 'TK66-113', '113', '0', 'Sun wheel', '<p>This is my sun</p>\r\n', '2', 'hight', 'new', '2014-08-08 09:52:06', '2014-08-08 09:52:06', '113');
INSERT INTO `tickets` VALUES ('67', 'TK67-1', '102', '98', 'ssssssssssss', '<p>sssssssssssssssssss</p>\r\n', '1', 'nomal', 'new', '2014-08-14 03:20:51', '2014-08-14 03:20:51', '1');
INSERT INTO `tickets` VALUES ('68', 'TK68-1', '99', '98', 'ssssssssssssssssss', '<p>sssssssssssssssssssssss</p>\r\n', '1', 'nomal', 'in-process', '2014-08-14 03:21:31', '2014-08-15 02:19:45', '1');

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
) ENGINE=InnoDB AUTO_INCREMENT=54 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

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
INSERT INTO `uploads` VALUES ('19', '08-04-2014_sfrTeam_49.png', 'asset/share/uploads/images/personal/08-04-2014_sfrTeam_49.png', 'image/png', null, 'image', null, '115', '2014-08-04 02:43:36', '2014-08-04 02:43:36', null);
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
INSERT INTO `users` VALUES ('1', 'luong@email.com', '$2y$10$gNxsJa7TpGse.1JlmEqZLuMpDkWQ4I3cNbKkjqa6sVOa4zlh5WcEe', '1', '1', 'T78aPG1fw1xrrSvCtDaojTeKBzAiI1leeIzoJokews7jtaNNswhRXrW1HHNS', null, null, null, null, 'luong', 'tran duc', '66', null, 'luongtranduc', '2014-08-15 18:09:18', '192.168.1.114', '10', '2014-08-15 11:09:18', '2014-07-15 04:30:54', null, 'asset/share/uploads/images/personal/08-15-2014_CRUDpng.png', '0');
INSERT INTO `users` VALUES ('93', 'staff_02@gmail.com', '$2y$10$f.q0IiBtsSCnMAbSlhNQdeIWqK9VcZ/1KcyMBQRi6wH8k/k3FrUYW', '2', '1', 'OldaygakqN0t8DhbClPMjasf58E9U8upCqezNCTOkZAoM6jTN08bK1v4m0Tp', '59', null, null, null, 'Staff 02', 'Lui', '8', null, '', '2014-08-09 10:03:19', '192.168.1.114', '10', '2014-08-09 03:03:19', '2014-07-29 08:36:23', null, 'asset/share/uploads/images/personal/07-31-2014_7amMar20.If i fail.jpg', '0');
INSERT INTO `users` VALUES ('98', 'staff_01@gmail.com', '$2y$10$1ok9TmjGEccRxJKUURa2heK.ngzEe6h7z1.L5rwUL8H9PxNQ.dfcG', '2', '1', 'KVNS4HMMRmnUdlmJh8eYwiVDRMBWkSWiN74bV8Z3rXyn2IjsPqUphguP99Su', '1', null, null, null, 'Staff 01', 'lui', '14', null, '', '2014-08-05 03:26:58', '192.168.1.114', '10', '2014-08-05 03:26:58', '2014-07-29 10:19:29', null, 'asset/share/uploads/images/personal/07-30-2014_chỉ mục.jpg', '0');
INSERT INTO `users` VALUES ('99', 'taikhoanlive100@outlook.com.vn', '$2y$10$gpcSyZSNoh.NRiUSNMeqVeqCeCkeVgylkp2uJqBWfdbh.fs0AJuDe', '3', '1', 'I0iyfPI73iGHzxHdMYj6UQ8y2P7dySx3pVH5BXTRR0o1sXwEUr6Z5JiBH9Zb', '1', null, null, null, 'customer 1', 'tttd', '8', null, '', '2014-08-14 03:27:02', '192.168.1.114', '10', '2014-08-14 03:27:02', '2014-07-29 11:16:11', null, 'asset/share/uploads/images/personal/07-30-2014_mario2.png', '0');
INSERT INTO `users` VALUES ('102', 'ltt.develop@gmail.com', '$2y$10$Wp1V94giI2PQ85DAuxBMrO.0kM7ajnN.w6/CFqbtZsd.KN2Sfh/VC', '3', '1', 'raltybwu1ZkwTCQj2uJfThSfkYMUAlpe89ITnZxwpkA7F7LdGkqfLgt1EMla', '1', null, null, null, 'truyen', 'luong', '2', null, '', '2014-07-30 13:13:23', '::1', '10', '2014-07-30 06:13:23', '2014-07-30 03:44:40', null, 'asset/share/uploads/images/personal/07-30-2014_IBM.jpeg', '0');
INSERT INTO `users` VALUES ('107', 'taikhoanlive101@outlook.com.vn', '$2y$10$gNxsJa7TpGse.1JlmEqZLuMpDkWQ4I3cNbKkjqa6sVOa4zlh5WcEe', '3', '1', 'EURHfYNQH6Mn2IQG67TKXoBomDWDGacjsRTfl9tJQuQCYrWBpW0YCnFTFhuk', null, null, null, null, 'Nguyễn anh tài', 'MR/MS', '21', '5111e3d5a14701293d85498684986be9', '', '2014-08-15 17:03:34', '192.168.1.114', '10', '2014-08-15 10:03:34', '2014-07-31 04:49:51', null, 'asset/share/uploads/images/personal/07-31-2014_images.jpg', '0');
INSERT INTO `users` VALUES ('110', 'taikhoanlike102@outlook.com.vn', '$2y$10$vWSnI6fE2.0W7VuP70hzp.hS61D915nhWZYLO.AsLhNvZgLjXyaOO', '4', '1', 'MnFfTNvcXA4zhtyN0C7dbH8dc7URa5G2cIoXnZ9zWuoHvKDGdl3pr1ZZ7CAu', null, null, '99', null, 'Big', 'mrD', '3', '904c9f010c5ec373d76e1967877de62a', '', '2014-08-01 09:21:04', '::1', '10', '2014-08-01 02:21:04', '2014-07-31 10:35:46', null, 'asset/share/uploads/images/personal/07-31-2014_bg1.jpg', '0');
INSERT INTO `users` VALUES ('113', 'nguyen.anh.tuan.241@gmail.com', '$2y$10$AAg60ZxO0Pw8xVLR4YyphObkyeTr1.YQxMZhkivV4MOvANxWICGm6', '3', '1', 'g8MAluTeKhsoZgOUz95fGQcQfI5GeZWyH55864WUIrQ1RbIauX9ASJMTWbuY', null, null, null, null, 'Shinosuke', 'MR/MS', '32', 'c4827eaa4e752a7716ec0b0a8c3e6060', '', '2014-08-15 09:45:43', '192.168.1.109', '10', '2014-08-15 09:45:43', '2014-08-01 08:37:02', null, 'asset/share/uploads/images/personal/08-11-2014_1779847_779157438780166_545792806_n.jpg', '0');
INSERT INTO `users` VALUES ('114', 'thanhtruyen1001@gmail.com', '$2y$10$xnDi0s1nnSh9voXJQH6DLukeBuC7SugSWmjnB9/UDxZw2MHqIVP7i', '3', '1', 'pwRMN9R9cC8j79E1G8NcFzpqGRjh7uJTEXGIYXb4Olhy2R3UFKqVBeVcpmaq', null, null, null, null, 'Nguyen huy tuong', 'MR/MS', '5', '8375f102e968b323bb5099590d686660', '', '2014-08-09 10:12:54', '192.168.1.114', '10', '2014-08-09 03:12:54', '2014-08-02 01:19:42', null, null, '0');
INSERT INTO `users` VALUES ('115', 'vn24s.com@gmail.com', '$2y$10$xnDi0s1nnSh9voXJQH6DLukeBuC7SugSWmjnB9/UDxZw2MHqIVP7i', '4', '1', 'U3h9bZ4xkfzD4pTXh7oihfG3NDU21nG4hTKQ9KI2Y9oCTVUSEr1m7Wo2agRd', null, null, '114', null, 'test', 'jadlfj', '14', '3ceefd20906cb46d6f7c4aa1a5a2479b', '', '2014-08-05 16:08:03', '192.168.1.114', '10', '2014-08-05 09:08:03', '2014-08-02 01:28:23', null, 'asset/share/uploads/images/personal/08-04-2014_sfrTeam_49.png', '0');
INSERT INTO `users` VALUES ('119', 'customer_04@gmail.com', '$2y$10$Uz2LbdjJM0MFHu0eZ7sYG.0H7Xduw/qqWbD6yfX8e8f1BSO1oBMTu', '3', '1', 'x2elj6V0ZFDqLzGPj9cKSiTB9shngBvb3ee6hXt0nfEwlOY3FFPW5C1LKOhj', null, null, null, null, 'SSSSSSSSSSSSSSSSS', 'MR/MS', '3', '38c4bb8443f3139129250dfbb00c1e49', '', '2014-08-06 15:47:43', '192.168.1.114', '10', '2014-08-06 08:47:43', '2014-08-05 11:05:57', null, null, '0');
INSERT INTO `users` VALUES ('129', 'anhtuan11tlt@gmail.com', '$2y$10$7yIOSN8WhzMmj/PpJzI/QenjtrOcSRdF7IL77R3t2XRVLvBJFXyVq', '3', '1', null, null, null, null, null, 'NguyenTuan', 'MR/MS', null, '525adfe5e824495ec1e39bdc3172ee11', '', '2014-08-13 16:32:32', '192.168.1.109', '10', '2014-08-13 09:32:32', '2014-08-13 08:05:15', null, null, '0');
INSERT INTO `users` VALUES ('130', 'tuan.rambo.01@gmail.com', '$2y$10$T0Sd5tb2C/TyX2PfXIAdpevtm0kIt45h3ywpKYwIrfPPlBR9GNrJe', '3', '0', 'wAPQ0UhrlfhBz9kWSlXpCJzNm6cgE72s8GOxA2MrSTwevNmGyzOKaVa5mHd2', '1', null, null, null, 'nguyen', 'fuck', '3', 'c11ac31e5104d75efa1a01ee228b79f9', '', '2014-08-15 13:37:18', '192.168.1.109', '10', '2014-08-15 06:37:18', '2014-08-13 09:17:51', null, 'asset/share/uploads/images/personal/08-13-2014_1779847_779157438780166_545792806_n.jpg', '0');
