-- MySQL dump 10.13  Distrib 5.5.16, for Win32 (x86)
--
-- Host: localhost    Database: mini_crm_dev
-- ------------------------------------------------------
-- Server version	5.5.32

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `countries`
--

DROP TABLE IF EXISTS `countries`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
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
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `countries`
--

LOCK TABLES `countries` WRITE;
/*!40000 ALTER TABLE `countries` DISABLE KEYS */;
/*!40000 ALTER TABLE `countries` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `fqa_category`
--

DROP TABLE IF EXISTS `fqa_category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `fqa_category` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `description` text COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `fqa_category`
--

LOCK TABLES `fqa_category` WRITE;
/*!40000 ALTER TABLE `fqa_category` DISABLE KEYS */;
INSERT INTO `fqa_category` VALUES (1,'General','ssssssssss','2014-09-09 01:43:50','2014-09-11 01:09:59'),(2,'Getting Started','','2014-09-09 01:43:50','2014-09-09 01:43:50'),(3,'Pricing','','2014-09-09 01:43:50','2014-09-09 01:43:50'),(4,'Other','','2014-09-09 01:43:50','2014-09-28 20:12:04');
/*!40000 ALTER TABLE `fqa_category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `fqas`
--

DROP TABLE IF EXISTS `fqas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `fqas` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `content` text COLLATE utf8_unicode_ci NOT NULL,
  `view` int(11) NOT NULL,
  `category_id` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `fqas`
--

LOCK TABLES `fqas` WRITE;
/*!40000 ALTER TABLE `fqas` DISABLE KEYS */;
INSERT INTO `fqas` VALUES (2,'How it works?','<p>How it works?How it works?How it works?How it works?How it works?</p>\r\n',8,2,'2014-09-11 20:39:24','2014-09-29 23:44:39'),(3,'test eee','<p>javascript</p>\r\n',2,1,'2014-09-11 20:44:02','2014-09-29 21:33:54'),(6,'test eee','<p>javascript</p>\r\n',2,1,'2014-09-29 02:25:51','2014-09-29 23:44:44');
/*!40000 ALTER TABLE `fqas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `group_users`
--

DROP TABLE IF EXISTS `group_users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `group_users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `description` text COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `group_users`
--

LOCK TABLES `group_users` WRITE;
/*!40000 ALTER TABLE `group_users` DISABLE KEYS */;
INSERT INTO `group_users` VALUES (1,'admin','','2014-09-09 01:43:48','2014-09-09 01:43:48'),(2,'staff','','2014-09-09 01:43:48','2014-09-09 01:43:48'),(3,'customer','','2014-09-09 01:43:48','2014-09-09 01:43:48'),(4,'employee','','2014-09-09 01:43:48','2014-09-09 01:43:48');
/*!40000 ALTER TABLE `group_users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `languages`
--

DROP TABLE IF EXISTS `languages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
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
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `languages`
--

LOCK TABLES `languages` WRITE;
/*!40000 ALTER TABLE `languages` DISABLE KEYS */;
INSERT INTO `languages` VALUES (1,'English','en','','','publish','2014-09-09 01:43:49','2014-09-09 01:43:49'),(2,'العربية','sa','','','publish','2014-09-09 01:43:49','2014-09-09 01:43:49');
/*!40000 ALTER TABLE `languages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `messages`
--

DROP TABLE IF EXISTS `messages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
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
) ENGINE=InnoDB AUTO_INCREMENT=96 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `messages`
--

LOCK TABLES `messages` WRITE;
/*!40000 ALTER TABLE `messages` DISABLE KEYS */;
INSERT INTO `messages` VALUES (1,'Support ticket from customerTK1-1','<a href=\"http://localhost:8000/manager/tickets/TK1-1\">At TK1-1</a>',1,'work','',3,1,'','2014-09-09 01:47:01','2014-09-11 01:34:53'),(2,'Support ticket Admin tttttttttttttttttt - TK1-1','<p>ssssssssssssss</p>\r\n<a href=\"http://localhost:8000/client/tickets/TK1-1\">At TK1-1</a>',1,'work','',2,3,'','2014-09-09 01:47:39','2014-09-09 01:47:58'),(3,'Titcket CRM From customer - tttttttttttttttttt - TK1-1','<p>dddddddddddddd</p>\r\n - <a href=\"http://localhost:8000/manager/tickets/TK1-1\">Visit</a>',1,'work','',3,2,'','2014-09-09 01:48:06','2014-09-11 01:34:21'),(4,'Support ticket from customerTK2-1','<a href=\"http://192.168.1.123:8000/manager/tickets/TK2-1\">At TK2-1</a>',1,'work','',5,1,'','2014-09-10 18:20:14','2014-09-10 19:12:45'),(5,'Support ticket Admin i felling tired - TK2-1','<p>&aacute;dfafasdfasdfas</p>\r\n<a href=\"http://192.168.1.123:8000/client/tickets/TK2-1\">At TK2-1</a>',0,'work','',2,1,'','2014-09-10 18:38:47','2014-09-10 18:38:47'),(6,'Support ticket from customerTK10-1','<a href=\"http://192.168.1.123:8000/manager/tickets/TK10-1\">At TK10-1</a>',1,'work','',5,1,'','2014-09-10 19:16:41','2014-09-10 19:58:25'),(7,'Support ticket from customerTK11-1','<a href=\"http://192.168.1.123:8000/manager/tickets/TK11-1\">At TK11-1</a>',1,'work','',5,1,'','2014-09-10 19:18:09','2014-09-11 01:32:49'),(8,'Support ticket from customerTK12-1','<a href=\"http://192.168.1.123:8000/manager/tickets/TK12-1\">At TK12-1</a>',1,'work','',5,1,'','2014-09-10 19:19:05','2014-09-11 01:32:54'),(9,'Support ticket from customerTK13-1','<a href=\"http://192.168.1.123:8000/manager/tickets/TK13-1\">At TK13-1</a>',1,'work','',5,1,'','2014-09-10 19:24:51','2014-09-11 01:32:45'),(10,'Support ticket from customerTK14-1','<a href=\"http://192.168.1.123:8000/manager/tickets/TK14-1\">At TK14-1</a>',1,'work','',5,1,'','2014-09-10 19:25:22','2014-09-10 19:58:31'),(11,'Support ticket from customerTK15-1','<a href=\"http://192.168.1.123:8000/manager/tickets/TK15-1\">At TK15-1</a>',1,'work','',5,1,'','2014-09-10 19:25:43','2014-09-10 19:30:40'),(12,'Support ticket from customerTK16-1','<a href=\"http://192.168.1.123:8000/manager/tickets/TK16-1\">At TK16-1</a>',1,'work','',5,1,'','2014-09-10 19:33:21','2014-09-11 01:26:33'),(13,'Support ticket from customerTK17-1','<a href=\"http://192.168.1.123:8000/manager/tickets/TK17-1\">At TK17-1</a>',1,'work','',5,1,'','2014-09-10 19:38:56','2014-09-10 19:58:21'),(14,'Support ticket from customerTK19-1','<a href=\"http://192.168.1.123:8000/manager/tickets/TK19-1\">At TK19-1</a>',1,'work','',5,1,'','2014-09-10 21:01:54','2014-09-10 23:04:07'),(15,'Support ticket Admin truyen oi cai project nay nham qua - TK18-6','<p>nhỏm &ocirc;ng nậu mi</p>\r\n<a href=\"http://192.168.1.123:8000/client/tickets/TK18-6\">At TK18-6</a>',1,'work','',6,1,'','2014-09-10 22:06:56','2014-09-11 01:20:42'),(16,'Support ticket from customerTK20-3','<a href=\"http://192.168.1.123:8000/manager/tickets/TK20-3\">At TK20-3</a>',1,'work','',3,3,'','2014-09-11 01:28:26','2014-09-11 01:32:47'),(17,'Please confirm ticket TK21-7','You have created <a href=\'http://192.168.1.123:8000/client/tickets/TK21-7\'>TK21-7</a> \n                if customer agree or after 2 days no actions come from customer. We will change status of ticket to resolved.',1,'work','',7,1,'','2014-09-11 01:32:13','2014-09-11 01:39:22'),(18,'Support ticket Admin thang truyen xau trai - TK21-7','<p>tao sẽ l&agrave;m việc với m&agrave;y thế nh&eacute;</p>\r\n<a href=\"http://192.168.1.123:8000/client/tickets/TK21-7\">At TK21-7</a>',1,'work','',7,5,'','2014-09-11 01:33:20','2014-09-11 01:34:58'),(19,'Support ticket Admin ggggggggggg - TK20-3','<p>clct</p>\r\n<a href=\"http://192.168.1.123:8000/client/tickets/TK20-3\">At TK20-3</a>',1,'work','',2,3,'','2014-09-11 01:33:26','2014-09-11 18:41:14'),(20,'Support ticket Admin ggggggggggg - TK20-3','<p>&#39;;;;;;;;;;;;;;</p>\r\n<a href=\"http://192.168.1.123:8000/client/tickets/TK20-3\">At TK20-3</a>',1,'work','',2,3,'','2014-09-11 01:33:56','2014-09-11 04:03:36'),(21,'Titcket CRM From customer - thang truyen xau trai - TK21-7','<p>M&agrave;y l&agrave; thằng n&agrave;o con cờ h&oacute; kia</p>\r\n - <a href=\"http://192.168.1.123:8000/manager/tickets/TK21-7\">Visit</a>',1,'work','',5,7,'','2014-09-11 01:35:15','2014-09-11 01:39:59'),(22,'Support ticket Admin thang truyen xau trai - TK21-7','<p>cc m&agrave;y muốn g&igrave; , &nbsp; &nbsp;</p>\r\n\r\n<p><img alt=\"\" src=\"http://img2.blog.zdn.vn/491958http://img2.blog.zdn.vn/49195803.jpg03.jpg\" style=\"width: 225px; height: 225px;\" /> s</p>\r\n<a href=\"http://192.168.1.123:8000/client/tickets/TK21-7\">At TK21-7</a>',1,'work','',7,1,'','2014-09-11 01:53:27','2014-09-11 19:23:39'),(23,'Support ticket Admin truyen oi cai project nay nham qua - TK18-6','<p>ddddddddddd&nbsp; &ocirc;ng bỏ t&ugrave; b&acirc;y giờ</p>\r\n<a href=\"http://192.168.1.123:8000/client/tickets/TK18-6\">At TK18-6</a>',1,'work','',6,1,'','2014-09-11 03:31:42','2014-09-12 00:30:50'),(24,'Close ticketTK21-7','<p>Thank you!, we happy when have served customer</p>\n                                                        </br><a href=\"http://192.168.1.123:8000/client/tickets/TK21-7\">Conplete ticket TK21-7</a>\n                                                        </br><a href=\"http://192.168.1.123:8000/client/races/TK21-7\">Please Race ticket at </a>',1,'work','',7,1,'','2014-09-11 03:57:54','2014-09-11 18:32:56'),(25,'Close ticketTK19-1','<p>Thank you!, we happy when have served customer</p>\n                                                        </br><a href=\"http://192.168.1.123:8000/client/tickets/TK19-1\">Conplete ticket TK19-1</a>\n                                                        </br><a href=\"http://192.168.1.123:8000/client/races/TK19-1\">Please Race ticket at </a>',1,'work','',2,1,'','2014-09-11 04:02:52','2014-09-11 04:03:19'),(26,'Racing for me from ticketTK19-1','<p>Customer have race for you with level <b>happy</b> <h3></h3>',1,'race','',5,2,'','2014-09-11 04:03:29','2014-09-11 21:13:31'),(27,'Support ticket from customerTK22-1','<a href=\"http://192.168.1.123:8000/manager/tickets/TK22-1\">At TK22-1</a>',1,'work','',3,1,'','2014-09-11 18:39:37','2014-09-11 18:40:02'),(28,'Titcket CRM From customer - ttttttttttttttt - TK22-1','<p>ffffffffffffff</p>\r\n - <a href=\"http://192.168.1.123:8000/manager/tickets/TK22-1\">Visit</a>',1,'work','',3,2,'','2014-09-11 18:42:05','2014-09-11 18:44:15'),(29,'Titcket CRM From customer - sssssssssssss - TK15-1','<p><img alt=\"\" src=\"http://cdn-i.imagechef.com/ic/templimg2/Typewriter.jpg\" style=\"width: 400px; height: 400px;\" />sssssssssssss</p>\r\n - <a href=\"http://192.168.1.123:8000/manager/tickets/TK15-1\">Visit</a>',1,'work','',5,2,'','2014-09-11 19:24:12','2014-09-11 21:13:24'),(30,'Support ticket Admin sssssssssssss - TK15-1','<p>sssssssssssssssss &nbsp;&nbsp;<img alt=\"\" src=\"http://t9.imagechef.com/ic/imgout/samp4e001d6748e63f74.jpg\" /></p>\r\n<a href=\"http://192.168.1.123:8000/client/tickets/TK15-1\">At TK15-1</a>',0,'work','',2,1,'','2014-09-11 19:25:00','2014-09-11 19:25:00'),(31,'Support ticket Admin uiuiuiuiuiuiuiuiuiuiuiuiui - TK10-1','sssssssssss<a href=\"http://192.168.1.123:8000/client/tickets/TK10-1\">At TK10-1</a>',0,'work','',2,1,'','2014-09-11 19:35:39','2014-09-11 19:35:39'),(32,'Support ticket Admin test one clich create a ticket - TK25-7','<p>ăn shit đi bạn <img alt=\"\" src=\"http://192.168.1.123:8000/asset/share/uploads/ticket/09-12-2014_AngryKid.gif\" /><img alt=\"\" src=\"http://192.168.1.123:8000/asset/share/uploads/ticket/09-12-2014_AngryKid.gif\" style=\"width: 86px; height: 100px; float: left;\" /></p>\r\n<a href=\"http://192.168.1.123:8000/client/tickets/TK25-7\">At TK25-7</a>',1,'work','',7,1,'','2014-09-11 20:16:31','2014-09-11 21:18:44'),(33,'Support ticket from customerTK26-1','<a href=\"http://192.168.1.123:8000/manager/tickets/TK26-1\">At TK26-1</a>',1,'work','',5,1,'','2014-09-11 20:26:45','2014-09-11 21:13:12'),(34,'Support ticket Admin test one clich create a ticket - TK25-7','<p><img alt=\"\" src=\"http://3.bp.blogspot.com/-3uMxP4GZK74/UswwND989fI/AAAAAAAAFMo/rLoVHVlCi2Q/s1600/anh-dong-ban-chim.gif\" style=\"width: 240px; height: 320px;\" /></p>\r\n<a href=\"http://192.168.1.123:8000/client/tickets/TK25-7\">At TK25-7</a>',1,'work','',7,1,'','2014-09-11 20:36:18','2014-09-11 21:16:15'),(35,'Please confirm ticket TK25-7','You have created <a href=\'http://192.168.1.123:8000/client/tickets/TK25-7\'>TK25-7</a> \n                if customer agree or after 2 days no actions come from customer. We will change status of ticket to resolved.',1,'work','',7,1,'','2014-09-11 20:49:14','2014-09-11 21:16:07'),(36,'Please confirm ticket TK25-7','You have created <a href=\'http://192.168.1.123:8000/client/tickets/TK25-7\'>TK25-7</a> \n                if customer agree or after 2 days no actions come from customer. We will change status of ticket to resolved.',1,'work','',7,1,'','2014-09-11 21:10:38','2014-09-11 21:12:43'),(37,'Please confirm ticket TK27-7','You have created <a href=\'http://192.168.1.123:8000/client/tickets/TK27-7\'>TK27-7</a> \n                if customer agree or after 2 days no actions come from customer. We will change status of ticket to resolved.',1,'work','',7,1,'','2014-09-11 21:18:33','2014-09-11 21:18:56'),(38,'Support ticket Admin Truyen yeu ha tester - TK27-7','<p>shit</p>\r\n<a href=\"http://192.168.1.123:8000/client/tickets/TK27-7\">At TK27-7</a>',1,'work','',7,5,'','2014-09-11 21:20:38','2014-09-11 21:20:51'),(39,'Titcket CRM From customer - Truyen yeu ha tester - TK27-7','<p>con kẹc ta n&egrave;</p>\r\n - <a href=\"http://192.168.1.123:8000/manager/tickets/TK27-7\">Visit</a>',1,'work','',5,7,'','2014-09-11 21:21:12','2014-09-11 21:21:28'),(40,'Support ticket Admin Test ticket by thanhtruyen admin - TK30-10','<p>fffffffffffffffffffffffff</p>\r\n<a href=\"http://192.168.1.123:8000/client/tickets/TK30-10\">At TK30-10</a>',1,'work','',9,1,'','2014-09-11 23:48:42','2014-09-29 20:30:25'),(41,'Support ticket Admin Test ticket by thanhtruyen admin - TK30-10','<p>fffffffffffffffffffffffff</p>\r\n<a href=\"http://192.168.1.123:8000/client/tickets/TK30-10\">At TK30-10</a>',1,'work','',10,1,'','2014-09-11 23:48:42','2014-09-30 02:47:28'),(42,'Support ticket Admin Test ticket by thanhtruyen admin - TK30-10','<p>fffffffffffff</p>\r\n<a href=\"http://192.168.1.123:8000/client/tickets/TK30-10\">At TK30-10</a>',1,'work','',9,1,'','2014-09-11 23:50:03','2014-09-29 20:30:25'),(43,'Support ticket Admin Test ticket by thanhtruyen admin - TK30-10','<p>fffffffffffff</p>\r\n<a href=\"http://192.168.1.123:8000/client/tickets/TK30-10\">At TK30-10</a>',1,'work','',10,1,'','2014-09-11 23:50:03','2014-09-30 02:54:23'),(44,'Support ticket Admin Test ticket by thanhtruyen admin - TK30-10','<p>ddddddddd</p>\r\n<a href=\"http://192.168.1.123:8000/client/tickets/TK30-10\">At TK30-10</a>',1,'work','',9,1,'','2014-09-11 23:51:05','2014-09-29 20:30:25'),(45,'Support ticket Admin Test ticket by thanhtruyen admin - TK30-10','<p>ddddddddd</p>\r\n<a href=\"http://192.168.1.123:8000/client/tickets/TK30-10\">At TK30-10</a>',1,'work','',10,1,'','2014-09-11 23:51:05','2014-09-30 02:54:23'),(46,'Support ticket Admin Test ticket by thanhtruyen admin - TK30-10','<p>dddddddddd</p>\r\n<a href=\"http://192.168.1.123:8000/client/tickets/TK30-10\">At TK30-10</a>',1,'work','',9,1,'','2014-09-11 23:52:09','2014-09-29 20:30:25'),(47,'Support ticket Admin Test ticket by thanhtruyen admin - TK30-10','<p>dddddddddd</p>\r\n<a href=\"http://192.168.1.123:8000/client/tickets/TK30-10\">At TK30-10</a>',1,'work','',10,1,'','2014-09-11 23:52:09','2014-09-30 02:47:32'),(48,'Support ticket Admin Test ticket by thanhtruyen admin - TK30-10','<p>dddddddddddd</p>\r\n<a href=\"http://192.168.1.123:8000/client/tickets/TK30-10\">At TK30-10</a>',1,'work','',9,1,'','2014-09-11 23:54:25','2014-09-29 20:30:25'),(49,'Support ticket Admin Test ticket by thanhtruyen admin - TK30-10','<p>dddddddddddd</p>\r\n<a href=\"http://192.168.1.123:8000/client/tickets/TK30-10\">At TK30-10</a>',1,'work','',10,1,'','2014-09-11 23:54:25','2014-09-30 02:54:23'),(50,'Support ticket Admin Test ticket by thanhtruyen admin - TK30-10','<p>ssssssssssssss</p>\r\n<a href=\"http://192.168.1.123:8000/client/tickets/TK30-10\">At TK30-10</a>',1,'work','',9,1,'','2014-09-11 23:55:46','2014-09-29 20:28:56'),(51,'Support ticket Admin Test ticket by thanhtruyen admin - TK30-10','<p>ssssssssssssss</p>\r\n<a href=\"http://192.168.1.123:8000/client/tickets/TK30-10\">At TK30-10</a>',1,'work','',10,1,'','2014-09-11 23:55:46','2014-09-30 02:54:23'),(52,'Support ticket Admin sssssss - TK31-10','<p>sssssssss</p>\r\n<a href=\"http://192.168.1.123:8000/client/tickets/TK31-10\">At TK31-10</a>',1,'work','',9,1,'','2014-09-11 23:59:47','2014-09-29 20:30:25'),(53,'Support ticket Admin sssssss - TK31-10','<p>sssssssss</p>\r\n<a href=\"http://192.168.1.123:8000/client/tickets/TK31-10\">At TK31-10</a>',1,'work','',10,1,'','2014-09-11 23:59:47','2014-09-30 02:47:31'),(54,'Close ticketTK31-10','<p>Thank you!, we happy when have served customer</p>\n                                                        </br><a href=\"http://192.168.1.123:8000/client/tickets/TK31-10\">Conplete ticket TK31-10</a>\n                                                        </br><a href=\"http://192.168.1.123:8000/client/races/TK31-10\">Please Race ticket at </a>',1,'work','',10,1,'','2014-09-12 00:07:58','2014-09-30 02:54:23'),(55,'Support ticket Admin truyen oi cai project nay nham qua - TK18-6','<p>cccccccccccccc</p>\r\n<a href=\"http://192.168.1.123:8000/client/tickets/TK18-6\">At TK18-6</a>',1,'work','',6,1,'','2014-09-12 00:44:21','2014-09-12 00:49:04'),(56,'Close ticketTK31-10','<p>Thank you!, we happy when have served customer</p>\n                                                        </br><a href=\"http://localhost:8090/project/mini-crm/public/client/tickets/TK31-10\">Conplete ticket TK31-10</a>\n                                                        </br><a href=\"http://localhost:8090/project/mini-crm/public/client/races/TK31-10\">Please Race ticket at </a>',1,'work','',10,1,'','2014-09-25 00:51:42','2014-09-30 02:54:23'),(57,'Admin assign ticket TK32-1 to you','<a href=\"http://localhost:8090/project/mini-crm/public/manager/tickets/TK32-1\">Visit TK32-1</a>',0,'work','',5,1,'','2014-09-25 01:23:42','2014-09-25 01:23:42'),(58,'Admin assign ticket TK33-9 to you','<a href=\"http://localhost:8090/project/mini-crm/public/manager/tickets/TK33-9\">Visit TK33-9</a>',1,'work','',3,1,'','2014-09-25 01:59:17','2014-09-25 02:06:47'),(59,'Admin assign ticket TK34-1 to you','<a href=\"http://localhost:8000/manager/tickets/TK34-1\">Visit TK34-1</a>',0,'work','',5,1,'','2014-09-26 01:37:24','2014-09-26 01:37:24'),(60,'Admin assign ticket TK34-1 to you','<a href=\"http://localhost:8090/project/mini-crm/public/manager/tickets/TK34-1\">Visit TK34-1</a>',1,'work','',3,1,'','2014-09-26 04:26:32','2014-09-28 23:09:03'),(61,'Support ticket Admin sssssssss - TK34-1','<p>hhhhhhhhhhhhhhhhh</p>\r\n<a href=\"http://localhost:8000/client/tickets/TK34-1\">At TK34-1</a>',0,'work','',2,1,'','2014-09-26 20:50:03','2014-09-26 20:50:03'),(62,'Admin assign ticket TK35-1 to you','<a href=\"http://localhost:8000/manager/tickets/TK35-1\">Visit TK35-1</a>',1,'work','',3,1,'','2014-09-26 20:52:13','2014-09-29 19:42:02'),(63,'Admin assign ticket TK36-1 to you','<a href=\"http://localhost:8000/manager/tickets/TK36-1\">Visit TK36-1</a>',0,'work','',5,1,'','2014-09-26 20:53:53','2014-09-26 20:53:53'),(64,'Support ticket Admin ddđdđ - TK36-1','<p>klllllllllllllllllllllll</p>\r\n<a href=\"http://localhost:8000/client/tickets/TK36-1\">At TK36-1</a>',0,'work','',2,1,'','2014-09-26 20:54:18','2014-09-26 20:54:18'),(65,'Support ticket Admin ddđdđ - TK36-1','<p>hh</p>\r\n<a href=\"http://localhost:8000/client/tickets/TK36-1\">At TK36-1</a>',0,'work','',2,1,'','2014-09-26 21:16:32','2014-09-26 21:16:32'),(66,'Admin assign ticket TK37-1 to you','<a href=\"http://localhost:8000/manager/tickets/TK37-1\">Visit TK37-1</a>',0,'work','',5,1,'','2014-09-26 21:29:55','2014-09-26 21:29:55'),(67,'Support ticket Admin ssssssss - TK37-1','<p>rrrrrrrrrrrr</p>\r\n<a href=\"http://localhost:8000/client/tickets/TK37-1\">At TK37-1</a>',0,'work','',2,1,'','2014-09-26 21:31:25','2014-09-26 21:31:25'),(68,'Admin assign ticket TK38-1 to you','<a href=\"http://localhost:8000/manager/tickets/TK38-1\">Visit TK38-1</a>',0,'work','',5,1,'','2014-09-28 19:37:04','2014-09-28 19:37:04'),(69,'Admin assign ticket TK39-1 to you','<a href=\"http://localhost:8000/manager/tickets/TK39-1\">Visit TK39-1</a>',0,'work','',5,1,'','2014-09-28 19:48:54','2014-09-28 19:48:54'),(70,'Support ticket Admin uuuuuuuuuu - TK39-1','<p>77777777777777</p>\r\n<a href=\"http://localhost:8000/client/tickets/TK39-1\">At TK39-1</a>',0,'work','',2,1,'','2014-09-28 19:50:06','2014-09-28 19:50:06'),(71,'Support ticket Admin sssdfdfdfdfdfdfdfdf - TK35-1','<p>d</p>\r\n<a href=\"http://localhost:8090/project/mini-crm/public/client/tickets/TK35-1\">At TK35-1</a>',0,'work','',2,3,'','2014-09-29 01:25:35','2014-09-29 01:25:35'),(72,'Support ticket Admin tssssssssss - TK33-9','<p>t</p>\r\n<a href=\"http://localhost:8090/project/mini-crm/public/client/tickets/TK33-9\">At TK33-9</a>',1,'work','',9,3,'','2014-09-29 02:14:34','2014-09-29 20:28:45'),(73,'Admin assign ticket TK40-1 to you','<a href=\"http://localhost:8090/project/mini-crm/public/manager/tickets/TK40-1\">Visit TK40-1</a>',0,'work','',5,1,'','2014-09-29 03:33:00','2014-09-29 03:33:00'),(74,'Close ticketTK35-1','<p>Thank you!, we happy when have served customer</p>\n                                                        </br><a href=\"http://localhost:8090/project/mini-crm/public/client/tickets/TK35-1\">Conplete ticket TK35-1</a>\n                                                        </br><a href=\"http://localhost:8090/project/mini-crm/public/client/races/TK35-1\">Please Race ticket at </a>',0,'work','',2,1,'','2014-09-29 03:36:38','2014-09-29 03:36:38'),(75,'Titcket CRM From customer - tssssssssss - TK33-9','<p>ggggggggggggggggggg</p>\r\n - <a href=\"http://localhost:8090/project/mini-crm/public/manager/tickets/TK33-9\">Visit</a>',1,'work','',3,9,'','2014-09-29 03:52:47','2014-09-29 19:40:19'),(76,'Support ticket Admin ssssssss - TK37-1','<p>fffffffff</p>\r\n<a href=\"http://localhost:8090/project/mini-crm/public/client/tickets/TK37-1\">At TK37-1</a>',0,'work','',2,1,'','2014-09-29 04:04:26','2014-09-29 04:04:26'),(77,'Support ticket Admin ssssssss - TK37-1','<p><span style=\"color: rgb(255, 255, 255); font-family: \'Open Sans\', sans-serif; line-height: 18.5714302062988px; background-color: rgb(61, 61, 61);\">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi vehicula sem ut volutpat. Ut non libero magna fusce condimentum eleifend enim a feugiat.</span></p>\r\n<a href=\"http://localhost:8090/project/mini-crm/public/client/tickets/TK37-1\">At TK37-1</a>',0,'work','',2,1,'','2014-09-29 04:05:12','2014-09-29 04:05:12'),(78,'Admin assign ticket TK37-1 to you','<a href=\"http://localhost:8090/project/mini-crm/public/manager/tickets/TK37-1\">Visit TK37-1</a>',1,'work','',3,1,'','2014-09-29 04:07:24','2014-09-29 19:35:17'),(79,'Support ticket Admin ssssssss - TK37-1','<p>uuuuuuuuuuuuuuuuuuu</p>\r\n<a href=\"http://localhost:8090/project/mini-crm/public/client/tickets/TK37-1\">At TK37-1</a>',0,'work','',2,3,'','2014-09-29 04:13:01','2014-09-29 04:13:01'),(80,'Admin assign ticket TK40-1 to you','<a href=\"http://localhost:8000/manager/tickets/TK40-1\">Visit TK40-1</a>',0,'work','',5,1,'','2014-09-29 18:37:12','2014-09-29 18:37:12'),(81,'Titcket CRM From customer - tssssssssss - TK33-9','<p>d</p>\r\n - <a href=\"http://localhost:8000/manager/tickets/TK33-9\">Visit</a>',0,'work','',3,9,'','2014-09-29 20:28:34','2014-09-29 20:28:34'),(82,'Titcket CRM From customer - tssssssssss - TK33-9','<p>ddddđ</p>\r\n - <a href=\"http://localhost:8000/manager/tickets/TK33-9\">Visit</a>',0,'work','',3,9,'','2014-09-29 20:28:38','2014-09-29 20:28:38'),(83,'Admin assign ticket TK43-1 to you','<a href=\"http://localhost:8000/manager/tickets/TK43-1\">Visit TK43-1</a>',0,'work','',3,1,'','2014-09-30 01:12:58','2014-09-30 01:12:58'),(84,'Admin assign ticket TK44-1 to you','<a href=\"http://localhost:8000/manager/tickets/TK44-1\">Visit TK44-1</a>',0,'work','',3,1,'','2014-09-30 01:14:41','2014-09-30 01:14:41'),(85,'Support ticket Admin tssssssssss - TK33-9','<p>sssssssssss</p>\r\n<a href=\"http://localhost:8000/client/tickets/TK33-9\">At TK33-9</a>',0,'work','',9,1,'','2014-09-30 03:52:26','2014-09-30 03:52:26'),(86,'Support ticket Admin =======ư - TK40-1','<p>dljkalsk djanfj</p>\r\n<a href=\"http://localhost:8000/client/tickets/TK40-1\">At TK40-1</a>',0,'work','',2,1,'','2014-09-30 20:32:38','2014-09-30 20:32:38'),(87,'Admin assign ticket TK46-9 to you','<a href=\"http://localhost:8000/manager/tickets/TK46-9\">Visit TK46-9</a>',1,'work','',3,1,'','2014-10-01 04:20:14','2014-10-01 04:20:27'),(88,'Support ticket Admin mickekjlk - TK46-9','<p>Ngu vl</p>\r\n<a href=\"http://localhost:8000/client/tickets/TK46-9\">At TK46-9</a>',1,'work','',9,3,'','2014-10-01 04:21:02','2014-10-01 04:24:46'),(89,'Titcket CRM From customer - mickekjlk - TK46-9','<p>dkm</p>\r\n - <a href=\"http://localhost:8000/manager/tickets/TK46-9\">Visit</a>',0,'work','',3,9,'','2014-10-01 04:21:57','2014-10-01 04:21:57'),(90,'Please confirm ticket TK46-9','You have created <a href=\'http://192.168.1.123:8000/client/tickets/TK46-9\'>TK46-9</a> \n                if customer agree or after 2 days no actions come from customer. We will change status of ticket to resolved.',1,'work','',9,1,'','2014-10-02 03:37:57','2014-10-02 21:45:17'),(91,'Support ticket Admin kl\\\\\\\\\\\\\\\\ - TK47-9','<p>&#39;&lt;div&gt;&lt;p&gt;Test paragraph.&lt;/p&gt;&lt;a href=&quot;#fragment&quot;&gt;Other text&#39;;</p>\r\n<a href=\"http://localhost:8090/project/mini-crm/public/client/tickets/TK47-9\">At TK47-9</a>',0,'work','',9,1,'','2014-10-02 23:20:33','2014-10-02 23:20:33'),(92,'Support ticket Admin ffffffffffffffffffffff - TK41-9','<p>dc</p>\r\n<a href=\"http://localhost:8090/project/mini-crm/public/client/tickets/TK41-9\">At TK41-9</a>',0,'work','',9,1,'','2014-10-03 03:38:50','2014-10-03 03:38:50'),(93,'Support ticket Admin ffffffffffffffffffffff - TK41-9','<p>dc</p>\r\n<a href=\"http://localhost:8090/project/mini-crm/public/client/tickets/TK41-9\">At TK41-9</a>',0,'work','',9,1,'','2014-10-03 03:38:50','2014-10-03 03:38:50'),(94,'Support ticket Admin ffffffffffffffffffffff - TK41-9','<p>ddddddđ</p>\r\n<a href=\"http://localhost:8090/project/mini-crm/public/client/tickets/TK41-9\">At TK41-9</a>',0,'work','',9,1,'','2014-10-03 03:39:01','2014-10-03 03:39:01'),(95,'Support ticket Admin ffffffffffffffffffffff - TK41-9','<p>tttttttttttttttttttttttttttt</p>\r\n<a href=\"http://localhost:8090/project/mini-crm/public/client/tickets/TK41-9\">At TK41-9</a>',0,'work','',9,1,'','2014-10-03 03:39:15','2014-10-03 03:39:15');
/*!40000 ALTER TABLE `messages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `migrations` (
  `migration` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `migrations`
--

LOCK TABLES `migrations` WRITE;
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;
INSERT INTO `migrations` VALUES ('2014_07_14_023454_create_users_table',1),('2014_09_09_031256_create_uploads_table',1),('2014_09_09_031543_create_tickets_table',1),('2014_09_09_032327_create_ticketActivity_table',1),('2014_09_09_032800_create_supportType_table',1),('2014_09_09_033138_create_supportTickets_table',1),('2014_09_09_033639_create_status_table',1),('2014_09_09_033805_create_setting_table',1),('2014_09_09_034530_create_sector_table',1),('2014_09_09_034653_create_race_table',1),('2014_09_09_035014_create_purchases_table',1),('2014_09_09_035433_create_purchaseProducts_table',1),('2014_09_09_035815_create_purchaseGroupProducts_table',1),('2014_09_09_040020_create_purchaseDetail_table',1),('2014_09_09_040309_create_profiles_table',1),('2014_09_09_040746_create_priority_table',1),('2014_09_09_040841_create_news_table',1),('2014_09_09_041044_create_newCategory_table',1),('2014_09_09_041315_create_message_table',1),('2014_09_09_041624_create_language_table',1),('2014_09_09_041942_create_groupUsers_table',1),('2014_09_09_042132_create_fqas_table',1),('2014_09_09_042313_create_fqaCategory_table',1),('2014_09_09_042434_create_countries_table',1);
/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `new_category`
--

DROP TABLE IF EXISTS `new_category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `new_category` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `description` text COLLATE utf8_unicode_ci NOT NULL,
  `parent_id` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `new_category`
--

LOCK TABLES `new_category` WRITE;
/*!40000 ALTER TABLE `new_category` DISABLE KEYS */;
INSERT INTO `new_category` VALUES (1,'Common','aaaaaaaaaaaaaaaiiiiiii',0,'2014-09-09 01:43:51','2014-09-11 00:56:57'),(2,'IT','ITT',0,'2014-09-26 21:44:18','2014-09-28 20:23:00');
/*!40000 ALTER TABLE `new_category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `news`
--

DROP TABLE IF EXISTS `news`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
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
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `news`
--

LOCK TABLES `news` WRITE;
/*!40000 ALTER TABLE `news` DISABLE KEYS */;
INSERT INTO `news` VALUES (2,'TV success: It\'s all about great stories, characters','dddddd','Katie Torpey is a successful television and film screenwriter who also teaches screenwriting workshops in Ridgefield. She\'s seen here on the beach at Martha\'s Vineyard, where she was visiting friends who are filmmakers. Photo: Katrina Heilbro/Contributed',2,'','2014-09-26 21:41:42','2014-09-29 02:41:05'),(3,'ddddddddd','ddddddddd','<p>dddđ</p>\r\n',1,'','2014-09-26 21:41:51','2014-09-26 21:41:51'),(6,'ddddddd','ddddddd','<p>ddddddddddddd</p>\r\n',1,'','2014-09-29 02:33:52','2014-09-29 02:33:52'),(7,'Sanditiis praesentium vo','Sanditiis-praesentium-vo','\r\n Technology  Education  Internet\r\n April 16, 2013   38 Comments\r\nAt vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culp orem ipsum dolor sit amet, consectetur adipiscing elit. Ut non libero magna. Sed et quam lacus. Fusce condimentum eleifend enim a feugiat. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non libero consectetur adipiscing elit magna. Sed et quam lacus. Fusce condimentum eleifend enim a feugiat. Pellentesque viverra vehicula sem ut volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non libero magna. Sed et quam lacus.\r\n\r\nLorem ipsum dolor sit amet, consectetur adipiscing elit posuere erat a ante.\r\n\r\nSomeone famous Source Title\r\nAt vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique dimentum eleifend enim a feugiat. Pellentesque viverra vehicula sem ut volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non libero magna. Sed et quam lacus.',2,'','0000-00-00 00:00:00','0000-00-00 00:00:00'),(8,'Code rw The website helping students to be innovative','ddddddd-innovative','ssdoiumsd',2,'','2014-09-29 23:16:00','2014-09-29 23:16:00'),(9,'Week 3 guide to high school football in southwestern Connecticut','football-in-southwestern-Connecticut','<div id=\"gallery-94338\" class=\"gallery-content segment\">\r\n        <div style=\"position:relative\">\r\n            <div class=\"interstitialAd\" style=\"display: none;\"><div class=\"interstitialOverlay\"></div><div id=\"gallery-interstitial-mediumrectangle\"></div></div>\r\n            <ul>\r\n                                                                <li id=\"photo-5268744-slide\" class=\"gallery-slide current\">\r\n                \r\n                               <img title=\"St. Joseph at Ridgefield\" alt=\"St. Joseph at Ridgefield\" src=\"http://ww1.hdnux.com/photos/24/06/24/5268744/5/960x540.jpg\" class=\"tall-image\" aspect_sized=\"1337\">\r\n                                               <div class=\"details\">\r\n                                                                        <p class=\"gallery-credit\">Photo By Autumn Driscoll</p>\r\n                                                                     <div class=\"gallery-title-slide\">\r\n                                                                             <div class=\"gallery-title\">St. Joseph at Ridgefield</div>\r\n                                                                             <div class=\"slide-count\">\r\n                                           <span class=\"slide-count-current\">1</span><span>of</span><span class=\"slide-count-total\">24</span>\r\n                                                                                      <div class=\"gallery-next\"><a href=\"/hsfootball/slideshow/Week-3-guide-to-high-school-football-in-94338/photo-335304.php\" rel=\"next\"> </a></div>\r\n                                                                                  </div>\r\n                                   </div>\r\n                                                                      <div class=\"gallery-caption\"><b>FCIAC &nbsp;&nbsp;</b><br><b>\r\nWhen:</b> 7 p.m. Friday  <br><b>\r\nThe Skinny:</b>&nbsp;St. Joseph (2-0) at Ridgefield (0-2) 7 p.m.: Skinny: Cadets open play in the FCIAC after two quality out of conference wins put them in the state Top 10.</div>\r\n                                                                                                     </div>\r\n                </li>\r\n                        \r\n<li id=\"photo-335304-slide\" class=\"gallery-slide\">\r\n    <img title=\"Ludlowe at Central\" alt=\"Ludlowe at Central\" img=\"http://ww1.hdnux.com/photos/01/21/67/335304/3/960x540.jpg\" src=\"http://ww1.hdnux.com/photos/01/21/67/335304/3/960x540.jpg\" aspect_sized=\"1337\" class=\"tall-image\">\r\n    \r\n\r\n    <div class=\"details\">\r\n        <p class=\"gallery-credit\" style=\"\">Photo By Amy Mortensen</p>\r\n        <div class=\"gallery-title-slide\">\r\n            <div class=\"gallery-title\" style=\"\">Ludlowe at Central</div>\r\n            <div class=\"slide-count\">\r\n                <div class=\"gallery-prev\"><a href=\"#prev\" rel=\"prev\"> </a></div>\r\n                            <span class=\"slide-count-current\">1</span><span>of</span><span class=\"slide-count-total\">24</span>\r\n                <div class=\"gallery-next\"><a href=\"#next\" rel=\"next\"> </a></div>\r\n            </div>\r\n        </div>\r\n        <div class=\"gallery-caption\" style=\"\"><b>FCIAC &nbsp;&nbsp;</b><br><b>\r\nWhen:</b> 7 p.m. Friday  <br><b>\r\nThe Skinny:</b>&nbsp;Ludlowe (2-0) at Central (0-2) 7 p.m.: Falcons can move to 3-0 with a win up the road in Bridgeport.</div>\r\n        <h4 class=\"gallery-rel-article\" style=\"display:none;\"></h4>\r\n    </div>\r\n</li>\r\n\r\n<li id=\"photo-5247261-slide\" class=\"gallery-slide\">\r\n    <img title=\"Masuk at Bunnell\" alt=\"Masuk at Bunnell\" img=\"http://ww2.hdnux.com/photos/24/01/04/5247261/3/960x540.jpg\" src=\"http://ww2.hdnux.com/photos/24/01/04/5247261/3/960x540.jpg\" aspect_sized=\"1337\" class=\"tall-image\">\r\n    \r\n\r\n    <div class=\"details\">\r\n        <p class=\"gallery-credit\" style=\"\">Photo By Christian Abraham</p>\r\n        <div class=\"gallery-title-slide\">\r\n            <div class=\"gallery-title\" style=\"\">Masuk at Bunnell</div>\r\n            <div class=\"slide-count\">\r\n                <div class=\"gallery-prev\"><a href=\"#prev\" rel=\"prev\"> </a></div>\r\n                            <span class=\"slide-count-current\">1</span><span>of</span><span class=\"slide-count-total\">24</span>\r\n                <div class=\"gallery-next\"><a href=\"#next\" rel=\"next\"> </a></div>\r\n            </div>\r\n        </div>\r\n        <div class=\"gallery-caption\" style=\"\"><b>SWC &nbsp;&nbsp;</b><br><b>\r\nWhen:</b> 7 p.m. Friday  <br><b>\r\nThe Skinny:</b>&nbsp;Masuk (1-1) at Bunnell (0-2) 7 p.m.: With only six points in two weeks, Bunnell\'s offense needs to get on track.<div class=\"mediasale\"> <span class=\"icon\"> </span> <a href=\"http://newstimeslive.mycapture.com/mycapture/remoteimage.asp?backtext=Back%20to%20News-Times&amp;image=http://ww2.hdnux.com/photos/24/01/04/5247261/3/628x471.jpg&amp;pricingsheetid=2100\">Buy this photo</a></div></div>\r\n        <h4 class=\"gallery-rel-article\" style=\"display:none;\"></h4>\r\n    </div>\r\n</li>\r\n\r\n<li id=\"photo-5416525-slide\" class=\"gallery-slide\">\r\n    <img title=\"Pomperaug at Newtown\" alt=\"Pomperaug at Newtown\" img=\"http://ww2.hdnux.com/photos/24/52/31/5416525/5/960x540.jpg\" src=\"http://ww2.hdnux.com/photos/24/52/31/5416525/5/960x540.jpg\" aspect_sized=\"1337\" class=\"tall-image\">\r\n    \r\n\r\n    <div class=\"details\">\r\n        <p class=\"gallery-credit\" style=\"\">Photo By H John Voorhees III</p>\r\n        <div class=\"gallery-title-slide\">\r\n            <div class=\"gallery-title\" style=\"\">Pomperaug at Newtown</div>\r\n            <div class=\"slide-count\">\r\n                <div class=\"gallery-prev\"><a href=\"#prev\" rel=\"prev\"> </a></div>\r\n                            <span class=\"slide-count-current\">1</span><span>of</span><span class=\"slide-count-total\">24</span>\r\n                <div class=\"gallery-next\"><a href=\"#next\" rel=\"next\"> </a></div>\r\n            </div>\r\n        </div>\r\n        <div class=\"gallery-caption\" style=\"\"><b>SWC &nbsp;&nbsp;</b><br><b>\r\nWhen:</b> 7 p.m. Friday  <br><b>\r\nThe Skinny:</b>&nbsp;Pomperaug (2-0) at Newtown (2-0) 7 p.m.: We\'ll find out just how good unbeaten Pomperaug is against the two-time defending SWC champ.</div>\r\n        <h4 class=\"gallery-rel-article\" style=\"display:none;\"></h4>\r\n    </div>\r\n</li>\r\n\r\n<li id=\"photo-1945839-slide\" class=\"gallery-slide\">\r\n    <img title=\"Joel Barlow at Bethel\" alt=\"Joel Barlow at Bethel\" img=\"http://ww4.hdnux.com/photos/07/33/03/1945839/3/960x540.jpg\" src=\"http://ww4.hdnux.com/photos/07/33/03/1945839/3/960x540.jpg\" aspect_sized=\"1337\" class=\"tall-image\">\r\n    \r\n\r\n    <div class=\"details\">\r\n        <p class=\"gallery-credit\" style=\"\">Photo By Scott Mullin</p>\r\n        <div class=\"gallery-title-slide\">\r\n            <div class=\"gallery-title\" style=\"\">Joel Barlow at Bethel</div>\r\n            <div class=\"slide-count\">\r\n                <div class=\"gallery-prev\"><a href=\"#prev\" rel=\"prev\"> </a></div>\r\n                            <span class=\"slide-count-current\">1</span><span>of</span><span class=\"slide-count-total\">24</span>\r\n                <div class=\"gallery-next\"><a href=\"#next\" rel=\"next\"> </a></div>\r\n            </div>\r\n        </div>\r\n        <div class=\"gallery-caption\" style=\"\"><b>SWC &nbsp;&nbsp;</b><br><b>\r\nWhen:</b> 7 p.m. Friday  <br><b>\r\nThe Skinny:</b>&nbsp;Barlow (2-0) at Bethel (2-0) 7 p.m.: Who is the SWC\'s third-best team, behind Newtown and Brookfield?</div>\r\n        <h4 class=\"gallery-rel-article\" style=\"display:none;\"></h4>\r\n    </div>\r\n</li>\r\n\r\n<li id=\"photo-6890682-slide\" class=\"gallery-slide\">\r\n    <img title=\"Notre Dame-Fairfield at Weston\" alt=\"Notre Dame-Fairfield at Weston\" img=\"http://ww3.hdnux.com/photos/32/22/22/6890682/3/960x540.jpg\" src=\"http://ww3.hdnux.com/photos/32/22/22/6890682/3/960x540.jpg\" aspect_sized=\"1337\" class=\"tall-image\">\r\n    \r\n\r\n    <div class=\"details\">\r\n        <p class=\"gallery-credit\" style=\"\">Photo By Tyler Sizemore</p>\r\n        <div class=\"gallery-title-slide\">\r\n            <div class=\"gallery-title\" style=\"\">Notre Dame-Fairfield at Weston</div>\r\n            <div class=\"slide-count\">\r\n                <div class=\"gallery-prev\"><a href=\"#prev\" rel=\"prev\"> </a></div>\r\n                            <span class=\"slide-count-current\">1</span><span>of</span><span class=\"slide-count-total\">24</span>\r\n                <div class=\"gallery-next\"><a href=\"#next\" rel=\"next\"> </a></div>\r\n            </div>\r\n        </div>\r\n        <div class=\"gallery-caption\" style=\"\"><b>SWC &nbsp;&nbsp;</b><br><b>\r\nWhen:</b> 7 p.m. Friday  <br><b>\r\nThe Skinny:</b>&nbsp;Notre Dame-Fairfield (0-2) at Weston (0-2) 7 p.m.: Trojans have a chance to turn their season around. Their next three opponents are a combined 0-6.<div class=\"mediasale\"> <span class=\"icon\"> </span> <a href=\"http://newstimeslive.mycapture.com/mycapture/remoteimage.asp?backtext=Back%20to%20News-Times&amp;image=http://ww3.hdnux.com/photos/32/22/22/6890682/3/628x471.jpg&amp;pricingsheetid=2100\">Buy this photo</a></div></div>\r\n        <h4 class=\"gallery-rel-article\" style=\"display:none;\"></h4>\r\n    </div>\r\n</li>\r\n\r\n<li id=\"photo-1651620-slide\" class=\"gallery-slide\">\r\n    <img title=\"New Fairfield at Brookfield\" alt=\"New Fairfield at Brookfield\" img=\"http://ww1.hdnux.com/photos/06/23/16/1651620/5/960x540.jpg\" src=\"http://ww1.hdnux.com/photos/06/23/16/1651620/5/960x540.jpg\" aspect_sized=\"1337\" class=\"tall-image\">\r\n    \r\n\r\n    <div class=\"details\">\r\n        <p class=\"gallery-credit\" style=\"\">Photo By Barry Horn</p>\r\n        <div class=\"gallery-title-slide\">\r\n            <div class=\"gallery-title\" style=\"\">New Fairfield at Brookfield</div>\r\n            <div class=\"slide-count\">\r\n                <div class=\"gallery-prev\"><a href=\"#prev\" rel=\"prev\"> </a></div>\r\n                            <span class=\"slide-count-current\">1</span><span>of</span><span class=\"slide-count-total\">24</span>\r\n                <div class=\"gallery-next\"><a href=\"#next\" rel=\"next\"> </a></div>\r\n            </div>\r\n        </div>\r\n        <div class=\"gallery-caption\" style=\"\"><b>SWC &nbsp;&nbsp;</b><br><b>\r\nWhen:</b> 7 p.m. Friday  <br><b>\r\nThe Skinny:</b>&nbsp;New Fairfield (1-1) at Brookfield (2-0) 7 p.m.: Four straight weeks at home for Bobcats before much-anticipated trip to Newtown on Oct. 24.</div>\r\n        <h4 class=\"gallery-rel-article\" style=\"display:none;\"></h4>\r\n    </div>\r\n</li>\r\n\r\n<li id=\"photo-5203948-slide\" class=\"gallery-slide\">\r\n    <img title=\"New Milford at Stratford\" alt=\"New Milford at Stratford\" img=\"http://ww1.hdnux.com/photos/23/66/37/5203948/3/960x540.jpg\" src=\"http://ww1.hdnux.com/photos/23/66/37/5203948/3/960x540.jpg\" aspect_sized=\"1337\" class=\"tall-image\">\r\n    \r\n\r\n    <div class=\"details\">\r\n        <p class=\"gallery-credit\" style=\"\">Photo By Norm Cummings</p>\r\n        <div class=\"gallery-title-slide\">\r\n            <div class=\"gallery-title\" style=\"\">New Milford at Stratford</div>\r\n            <div class=\"slide-count\">\r\n                <div class=\"gallery-prev\"><a href=\"#prev\" rel=\"prev\"> </a></div>\r\n                            <span class=\"slide-count-current\">1</span><span>of</span><span class=\"slide-count-total\">24</span>\r\n                <div class=\"gallery-next\"><a href=\"#next\" rel=\"next\"> </a></div>\r\n            </div>\r\n        </div>\r\n        <div class=\"gallery-caption\" style=\"\"><b>SWC &nbsp;&nbsp;</b><br><b>\r\nWhen:</b> 7 p.m. Friday  <br><b>\r\nThe Skinny:</b>&nbsp;New Milford (0-2) at Stratford (0-2) 7 p.m.: At least one of these two will get a win.</div>\r\n        <h4 class=\"gallery-rel-article\" style=\"display:none;\"></h4>\r\n    </div>\r\n</li>\r\n\r\n<li id=\"photo-6722751-slide\" class=\"gallery-slide\">\r\n    <img title=\"Foran at Sheehan\" alt=\"Foran at Sheehan\" img=\"http://ww4.hdnux.com/photos/31/51/22/6722751/3/960x540.jpg\">\r\n    \r\n\r\n    <div class=\"details\">\r\n        <p class=\"gallery-credit\" style=\"\">Photo By Christian Abraham</p>\r\n        <div class=\"gallery-title-slide\">\r\n            <div class=\"gallery-title\" style=\"\">Foran at Sheehan</div>\r\n            <div class=\"slide-count\">\r\n                <div class=\"gallery-prev\"><a href=\"#prev\" rel=\"prev\"> </a></div>\r\n                            <span class=\"slide-count-current\">1</span><span>of</span><span class=\"slide-count-total\">24</span>\r\n                <div class=\"gallery-next\"><a href=\"#next\" rel=\"next\"> </a></div>\r\n            </div>\r\n        </div>\r\n        <div class=\"gallery-caption\" style=\"\"><b>SCC &nbsp;&nbsp;</b><br><b>\r\nWhen:</b> 7 p.m. Friday  <br><b>\r\nThe Skinny:</b>&nbsp;Foran (0-2) at Sheehan (0-2) 7 p.m.: Sheehan\'s been outscored 66-9, so Lions should crack the win column.<div class=\"mediasale\"> <span class=\"icon\"> </span> <a href=\"http://newstimeslive.mycapture.com/mycapture/remoteimage.asp?backtext=Back%20to%20News-Times&amp;image=http://ww4.hdnux.com/photos/31/51/22/6722751/3/628x471.jpg&amp;pricingsheetid=2100\">Buy this photo</a></div></div>\r\n        <h4 class=\"gallery-rel-article\" style=\"display:none;\"></h4>\r\n    </div>\r\n</li>\r\n\r\n<li id=\"photo-6891526-slide\" class=\"gallery-slide\">\r\n    <img title=\"Notre Dame-West Haven at Fairfield Prep\" alt=\"Notre Dame-West Haven at Fairfield Prep\" img=\"http://ww3.hdnux.com/photos/32/22/40/6891526/3/960x540.jpg\">\r\n    \r\n\r\n    <div class=\"details\">\r\n        <p class=\"gallery-credit\" style=\"\">Photo By Christian Abraham</p>\r\n        <div class=\"gallery-title-slide\">\r\n            <div class=\"gallery-title\" style=\"\">Notre Dame-West Haven at Fairfield Prep</div>\r\n            <div class=\"slide-count\">\r\n                <div class=\"gallery-prev\"><a href=\"#prev\" rel=\"prev\"> </a></div>\r\n                            <span class=\"slide-count-current\">1</span><span>of</span><span class=\"slide-count-total\">24</span>\r\n                <div class=\"gallery-next\"><a href=\"#next\" rel=\"next\"> </a></div>\r\n            </div>\r\n        </div>\r\n        <div class=\"gallery-caption\" style=\"\"><b>SCC &nbsp;&nbsp;</b><br><b>\r\nWhen:</b> 7 p.m. Friday  <br><b>\r\nThe Skinny:</b>&nbsp;Notre Dame-West Haven (1-1) at Fairfield Prep (1-1) 7 p.m. (at Ludlowe): The Jesuits won\'t give up 40 points this week, will they?<div class=\"mediasale\"> <span class=\"icon\"> </span> <a href=\"http://newstimeslive.mycapture.com/mycapture/remoteimage.asp?backtext=Back%20to%20News-Times&amp;image=http://ww3.hdnux.com/photos/32/22/40/6891526/3/628x471.jpg&amp;pricingsheetid=2100\">Buy this photo</a></div></div>\r\n        <h4 class=\"gallery-rel-article\" style=\"display:none;\"></h4>\r\n    </div>\r\n</li>\r\n\r\n<li id=\"photo-6845753-slide\" class=\"gallery-slide\">\r\n    <img title=\"Jonathan Law at Hillhouse\" alt=\"Jonathan Law at Hillhouse\" img=\"http://ww2.hdnux.com/photos/32/07/24/6845753/5/960x540.jpg\">\r\n    \r\n\r\n    <div class=\"details\">\r\n        <p class=\"gallery-credit\" style=\"\">Photo By Christian Abraham</p>\r\n        <div class=\"gallery-title-slide\">\r\n            <div class=\"gallery-title\" style=\"\">Jonathan Law at Hillhouse</div>\r\n            <div class=\"slide-count\">\r\n                <div class=\"gallery-prev\"><a href=\"#prev\" rel=\"prev\"> </a></div>\r\n                            <span class=\"slide-count-current\">1</span><span>of</span><span class=\"slide-count-total\">24</span>\r\n                <div class=\"gallery-next\"><a href=\"#next\" rel=\"next\"> </a></div>\r\n            </div>\r\n        </div>\r\n        <div class=\"gallery-caption\" style=\"\"><b>SCC &nbsp;&nbsp;</b><br><b>\r\nWhen:</b>&nbsp;6:30 p.m. Friday  <br><b>\r\nThe Skinny:</b>&nbsp;Law (0-2) at Hillhouse (0-2) 8 p.m. (at SCSU): With losses to Top-10 teams Darien and Hand, Hillhouse is a much better 0-2 than Law.<div class=\"mediasale\"> <span class=\"icon\"> </span> <a href=\"http://newstimeslive.mycapture.com/mycapture/remoteimage.asp?backtext=Back%20to%20News-Times&amp;image=http://ww2.hdnux.com/photos/32/07/24/6845753/5/628x471.jpg&amp;pricingsheetid=2100\">Buy this photo</a></div></div>\r\n        <h4 class=\"gallery-rel-article\" style=\"display:none;\"></h4>\r\n    </div>\r\n</li>\r\n\r\n<li id=\"photo-6858475-slide\" class=\"gallery-slide\">\r\n    <img title=\"Amity at Shelton\" alt=\"Amity at Shelton\" img=\"http://ww4.hdnux.com/photos/32/12/33/6858475/3/960x540.jpg\">\r\n    \r\n\r\n    <div class=\"details\">\r\n        <p class=\"gallery-credit\" style=\"\">Photo By Bob Luckey</p>\r\n        <div class=\"gallery-title-slide\">\r\n            <div class=\"gallery-title\" style=\"\">Amity at Shelton</div>\r\n            <div class=\"slide-count\">\r\n                <div class=\"gallery-prev\"><a href=\"#prev\" rel=\"prev\"> </a></div>\r\n                            <span class=\"slide-count-current\">1</span><span>of</span><span class=\"slide-count-total\">24</span>\r\n                <div class=\"gallery-next\"><a href=\"#next\" rel=\"next\"> </a></div>\r\n            </div>\r\n        </div>\r\n        <div class=\"gallery-caption\" style=\"\"><b>SCC &nbsp;&nbsp;</b><br><b>\r\nWhen:</b> 7 p.m. Friday  <br><b>\r\nThe Skinny:</b>&nbsp;Amity (1-1) at Shelton (2-0) 7 p.m.: Gaels piling up wins before the SCC heavyweights come calling in October.<div class=\"mediasale\"> <span class=\"icon\"> </span> <a href=\"http://newstimeslive.mycapture.com/mycapture/remoteimage.asp?backtext=Back%20to%20News-Times&amp;image=http://ww4.hdnux.com/photos/32/12/33/6858475/3/628x471.jpg&amp;pricingsheetid=2100\">Buy this photo</a></div></div>\r\n        <h4 class=\"gallery-rel-article\" style=\"display:none;\"></h4>\r\n    </div>\r\n</li>\r\n\r\n<li id=\"photo-6888561-slide\" class=\"gallery-slide\">\r\n    <img title=\"Crosby at Derby\" alt=\"Crosby at Derby\" img=\"http://ww2.hdnux.com/photos/32/21/61/6888561/5/960x540.jpg\">\r\n    \r\n\r\n    <div class=\"details\">\r\n        <p class=\"gallery-credit\" style=\"\">Photo By Christian Abraham</p>\r\n        <div class=\"gallery-title-slide\">\r\n            <div class=\"gallery-title\" style=\"\">Crosby at Derby</div>\r\n            <div class=\"slide-count\">\r\n                <div class=\"gallery-prev\"><a href=\"#prev\" rel=\"prev\"> </a></div>\r\n                            <span class=\"slide-count-current\">1</span><span>of</span><span class=\"slide-count-total\">24</span>\r\n                <div class=\"gallery-next\"><a href=\"#next\" rel=\"next\"> </a></div>\r\n            </div>\r\n        </div>\r\n        <div class=\"gallery-caption\" style=\"\"><b>NVL &nbsp;&nbsp;</b><br><b>\r\nWhen:</b> 7 p.m. Friday  <br><b>\r\nThe Skinny:</b>&nbsp;Crosby (1-0) at Derby (1-1) 7 p.m.: Another trip to Ansonia\'s Nolan Field, another bitter loss for Red Raiders last week. Time to bounce back.<div class=\"mediasale\"> <span class=\"icon\"> </span> <a href=\"http://newstimeslive.mycapture.com/mycapture/remoteimage.asp?backtext=Back%20to%20News-Times&amp;image=http://ww2.hdnux.com/photos/32/21/61/6888561/5/628x471.jpg&amp;pricingsheetid=2100\">Buy this photo</a></div></div>\r\n        <h4 class=\"gallery-rel-article\" style=\"display:none;\"></h4>\r\n    </div>\r\n</li>\r\n\r\n<li id=\"photo-6853113-slide\" class=\"gallery-slide\">\r\n    <img title=\"Torrington at Oxford\" alt=\"Torrington at Oxford\" img=\"http://ww2.hdnux.com/photos/32/11/07/6853113/3/960x540.jpg\">\r\n    \r\n\r\n    <div class=\"details\">\r\n        <p class=\"gallery-credit\" style=\"\">Photo By Christian Abraham</p>\r\n        <div class=\"gallery-title-slide\">\r\n            <div class=\"gallery-title\" style=\"\">Torrington at Oxford</div>\r\n            <div class=\"slide-count\">\r\n                <div class=\"gallery-prev\"><a href=\"#prev\" rel=\"prev\"> </a></div>\r\n                            <span class=\"slide-count-current\">1</span><span>of</span><span class=\"slide-count-total\">24</span>\r\n                <div class=\"gallery-next\"><a href=\"#next\" rel=\"next\"> </a></div>\r\n            </div>\r\n        </div>\r\n        <div class=\"gallery-caption\" style=\"\"><b>NVL &nbsp;&nbsp;</b><br><b>\r\nWhen:</b> 7 p.m. Friday  <br><b>\r\nThe Skinny:</b>&nbsp;Torrington (1-1) at Oxford (0-2) 7 p.m.: Wolverines might need to wait a bit longer for first NVL win.<div class=\"mediasale\"> <span class=\"icon\"> </span> <a href=\"http://newstimeslive.mycapture.com/mycapture/remoteimage.asp?backtext=Back%20to%20News-Times&amp;image=http://ww2.hdnux.com/photos/32/11/07/6853113/3/628x471.jpg&amp;pricingsheetid=2100\">Buy this photo</a></div></div>\r\n        <h4 class=\"gallery-rel-article\" style=\"display:none;\"></h4>\r\n    </div>\r\n</li>\r\n\r\n<li id=\"photo-1953888-slide\" class=\"gallery-slide\">\r\n    <img title=\"Ansonia at Wilby\" alt=\"Ansonia at Wilby\" img=\"http://ww1.hdnux.com/photos/07/35/01/1953888/11/960x540.jpg\">\r\n    \r\n\r\n    <div class=\"details\">\r\n        <p class=\"gallery-credit\" style=\"\">Photo By Christian Abraham</p>\r\n        <div class=\"gallery-title-slide\">\r\n            <div class=\"gallery-title\" style=\"\">Ansonia at Wilby</div>\r\n            <div class=\"slide-count\">\r\n                <div class=\"gallery-prev\"><a href=\"#prev\" rel=\"prev\"> </a></div>\r\n                            <span class=\"slide-count-current\">1</span><span>of</span><span class=\"slide-count-total\">24</span>\r\n                <div class=\"gallery-next\"><a href=\"#next\" rel=\"next\"> </a></div>\r\n            </div>\r\n        </div>\r\n        <div class=\"gallery-caption\" style=\"\"><b>NVL &nbsp;&nbsp;</b><br><b>\r\nWhen:</b>&nbsp;3:30 p.m. Friday  <br><b>\r\nThe Skinny:</b>&nbsp;Ansonia (2-0) at Wilby (0-2) 3:30 p.m.: It\'s safe to say the chase for 49 straight wins won\'t be threatened this week.<div class=\"mediasale\"> <span class=\"icon\"> </span> <a href=\"http://newstimeslive.mycapture.com/mycapture/remoteimage.asp?backtext=Back%20to%20News-Times&amp;image=http://ww1.hdnux.com/photos/07/35/01/1953888/11/628x471.jpg&amp;pricingsheetid=2100\">Buy this photo</a></div></div>\r\n        <h4 class=\"gallery-rel-article\" style=\"display:none;\"></h4>\r\n    </div>\r\n</li>\r\n\r\n<li id=\"photo-5406940-slide\" class=\"gallery-slide\">\r\n    <img title=\"Wilton at Branford\" alt=\"Wilton at Branford\" img=\"http://ww1.hdnux.com/photos/24/50/03/5406940/5/960x540.jpg\">\r\n    \r\n\r\n    <div class=\"details\">\r\n        <p class=\"gallery-credit\" style=\"\">Photo By Mark Conrad</p>\r\n        <div class=\"gallery-title-slide\">\r\n            <div class=\"gallery-title\" style=\"\">Wilton at Branford</div>\r\n            <div class=\"slide-count\">\r\n                <div class=\"gallery-prev\"><a href=\"#prev\" rel=\"prev\"> </a></div>\r\n                            <span class=\"slide-count-current\">1</span><span>of</span><span class=\"slide-count-total\">24</span>\r\n                <div class=\"gallery-next\"><a href=\"#next\" rel=\"next\"> </a></div>\r\n            </div>\r\n        </div>\r\n        <div class=\"gallery-caption\" style=\"\"><b>Regional &nbsp;&nbsp;</b><br><b>\r\nWhen:</b> 7 p.m. Friday  <br><b>\r\nThe Skinny:</b>&nbsp;Wilton (1-1) at Branford (0-1) 7 p.m.: Warriors get another shot at a SCC school. Branford was shut out 46-0 last week.</div>\r\n        <h4 class=\"gallery-rel-article\" style=\"display:none;\"></h4>\r\n    </div>\r\n</li>\r\n\r\n<li id=\"photo-5247320-slide\" class=\"gallery-slide\">\r\n    <img title=\"Warde at Trinity Catholic\" alt=\"Warde at Trinity Catholic\" img=\"http://ww1.hdnux.com/photos/24/01/05/5247320/7/960x540.jpg\">\r\n    \r\n\r\n    <div class=\"details\">\r\n        <p class=\"gallery-credit\" style=\"\">Photo By Mark Conrad</p>\r\n        <div class=\"gallery-title-slide\">\r\n            <div class=\"gallery-title\" style=\"\">Warde at Trinity Catholic</div>\r\n            <div class=\"slide-count\">\r\n                <div class=\"gallery-prev\"><a href=\"#prev\" rel=\"prev\"> </a></div>\r\n                            <span class=\"slide-count-current\">1</span><span>of</span><span class=\"slide-count-total\">24</span>\r\n                <div class=\"gallery-next\"><a href=\"#next\" rel=\"next\"> </a></div>\r\n            </div>\r\n        </div>\r\n        <div class=\"gallery-caption\" style=\"\"><b>FCIAC &nbsp;&nbsp;</b><br><b>\r\nWhen:</b>&nbsp;1 p.m. Saturday  <br><b>\r\nThe Skinny:</b>&nbsp;Warde (2-0) at Trinity Catholic (2-0) 1 p.m.: Two programs looking to change their fortunes come in unbeaten with high-powered passing offenses.</div>\r\n        <h4 class=\"gallery-rel-article\" style=\"display:none;\"></h4>\r\n    </div>\r\n</li>\r\n\r\n<li id=\"photo-5446859-slide\" class=\"gallery-slide\">\r\n    <img title=\"Norwalk at Harding\" alt=\"Norwalk at Harding\" img=\"http://ww4.hdnux.com/photos/24/61/63/5446859/3/960x540.jpg\">\r\n    \r\n\r\n    <div class=\"details\">\r\n        <p class=\"gallery-credit\" style=\"\">Photo By Lindsay Perry</p>\r\n        <div class=\"gallery-title-slide\">\r\n            <div class=\"gallery-title\" style=\"\">Norwalk at Harding</div>\r\n            <div class=\"slide-count\">\r\n                <div class=\"gallery-prev\"><a href=\"#prev\" rel=\"prev\"> </a></div>\r\n                            <span class=\"slide-count-current\">1</span><span>of</span><span class=\"slide-count-total\">24</span>\r\n                <div class=\"gallery-next\"><a href=\"#next\" rel=\"next\"> </a></div>\r\n            </div>\r\n        </div>\r\n        <div class=\"gallery-caption\" style=\"\"><b>FCIAC &nbsp;&nbsp;</b><br><b>\r\nWhen:</b>&nbsp;1:30 p.m. Saturday &nbsp;<br><b>\r\nThe Skinny:</b>&nbsp;Norwalk (0-2) at Harding (1-1) 1:30 p.m.: The Presidents have been scoring points in bunches while the Bears\' offense has yet to lift off.</div>\r\n        <h4 class=\"gallery-rel-article\" style=\"display:none;\"></h4>\r\n    </div>\r\n</li>\r\n\r\n<li id=\"photo-6888841-slide\" class=\"gallery-slide\">\r\n    <img title=\"Bassick at Darien\" alt=\"Bassick at Darien\" img=\"http://ww2.hdnux.com/photos/32/21/66/6888841/5/960x540.jpg\">\r\n    \r\n\r\n    <div class=\"details\">\r\n        <p class=\"gallery-credit\" style=\"\">Photo By Bob Luckey</p>\r\n        <div class=\"gallery-title-slide\">\r\n            <div class=\"gallery-title\" style=\"\">Bassick at Darien</div>\r\n            <div class=\"slide-count\">\r\n                <div class=\"gallery-prev\"><a href=\"#prev\" rel=\"prev\"> </a></div>\r\n                            <span class=\"slide-count-current\">1</span><span>of</span><span class=\"slide-count-total\">24</span>\r\n                <div class=\"gallery-next\"><a href=\"#next\" rel=\"next\"> </a></div>\r\n            </div>\r\n        </div>\r\n        <div class=\"gallery-caption\" style=\"\"><b>FCIAC &nbsp;&nbsp;</b><br><b>\r\nWhen:</b>&nbsp;1:30 p.m. Saturday  <br><b>\r\nThe Skinny:</b>&nbsp;Bassick (0-2) at Darien (2-0) 1:30 p.m.: Joining a new conference can\'t come fast enough for the Lions.<div class=\"mediasale\"> <span class=\"icon\"> </span> <a href=\"http://newstimeslive.mycapture.com/mycapture/remoteimage.asp?backtext=Back%20to%20News-Times&amp;image=http://ww2.hdnux.com/photos/32/21/66/6888841/5/628x471.jpg&amp;pricingsheetid=2100\">Buy this photo</a></div></div>\r\n        <h4 class=\"gallery-rel-article\" style=\"display:none;\"></h4>\r\n    </div>\r\n</li>\r\n\r\n<li id=\"photo-5250014-slide\" class=\"gallery-slide\">\r\n    <img title=\"Westhill at Staples\" alt=\"Westhill at Staples\" img=\"http://ww3.hdnux.com/photos/24/01/57/5250014/5/960x540.jpg\">\r\n    \r\n\r\n    <div class=\"details\">\r\n        <p class=\"gallery-credit\" style=\"\">Photo By Lindsay Perry</p>\r\n        <div class=\"gallery-title-slide\">\r\n            <div class=\"gallery-title\" style=\"\">Westhill at Staples</div>\r\n            <div class=\"slide-count\">\r\n                <div class=\"gallery-prev\"><a href=\"#prev\" rel=\"prev\"> </a></div>\r\n                            <span class=\"slide-count-current\">1</span><span>of</span><span class=\"slide-count-total\">24</span>\r\n                <div class=\"gallery-next\"><a href=\"#next\" rel=\"next\"> </a></div>\r\n            </div>\r\n        </div>\r\n        <div class=\"gallery-caption\" style=\"\"><b>FCIAC &nbsp;&nbsp;</b><br><b>\r\nWhen:</b>&nbsp;1:30 p.m. Saturday  <br><b>\r\nThe Skinny:</b>&nbsp;Westhill (1-1) at Staples (1-1) 1:30 p.m.: The Wreckers have allowed three points in two games.<div class=\"mediasale\"> <span class=\"icon\"> </span> <a href=\"http://newstimeslive.mycapture.com/mycapture/remoteimage.asp?backtext=Back%20to%20News-Times&amp;image=http://ww3.hdnux.com/photos/24/01/57/5250014/5/628x471.jpg&amp;pricingsheetid=2100\">Buy this photo</a></div></div>\r\n        <h4 class=\"gallery-rel-article\" style=\"display:none;\"></h4>\r\n    </div>\r\n</li>\r\n\r\n<li id=\"photo-5250505-slide\" class=\"gallery-slide\">\r\n    <img title=\"Danbury at McMahon\" alt=\"Danbury at McMahon\" img=\"http://ww2.hdnux.com/photos/24/01/67/5250505/3/960x540.jpg\">\r\n    \r\n\r\n    <div class=\"details\">\r\n        <p class=\"gallery-credit\" style=\"\">Photo By Tyler Sizemore</p>\r\n        <div class=\"gallery-title-slide\">\r\n            <div class=\"gallery-title\" style=\"\">Danbury at McMahon</div>\r\n            <div class=\"slide-count\">\r\n                <div class=\"gallery-prev\"><a href=\"#prev\" rel=\"prev\"> </a></div>\r\n                            <span class=\"slide-count-current\">1</span><span>of</span><span class=\"slide-count-total\">24</span>\r\n                <div class=\"gallery-next\"><a href=\"#next\" rel=\"next\"> </a></div>\r\n            </div>\r\n        </div>\r\n        <div class=\"gallery-caption\" style=\"\"><b>FCIAC &nbsp;&nbsp;</b><br><b>\r\nWhen:</b>&nbsp;1:30 p.m. Saturday  <br><b>\r\nThe Skinny:</b>&nbsp;Danbury (2-0) at McMahon (1-1) 1:30 p.m.: The Hatters look to make it two in a row over Norwalk schools.<div class=\"mediasale\"> <span class=\"icon\"> </span> <a href=\"http://newstimeslive.mycapture.com/mycapture/remoteimage.asp?backtext=Back%20to%20News-Times&amp;image=http://ww2.hdnux.com/photos/24/01/67/5250505/3/628x471.jpg&amp;pricingsheetid=2100\">Buy this photo</a></div></div>\r\n        <h4 class=\"gallery-rel-article\" style=\"display:none;\"></h4>\r\n    </div>\r\n</li>\r\n\r\n<li id=\"photo-5250331-slide\" class=\"gallery-slide\">\r\n    <img title=\"Greenwich at New Canaan\" alt=\"Greenwich at New Canaan\" img=\"http://ww4.hdnux.com/photos/24/01/64/5250331/9/960x540.jpg\">\r\n    \r\n\r\n    <div class=\"details\">\r\n        <p class=\"gallery-credit\" style=\"\">Photo By Bob Luckey</p>\r\n        <div class=\"gallery-title-slide\">\r\n            <div class=\"gallery-title\" style=\"\">Greenwich at New Canaan</div>\r\n            <div class=\"slide-count\">\r\n                <div class=\"gallery-prev\"><a href=\"#prev\" rel=\"prev\"> </a></div>\r\n                            <span class=\"slide-count-current\">1</span><span>of</span><span class=\"slide-count-total\">24</span>\r\n                <div class=\"gallery-next\"><a href=\"#next\" rel=\"next\"> </a></div>\r\n            </div>\r\n        </div>\r\n        <div class=\"gallery-caption\" style=\"\"><b>FCIAC &nbsp;&nbsp;</b><br><b>\r\nWhen:</b>&nbsp;1:30 p.m. Saturday  <br><b>\r\nThe Skinny:</b>&nbsp;Greenwich (0-2) at New Canaan (2-0) 1:30 p.m.: The game is a must win for the Cardinals and a must watch for area football fans.<div class=\"mediasale\"> <span class=\"icon\"> </span> <a href=\"http://newstimeslive.mycapture.com/mycapture/remoteimage.asp?backtext=Back%20to%20News-Times&amp;image=http://ww4.hdnux.com/photos/24/01/64/5250331/9/628x471.jpg&amp;pricingsheetid=2100\">Buy this photo</a></div></div>\r\n        <h4 class=\"gallery-rel-article\" style=\"display:none;\"></h4>\r\n    </div>\r\n</li>\r\n\r\n<li id=\"photo-6852625-slide\" class=\"gallery-slide\">\r\n    <img title=\"Trumbull at Stamford\" alt=\"Trumbull at Stamford\" img=\"http://ww2.hdnux.com/photos/32/11/00/6852625/3/960x540.jpg\">\r\n    \r\n\r\n    <div class=\"details\">\r\n        <p class=\"gallery-credit\" style=\"\">Photo By Shelley Cryan</p>\r\n        <div class=\"gallery-title-slide\">\r\n            <div class=\"gallery-title\" style=\"\">Trumbull at Stamford</div>\r\n            <div class=\"slide-count\">\r\n                <div class=\"gallery-prev\"><a href=\"#prev\" rel=\"prev\"> </a></div>\r\n                            <span class=\"slide-count-current\">1</span><span>of</span><span class=\"slide-count-total\">24</span>\r\n                <div class=\"gallery-next\"><a href=\"#next\" rel=\"next\"> </a></div>\r\n            </div>\r\n        </div>\r\n        <div class=\"gallery-caption\" style=\"\"><b>FCIAC &nbsp;&nbsp;</b><br><b>\r\nWhen:</b>&nbsp;2 p.m. Saturday  <br><b>\r\nThe Skinny:</b>&nbsp;Trumbull (0-2) at Stamford (1-1) 2 p.m.: The Black Knights\' new-look offense finally gets to show off at home.</div>\r\n        <h4 class=\"gallery-rel-article\" style=\"display:none;\"></h4>\r\n    </div>\r\n</li>\r\n\r\n<li id=\"photo-related-6852625-slide\" class=\"gallery-slide\">\r\n    <img title=\"Trumbull at Stamford\" alt=\"Trumbull at Stamford\" img=\"http://ww2.hdnux.com/photos/32/11/00/6852625/3/960x540.jpg\">\r\n    \r\n\r\n    <div class=\"details\">\r\n        <p class=\"gallery-credit\" style=\"\">Photo By Shelley Cryan</p>\r\n        <div class=\"gallery-title-slide\">\r\n            <div class=\"gallery-title\" style=\"\">Trumbull at Stamford</div>\r\n            <div class=\"slide-count\">\r\n                <div class=\"gallery-prev\"><a href=\"#prev\" rel=\"prev\"> </a></div>\r\n                            <span class=\"slide-count-current\">1</span><span>of</span><span class=\"slide-count-total\">24</span>\r\n                <div class=\"gallery-next\"><a href=\"#next\" rel=\"next\"> </a></div>\r\n            </div>\r\n        </div>\r\n        <div class=\"gallery-caption\" style=\"\"><b>FCIAC &nbsp;&nbsp;</b><br><b>\r\nWhen:</b>&nbsp;2 p.m. Saturday  <br><b>\r\nThe Skinny:</b>&nbsp;Trumbull (0-2) at Stamford (1-1) 2 p.m.: The Black Knights\' new-look offense finally gets to show off at home.</div>\r\n        <h4 class=\"gallery-rel-article\" style=\"display:none;\"></h4>\r\n    </div>\r\n<div class=\"gallery_last_slide_container\">\r\n        <div class=\"gallery_last_slide_contents\">\r\n            <div class=\"header gallery-promo-wide\">\r\n                <h2>More Galleries</h2>\r\n                <ul class=\"gpwide-tab-wrap\">\r\n                    <li id=\"gpwide-tab-1-lastslide\" class=\"gpwide-tab\" style=\"display: none;\"><a id=\"gpwide-tab-1-link-lastslide\">Related</a></li>\r\n                    <li id=\"gpwide-tab-2-lastslide\" class=\"gpwide-tab\"><a id=\"gpwide-tab-2-link-lastslide\">Popular</a></li>\r\n                    <li id=\"gpwide-tab-3-lastslide\" class=\"gpwide-tab gpwide-on\"><a id=\"gpwide-tab-3-link-lastslide\" style=\"cursor: pointer;\">Recent</a></li>\r\n                </ul>\r\n            </div>\r\n            <div class=\"gallery-related-galleries\">\r\n            <div class=\"gallery-last-slide-ad\"><div id=\"gallery-lastslide-mediumrectangle\"></div></div>\r\n            <ul class=\"galleryTab1_Related-lastslide\" style=\"display: none;\">\r\n            </ul>\r\n            <ul class=\"galleryTab2_Popular-lastslide jQ-slideshow\" style=\"display: none;\"><li class=\"item gallery-replay-slide-item\" title=\"Replay Gallery\">\r\n						<img class=\"gallery-replay-icon\" src=\"/img/hdn/pages/slideshow/item/replay_icon.png\">\r\n						<p class=\"illo\">\r\n							<a href=\"/hsfootball/slideshow/Week-3-guide-to-high-school-football-in-94338.php\">\r\n								<img src=\"http://ww1.hdnux.com/photos/24/06/24/5268744/5/band_small.jpg\">\r\n							</a>\r\n						</p>\r\n						<h4><p class=\"pubdate\">September 24th, 2014</p><a href=\"/hsfootball/slideshow/Week-3-guide-to-high-school-football-in-94338.php\">Week 3 guide to high school football in southwestern Connecticut</a></h4>\r\n					</li>\r\n            <li class=\"item\">\r\n                                <a href=\"/seen/slideshow/SEEN-at-Oktoberfest-94533.php\"><img src=\"http://ww2.hdnux.com/photos/32/33/02/6926473/3/band_small.jpg\" alt=\"\"></a>\r\n                                <h4 class=\"ms-headline\"><p class=\"pubdate\">September 28th, 2014</p><a href=\"/seen/slideshow/SEEN-at-Oktoberfest-94533.php\">SEEN at Oktoberfest?</a></h4>\r\n                         </li><li class=\"item\">\r\n                                <a href=\"/entertainment/slideshow/Line-dancing-in-New-Milford-94514.php\"><img src=\"http://ww2.hdnux.com/photos/32/24/17/6898645/3/band_small.jpg\" alt=\"\"></a>\r\n                                <h4 class=\"ms-headline\"><p class=\"pubdate\">September 28th, 2014</p><a href=\"/entertainment/slideshow/Line-dancing-in-New-Milford-94514.php\">Line dancing in New Milford</a></h4>\r\n                         </li><li class=\"item\">\r\n                                <a href=\"/life/healthzone/slideshow/Choices-you-think-are-healthy-but-aren-t-82260.php\"><img src=\"http://ww2.hdnux.com/photos/26/56/31/5957201/6/band_small.jpg\" alt=\"\"></a>\r\n                                <h4 class=\"ms-headline\"><p class=\"pubdate\">March 19th, 2014</p><a href=\"/life/healthzone/slideshow/Choices-you-think-are-healthy-but-aren-t-82260.php\">Choices you think are healthy, but aren\'t</a></h4>\r\n                         </li><li class=\"item\">\r\n                                <a href=\"/news/slideshow/The-Weekend-in-Photos-Sept-26-28-2014-94515.php\"><img src=\"http://ww3.hdnux.com/photos/32/32/70/6925886/7/band_small.jpg\" alt=\"\"></a>\r\n                                <h4 class=\"ms-headline\"><p class=\"pubdate\">September 28th, 2014</p><a href=\"/news/slideshow/The-Weekend-in-Photos-Sept-26-28-2014-94515.php\">The Weekend in Photos, Sept. 26 - 28, 2014</a></h4>\r\n                         </li><li class=\"item\" img=\"http://ww1.hdnux.com/photos/32/31/06/6918560/6/pageart_n.jpg\"><p class=\"illo\"><a href=\"http://www.newstimes.com/entertainment/slideshow/Brigitte-Bardot-sex-and-style-symbol-94464.php\"><img src=\"http://ww1.hdnux.com/photos/32/31/06/6918560/6/band_small.jpg\"></a></p>			    \r\n                                <h4 class=\"ms-headline\"><p class=\"pubdate\">September 25th, 2014</p><a href=\"/entertainment/slideshow/Brigitte-Bardot-sex-and-style-symbol-94464.php\">Brigitte Bardot turns 80: A look back</a></h4>\r\n			</li></ul>\r\n            <ul class=\"galleryTab2_Recent-lastslide jQ-slideshow\" style=\"display: block;\">\r\n            <li class=\"item\">\r\n                                <a href=\"/news/slideshow/Demolition-at-Fairfield-Hills-94630.php\"><img src=\"http://ww1.hdnux.com/photos/32/34/11/6931028/3/band_small.jpg\" alt=\"\"></a>\r\n                                <h4 class=\"ms-headline\"><p class=\"pubdate\">September 29th, 2014</p><a href=\"/news/slideshow/Demolition-at-Fairfield-Hills-94630.php\">Demolition at Fairfield Hills</a></h4>\r\n                         </li><li class=\"item\">\r\n                                <a href=\"/news/slideshow/Indian-94589.php\"><img src=\"http://ww2.hdnux.com/photos/32/33/64/6929685/3/band_small.jpg\" alt=\"\"></a>\r\n                                <h4 class=\"ms-headline\"><p class=\"pubdate\">September 29th, 2014</p><a href=\"/news/slideshow/Indian-94589.php\">Indian</a></h4>\r\n                         </li><li class=\"item\">\r\n                                <a href=\"/news/slideshow/Pix-from-Sunday-039-s-Community-Challenge-94554.php\"><img src=\"http://ww3.hdnux.com/photos/32/33/44/6928658/7/band_small.jpg\" alt=\"\"></a>\r\n                                <h4 class=\"ms-headline\"><p class=\"pubdate\">September 29th, 2014</p><a href=\"/news/slideshow/Pix-from-Sunday-039-s-Community-Challenge-94554.php\">Pix from Sunday\'s Community Challenge!</a></h4>\r\n                         </li><li class=\"item\">\r\n                                <a href=\"/news/slideshow/20-best-jobs-for-work-life-balance-94545.php\"><img src=\"http://ww1.hdnux.com/photos/32/33/34/6928164/3/band_small.jpg\" alt=\"\"></a>\r\n                                <h4 class=\"ms-headline\"><p class=\"pubdate\">September 29th, 2014</p><a href=\"/news/slideshow/20-best-jobs-for-work-life-balance-94545.php\">20 best jobs for work-life balance</a></h4>\r\n                         </li><li class=\"item\" img=\"http://ww1.hdnux.com/photos/32/33/44/6928700/3/pageart_n.jpg\"><p class=\"illo\"><a href=\"http://www.newstimes.com/news/slideshow/FOOD-FOR-ALL-94556.php\"><img src=\"http://ww1.hdnux.com/photos/32/33/44/6928700/3/band_small.jpg\"></a></p>			    \r\n                                <h4 class=\"ms-headline\"><p class=\"pubdate\">September 29th, 2014</p><a href=\"/news/slideshow/FOOD-FOR-ALL-94556.php\">FOOD FOR ALL</a></h4>\r\n			</li><li class=\"item\" img=\"http://ww3.hdnux.com/photos/32/33/27/6927854/3/pageart_n.jpg\"><p class=\"illo\"><a href=\"http://www.newstimes.com/news/slideshow/2014-Ford-Fusion-SE-94537.php\"><img src=\"http://ww3.hdnux.com/photos/32/33/27/6927854/3/band_small.jpg\"></a></p>			    \r\n                                <h4 class=\"ms-headline\"><p class=\"pubdate\">September 29th, 2014</p><a href=\"/news/slideshow/2014-Ford-Fusion-SE-94537.php\">2014 Ford Fusion SE</a></h4>\r\n			</li><li class=\"item\" img=\"http://ww2.hdnux.com/photos/32/33/02/6926473/3/pageart_n.jpg\"><p class=\"illo\"><a href=\"http://www.newstimes.com/seen/slideshow/SEEN-at-Oktoberfest-94533.php\"><img src=\"http://ww2.hdnux.com/photos/32/33/02/6926473/3/band_small.jpg\"></a></p>			    \r\n                                <h4 class=\"ms-headline\"><p class=\"pubdate\">September 28th, 2014</p><a href=\"/seen/slideshow/SEEN-at-Oktoberfest-94533.php\">SEEN at Oktoberfest?</a></h4>\r\n			</li><li class=\"item\" img=\"http://ww4.hdnux.com/photos/32/32/67/6925771/5/pageart_n.jpg\"><p class=\"illo\"><a href=\"http://www.newstimes.com/news/slideshow/This-Week-039-s-Food-Events-9-28-94523.php\"><img src=\"http://ww4.hdnux.com/photos/32/32/67/6925771/5/band_small.jpg\"></a></p>			    \r\n                                <h4 class=\"ms-headline\"><p class=\"pubdate\">September 28th, 2014</p><a href=\"/news/slideshow/This-Week-039-s-Food-Events-9-28-94523.php\">This Week\'s Food Events: 9-28</a></h4>\r\n			</li><li class=\"item\" img=\"http://ww2.hdnux.com/photos/32/24/17/6898645/3/pageart_n.jpg\"><p class=\"illo\"><a href=\"http://www.newstimes.com/entertainment/slideshow/Line-dancing-in-New-Milford-94514.php\"><img src=\"http://ww2.hdnux.com/photos/32/24/17/6898645/3/band_small.jpg\"></a></p>			    \r\n                                <h4 class=\"ms-headline\"><p class=\"pubdate\">September 28th, 2014</p><a href=\"/entertainment/slideshow/Line-dancing-in-New-Milford-94514.php\">Line dancing in New Milford</a></h4>\r\n			</li><li class=\"item\" img=\"http://ww2.hdnux.com/photos/32/31/25/6919549/3/pageart_n.jpg\"><p class=\"illo\"><a href=\"http://www.newstimes.com/hsfootball/slideshow/HS-Football-Joel-Barlow-at-Bethel-94474.php\"><img src=\"http://ww2.hdnux.com/photos/32/31/25/6919549/3/band_small.jpg\"></a></p>			    \r\n                                <h4 class=\"ms-headline\"><p class=\"pubdate\">September 26th, 2014</p><a href=\"/hsfootball/slideshow/HS-Football-Joel-Barlow-at-Bethel-94474.php\">HS Football: Joel Barlow at Bethel</a></h4>\r\n			</li><li class=\"item\" img=\"http://ww1.hdnux.com/photos/32/31/13/6918896/3/pageart_n.jpg\"><p class=\"illo\"><a href=\"http://www.newstimes.com/news/slideshow/Weird-and-wacky-baby-inventions-64939.php\"><img src=\"http://ww1.hdnux.com/photos/32/31/13/6918896/3/band_small.jpg\"></a></p>			    \r\n                                <h4 class=\"ms-headline\"><p class=\"pubdate\">September 26th, 2014</p><a href=\"/news/slideshow/Weird-and-wacky-baby-inventions-64939.php\">Weird and wacky baby inventions</a></h4>\r\n			</li><li class=\"item\" img=\"http://ww3.hdnux.com/photos/32/30/60/6917138/3/pageart_n.jpg\"><p class=\"illo\"><a href=\"http://www.newstimes.com/news/slideshow/iPhone-6-6-Plus-and-all-past-iPhones-94444.php\"><img src=\"http://ww3.hdnux.com/photos/32/30/60/6917138/3/band_small.jpg\"></a></p>			    \r\n                                <h4 class=\"ms-headline\"><p class=\"pubdate\">September 26th, 2014</p><a href=\"/news/slideshow/iPhone-6-6-Plus-and-all-past-iPhones-94444.php\">iPhone 6, 6 Plus and all past iPhones</a></h4>\r\n			</li></ul>\r\n            </div>\r\n        </div>\r\n        <div class=\"gallery_last_slide_overlay\"></div>\r\n        </div></li>\r\n</ul>\r\n        </div>\r\n        <div id=\"prevThumb\" class=\"hidden-thumb\"></div>\r\n            <div id=\"nextThumb\" class=\"hidden-thumb\"></div>\r\n        <div id=\"prevSlide\" class=\"gallery-prev\"><a href=\"#prev\" rel=\"prev\"></a></div>\r\n        <div id=\"nextSlide\" class=\"gallery-next\" style=\"display: block;\"><a href=\"#next\" rel=\"next\"></a></div>\r\n        <div id=\"galleryExpand\" class=\"gallery-expand\" style=\"display: block;\"><a id=\"galleryExpandBtn\"></a></div>\r\n    </div>',1,'','0000-00-00 00:00:00','0000-00-00 00:00:00'),(10,'CRM Requirement','crm_requirement','<p>CRM Requirement</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>The CRM system should have two main sections CRM and Support and have the minimum features as described below.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><u>Customer Profile</u></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>The customer profile should contain at least the following information: Company name, address, website and telephone number, sector, hired employee count, contact employee at company. <em>I should able to add company employees to the system like RMP</em>.&nbsp;</p>\r\n\r\n<p>There should the also be a section that stores the customers product information, such as: product purchased (RMP or HRM), support package purchased, date both were purchase, expiry date of support package and the ability for me to generate/upload any client invoices, contracts agreements or any other document.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>There should be a customer search facility made up from the data stored in their profile that would allow me to choose the criteria and search. Eg: customers with 100 employees, who purchased RMP etc&hellip; and also the ability to combine search criteria.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>I should be able to dynamically add things like support packages, and products. A list of fields we be provided.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><u>Support Features</u></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>The support section is made up of two sections.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<ol>\r\n	<li>Knowledgebase (copy kayako).</li>\r\n</ol>\r\n\r\n<p>It puts text, videos and/or PDF&rsquo;s etc in the answers to the questions.</p>\r\n\r\n<ol>\r\n	<li value=\"2\">Support ticket system (You know what&rsquo;s needed here).</li>\r\n	<li value=\"3\">Reports and analytical information.</li>\r\n	<li value=\"4\">A news section like in RMP marketing, but this information is specifically for our customers and comes under the support section.</li>\r\n</ol>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>The CRM should be bilingual, English and Arabic interface and content.</p>\r\n\r\n<p style=\"margin-left:.25in;\">&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><u>References:</u></p>\r\n\r\n<p>Company Employee profile: http://ndesaintheme.com/apricot/profile.html</p>\r\n\r\n<p>Invoice page: <a href=\"http://ndesaintheme.com/apricot/invoice.html\">http://ndesaintheme.com/apricot/invoice.html</a></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>Knowledge base, instant ticket and support center: <a href=\"http://www.kayako.com/product/tour/\">http://www.kayako.com/product/tour/</a></p>\r\n\r\n<p>A 24/7 support destination your customers will love</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>EMPLOYEE OF CUMSTOMER(COMPANY)</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>Crud employee&nbsp; of company&nbsp;&nbsp; (with profile hold user_id (customer)</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>Requirement old. 3-month</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>Here is some info about the marketing site.</p>\r\n\r\n<p>There will be 3 sections; Front end, admin (to manage content and mini CRM), Client section.</p>\r\n\r\n<p>I&#39;ve attached some screen shots explaining the front end. I&#39;ll send you a template to use for the admin and client support side.</p>\r\n\r\n<p>Please check to make sure all is clear, you&#39;ll be doing this from scratch so it&#39;s all your own code.</p>\r\n\r\n<p>I&#39;d like to build it in stages: so that it can get up asap.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>Stages:</p>\r\n\r\n<p>1. Front End with admin backend to manage content.</p>\r\n\r\n<p>2. Client Support Side with admin backend to manage content.</p>\r\n\r\n<p>3. Mini CRM with admin backend to manage content</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>I&#39;ll provide exactly what information i&#39;ll want to store for the CRM as well as whats needed in the support side.</p>\r\n\r\n<p>but you should have enough to get started.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>QA</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>1.Theoy&ecirc;ucầu ban đầuth&igrave;crm (chungvới marketing&nbsp; trong 1 project)?</p>\r\n\r\n<p>2.X&acirc;ydựng 1 project crmri&ecirc;ng (databseri&ecirc;ng)?</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>-Customer&nbsp; profile</p>\r\n\r\n<p>+ X&acirc;ydựngcrmvớic&aacute;ct&aacute;cnh&acirc;n hay nhữngđốitượngn&agrave;o (customer,employee&hellip;)?</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>B,</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>X&acirc;ydựng</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>Route</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>Manager/</p>\r\n\r\n<p>Staff/support</p>\r\n\r\n<p>Customer/</p>\r\n\r\n<p>Employee/</p>\r\n\r\n<p>Profile/</p>\r\n\r\n<p>User-login</p>\r\n\r\n<p>User-logout</p>\r\n\r\n<p>Customer/create</p>\r\n\r\n<p>Customer/edit</p>\r\n\r\n<p>Customer/submit-tickit</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>Create form user</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>Create customer profile</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>Create form login,logout</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>Create ticket</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>Create support</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>Avoice</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>Report</p>\r\n\r\n<p>Analysis</p>\r\n\r\n<p>Admin</p>\r\n\r\n<p>Create customer [username,password,email,group_users,firstname,lastname]</p>\r\n\r\n<p>Create profile [id,user_id,company_name,address,phone_number,count of employee, sector]</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>Create employee of customer</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>Create product</p>\r\n\r\n<p>Create bill</p>\r\n\r\n<p>Create history</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>T&agrave;ikhoản support online</p>\r\n\r\n<p><a href=\"https://dashboard.zopim.com/\">https://dashboard.zopim.com</a></p>\r\n\r\n<p>u: <a href=\"mailto:ltt.develop@gmail.com\">ltt.develop@gmail.com</a>&nbsp;&nbsp;&nbsp; p:18061989</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>code</p>\r\n\r\n<p>&lt;!--Start of Zopim Live Chat Script--&gt;</p>\r\n\r\n<p>&lt;script type=&quot;text/javascript&quot;&gt;</p>\r\n\r\n<p>window.$zopim||(function(d,s){var z=$zopim=function(c){z._.push(c)},$=z.s=</p>\r\n\r\n<p>d.createElement(s),e=d.getElementsByTagName(s)[0];z.set=function(o){z.set.</p>\r\n\r\n<p>_.push(o)};z._=[];z.set._=[];$.async=!0;$.setAttribute(&#39;charset&#39;,&#39;utf-8&#39;);</p>\r\n\r\n<p>$.src=&#39;//v2.zopim.com/?2IqW7qbAYFvrtFKXMHUNa3ZmwWVZWlkv&#39;;z.t=+new Date;$.</p>\r\n\r\n<p>type=&#39;text/javascript&#39;;e.parentNode.insertBefore($,e)})(document,&#39;script&#39;);</p>\r\n\r\n<p>&lt;/script&gt;</p>\r\n\r\n<p>&lt;!--End of Zopim Live Chat Script--&gt;</p>\r\n',2,'','2014-09-30 19:31:36','2014-09-30 19:31:36');
/*!40000 ALTER TABLE `news` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `priority`
--

DROP TABLE IF EXISTS `priority`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `priority` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `description` text COLLATE utf8_unicode_ci,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `priority`
--

LOCK TABLES `priority` WRITE;
/*!40000 ALTER TABLE `priority` DISABLE KEYS */;
/*!40000 ALTER TABLE `priority` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `profiles`
--

DROP TABLE IF EXISTS `profiles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
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
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `profiles`
--

LOCK TABLES `profiles` WRITE;
/*!40000 ALTER TABLE `profiles` DISABLE KEYS */;
INSERT INTO `profiles` VALUES (1,1,'da nang','','98908908098',0,0,'','SFR',0,0,0,'0000-00-00 00:00:00','2014-09-09 01:43:48','2014-09-09 02:16:37'),(2,2,'Nguyễn kim','nguyemkim.com','3333333333333333333',1,3,'Nguyễn anh tài','Nguyễn kim',0,0,0,'0000-00-00 00:00:00','2014-09-09 01:45:12','2014-09-09 01:55:21'),(3,3,'','','',0,0,'','',0,0,0,'0000-00-00 00:00:00','2014-09-09 01:46:42','2014-09-09 01:46:42'),(5,5,'','','',0,0,'','',0,0,0,'0000-00-00 00:00:00','2014-09-09 02:35:33','2014-09-09 02:35:33'),(6,6,'SFR','sfr-creative.com ','0972102103',1,10,'SFR company','SFR',0,0,0,'0000-00-00 00:00:00','2014-09-09 02:38:11','2014-09-09 02:40:33'),(7,7,'','','0972102013',2,10,'Anh Tuan','SFR',0,0,0,'0000-00-00 00:00:00','2014-09-09 19:26:16','2014-09-09 19:26:16'),(8,8,'Đà Nẵng - Việt Nam','','0974191000',0,0,'','',0,0,0,'0000-00-00 00:00:00','2014-09-11 02:02:19','2014-09-11 02:02:19'),(9,9,'','','23343434',2,3,'Lương thanh truyền','SAMSUNG',0,0,0,'0000-00-00 00:00:00','2014-09-11 19:09:34','2014-09-11 19:09:34'),(10,10,'Da nang','','980989333',0,0,'','',0,0,0,'0000-00-00 00:00:00','2014-09-11 19:12:56','2014-09-11 19:12:56'),(12,12,'sssssssss','dđ','343333333333333333333333',1,3329,'33333333333333','sssssss',0,0,0,'0000-00-00 00:00:00','2014-09-26 00:18:38','2014-09-26 00:18:38'),(13,13,'ssssssssss','','3333333333333',1,3,'ffffffff','skik',0,0,0,'0000-00-00 00:00:00','2014-09-26 00:56:45','2014-09-26 02:15:18'),(14,14,'ffffffffffffffff','fffffffffffff','ffffffffffffff',1,4,'ffffffff','ffffffff',0,0,0,'0000-00-00 00:00:00','2014-09-26 02:18:48','2014-09-26 02:18:48'),(15,15,'ffffffffffffffff','fffffffffffff','ffffffffffffff',1,3,'ffffffff','sdd',0,0,0,'0000-00-00 00:00:00','2014-09-26 02:21:19','2014-09-26 02:21:19'),(16,16,'','','',0,0,'','',0,0,0,'0000-00-00 00:00:00','2014-09-29 19:08:44','2014-09-29 19:08:44'),(17,17,'','','33333333',0,0,'','',0,0,0,'0000-00-00 00:00:00','2014-09-29 21:00:56','2014-09-29 21:00:56'),(18,18,'','','333',1,3,'4444444','dddddddddđ',0,0,0,'0000-00-00 00:00:00','2014-09-30 01:37:14','2014-09-30 01:37:14');
/*!40000 ALTER TABLE `profiles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `purchase_detail`
--

DROP TABLE IF EXISTS `purchase_detail`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
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
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `purchase_detail`
--

LOCK TABLES `purchase_detail` WRITE;
/*!40000 ALTER TABLE `purchase_detail` DISABLE KEYS */;
INSERT INTO `purchase_detail` VALUES (1,2,2,'2014-09-11 17:00:00','0000-00-00 00:00:00',0,'2014-09-11 18:46:39','2014-09-11 18:46:39','',6),(2,3,2,'2014-09-11 17:00:00','0000-00-00 00:00:00',0,'2014-09-11 20:40:42','2014-09-11 20:40:42','',6),(3,4,2,'2014-09-11 17:00:00','0000-00-00 00:00:00',0,'2014-09-11 20:49:39','2014-09-11 20:49:39','',6),(4,5,1,'2014-09-11 17:00:00','0000-00-00 00:00:00',0,'2014-09-11 20:53:39','2014-09-11 20:53:39','',5),(5,6,1,'2014-09-11 17:00:00','0000-00-00 00:00:00',0,'2014-09-11 20:54:51','2014-09-11 20:54:51','',6),(6,7,2,'2014-09-25 17:00:00','0000-00-00 00:00:00',0,'2014-09-11 20:56:47','2014-09-11 20:56:47','',6),(7,8,2,'2014-09-18 17:00:00','0000-00-00 00:00:00',0,'2014-09-11 20:59:01','2014-09-11 20:59:01','',6),(8,9,2,'2014-09-11 17:00:00','0000-00-00 00:00:00',0,'2014-09-11 20:59:31','2014-09-11 20:59:31','',6),(9,10,1,'2014-09-26 17:00:00','0000-00-00 00:00:00',0,'2014-09-26 20:17:56','2014-09-26 20:17:56','',3),(10,11,1,'2014-09-26 17:00:00','0000-00-00 00:00:00',0,'2014-09-26 20:18:49','2014-09-26 20:18:49','',6),(11,12,2,'2014-09-26 17:00:00','0000-00-00 00:00:00',0,'2014-09-26 20:19:04','2014-09-26 20:19:04','',1),(12,13,1,'2014-09-26 17:00:00','0000-00-00 00:00:00',0,'2014-09-26 20:38:25','2014-09-26 20:38:25','',5),(13,14,1,'2014-09-26 17:00:00','0000-00-00 00:00:00',0,'2014-09-26 20:45:33','2014-09-26 20:45:33','',7),(14,15,1,'2014-09-28 17:00:00','0000-00-00 00:00:00',0,'2014-09-29 01:09:18','2014-09-29 01:09:18','',3),(15,16,2,'2014-09-28 17:00:00','0000-00-00 00:00:00',0,'2014-09-29 03:27:36','2014-09-29 03:27:36','',4),(16,17,4,'2014-09-28 17:00:00','0000-00-00 00:00:00',0,'2014-09-29 03:27:59','2014-09-29 03:27:59','',12),(17,18,2,'2014-09-29 17:00:00','0000-00-00 00:00:00',0,'2014-09-29 19:50:02','2014-09-29 19:50:02','',24),(18,19,1,'2014-09-29 17:00:00','0000-00-00 00:00:00',0,'2014-09-29 19:52:12','2014-09-29 19:52:12','',6),(19,20,2,'2014-09-29 17:00:00','0000-00-00 00:00:00',0,'2014-09-29 19:59:08','2014-09-29 19:59:08','',6);
/*!40000 ALTER TABLE `purchase_detail` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `purchase_group_products`
--

DROP TABLE IF EXISTS `purchase_group_products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `purchase_group_products` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `description` text COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `purchase_group_products`
--

LOCK TABLES `purchase_group_products` WRITE;
/*!40000 ALTER TABLE `purchase_group_products` DISABLE KEYS */;
INSERT INTO `purchase_group_products` VALUES (1,'Default','','2014-09-09 01:43:51','2014-09-09 01:43:51'),(4,'Marketing','','2014-09-28 18:40:53','2014-09-28 18:40:53');
/*!40000 ALTER TABLE `purchase_group_products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `purchase_products`
--

DROP TABLE IF EXISTS `purchase_products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
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
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `purchase_products`
--

LOCK TABLES `purchase_products` WRITE;
/*!40000 ALTER TABLE `purchase_products` DISABLE KEYS */;
INSERT INTO `purchase_products` VALUES (1,'HRM','HUMAN RELATIONSHIP MANAGER',1,20000.00,0,0,1,'2014-09-10 19:46:08','2014-09-26 19:58:30'),(2,'CRM','',1,120.00,1,0,1,'2014-09-11 18:45:36','2014-09-11 18:45:36'),(4,'WHO','',1,32.00,0,0,1,'2014-09-28 18:41:38','2014-09-28 21:07:06');
/*!40000 ALTER TABLE `purchase_products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `purchases`
--

DROP TABLE IF EXISTS `purchases`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
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
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `purchases`
--

LOCK TABLES `purchases` WRITE;
/*!40000 ALTER TABLE `purchases` DISABLE KEYS */;
INSERT INTO `purchases` VALUES (10,1,2,'CRM10-CUSTOMER',0,'','ddddddddddddddđ','2014-09-26 20:17:56','2014-09-26 20:17:56'),(13,1,0,'CRM13-OTHER',0,'ffffff fa fa f','','2014-09-26 20:38:25','2014-09-26 20:38:25'),(14,1,2,'CRM14-CUSTOMER',0,'','','2014-09-26 20:45:33','2014-09-26 20:45:33'),(16,1,2,'CRM16-CUSTOMER',0,'','','2014-09-29 03:27:35','2014-09-29 03:27:36'),(17,1,12,'CRM17-CUSTOMER',0,'','','2014-09-29 03:27:58','2014-09-29 03:27:58'),(18,3,2,'CRM18-CUSTOMER',0,'','','2014-09-29 19:50:02','2014-09-29 19:50:02'),(19,3,2,'CRM19-CUSTOMER',0,'','','2014-09-29 19:52:12','2014-09-29 19:52:12'),(20,3,2,'CRM20-CUSTOMER',0,'','','2014-09-29 19:59:08','2014-09-29 19:59:08');
/*!40000 ALTER TABLE `purchases` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `races`
--

DROP TABLE IF EXISTS `races`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
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
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `races`
--

LOCK TABLES `races` WRITE;
/*!40000 ALTER TABLE `races` DISABLE KEYS */;
INSERT INTO `races` VALUES (1,'TK19-1','','happy',0,'','','2014-09-11 04:03:29','2014-09-11 04:03:29'),(2,'TK31-10','','happy',0,'','','2014-09-12 00:12:33','2014-09-12 00:12:33');
/*!40000 ALTER TABLE `races` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sector`
--

DROP TABLE IF EXISTS `sector`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sector` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `description` text COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sector`
--

LOCK TABLES `sector` WRITE;
/*!40000 ALTER TABLE `sector` DISABLE KEYS */;
INSERT INTO `sector` VALUES (1,'Common','sssssssssssss','2014-09-09 01:43:51','2014-09-26 03:10:41'),(2,'Bussiness','ddddddđ','2014-09-09 01:43:51','2014-09-10 22:02:32'),(10,'Common','sssssssssssss','2014-09-28 23:52:26','2014-09-28 23:52:26');
/*!40000 ALTER TABLE `sector` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `setting`
--

DROP TABLE IF EXISTS `setting`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `setting` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL DEFAULT '',
  `title` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `value` text COLLATE utf8_unicode_ci,
  `order` int(11) DEFAULT NULL,
  `type` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `setting`
--

LOCK TABLES `setting` WRITE;
/*!40000 ALTER TABLE `setting` DISABLE KEYS */;
INSERT INTO `setting` VALUES ('address','Address','Arabic',10,NULL),('debug','Debug (true/false)','false',3,NULL),('email_contact','E-mail contact','test@completermp.com',9,NULL),('facebook','Facebook','Facebook@f.com',12,NULL),('footer_text','Footer','DEVELOPMENT BY SFR',2,NULL),('google','Google','abc@google.com',14,NULL),('google_map','Google Map','location=vietnam@q=34',15,NULL),('host_email_admin','Email admin','ltt.develop@gmail.com',13,NULL),('host_encryption','Email Encryption','tls',6,NULL),('host_mail','Email Host','gator3228.hostgator.com',4,NULL),('host_password','Email Password','Xqi1llvM:nx8',8,NULL),('host_port','Email Port','587',5,NULL),('host_username','Email Username','abulayla',7,NULL),('phone','Phone','8-8-8-8',11,NULL),('site_name','Website Name','CRM',1,NULL),('twitter','Twitter','Twitter@tt.com',13,NULL);
/*!40000 ALTER TABLE `setting` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `status`
--

DROP TABLE IF EXISTS `status`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `status` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `status`
--

LOCK TABLES `status` WRITE;
/*!40000 ALTER TABLE `status` DISABLE KEYS */;
INSERT INTO `status` VALUES (1,'New','2014-09-09 01:43:48','2014-09-09 01:43:48'),(2,'In process','2014-09-09 01:43:48','2014-09-09 01:43:48'),(3,'Resolve','2014-09-09 01:43:48','2014-09-09 01:43:48'),(4,'Close','2014-09-09 01:43:48','2014-09-09 01:43:48');
/*!40000 ALTER TABLE `status` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `support_tickets`
--

DROP TABLE IF EXISTS `support_tickets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `support_tickets` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `ticket_id` varchar(11) COLLATE utf8_unicode_ci NOT NULL,
  `user_id` int(11) NOT NULL,
  `content` text COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=61 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `support_tickets`
--

LOCK TABLES `support_tickets` WRITE;
/*!40000 ALTER TABLE `support_tickets` DISABLE KEYS */;
INSERT INTO `support_tickets` VALUES (5,'TK4-2',2,'<p>jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj</p>\r\n','2014-09-10 18:58:00','2014-09-10 18:58:00'),(6,'TK5-2',2,'<p>uuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu</p>\r\n','2014-09-10 19:00:04','2014-09-10 19:00:04'),(7,'TK18-6',1,'<p>nhỏm &ocirc;ng nậu mi</p>\r\n','2014-09-10 22:06:56','2014-09-10 22:06:56'),(8,'TK18-6',6,'<p>Ăn shit đi m&agrave;y</p>\r\n','2014-09-11 01:21:10','2014-09-11 01:21:10'),(9,'TK21-7',5,'<p>tao sẽ l&agrave;m việc với m&agrave;y thế nh&eacute;</p>\r\n','2014-09-11 01:33:20','2014-09-11 01:33:20'),(10,'TK20-3',3,'<p>clct</p>\r\n','2014-09-11 01:33:26','2014-09-11 01:33:26'),(11,'TK20-3',3,'<p>&#39;;;;;;;;;;;;;;</p>\r\n','2014-09-11 01:33:55','2014-09-11 01:33:55'),(12,'TK21-7',7,'<p>M&agrave;y l&agrave; thằng n&agrave;o con cờ h&oacute; kia</p>\r\n','2014-09-11 01:35:15','2014-09-11 01:35:15'),(13,'TK21-7',1,'<p>cc m&agrave;y muốn g&igrave; , &nbsp; &nbsp;</p>\r\n\r\n<p><img alt=\"\" src=\"http://img2.blog.zdn.vn/491958http://img2.blog.zdn.vn/49195803.jpg03.jpg\" style=\"width: 225px; height: 225px;\" /> s</p>\r\n','2014-09-11 01:53:27','2014-09-11 01:53:27'),(14,'TK18-6',8,'<p>ch&agrave;o c&aacute;c đại ca</p>\r\n','2014-09-11 02:12:54','2014-09-11 02:12:54'),(15,'TK18-6',1,'<p>ddddddddddd&nbsp; &ocirc;ng bỏ t&ugrave; b&acirc;y giờ</p>\r\n','2014-09-11 03:31:42','2014-09-11 03:31:42'),(16,'TK22-1',2,'<p>ffffffffffffff</p>\r\n','2014-09-11 18:42:05','2014-09-11 18:42:05'),(17,'TK15-1',2,'<p><img alt=\"\" src=\"http://cdn-i.imagechef.com/ic/templimg2/Typewriter.jpg\" style=\"width: 400px; height: 400px;\" />sssssssssssss</p>\r\n','2014-09-11 19:24:12','2014-09-11 19:24:12'),(18,'TK15-1',1,'<p>sssssssssssssssss &nbsp;&nbsp;<img alt=\"\" src=\"http://t9.imagechef.com/ic/imgout/samp4e001d6748e63f74.jpg\" /></p>\r\n','2014-09-11 19:25:00','2014-09-11 19:25:00'),(19,'TK10-1',1,'sssssssssss','2014-09-11 19:35:39','2014-09-11 19:35:39'),(20,'TK25-7',1,'<p>ăn shit đi bạn <img alt=\"\" src=\"http://192.168.1.123:8000/asset/share/uploads/ticket/09-12-2014_AngryKid.gif\" /><img alt=\"\" src=\"http://192.168.1.123:8000/asset/share/uploads/ticket/09-12-2014_AngryKid.gif\" style=\"width: 86px; height: 100px; float: left;\" /></p>\r\n','2014-09-11 20:16:31','2014-09-11 20:16:31'),(21,'TK25-7',7,'<p>dai ca cua ca vung</p>\r\n\r\n<hr />\r\n<p>&nbsp;</p>\r\n','2014-09-11 20:18:26','2014-09-11 20:18:26'),(22,'TK25-7',7,'<p><img alt=\"\" src=\"http://192.168.1.123:8000/asset/share/uploads/ticket/09-12-2014_AngryKid.gif\" />được rồi dm bạn ha ha ha ha</p>\r\n','2014-09-11 20:31:05','2014-09-11 20:31:05'),(23,'TK25-7',1,'<p><img alt=\"\" src=\"http://3.bp.blogspot.com/-3uMxP4GZK74/UswwND989fI/AAAAAAAAFMo/rLoVHVlCi2Q/s1600/anh-dong-ban-chim.gif\" style=\"width: 240px; height: 320px;\" /></p>\r\n','2014-09-11 20:36:17','2014-09-11 20:36:17'),(24,'TK27-7',5,'<p>shit</p>\r\n','2014-09-11 21:20:38','2014-09-11 21:20:38'),(25,'TK27-7',7,'<p>con kẹc ta n&egrave;</p>\r\n','2014-09-11 21:21:12','2014-09-11 21:21:12'),(26,'TK30-10',1,'<p>fffffffffffffffffffffffff</p>\r\n','2014-09-11 23:48:41','2014-09-11 23:48:41'),(27,'TK30-10',1,'<p>fffffffffffff</p>\r\n','2014-09-11 23:50:03','2014-09-11 23:50:03'),(28,'TK30-10',1,'<p>ddddddddd</p>\r\n','2014-09-11 23:51:05','2014-09-11 23:51:05'),(29,'TK30-10',1,'<p>dddddddddd</p>\r\n','2014-09-11 23:52:09','2014-09-11 23:52:09'),(30,'TK30-10',1,'<p>dddddddddddd</p>\r\n','2014-09-11 23:54:25','2014-09-11 23:54:25'),(31,'TK30-10',1,'<p>ssssssssssssss</p>\r\n','2014-09-11 23:55:45','2014-09-11 23:55:45'),(35,'TK18-6',6,'<p>https://fbcdn-sphotos-g-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-9/10599310_839126306127004_9097091204114847520_n.jpg?oh=ef8e8bd67678b685ee0220dcf1b554d5&amp;oe=5489FABA&amp;__gda__=1419199499_cb80a50c5d53519b7deb8da54587152e</p>\r\n','2014-09-12 00:31:32','2014-09-12 00:31:32'),(36,'TK18-6',6,'<p><img alt=\"\" src=\"https://fbcdn-sphotos-g-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-9/10599310_839126306127004_9097091204114847520_n.jpg?oh=ef8e8bd67678b685ee0220dcf1b554d5&amp;oe=5489FABA&amp;__gda__=1419199499_cb80a50c5d53519b7deb8da54587152e\" style=\"width: 525px; height: 666px;\" /></p>\r\n','2014-09-12 00:31:43','2014-09-12 00:31:43'),(37,'TK18-6',1,'<p>cccccccccccccc</p>\r\n','2014-09-12 00:44:21','2014-09-12 00:44:21'),(38,'TK34-1',1,'<p>hhhhhhhhhhhhhhhhh</p>\r\n','2014-09-26 20:50:03','2014-09-26 20:50:03'),(39,'TK36-1',1,'<p>klllllllllllllllllllllll</p>\r\n','2014-09-26 20:54:18','2014-09-26 20:54:18'),(40,'TK36-1',1,'<p>hh</p>\r\n','2014-09-26 21:16:32','2014-09-26 21:16:32'),(41,'TK37-1',1,'<p>rrrrrrrrrrrr</p>\r\n','2014-09-26 21:31:25','2014-09-26 21:31:25'),(42,'TK39-1',1,'<p>77777777777777</p>\r\n','2014-09-28 19:50:06','2014-09-28 19:50:06'),(44,'TK33-9',3,'<p>t</p>\r\n','2014-09-29 02:14:34','2014-09-29 02:14:34'),(45,'TK33-9',9,'<p>ggggggggggggggggggg</p>\r\n','2014-09-29 03:52:47','2014-09-29 03:52:47'),(46,'TK37-1',1,'<p>fffffffff</p>\r\n','2014-09-29 04:04:26','2014-09-29 04:04:26'),(47,'TK37-1',1,'<p><span style=\"color: rgb(255, 255, 255); font-family: \'Open Sans\', sans-serif; line-height: 18.5714302062988px; background-color: rgb(61, 61, 61);\">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi vehicula sem ut volutpat. Ut non libero magna fusce condimentum eleifend enim a feugiat.</span></p>\r\n','2014-09-29 04:05:12','2014-09-29 04:05:12'),(48,'TK37-1',3,'<p>uuuuuuuuuuuuuuuuuuu</p>\r\n','2014-09-29 04:13:01','2014-09-29 04:13:01'),(49,'TK33-9',9,'<p>d</p>\r\n','2014-09-29 20:28:34','2014-09-29 20:28:34'),(50,'TK33-9',9,'<p>ddddđ</p>\r\n','2014-09-29 20:28:38','2014-09-29 20:28:38'),(51,'TK29-10',9,'<p>a</p>\r\n','2014-09-29 20:41:44','2014-09-29 20:41:44'),(52,'TK33-9',1,'<p>sssssssssss</p>\r\n','2014-09-30 03:52:26','2014-09-30 03:52:26'),(53,'TK40-1',1,'<p>dljkalsk djanfj</p>\r\n','2014-09-30 20:32:37','2014-09-30 20:32:37'),(54,'TK46-9',3,'<p>Ngu vl</p>\r\n','2014-10-01 04:21:02','2014-10-01 04:21:02'),(55,'TK46-9',9,'<p>dkm</p>\r\n','2014-10-01 04:21:56','2014-10-01 04:21:56'),(56,'TK47-9',1,'<p>&#39;&lt;div&gt;&lt;p&gt;Test paragraph.&lt;/p&gt;&lt;a href=&quot;#fragment&quot;&gt;Other text&#39;;</p>\r\n','2014-10-02 23:20:33','2014-10-02 23:20:33'),(57,'TK41-9',1,'<p>dc</p>\r\n','2014-10-03 03:38:50','2014-10-03 03:38:50'),(58,'TK41-9',1,'<p>dc</p>\r\n','2014-10-03 03:38:50','2014-10-03 03:38:50'),(59,'TK41-9',1,'<p>ddddddđ</p>\r\n','2014-10-03 03:39:01','2014-10-03 03:39:01'),(60,'TK41-9',1,'<p>tttttttttttttttttttttttttttt</p>\r\n','2014-10-03 03:39:15','2014-10-03 03:39:15');
/*!40000 ALTER TABLE `support_tickets` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `support_type`
--

DROP TABLE IF EXISTS `support_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `support_type` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `description` text COLLATE utf8_unicode_ci,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `support_type`
--

LOCK TABLES `support_type` WRITE;
/*!40000 ALTER TABLE `support_type` DISABLE KEYS */;
INSERT INTO `support_type` VALUES (1,'Cleaning problem','2014-09-09 01:43:50','2014-09-28 19:46:36',''),(2,'Utility services','2014-09-09 01:43:50','2014-09-09 01:43:50',NULL),(3,'Maintenance','2014-09-09 01:43:50','2014-09-09 01:43:50',NULL),(4,'Safe and Security','2014-09-09 01:43:50','2014-09-09 01:43:50',NULL);
/*!40000 ALTER TABLE `support_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ticket_activity`
--

DROP TABLE IF EXISTS `ticket_activity`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
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
) ENGINE=InnoDB AUTO_INCREMENT=117 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ticket_activity`
--

LOCK TABLES `ticket_activity` WRITE;
/*!40000 ALTER TABLE `ticket_activity` DISABLE KEYS */;
INSERT INTO `ticket_activity` VALUES (1,'TK1-1','Created','<b>SFR Default</b> Created the ticket','',1,'2014-09-09 01:47:01','2014-09-09 01:47:01'),(2,'TK1-1','Replied','<b>Staff 001</b> Replied the ticket','<p>ssssssssssssss</p>\r\n',3,'2014-09-09 01:47:39','2014-09-09 01:47:39'),(3,'TK1-1','Replied','<b> customer</b> Replied the ticket','<p>dddddddddddddd</p>\r\n',2,'2014-09-09 01:48:06','2014-09-09 01:48:06'),(4,'TK2-1','Created','<b>SFR Default</b> Created the ticket','',1,'2014-09-10 18:20:14','2014-09-10 18:20:14'),(5,'TK2-1','Replied','<b>SFR Default</b> Replied the ticket','<p>&aacute;dfafasdfasdfas</p>\r\n',1,'2014-09-10 18:38:47','2014-09-10 18:38:47'),(6,'TK3-2','Created','<b>Nguyen kim customer</b> Created the ticket','',2,'2014-09-10 18:52:37','2014-09-10 18:52:37'),(7,'TK4-2','Created','<b>Nguyen kim customer</b> Created the ticket','',2,'2014-09-10 18:53:11','2014-09-10 18:53:11'),(8,'TK4-2','Replied','<b> customer</b> Replied the ticket','<p>uuuuuuuuuuuu</p>\r\n',2,'2014-09-10 18:54:50','2014-09-10 18:54:50'),(9,'TK4-2','Replied','<b> customer</b> Replied the ticket','<p>jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj</p>\r\n',2,'2014-09-10 18:58:00','2014-09-10 18:58:00'),(10,'TK5-2','Created','<b>Nguyen kim customer</b> Created the ticket','',2,'2014-09-10 18:59:24','2014-09-10 18:59:24'),(11,'TK5-2','Replied','<b> customer</b> Replied the ticket','<p>uuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu</p>\r\n',2,'2014-09-10 19:00:04','2014-09-10 19:00:04'),(12,'TK9-6','Created','<b>Onizuka Eikichi</b> Created the ticket','',6,'2014-09-10 19:11:03','2014-09-10 19:11:03'),(13,'TK14-1','Created','<b>SFR Default</b> Created the ticket','',1,'2014-09-10 19:25:22','2014-09-10 19:25:22'),(14,'TK18-6','Created','<b>Onizuka Eikichi</b> Created the ticket','',6,'2014-09-10 19:58:02','2014-09-10 19:58:02'),(15,'TK19-1','Created','<b>SFR Default</b> Created the ticket','',1,'2014-09-10 21:01:54','2014-09-10 21:01:54'),(16,'TK18-6','Replied','<b>SFR Default</b> Replied the ticket','<p>nhỏm &ocirc;ng nậu mi</p>\r\n',1,'2014-09-10 22:06:56','2014-09-10 22:06:56'),(17,'TK18-6','Replied','<b> Eikichi</b> Replied the ticket','<p>Ăn shit đi m&agrave;y</p>\r\n',6,'2014-09-11 01:21:10','2014-09-11 01:21:10'),(18,'TK20-3','Created','<b>Staff 001</b> Created the ticket','',3,'2014-09-11 01:28:26','2014-09-11 01:28:26'),(19,'TK21-7','Created','<b>Anh Tuan</b> Created the ticket','',7,'2014-09-11 01:28:42','2014-09-11 01:28:42'),(20,'TK21-7','Updated','<b> Default</b> Updated the ticket','<i>Assign staff to</i> <b>  Anh Tuan  </b>',1,'2014-09-11 01:32:18','2014-09-11 01:32:18'),(21,'TK21-7','Replied','<b>Anh Tuan Nguyen</b> Replied the ticket','<p>tao sẽ l&agrave;m việc với m&agrave;y thế nh&eacute;</p>\r\n',5,'2014-09-11 01:33:20','2014-09-11 01:33:20'),(22,'TK20-3','Replied','<b>Staff 001</b> Replied the ticket','<p>clct</p>\r\n',3,'2014-09-11 01:33:26','2014-09-11 01:33:26'),(23,'TK20-3','Replied','<b>Staff 001</b> Replied the ticket','<p>&#39;;;;;;;;;;;;;;</p>\r\n',3,'2014-09-11 01:33:55','2014-09-11 01:33:55'),(24,'TK21-7','Replied','<b> Tuan</b> Replied the ticket','<p>M&agrave;y l&agrave; thằng n&agrave;o con cờ h&oacute; kia</p>\r\n',7,'2014-09-11 01:35:15','2014-09-11 01:35:15'),(25,'TK21-7','Replied','<b>SFR Default</b> Replied the ticket','<p>cc m&agrave;y muốn g&igrave; , &nbsp; &nbsp;</p>\r\n\r\n<p><img alt=\"\" src=\"http://img2.blog.zdn.vn/491958http://img2.blog.zdn.vn/49195803.jpg03.jpg\" style=\"width: 225px; height: 225px;\" /> s</p>\r\n',1,'2014-09-11 01:53:27','2014-09-11 01:53:27'),(26,'TK18-6','Replied','<b> Cuto</b> Replied the ticket','<p>ch&agrave;o c&aacute;c đại ca</p>\r\n',8,'2014-09-11 02:12:54','2014-09-11 02:12:54'),(27,'TK18-6','Replied','<b>SFR Default</b> Replied the ticket','<p>ddddddddddd&nbsp; &ocirc;ng bỏ t&ugrave; b&acirc;y giờ</p>\r\n',1,'2014-09-11 03:31:42','2014-09-11 03:31:42'),(28,'TK21-7','Updated','<b> Default</b> Updated the ticket','Change <i>status </i> <b>  In process </b> to <b> Resolve </b>',1,'2014-09-11 03:57:50','2014-09-11 03:57:50'),(29,'TK21-7','Updated','<b> Default</b> Closed the ticket','',1,'2014-09-11 03:57:54','2014-09-11 03:57:54'),(30,'TK19-1','Updated','<b> Default</b> Updated the ticket','Change <i>status </i> <b>  New </b> to <b> Resolve </b>',1,'2014-09-11 04:02:46','2014-09-11 04:02:46'),(31,'TK19-1','Updated','<b> Default</b> Closed the ticket','',1,'2014-09-11 04:02:51','2014-09-11 04:02:51'),(32,'TK22-1','Created','<b>SFR Default</b> Created the ticket','',1,'2014-09-11 18:39:37','2014-09-11 18:39:37'),(33,'TK22-1','Replied','<b> customer</b> Replied the ticket','<p>ffffffffffffff</p>\r\n',2,'2014-09-11 18:42:05','2014-09-11 18:42:05'),(34,'TK15-1','Replied','<b> customer</b> Replied the ticket','<p><img alt=\"\" src=\"http://cdn-i.imagechef.com/ic/templimg2/Typewriter.jpg\" style=\"width: 400px; height: 400px;\" />sssssssssssss</p>\r\n',2,'2014-09-11 19:24:12','2014-09-11 19:24:12'),(35,'TK15-1','Replied','<b>SFR Default</b> Replied the ticket','<p>sssssssssssssssss &nbsp;&nbsp;<img alt=\"\" src=\"http://t9.imagechef.com/ic/imgout/samp4e001d6748e63f74.jpg\" /></p>\r\n',1,'2014-09-11 19:25:00','2014-09-11 19:25:00'),(36,'TK10-1','Replied','<b>SFR Default</b> Replied the ticket','sssssssssss',1,'2014-09-11 19:35:39','2014-09-11 19:35:39'),(37,'TK23-7','Created','<b>Anh Tuan</b> Created the ticket','',7,'2014-09-11 20:02:52','2014-09-11 20:02:52'),(38,'TK24-7','Created','<b>Anh Tuan</b> Created the ticket','',7,'2014-09-11 20:03:03','2014-09-11 20:03:03'),(39,'TK25-7','Created','<b>Anh Tuan</b> Created the ticket','',7,'2014-09-11 20:05:11','2014-09-11 20:05:11'),(40,'TK25-7','Replied','<b>SFR Default</b> Replied the ticket','<p>ăn shit đi bạn <img alt=\"\" src=\"http://192.168.1.123:8000/asset/share/uploads/ticket/09-12-2014_AngryKid.gif\" /><img alt=\"\" src=\"http://192.168.1.123:8000/asset/share/uploads/ticket/09-12-2014_AngryKid.gif\" style=\"width: 86px; height: 100px; float: left;\" /></p>\r\n',1,'2014-09-11 20:16:31','2014-09-11 20:16:31'),(41,'TK25-7','Replied','<b> Tuan</b> Replied the ticket','<p>dai ca cua ca vung</p>\r\n\r\n<hr />\r\n<p>&nbsp;</p>\r\n',7,'2014-09-11 20:18:26','2014-09-11 20:18:26'),(42,'TK26-1','Created','<b>SFR Default</b> Created the ticket','',1,'2014-09-11 20:26:45','2014-09-11 20:26:45'),(43,'TK25-7','Replied','<b> Tuan</b> Replied the ticket','<p><img alt=\"\" src=\"http://192.168.1.123:8000/asset/share/uploads/ticket/09-12-2014_AngryKid.gif\" />được rồi dm bạn ha ha ha ha</p>\r\n',7,'2014-09-11 20:31:05','2014-09-11 20:31:05'),(44,'TK25-7','Replied','<b>SFR Default</b> Replied the ticket','<p><img alt=\"\" src=\"http://3.bp.blogspot.com/-3uMxP4GZK74/UswwND989fI/AAAAAAAAFMo/rLoVHVlCi2Q/s1600/anh-dong-ban-chim.gif\" style=\"width: 240px; height: 320px;\" /></p>\r\n',1,'2014-09-11 20:36:18','2014-09-11 20:36:18'),(45,'TK25-7','Updated','<b> Default</b> Updated the ticket','<i>Assign staff to</i> <b>  Anh Tuan  </b>',1,'2014-09-11 21:14:26','2014-09-11 21:14:26'),(46,'TK27-7','Created','<b>Anh Tuan</b> Created the ticket','',7,'2014-09-11 21:17:40','2014-09-11 21:17:40'),(47,'TK27-7','Updated','<b> Default</b> Updated the ticket','<i>Assign staff to</i> <b>  Anh Tuan  </b>',1,'2014-09-11 21:18:27','2014-09-11 21:18:27'),(48,'TK27-7','Updated','<b> Default</b> Updated the ticket','Change <i>status </i> <b>  New </b> to <b> In process </b>',1,'2014-09-11 21:18:27','2014-09-11 21:18:27'),(49,'TK27-7','Replied','<b>Anh Tuan Nguyen</b> Replied the ticket','<p>shit</p>\r\n',5,'2014-09-11 21:20:38','2014-09-11 21:20:38'),(50,'TK27-7','Replied','<b> Tuan</b> Replied the ticket','<p>con kẹc ta n&egrave;</p>\r\n',7,'2014-09-11 21:21:12','2014-09-11 21:21:12'),(51,'TK28-10','Created','<b>Hung William</b> Created the ticket','',10,'2014-09-11 23:37:46','2014-09-11 23:37:46'),(52,'TK29-10','Created','<b>Hung William</b> Created the ticket','',10,'2014-09-11 23:40:32','2014-09-11 23:40:32'),(53,'TK30-10','Created','<b>Hung William</b> Created the ticket','',10,'2014-09-11 23:43:32','2014-09-11 23:43:32'),(54,'TK30-10','Replied','<b>SFR Default</b> Replied the ticket','<p>fffffffffffffffffffffffff</p>\r\n',1,'2014-09-11 23:48:42','2014-09-11 23:48:42'),(55,'TK30-10','Replied','<b>SFR Default</b> Replied the ticket','<p>fffffffffffff</p>\r\n',1,'2014-09-11 23:50:03','2014-09-11 23:50:03'),(56,'TK30-10','Replied','<b>SFR Default</b> Replied the ticket','<p>ddddddddd</p>\r\n',1,'2014-09-11 23:51:05','2014-09-11 23:51:05'),(57,'TK30-10','Replied','<b>SFR Default</b> Replied the ticket','<p>dddddddddd</p>\r\n',1,'2014-09-11 23:52:09','2014-09-11 23:52:09'),(58,'TK30-10','Replied','<b>SFR Default</b> Replied the ticket','<p>dddddddddddd</p>\r\n',1,'2014-09-11 23:54:25','2014-09-11 23:54:25'),(59,'TK30-10','Replied','<b>SFR Default</b> Replied the ticket','<p>ssssssssssssss</p>\r\n',1,'2014-09-11 23:55:45','2014-09-11 23:55:45'),(60,'TK31-10','Created','<b>Hung William</b> Created the ticket','',10,'2014-09-11 23:56:31','2014-09-11 23:56:31'),(61,'TK31-10','Replied','<b> William</b> Replied the ticket','<p>s</p>\r\n',10,'2014-09-11 23:58:30','2014-09-11 23:58:30'),(62,'TK31-10','Replied','<b> William</b> Replied the ticket','<p>aaaaaaaaaaaaaaaaaaaaaaaa</p>\r\n',10,'2014-09-11 23:59:08','2014-09-11 23:59:08'),(63,'TK31-10','Replied','<b>SFR Default</b> Replied the ticket','<p>sssssssss</p>\r\n',1,'2014-09-11 23:59:47','2014-09-11 23:59:47'),(64,'TK31-10','Updated','<b> Default</b> Updated the ticket','Change <i>status </i> <b>  In process </b> to <b> Resolve </b>',1,'2014-09-12 00:07:54','2014-09-12 00:07:54'),(65,'TK31-10','Updated','<b> Default</b> Closed the ticket','',1,'2014-09-12 00:07:58','2014-09-12 00:07:58'),(66,'TK18-6','Replied','<b> Eikichi</b> Replied the ticket','<p>https://fbcdn-sphotos-g-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-9/10599310_839126306127004_9097091204114847520_n.jpg?oh=ef8e8bd67678b685ee0220dcf1b554d5&amp;oe=5489FABA&amp;__gda__=1419199499_cb80a50c5d53519b7deb8da54587152e</p>\r\n',6,'2014-09-12 00:31:32','2014-09-12 00:31:32'),(67,'TK18-6','Replied','<b> Eikichi</b> Replied the ticket','<p><img alt=\"\" src=\"https://fbcdn-sphotos-g-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-9/10599310_839126306127004_9097091204114847520_n.jpg?oh=ef8e8bd67678b685ee0220dcf1b554d5&amp;oe=5489FABA&amp;__gda__=1419199499_cb80a50c5d53519b7deb8da54587152e\" style=\"width: 525px; height: 666px;\" /></p>\r\n',6,'2014-09-12 00:31:43','2014-09-12 00:31:43'),(68,'TK18-6','Replied','<b>SFR Default</b> Replied the ticket','<p>cccccccccccccc</p>\r\n',1,'2014-09-12 00:44:21','2014-09-12 00:44:21'),(69,'TK31-10','Updated','<b>SFR Default</b> Closed the ticket','',1,'2014-09-25 00:51:42','2014-09-25 00:51:42'),(70,'TK32-1','Created','<b>SFR Default</b> Created the ticket','',1,'2014-09-25 01:23:42','2014-09-25 01:23:42'),(71,'TK33-9','Created','<b>Lương thanh truyền</b> Created the ticket','',9,'2014-09-25 01:57:58','2014-09-25 01:57:58'),(72,'TK33-9','Updated','<b>SFR Default</b> Updated the ticket','<i>Assign staff to</i> <b>  Staff  </b>',1,'2014-09-25 01:59:17','2014-09-25 01:59:17'),(73,'TK34-1','Created','<b>SFR Default</b> Created the ticket','',1,'2014-09-26 01:37:24','2014-09-26 01:37:24'),(74,'TK34-1','Updated','<b>SFR Default</b> Updated the ticket','<i>Assign staff to</i> <b>  Staff  </b>',1,'2014-09-26 04:26:32','2014-09-26 04:26:32'),(75,'TK34-1','Replied','<b>SFR Default</b> Replied the ticket','<p>hhhhhhhhhhhhhhhhh</p>\r\n',1,'2014-09-26 20:50:03','2014-09-26 20:50:03'),(76,'TK35-1','Created','<b>SFR Default</b> Created the ticket','',1,'2014-09-26 20:52:14','2014-09-26 20:52:14'),(77,'TK36-1','Created','<b>SFR Default</b> Created the ticket','',1,'2014-09-26 20:53:53','2014-09-26 20:53:53'),(78,'TK36-1','Replied','<b>SFR Default</b> Replied the ticket','<p>klllllllllllllllllllllll</p>\r\n',1,'2014-09-26 20:54:18','2014-09-26 20:54:18'),(79,'TK36-1','Replied','<b>SFR Default</b> Replied the ticket','<p>hh</p>\r\n',1,'2014-09-26 21:16:32','2014-09-26 21:16:32'),(80,'TK37-1','Created','<b>SFR Default</b> Created the ticket','',1,'2014-09-26 21:29:55','2014-09-26 21:29:55'),(81,'TK37-1','Replied','<b>SFR Default</b> Replied the ticket','<p>rrrrrrrrrrrr</p>\r\n',1,'2014-09-26 21:31:25','2014-09-26 21:31:25'),(82,'TK38-1','Created','<b>SFR Default</b> Created the ticket','',1,'2014-09-28 19:37:04','2014-09-28 19:37:04'),(83,'TK39-1','Created','<b>SFR Default</b> Created the ticket','',1,'2014-09-28 19:48:54','2014-09-28 19:48:54'),(84,'TK39-1','Replied','<b>SFR Default</b> Replied the ticket','<p>77777777777777</p>\r\n',1,'2014-09-28 19:50:06','2014-09-28 19:50:06'),(85,'TK35-1','Replied','<b>Staff 001</b> Replied the ticket','<p>d</p>\r\n',3,'2014-09-29 01:25:35','2014-09-29 01:25:35'),(86,'TK33-9','Replied','<b>Staff 001</b> Replied the ticket','<p>t</p>\r\n',3,'2014-09-29 02:14:34','2014-09-29 02:14:34'),(87,'TK35-1','Updated','<b>Staff 001</b> Updated the ticket','Change <i>status </i> <b>  In process </b> to <b> Resolve </b>',3,'2014-09-29 02:18:27','2014-09-29 02:18:27'),(88,'TK40-1','Created','<b>SFR Default</b> Created the ticket','',1,'2014-09-29 03:33:01','2014-09-29 03:33:01'),(89,'TK35-1','Updated','<b>SFR Default</b> Closed the ticket','',1,'2014-09-29 03:36:38','2014-09-29 03:36:38'),(90,'TK39-1','Updated','<b>SFR Default</b> Updated the ticket','Change <i>status </i> <b>  In process </b> to <b> Resolve </b>',1,'2014-09-29 03:41:17','2014-09-29 03:41:17'),(91,'TK33-9','Replied','<b>Lương thanh truyền</b> Replied the ticket','<p>ggggggggggggggggggg</p>\r\n',9,'2014-09-29 03:52:47','2014-09-29 03:52:47'),(92,'TK37-1','Replied','<b>SFR Default</b> Replied the ticket','<p>fffffffff</p>\r\n',1,'2014-09-29 04:04:26','2014-09-29 04:04:26'),(93,'TK37-1','Replied','<b>SFR Default</b> Replied the ticket','<p><span style=\"color: rgb(255, 255, 255); font-family: \'Open Sans\', sans-serif; line-height: 18.5714302062988px; background-color: rgb(61, 61, 61);\">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi vehicula sem ut volutpat. Ut non libero magna fusce condimentum eleifend enim a feugiat.</span></p>\r\n',1,'2014-09-29 04:05:12','2014-09-29 04:05:12'),(94,'TK37-1','Updated','<b>SFR Default</b> Updated the ticket','<i>Assign staff to</i> <b>  Staff  </b>',1,'2014-09-29 04:07:24','2014-09-29 04:07:24'),(95,'TK37-1','Replied','<b>Staff 001</b> Replied the ticket','<p>uuuuuuuuuuuuuuuuuuu</p>\r\n',3,'2014-09-29 04:13:01','2014-09-29 04:13:01'),(96,'TK40-1','Created','<b>SFR Default</b> Created the ticket','',1,'2014-09-29 18:37:12','2014-09-29 18:37:12'),(97,'TK33-9','Replied','<b>Lương thanh truyền</b> Replied the ticket','<p>d</p>\r\n',9,'2014-09-29 20:28:34','2014-09-29 20:28:34'),(98,'TK33-9','Replied','<b>Lương thanh truyền</b> Replied the ticket','<p>ddddđ</p>\r\n',9,'2014-09-29 20:28:38','2014-09-29 20:28:38'),(99,'TK29-10','Replied','<b>Lương thanh truyền</b> Replied the ticket','<p>a</p>\r\n',9,'2014-09-29 20:41:44','2014-09-29 20:41:44'),(100,'TK41-9','Created','<b>Lương thanh truyền</b> Created the ticket','',9,'2014-09-29 21:17:08','2014-09-29 21:17:08'),(101,'TK42-9','Created','<b>Lương thanh truyền</b> Created the ticket','',9,'2014-09-29 23:53:29','2014-09-29 23:53:29'),(102,'TK43-1','Created','<b>SFR Default</b> Created the ticket','',1,'2014-09-30 01:12:58','2014-09-30 01:12:58'),(103,'TK44-1','Created','<b>SFR Default</b> Created the ticket','',1,'2014-09-30 01:14:41','2014-09-30 01:14:41'),(104,'TK33-9','Replied','<b>SFR Default</b> Replied the ticket','<p>sssssssssss</p>\r\n',1,'2014-09-30 03:52:26','2014-09-30 03:52:26'),(105,'TK40-1','Replied','<b>SFR Default</b> Replied the ticket','<p>dljkalsk djanfj</p>\r\n',1,'2014-09-30 20:32:37','2014-09-30 20:32:37'),(106,'TK45-9','Created','<b>Lương thanh truyền</b> Created the ticket','',9,'2014-10-01 04:18:12','2014-10-01 04:18:12'),(107,'TK46-9','Created','<b>Lương thanh truyền</b> Created the ticket','',9,'2014-10-01 04:19:29','2014-10-01 04:19:29'),(108,'TK46-9','Updated','<b>SFR Default</b> Updated the ticket','<i>Assign staff to</i> <b>  Staff  </b>',1,'2014-10-01 04:20:14','2014-10-01 04:20:14'),(109,'TK46-9','Replied','<b>Staff 001</b> Replied the ticket','<p>Ngu vl</p>\r\n',3,'2014-10-01 04:21:02','2014-10-01 04:21:02'),(110,'TK46-9','Replied','<b>Lương thanh truyền</b> Replied the ticket','<p>dkm</p>\r\n',9,'2014-10-01 04:21:57','2014-10-01 04:21:57'),(111,'TK47-9','Created','<b>Lương thanh truyền</b> Created the ticket','',9,'2014-10-02 21:45:04','2014-10-02 21:45:04'),(112,'TK47-9','Replied','<b>SFR Default</b> Replied the ticket','<p>&#39;&lt;div&gt;&lt;p&gt;Test paragraph.&lt;/p&gt;&lt;a href=&quot;#fragment&quot;&gt;Other text&#39;;</p>\r\n',1,'2014-10-02 23:20:33','2014-10-02 23:20:33'),(113,'TK41-9','Replied','<b>SFR Default</b> Replied the ticket','<p>dc</p>\r\n',1,'2014-10-03 03:38:50','2014-10-03 03:38:50'),(114,'TK41-9','Replied','<b>SFR Default</b> Replied the ticket','<p>dc</p>\r\n',1,'2014-10-03 03:38:50','2014-10-03 03:38:50'),(115,'TK41-9','Replied','<b>SFR Default</b> Replied the ticket','<p>ddddddđ</p>\r\n',1,'2014-10-03 03:39:01','2014-10-03 03:39:01'),(116,'TK41-9','Replied','<b>SFR Default</b> Replied the ticket','<p>tttttttttttttttttttttttttttt</p>\r\n',1,'2014-10-03 03:39:15','2014-10-03 03:39:15');
/*!40000 ALTER TABLE `ticket_activity` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tickets`
--

DROP TABLE IF EXISTS `tickets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
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
) ENGINE=InnoDB AUTO_INCREMENT=48 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tickets`
--

LOCK TABLES `tickets` WRITE;
/*!40000 ALTER TABLE `tickets` DISABLE KEYS */;
INSERT INTO `tickets` VALUES (1,'TK1-1',2,3,'tttttttttttttttttt','<p>tttttttttttttttttttttttt</p>\r\n',1,'nomal',2,'2014-08-09 01:47:01','2014-09-09 01:47:39',1,'0000-00-00 00:00:00','0000-00-00 00:00:00',0,0),(2,'TK2-1',2,5,'i felling tired','<p>i want kaj;fkj ;ljal f</p>\r\n',1,'nomal',2,'2014-09-10 18:20:14','2014-09-10 18:38:47',1,'0000-00-00 00:00:00','0000-00-00 00:00:00',0,0),(3,'TK3-2',2,0,'sssssssssssssssssssssssss','<p>sssssssssssssssssssss</p>\r\n',1,'nomal',1,'2014-09-10 18:52:37','2014-09-10 18:52:37',2,'0000-00-00 00:00:00','0000-00-00 00:00:00',0,0),(4,'TK4-2',2,0,'77777777777777','<p>7777777777777777777777777</p>\r\n',1,'nomal',2,'2014-09-10 18:53:11','2014-09-10 18:54:50',2,'0000-00-00 00:00:00','0000-00-00 00:00:00',0,0),(5,'TK5-2',2,0,'good morning cu Tuan','<p>sssssssssssssssssssssssssssssssss</p>\r\n',1,'nomal',2,'2014-09-10 18:59:24','2014-09-10 19:00:04',2,'0000-00-00 00:00:00','0000-00-00 00:00:00',0,0),(6,'TK6-6',6,0,'truyen oi la truyen','<p>dm doi nay anh khong lam thi em lam cho nhe</p>\r\n',2,'hight',1,'2014-09-10 19:09:41','2014-09-10 19:09:41',6,'0000-00-00 00:00:00','0000-00-00 00:00:00',0,0),(7,'TK7-6',6,0,'truyen oi la truyen','<p>dm doi nay anh khong lam thi em lam cho nhe</p>\r\n',2,'hight',1,'2014-09-10 19:10:07','2014-09-10 19:10:07',6,'0000-00-00 00:00:00','0000-00-00 00:00:00',0,0),(8,'TK8-6',6,0,'truyen oi la truyen','<p>dm doi nay anh khong lam thi em lam cho nhe</p>\r\n',2,'hight',1,'2014-09-10 19:10:16','2014-09-10 19:10:16',6,'0000-00-00 00:00:00','0000-00-00 00:00:00',0,0),(9,'TK9-6',6,0,'truyen oi la truyen','<p>a b c d e f g h&nbsp;</p>\r\n',2,'hight',1,'2014-09-10 19:11:03','2014-09-10 19:11:03',6,'0000-00-00 00:00:00','0000-00-00 00:00:00',0,0),(10,'TK10-1',2,5,'uiuiuiuiuiuiuiuiuiuiuiuiui','<p>yyyyyyyyyyyyyyyyyyyy</p>\r\n',1,'nomal',2,'2014-09-10 19:16:40','2014-09-11 19:35:39',1,'0000-00-00 00:00:00','0000-00-00 00:00:00',0,0),(11,'TK11-1',2,5,'uiuiuiuiuiuiuiuiuiuiuiuiuiasd asd sd a','<p>yyyyyyyyyyyyyyyyyyyy đ&aacute; d&aacute; đsd</p>\r\n',1,'nomal',1,'2014-09-10 19:18:09','2014-09-10 19:18:10',1,'0000-00-00 00:00:00','0000-00-00 00:00:00',0,0),(12,'TK12-1',2,5,'uiuiuiuiuiuiuiuiuiuiuiuiuiasd asd sd a','<p>yyyyyyyyyyyyyyyyyyyy đ&aacute; d&aacute; đsd</p>\r\n',1,'nomal',1,'2014-09-10 19:19:05','2014-09-10 19:19:05',1,'0000-00-00 00:00:00','0000-00-00 00:00:00',0,0),(13,'TK13-1',2,5,'sssssssssssssssssssss','<p>ssssssssssssssssssssssssssssssssss</p>\r\n',1,'nomal',1,'2014-09-10 19:24:51','2014-09-10 19:24:51',1,'0000-00-00 00:00:00','0000-00-00 00:00:00',0,0),(14,'TK14-1',2,5,'sssssssssssssssssssss','<p>ssssssssssssssssssssssssssssssssss</p>\r\n',1,'nomal',1,'2014-09-10 19:25:22','2014-09-10 19:25:22',1,'0000-00-00 00:00:00','0000-00-00 00:00:00',0,0),(15,'TK15-1',2,5,'sssssssssssss','<p>sssssssssssssssss</p>\r\n',1,'nomal',2,'2014-09-10 19:25:43','2014-09-11 19:24:12',1,'0000-00-00 00:00:00','0000-00-00 00:00:00',0,0),(16,'TK16-1',2,5,'sssssssssssss','<p>sssssssssssssssss</p>\r\n',1,'nomal',1,'2014-09-10 19:33:21','2014-09-10 19:33:21',1,'0000-00-00 00:00:00','0000-00-00 00:00:00',0,0),(17,'TK17-1',2,5,'wwwwwwwwwwwwwwwwwwwwwwwwwwww','<p>wwwwwwwwwwwwwwwwwwwwwwwwww</p>\r\n',1,'nomal',1,'2014-09-10 19:38:56','2014-09-10 19:38:56',1,'0000-00-00 00:00:00','0000-00-00 00:00:00',0,0),(18,'TK18-6',6,0,'truyen oi cai project nay nham qua','<p>truyen an shit</p>\r\n',2,'hight',2,'2014-09-10 19:58:01','2014-09-10 22:06:56',6,'0000-00-00 00:00:00','0000-00-00 00:00:00',0,0),(19,'TK19-1',2,5,'jjjjjjjjjjjjjjjjjjjjjjjj','<p>jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj</p>\r\n',1,'nomal',3,'2014-09-10 21:01:54','2014-09-11 04:02:51',1,'2014-09-11 04:02:47','2014-09-11 04:02:47',1,0),(20,'TK20-3',2,3,'ggggggggggg','<p>gggggggggggggggg</p>\r\n',1,'nomal',2,'2014-09-11 01:28:26','2014-09-11 01:33:26',3,'0000-00-00 00:00:00','0000-00-00 00:00:00',0,0),(21,'TK21-7',7,5,'thang truyen xau trai','<p>thang hung xau gai</p>\r\n',2,'hight',3,'2014-09-11 01:28:42','2014-09-11 03:57:54',7,'2014-09-11 03:57:50','2014-09-11 03:57:50',1,0),(22,'TK22-1',2,3,'ttttttttttttttt','<p>tttttttttttttttttttttttttt</p>\r\n',1,'nomal',2,'2014-09-11 18:39:37','2014-09-11 18:42:05',1,'0000-00-00 00:00:00','0000-00-00 00:00:00',0,0),(23,'TK23-7',7,0,'Ticket la clgt?','<p>truyền ăn shit của tuấn</p>\r\n',2,'hight',1,'2014-09-11 20:02:52','2014-09-11 20:02:52',7,'0000-00-00 00:00:00','0000-00-00 00:00:00',0,0),(24,'TK24-7',7,0,'Ticket la clgt?','<p>truyền ăn shit của tuấn</p>\r\n',3,'nomal',1,'2014-09-11 20:03:03','2014-09-11 20:03:03',7,'0000-00-00 00:00:00','0000-00-00 00:00:00',0,0),(25,'TK25-7',7,5,'test one clich create a ticket','<p>if have tow ticket false, else true</p>\r\n',2,'hight',2,'2014-09-11 20:05:11','2014-09-11 21:14:26',7,'0000-00-00 00:00:00','0000-00-00 00:00:00',0,0),(26,'TK26-1',2,5,'New ticket','<p><span style=\"color: rgb(60, 118, 61); font-family: \'Open Sans\', Arial, sans-serif; line-height: 18.5714302062988px; background-color: rgb(223, 240, 216);\">New ticketNew ticketNew ticketNew ticketNew ticket</span></p>\r\n',1,'nomal',1,'2014-09-11 20:26:45','2014-09-11 20:26:45',1,'0000-00-00 00:00:00','0000-00-00 00:00:00',0,0),(27,'TK27-7',7,5,'Truyen yeu ha tester','<p>Hot hot qua chi la hot</p>\r\n',1,'nomal',2,'2014-09-11 21:17:40','2014-09-11 21:18:27',7,'0000-00-00 00:00:00','0000-00-00 00:00:00',0,0),(28,'TK28-10',9,0,'Test ticket by thanhtruyen admin','<p>please give a litte money</p>\r\n',2,'urgent',1,'2014-09-11 23:37:46','2014-09-11 23:37:46',10,'0000-00-00 00:00:00','0000-00-00 00:00:00',0,0),(29,'TK29-10',9,0,'Test ticket by thanhtruyen admin','<p>please give me a litte&nbsp;</p>\r\n',3,'hight',2,'2014-09-11 23:40:32','2014-09-29 20:41:44',10,'0000-00-00 00:00:00','0000-00-00 00:00:00',0,0),(30,'TK30-10',9,0,'Test ticket by thanhtruyen admin','<p>ssssssssssssssssssss</p>\r\n',4,'urgent',2,'2014-09-11 23:43:32','2014-09-11 23:48:42',10,'0000-00-00 00:00:00','0000-00-00 00:00:00',0,0),(32,'TK32-1',2,5,'ooooooooooooo','ooooooooooooooooooooooooooooooo',1,'nomal',1,'2014-09-25 01:23:42','2014-09-25 01:23:42',1,'0000-00-00 00:00:00','0000-00-00 00:00:00',0,0),(33,'TK33-9',9,3,'tssssssssss','<p>ssssssssssssssssssssssssssss</p>\r\n',1,'nomal',2,'2014-09-25 01:57:58','2014-09-29 02:14:34',9,'0000-00-00 00:00:00','0000-00-00 00:00:00',0,0),(34,'TK34-1',2,3,'sssssssss','ssssssssssssss',1,'hight',2,'2014-09-26 01:37:24','2014-09-26 20:50:03',1,'0000-00-00 00:00:00','0000-00-00 00:00:00',0,0),(36,'TK36-1',2,5,'ddđdđ','<p>dddddddddddddđ</p>\r\n',1,'nomal',2,'2014-09-26 20:53:53','2014-09-26 20:54:18',1,'0000-00-00 00:00:00','0000-00-00 00:00:00',0,0),(37,'TK37-1',2,3,'ssssssss','<p>sssssssssssssssss</p>\r\n',1,'nomal',2,'2014-09-26 21:29:55','2014-09-29 04:07:24',1,'0000-00-00 00:00:00','0000-00-00 00:00:00',0,0),(38,'TK38-1',2,5,'trdddd','<p>ffffffffffff</p>\r\n',1,'nomal',1,'2014-09-28 19:37:04','2014-09-28 19:37:04',1,'0000-00-00 00:00:00','0000-00-00 00:00:00',0,0),(39,'TK39-1',2,5,'uuuuuuuuuu','<p>uuuuuuuuuuuuu</p>\r\n',1,'nomal',3,'2014-09-28 19:48:54','2014-09-29 03:41:17',1,'2014-09-29 03:41:17','0000-00-00 00:00:00',0,0),(40,'TK40-1',2,5,'=======ư','<p>]]]]]]]]]]]]</p>\r\n',1,'nomal',2,'2014-09-29 18:37:12','2014-09-30 20:32:37',1,'0000-00-00 00:00:00','0000-00-00 00:00:00',0,0),(41,'TK41-9',9,0,'ffffffffffffffffffffff','<p>ffffff</p>\r\n',1,'nomal',2,'2014-09-29 21:17:08','2014-10-03 03:38:50',9,'0000-00-00 00:00:00','0000-00-00 00:00:00',0,0),(42,'TK42-9',9,0,'Tdddddđ','<p>ddddddđ</p>\r\n',1,'nomal',1,'2014-09-29 23:53:28','2014-09-29 23:53:29',9,'0000-00-00 00:00:00','0000-00-00 00:00:00',0,0),(43,'TK43-1',2,3,'ccccccccc','<p>ccccccccccccccccc</p>\r\n',1,'nomal',1,'2014-09-30 01:12:58','2014-09-30 01:12:58',1,'0000-00-00 00:00:00','0000-00-00 00:00:00',0,0),(44,'TK44-1',2,3,'ccccccccc','<p>ccccccccccccccccc</p>\r\n',1,'nomal',1,'2014-09-30 01:14:41','2014-09-30 01:14:41',1,'0000-00-00 00:00:00','0000-00-00 00:00:00',0,0),(45,'TK45-9',9,0,'mickekjlk','<p>jkljfkljkldfjlkdjfkljsdlf</p>\r\n',1,'nomal',1,'2014-10-01 04:18:11','2014-10-01 04:18:11',9,'0000-00-00 00:00:00','0000-00-00 00:00:00',0,0),(46,'TK46-9',9,3,'mickekjlk','<p>jkljfkljkldfjlkdjfkljsdlf</p>\r\n',1,'nomal',2,'2014-10-01 04:19:29','2014-10-01 04:21:02',9,'0000-00-00 00:00:00','0000-00-00 00:00:00',0,0),(47,'TK47-9',9,0,'kl\\\\\\\\\\\\\\\\','<p>\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\</p>\r\n',2,'hight',2,'2014-10-02 21:45:04','2014-10-02 23:20:33',9,'0000-00-00 00:00:00','0000-00-00 00:00:00',0,0);
/*!40000 ALTER TABLE `tickets` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `uploads`
--

DROP TABLE IF EXISTS `uploads`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
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
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `uploads`
--

LOCK TABLES `uploads` WRITE;
/*!40000 ALTER TABLE `uploads` DISABLE KEYS */;
INSERT INTO `uploads` VALUES (1,'09-09-2014_Facepalm-1.gif','asset/share/uploads/images/personal/09-09-2014_Facepalm-1.gif','image/gif','','image','','2014-09-09 02:42:01','2014-09-09 02:42:01',NULL,6),(2,'09-11-2014_934759_746043042126719_6994068541971541974_n.jpg','asset/share/uploads/ticket/09-11-2014_934759_746043042126719_6994068541971541974_n.jpg','image/jpeg','','ticket','TK4-2','2014-09-10 18:53:11','2014-09-10 18:53:11',NULL,NULL),(3,'09-11-2014_10559779_10152276062618525_8116249068943288011_n.jpg','asset/share/uploads/ticket/09-11-2014_10559779_10152276062618525_8116249068943288011_n.jpg','image/jpeg','','ticket','TK5-2','2014-09-10 18:59:24','2014-09-10 18:59:24',NULL,NULL),(4,'09-11-2014_010llisallindsay.gif','asset/share/uploads/ticket/09-11-2014_010llisallindsay.gif','image/gif','','ticket','TK9-6','2014-09-10 19:11:03','2014-09-10 19:11:03',NULL,NULL),(5,'09-11-2014_20142390288e-dc39-4f04-96b7-d71e3b10ef10.gif','asset/share/uploads/ticket/09-11-2014_20142390288e-dc39-4f04-96b7-d71e3b10ef10.gif','image/gif','','ticket','TK18-6','2014-09-10 19:58:02','2014-09-10 19:58:02',NULL,NULL),(6,'09-11-2014_AngryKid.gif','asset/share/uploads/ticket/09-11-2014_AngryKid.gif','image/gif','','ticket','TK21-7','2014-09-11 01:28:42','2014-09-11 01:28:42',NULL,NULL),(7,'09-12-2014_10011186_698268453555779_4273170521825775242_n.jpg','asset/share/uploads/images/personal/09-12-2014_10011186_698268453555779_4273170521825775242_n.jpg','image/jpeg','','image','','2014-09-11 19:14:11','2014-09-11 19:14:11',NULL,10),(8,'09-12-2014_tomqua.gif','asset/share/uploads/ticket/09-12-2014_tomqua.gif','image/gif','','ticket','TK23-7','2014-09-11 20:02:52','2014-09-11 20:02:52',NULL,NULL),(9,'09-12-2014_tomqua.gif','asset/share/uploads/ticket/09-12-2014_tomqua.gif','image/gif','','ticket','TK24-7','2014-09-11 20:03:03','2014-09-11 20:03:03',NULL,NULL),(10,'09-12-2014_AngryKid.gif','asset/share/uploads/ticket/09-12-2014_AngryKid.gif','image/gif','','ticket','TK25-7','2014-09-11 20:05:11','2014-09-11 20:05:11',NULL,NULL),(11,'09-12-2014_01641.gif','asset/share/uploads/ticket/09-12-2014_01641.gif','image/gif','','ticket','TK27-7','2014-09-11 21:17:40','2014-09-11 21:17:40',NULL,NULL),(12,'09-26-2014_programming.jpg','asset/share/uploads/images/personal/09-26-2014_programming.jpg','image/jpeg','','image','','2014-09-26 00:56:45','2014-09-26 00:56:45',NULL,NULL),(13,'09-26-2014_Tulips.jpg','asset/share/uploads/ticket/09-26-2014_Tulips.jpg','image/jpeg','','ticket','TK34-1','2014-09-26 01:37:24','2014-09-26 01:37:24',NULL,NULL),(14,'09-27-2014_imagdes.jpg','asset/share/uploads/ticket/09-27-2014_imagdes.jpg','image/jpeg','','ticket','TK35-1','2014-09-26 20:52:14','2014-09-26 20:52:14',NULL,NULL),(15,'09-27-2014_Penguins.jpg','asset/share/uploads/ticket/09-27-2014_Penguins.jpg','image/jpeg','','ticket','TK37-1','2014-09-26 21:29:55','2014-09-26 21:29:55',NULL,NULL),(16,'09-29-2014_Koala.jpg','asset/share/uploads/images/personal/09-29-2014_Koala.jpg','image/jpeg','','image','','2014-09-28 21:33:40','2014-09-28 21:33:40',NULL,1),(17,'09-29-2014_Lighthouse.jpg','asset/share/uploads/images/personal/09-29-2014_Lighthouse.jpg','image/jpeg','','image','','2014-09-29 03:54:29','2014-09-29 03:54:29',NULL,9),(18,'09-30-2014_44.png','asset/share/uploads/resource/09-30-2014_44.png','image/png','','document','','2014-09-30 02:30:45','2014-09-30 02:30:45',9,NULL),(19,'09-30-2014_Desert.jpg','asset/share/uploads/resource/09-30-2014_Desert.jpg','image/jpeg','','document','','2014-09-30 02:32:22','2014-09-30 02:32:22',9,NULL),(20,'10-01-2014_Note_dotNet.docx','asset/share/uploads/ticket/10-01-2014_Note_dotNet.docx','application/vnd.openxmlformats-officedocument.wordprocessingml.document','','ticket','TK45-9','2014-10-01 04:18:12','2014-10-01 04:18:12',NULL,NULL),(21,'10-01-2014_Note_dotNet.docx','asset/share/uploads/ticket/10-01-2014_Note_dotNet.docx','application/vnd.openxmlformats-officedocument.wordprocessingml.document','','ticket','TK46-9','2014-10-01 04:19:29','2014-10-01 04:19:29',NULL,NULL),(22,'10-01-2014_facebook-cong-bo-cac-khu-vuc-an-like-khoe-nhat-the-gioi.jpg','asset/share/uploads/images/personal/10-01-2014_facebook-cong-bo-cac-khu-vuc-an-like-khoe-nhat-the-gioi.jpg','image/jpeg','','image','','2014-10-01 04:21:23','2014-10-01 04:21:23',NULL,3);
/*!40000 ALTER TABLE `uploads` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
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
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'manager@email.com','$2y$10$QGY61WD2t4y6EtT5BlgTPezrb/omLR/mKrmLboDxVt3q0259BNQqu',1,1,'DAEAfLuNLvmN8MOz4hVH4cemAJ1gRhGcNlTTrVkYZFU1tj0TB7jmKLFAokBB',0,0,0,0,'SFR','Default',92,'','luong@email.com','2014-11-28 00:58:03','192.168.1.110',15,'','asset/share/uploads/images/personal/09-29-2014_Koala.jpg',0,'2014-09-09 01:43:47','2014-11-28 00:58:03'),(2,'customer01@gmail.com','$2y$10$QGY61WD2t4y6EtT5BlgTPezrb/omLR/mKrmLboDxVt3q0259BNQqu',3,1,'BtEtqcsFxlLhSf627JScxjcPsecEAQXMq0pTyMIL4GzDL567Fbxb0R9EtcuL',1,0,0,0,'Nguyen kim','customer',8,'3189b93f88e7f00336ca1135873ccf60','','2014-09-11 20:20:09','192.168.1.123',15,'','',0,'2014-09-09 01:45:12','2014-09-11 20:30:04'),(3,'staff01@gmail.com','$2y$10$5oJ/08NfR/JefbrxdqxMH.eCknlTVhRhbulyMGlHBHS3xlp1c4Whu',2,1,'Qd0EHe9Ra0XA7NqEcaw7nDPk6l2ufULNZFYq6SF1nvkk2mfGUT2IxJfQLww5',1,0,0,0,'Staff','001',13,'f040c13172481a9d60aab68619ca3430','','2014-10-01 04:20:22','::1',15,'','asset/share/uploads/images/personal/10-01-2014_facebook-cong-bo-cac-khu-vuc-an-like-khoe-nhat-the-gioi.jpg',0,'2014-09-09 01:46:42','2014-10-01 04:21:40'),(5,'nguyen.anh.tuan.241@gmail.com','$2y$10$xo.UyC9Dak0eDgsoZcs2Je9myV/5Coi/j4Ih6rQaZ86T5AXuJ53ja',2,1,'QSUspjuBargHKSHz3qqAgpoehd8Qj2BbESdVw7qy4g21UNnpVtStYE4srbLa',1,0,0,0,'Anh Tuan','Nguyen',11,'c4827eaa4e752a7716ec0b0a8c3e6060','','2014-09-12 00:48:22','192.168.1.105',15,'','',0,'2014-09-09 02:35:33','2014-09-12 00:48:45'),(6,'tuan.rambo.01@gmail.com','$2y$10$nYuE5GqDu7eJYFgxI3O/p.BAClxvxeAd.U3Zif.N9MS9v68dViAly',3,1,'bvacurDyaTEuSRma1ziF9QH4LGc3dvqmrC1MRqo5zTjuXXINeltpZlLWldg4',0,5,0,0,'Onizuka','Eikichi',9,'c11ac31e5104d75efa1a01ee228b79f9','','2014-09-12 00:48:53','192.168.1.105',15,'','asset/share/uploads/images/personal/09-26-2014_programming.jpg',0,'2014-09-09 02:38:11','2014-09-12 00:48:53'),(7,'tuan.rambo.03@gmail.com','$2y$10$e11ayFQBshk8Syu0HxLlOe8SQIY9x3opxg2uVaLmC3AKvHM3Cri1y',3,1,'l474vn6QNQ1EuHbYnzTZvVJDDoYwT09GiiCwCk5RvaW52Jd6ngEBxUnXkAhH',0,0,0,0,'Anh','Tuan',6,'0b9105a5851f9ed5f9bfc19040e2dc29','','2014-09-12 00:47:37','192.168.1.105',15,'','',0,'2014-09-09 19:26:16','2014-09-12 00:48:12'),(8,'tuan.rambo.04@gmail.com','$2y$10$.0Rcxh7Cd9fsG6mbdrIBneTRn8RVtyYFiS0lgdMhZfqCTYB2v1fwm',4,1,'ycdIt8LcAxam8Cy3WGkpGWZ4vdcTuuCBy6WiAElyosyNF70mxNqvOF6cCZ0R',0,0,6,0,'Truyen Cuto','Cuto',2,'a0db89107a6f211b726da5f3d109705b','','2014-09-12 00:29:44','192.168.1.105',15,'','',0,'2014-09-11 02:02:19','2014-09-12 00:29:54'),(9,'taikhoanlive102@outlook.com.vn','$2y$10$iJdgR5XvVqL/oThJkt1o9.PrjIiklBkQrPtK/eVVzssr7xzM5b7uK',3,1,'zi1U7VqtdFmAymldVxHvVqgqlhIyGwA2SLHjflJgko3P3f8Et6PpEINIrzEu',0,0,0,0,'Lương','thanh truyền',17,'f61e6be02634cf8682113744badea4f1','','2014-10-03 01:48:47','::1',15,'','asset/share/uploads/images/personal/09-29-2014_Lighthouse.jpg',0,'2014-09-11 19:09:34','2014-10-03 01:54:53'),(10,'taikhoanlive100@outlook.com.vn','$2y$10$/kXauF8.XdJFwmsHXl2l9O65YuRDbmpJN0h4kwuc1GBGlxZxTjkEe',4,1,'5P3sAfqn9nidc0zabRrHSQo1aPka2568wOjgHz3UKD4Hd9HYnB2dmnRefB8e',0,0,9,0,'Hung','William',5,'90d54d434c8e5ed3927b9652854cdedc','','2014-09-30 02:46:30','::1',15,'','asset/share/uploads/images/personal/09-26-2014_programming.jpg',0,'2014-09-11 19:12:56','2014-09-30 03:08:27'),(12,'dsji@gmail.com','$2y$10$7s3FHj2jNnCRFoDkCsZjG.UHTz6ok66znc5PfUQYmAqVsF/wkB0qy',3,1,NULL,1,0,0,0,'truyen','luong',0,'90aefb1289004d41416c15f24460ae9a','','0000-00-00 00:00:00','::1',15,'','',0,'2014-09-26 00:18:38','2014-09-26 00:18:38'),(13,'ssssss@s.com','$2y$10$E60L1K.j.iEZY0jR2P3YiOpVjL1/dFA.9jicw6l4BHRWnBxE9yxGW',1,1,NULL,1,0,0,0,'ouhhi','huhuihui',0,'7773953df9e1e7a280695151bb2d4483','','0000-00-00 00:00:00','::1',15,'','asset/share/uploads/images/personal/09-26-2014_programming.jpg',0,'2014-09-26 00:56:45','2014-09-30 19:29:12'),(14,'testing@s.com','$2y$10$iNalLdEtukXE4Z6fvcetUulmDnwhyedB.7alBpa9M.SSu7HFvMHWe',1,1,'00yw92KjNMRGcyxCsBK0jHH5lMUJAsPTDrRwdlFMosiMYzPNC6ccYjaxauzw',1,0,0,0,'dddddddddd','dddddddđ',1,'92b636d8a0d035403d21a77a5ad72fe4','','2014-09-30 19:28:37','::1',15,'','',0,'2014-09-26 02:18:48','2014-09-30 19:29:25'),(15,'testing2@s.com3','$2y$10$3wtc4lOGmh93ElIliWv9/OG89p9s5vWIpqOsdgMc9CnyvK27ECMxe',3,1,NULL,1,0,0,0,'dddddddddd','dddddddđ',0,'a804dfb3116215095feab9bdeffb2b45','','0000-00-00 00:00:00','::1',15,'','',0,'2014-09-26 02:21:19','2014-09-29 00:20:11'),(16,'taikhoanlike101@outlook.com.vn','$2y$10$pfpvUfFSdL6s1fwFCYdNyesv0AVTaNq.F2haqBgPBZw4k9aS4Qyb6',2,1,NULL,1,0,0,0,'Tester','Dev',0,'90d54d434c8e5ed3927b9652854cdedc','','0000-00-00 00:00:00','::1',15,'','',0,'2014-09-29 19:08:44','2014-11-28 00:54:06'),(17,'testing3@sc.om','$2y$10$89RJD5afAHWZxt1Jxlgtw.2oVo9ZMUET1.wMw2bHnBRkjWNwZsTQC',4,1,NULL,0,0,9,0,'Tester','Three',0,'ee94fd2aa8bf4f26a291c939bd253806','','0000-00-00 00:00:00','::1',15,'','',0,'2014-09-29 21:00:56','2014-11-28 00:54:39'),(18,'dsji@gmail.coms','$2y$10$mhblK55fPIWoU5kMZekP2uIzIbb11PvMrtWnrOE1OZw3ICYFVQW3.',3,1,NULL,1,0,0,0,'Tester','Two',0,'ce41244309d8c5c3897df961d640ee94','','0000-00-00 00:00:00','::1',15,'','',0,'2014-09-30 01:37:14','2014-11-28 00:54:22');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2014-11-28 14:59:31
