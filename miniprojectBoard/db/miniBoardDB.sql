CREATE DATABASE  IF NOT EXISTS `mini_board` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `mini_board`;
-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: mini_board
-- ------------------------------------------------------
-- Server version	8.0.32

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `authority_tb`
--

DROP TABLE IF EXISTS `authority_tb`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `authority_tb` (
  `authority_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `role_id` int NOT NULL,
  PRIMARY KEY (`authority_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `authority_tb`
--

LOCK TABLES `authority_tb` WRITE;
/*!40000 ALTER TABLE `authority_tb` DISABLE KEYS */;
INSERT INTO `authority_tb` VALUES (1,1,1),(2,3,2),(3,4,2),(4,5,2),(5,6,2);
/*!40000 ALTER TABLE `authority_tb` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `board_tb`
--

DROP TABLE IF EXISTS `board_tb`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `board_tb` (
  `board_id` int NOT NULL AUTO_INCREMENT,
  `board_title` text NOT NULL,
  `board_content` text NOT NULL,
  `board_date` date NOT NULL,
  `user_id` int NOT NULL,
  `board_views` int NOT NULL,
  `board_modify_flag` varchar(45) NOT NULL,
  PRIMARY KEY (`board_id`)
) ENGINE=InnoDB AUTO_INCREMENT=46 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `board_tb`
--

LOCK TABLES `board_tb` WRITE;
/*!40000 ALTER TABLE `board_tb` DISABLE KEYS */;
INSERT INTO `board_tb` VALUES (1,'테스트1','테스트1내용','2023-07-24',1,4,'0'),(2,'테스트2','테스트2내용','2023-07-24',1,1,'0'),(4,'테스트4','테스트4내용임','2023-07-24',1,0,'0'),(6,'글 수정 테스트 날자 수정테스트 modifyFlagTest','테글 수정 테스트 날자 수정테스트글 수정 테스트 날자 수정테스트modifyFlagTest','2023-07-31',3,4,'1'),(7,'3','fasd','2023-07-25',3,2,'0'),(9,'5','agsd','2023-07-25',3,3,'0'),(10,'6','a','2023-07-25',3,2,'0'),(11,'7','asdf','2023-07-25',3,2,'0'),(12,'8','asdf','2023-07-25',3,1,'0'),(14,'1ef','sfd','2023-07-25',1,1,'0'),(15,'afew','asdf','2023-07-25',1,3,'0'),(17,'sad','iu','2023-07-25',1,3,'0'),(19,'testestestestes','testestestestestestesteste글쓰기','2023-07-25',3,3,'0'),(20,'하위','하아위','2023-07-26',3,4,'0'),(21,'글 수정 시 (수정 된 글 이라고 뜸)','이건 수정한 글임~','2023-08-01',3,4,'1'),(23,'ㅈㅂㅈㅂ','ㅈㅂㅈㅂㅈㅂㅈㅂ','2023-07-26',3,2,'0'),(24,'ㅇ','ㅇ','2023-07-26',3,5,'0'),(26,'ㅎㅇㅎㅇqdqdqqqq','ㅎㅇㅎㅇㅎqdqdwee','2023-08-03',3,3,'1'),(27,'ㅅㅂ','ㅅㅂ','2023-07-27',3,1,'0'),(28,'테스트1','테스트1','2023-07-27',3,3,'0'),(29,'글가져와라','ㄱ글~','2023-07-27',3,3,'0'),(32,'글 수저앻ㅆ습니다?????','글 수정했습니다~123123','2023-07-27',3,1,'0'),(34,'됐으면 좋겟다 수정 테스트 수정flag 테스트( 수정된 글 텟트ㅡ)','젭라~~~ㅁㄴㅇㄻㄴㅇㄻㄴㅇㄹ수정테스트','2023-07-31',3,5,'1'),(38,'ㅎㅇㅎㅇ','wwㅂㄷㅂㅂㅇ','2023-08-02',5,4,'1'),(39,'글 수정테스트입니당~','글 수정테스트입니당~글 수정테스트입니당~글 수정테스트입니당~','2023-08-02',5,1,'1'),(40,'글자넘침 테스트글자넘침 테스트글자넘침 테스트글자넘침 테스트글자넘침 테스트글자넘침 테스트글자넘침 테스트글자넘침 테스트글자넘침 테스트글자넘침 테스트글자넘침 테스트글자넘침 테스트글자넘침 테스트글자넘침 테스트글자넘침 테스트글자넘침 테스트글자넘침 테스트글자넘침 테스트글자넘침 테스트글자넘침 테스트글자넘침 테스트글자넘침 테스트글자넘침 테스트글자넘침 테스트글자넘침 테스트글자넘침 테스트글자넘침 테스트글자넘침 테스트글자넘침 테스트글자넘침 테스트글자넘침 테스트글자넘침 테스트글자넘침 테스트글자넘침 테스트글자넘침 테스트글자넘침 테스트글자넘침 테스트글자넘침 테스트글자넘침 테스트글자넘침 테스트ㅍ','글자넘침 테스트글자넘침 테스트글자넘침 테스트글자넘침 테스트글자넘침 테스트글자넘침 테스트글자넘침 테스트글자넘침 테스트글자넘침 테스트글자넘침 테스트글자넘침 테스트글자넘침 테스트','2023-08-02',5,2,'0'),(41,'아 이제 거의 다끝났따.....','휴 ~~~ 거의 다했똬~~','2023-08-02',3,2,'0'),(42,'댓글 대댓글 테스트...','테스트....','2023-08-03',3,1,'0'),(43,'ㅁㄴㄹㅇ','ㄹㅇ','2023-08-04',3,3,'0'),(44,'ㅂㅂ','ㅇ','2023-08-04',3,3,'0'),(45,'qweqw','eqweqweqwe','2023-08-04',6,1,'0');
/*!40000 ALTER TABLE `board_tb` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `comment_tb`
--

DROP TABLE IF EXISTS `comment_tb`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comment_tb` (
  `comment_id` int NOT NULL AUTO_INCREMENT,
  `comment` text NOT NULL,
  `user_id` int NOT NULL,
  `board_id` int NOT NULL,
  `comment_date` date NOT NULL,
  `modify_comment_flag` int NOT NULL,
  PRIMARY KEY (`comment_id`)
) ENGINE=InnoDB AUTO_INCREMENT=44 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comment_tb`
--

LOCK TABLES `comment_tb` WRITE;
/*!40000 ALTER TABLE `comment_tb` DISABLE KEYS */;
INSERT INTO `comment_tb` VALUES (2,'gd',3,36,'2023-07-31',0),(15,'ㅇ',3,29,'2023-07-31',0),(16,'댓글~~\n',3,34,'2023-07-31',1),(17,'gd',5,34,'2023-08-01',0),(18,'a',5,20,'2023-08-01',0),(19,'ㅎㅇㅎㅇ',3,38,'2023-08-01',0),(20,'ㄱㄷ',5,38,'2023-08-01',0),(21,'ㄱㄱ',5,38,'2023-08-02',0),(22,'댓글수정~\n',3,41,'2023-08-02',1),(23,'고생했따',5,41,'2023-08-02',0),(26,'ㅂ',3,41,'2023-08-03',0),(27,'ㅈ',3,41,'2023-08-03',0),(28,'ㄱ',3,41,'2023-08-03',0),(29,'ㄷ',3,41,'2023-08-03',0),(30,'ㅇㅎㄴ',3,21,'2023-08-03',0),(31,'ㅈ',3,21,'2023-08-03',0),(32,'ㅈ',3,21,'2023-08-03',0),(33,'ㅂㅈㄷ',3,41,'2023-08-03',0),(34,'제일 처음 작성한 댓글\n',3,42,'2023-08-03',0),(35,'두번째 작성',3,42,'2023-08-03',0),(36,'ㅎㅇㅎㅇ',3,43,'2023-08-04',0),(37,'댓글~\n',3,43,'2023-08-04',0),(38,'댓글작성애요',3,43,'2023-08-04',0),(39,'gd',5,43,'2023-08-04',0),(40,'d',5,26,'2023-08-04',0),(41,'gd',6,43,'2023-08-04',0),(42,'zz',6,34,'2023-08-04',0),(43,'ㅎㅇ',6,45,'2023-08-05',0);
/*!40000 ALTER TABLE `comment_tb` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `read_tb`
--

DROP TABLE IF EXISTS `read_tb`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `read_tb` (
  `read_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `board_id` int NOT NULL,
  `read_date` date NOT NULL,
  PRIMARY KEY (`read_id`)
) ENGINE=InnoDB AUTO_INCREMENT=80 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `read_tb`
--

LOCK TABLES `read_tb` WRITE;
/*!40000 ALTER TABLE `read_tb` DISABLE KEYS */;
INSERT INTO `read_tb` VALUES (1,5,6,'2023-08-02'),(2,5,6,'2023-08-02'),(3,5,6,'2023-08-02'),(4,5,23,'2023-08-02'),(5,5,38,'2023-08-02'),(6,5,24,'2023-08-02'),(7,5,17,'2023-08-02'),(8,5,21,'2023-08-02'),(9,5,23,'2023-08-02'),(10,5,6,'2023-08-02'),(11,5,6,'2023-08-02'),(12,5,21,'2023-08-02'),(13,5,21,'2023-08-02'),(14,5,21,'2023-08-02'),(15,5,38,'2023-08-02'),(16,5,24,'2023-08-02'),(17,5,39,'2023-08-02'),(18,5,39,'2023-08-02'),(19,5,40,'2023-08-02'),(20,5,38,'2023-08-02'),(21,5,40,'2023-08-02'),(22,5,39,'2023-08-02'),(23,5,38,'2023-08-02'),(24,3,40,'2023-08-02'),(25,3,20,'2023-08-02'),(26,3,28,'2023-08-02'),(27,3,41,'2023-08-02'),(28,5,41,'2023-08-02'),(29,5,34,'2023-08-02'),(30,5,26,'2023-08-02'),(31,5,29,'2023-08-02'),(32,3,41,'2023-08-03'),(33,3,41,'2023-08-03'),(34,3,40,'2023-08-03'),(35,3,41,'2023-08-03'),(36,3,41,'2023-08-03'),(37,3,41,'2023-08-03'),(38,3,41,'2023-08-03'),(39,3,41,'2023-08-03'),(40,3,41,'2023-08-03'),(41,3,41,'2023-08-03'),(42,3,41,'2023-08-03'),(43,3,41,'2023-08-03'),(44,3,41,'2023-08-03'),(45,3,41,'2023-08-03'),(46,3,41,'2023-08-03'),(47,3,41,'2023-08-03'),(48,3,41,'2023-08-03'),(49,3,41,'2023-08-03'),(50,3,41,'2023-08-03'),(51,3,41,'2023-08-03'),(52,3,41,'2023-08-03'),(53,3,41,'2023-08-03'),(54,3,41,'2023-08-03'),(55,3,41,'2023-08-03'),(56,3,21,'2023-08-03'),(57,3,41,'2023-08-03'),(58,3,42,'2023-08-03'),(59,3,42,'2023-08-03'),(60,3,41,'2023-08-03'),(61,3,41,'2023-08-04'),(62,3,43,'2023-08-04'),(63,3,44,'2023-08-04'),(64,3,44,'2023-08-04'),(65,3,43,'2023-08-04'),(66,3,43,'2023-08-04'),(67,5,44,'2023-08-04'),(68,5,44,'2023-08-04'),(69,5,43,'2023-08-04'),(70,5,44,'2023-08-04'),(71,5,43,'2023-08-04'),(72,5,26,'2023-08-04'),(73,5,44,'2023-08-04'),(74,5,43,'2023-08-04'),(75,5,43,'2023-08-04'),(76,6,43,'2023-08-04'),(77,6,34,'2023-08-04'),(78,6,44,'2023-08-04'),(79,6,45,'2023-08-05');
/*!40000 ALTER TABLE `read_tb` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `replycomment_tb`
--

DROP TABLE IF EXISTS `replycomment_tb`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `replycomment_tb` (
  `replycomment_id` int NOT NULL AUTO_INCREMENT,
  `replycomment` text NOT NULL,
  `comment_id` int NOT NULL,
  `user_id` int NOT NULL,
  `board_id` int NOT NULL,
  `replycomment_date` date NOT NULL,
  PRIMARY KEY (`replycomment_id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `replycomment_tb`
--

LOCK TABLES `replycomment_tb` WRITE;
/*!40000 ALTER TABLE `replycomment_tb` DISABLE KEYS */;
INSERT INTO `replycomment_tb` VALUES (2,'tttttest',23,3,41,'2023-08-03'),(5,'ㄹ',22,3,41,'2023-08-03'),(6,'ㅇ',22,3,41,'2023-08-03'),(7,'ㄹ',22,3,41,'2023-08-03'),(8,'ㅅㅂ',23,3,41,'2023-08-03'),(9,'\n\n\n\n\n\n\n\n\n\n\n\n\n??',23,3,41,'2023-08-03'),(10,'ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ',23,3,41,'2023-08-03'),(11,'ㅇ',30,3,21,'2023-08-03'),(13,'ㄹㅈ',34,3,42,'2023-08-03'),(14,'ㅂㅂ',35,3,42,'2023-08-03'),(15,'ㅓㅏ\n',35,3,42,'2023-08-03'),(17,'헤이헤이',38,3,43,'2023-08-04'),(18,'대댓글2',37,3,43,'2023-08-04'),(19,'333',36,3,43,'2023-08-04'),(21,'wwew',38,5,43,'2023-08-04'),(22,'d',38,5,43,'2023-08-04'),(23,'aa',38,6,43,'2023-08-04'),(24,'sss',42,6,34,'2023-08-04'),(25,'ㅎㅇㅎㅇ',43,6,45,'2023-08-05');
/*!40000 ALTER TABLE `replycomment_tb` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `role_tb`
--

DROP TABLE IF EXISTS `role_tb`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `role_tb` (
  `role_id` int NOT NULL AUTO_INCREMENT,
  `role_name` varchar(45) NOT NULL,
  PRIMARY KEY (`role_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `role_tb`
--

LOCK TABLES `role_tb` WRITE;
/*!40000 ALTER TABLE `role_tb` DISABLE KEYS */;
INSERT INTO `role_tb` VALUES (1,'ROLE_ADMIN'),(2,'ROLE_USER');
/*!40000 ALTER TABLE `role_tb` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `test`
--

DROP TABLE IF EXISTS `test`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `test` (
  `read_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `board_id` int NOT NULL,
  `read_date` date NOT NULL,
  PRIMARY KEY (`read_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `test`
--

LOCK TABLES `test` WRITE;
/*!40000 ALTER TABLE `test` DISABLE KEYS */;
INSERT INTO `test` VALUES (1,1,1,'2023-08-02'),(2,1,1,'2023-08-02'),(3,1,1,'2023-08-02'),(4,1,1,'2023-08-02'),(5,5,34,'2023-08-02'),(6,5,34,'2023-08-02'),(7,5,34,'2023-08-02'),(8,5,34,'2023-08-02'),(9,5,34,'2023-08-02'),(10,5,34,'2023-08-02');
/*!40000 ALTER TABLE `test` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_tb`
--

DROP TABLE IF EXISTS `user_tb`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_tb` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(45) NOT NULL,
  `password` varchar(100) NOT NULL,
  `nickname` varchar(45) NOT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_tb`
--

LOCK TABLES `user_tb` WRITE;
/*!40000 ALTER TABLE `user_tb` DISABLE KEYS */;
INSERT INTO `user_tb` VALUES (1,'asdfasdf@asdf','asdfasdf1!','ffwfwfw'),(3,'show2312','$2a$10$qGpad.BspilHzSE3uTgq.Oz3R.Fr8114.GcWiTOlBfYIBdegnqTe6','오이가지'),(4,'weffwe1','$2a$10$6vB7tD/hKqHMfkVhTZR8v.bb2y97xR8E02I.4JLOXQjq7sn6uTc2K','아이고허리야'),(5,'xptmxmdkel','$2a$10$/zLLwJL/NL17Lwkfasi3n.yQeJOwuTfW8EvyoOHbBZnVgUgYOhZBi','테스트아디'),(6,'dkfkekfk','$2a$10$djICJJ54QSAgqU6PZL3Gt.aQqhZFVwxjsoErY4N3vXh.jdMCmKaBm','테스트아디요');
/*!40000 ALTER TABLE `user_tb` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'mini_board'
--

--
-- Dumping routines for database 'mini_board'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-08-05 16:32:14
