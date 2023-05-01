-- MySQL dump 10.13  Distrib 8.0.33, for macos13 (x86_64)
--
-- Host: localhost    Database: analytics
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
-- Table structure for table `channel`
--

DROP TABLE IF EXISTS `channel`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `channel` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `subscribers` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `channel`
--

LOCK TABLES `channel` WRITE;
/*!40000 ALTER TABLE `channel` DISABLE KEYS */;
INSERT INTO `channel` VALUES (1,'Flagrant','1.5m'),(2,'Huberman','2.5m'),(3,'LexFridman','3m'),(4,'impaulsive','5m'),(5,'tim ferris','1.2m');
/*!40000 ALTER TABLE `channel` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `monthly_gained_sub`
--

DROP TABLE IF EXISTS `monthly_gained_sub`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `monthly_gained_sub` (
  `views` int DEFAULT NULL,
  `GainedSub` int DEFAULT NULL,
  `month` text,
  `channelidId` double DEFAULT NULL,
  `revenue` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `monthly_gained_sub`
--

LOCK TABLES `monthly_gained_sub` WRITE;
/*!40000 ALTER TABLE `monthly_gained_sub` DISABLE KEYS */;
INSERT INTO `monthly_gained_sub` VALUES (1900865,65000,'JANUARY',1,13306),(2150213,34188,'FEBRUARY',1,15051),(2518779,75104,'MARCH',1,17632),(1118270,35353,'APRIL',1,7828),(1403623,49189,'MAY',1,9825),(2594641,77953,'JUNE',1,18162),(1356114,74597,'JULY',1,9493),(1983440,48703,'AUGUST',1,13884),(2680006,56310,'SEPTEMBER',1,18760),(1455707,61507,'OCTOBER',1,10200),(2558822,87377,'NOVEMBER',1,17912),(2209009,65079,'DECEMBER',1,15467),(1482504,61010,'JANUARY',2,10378),(787599,79003,'FEBRUARY',2,5513),(1784291,61749,'MARCH',2,12490),(1453201,73123,'APRIL',2,10173),(1020222,86786,'MAY',2,7142),(1194387,82097,'JUNE',2,8361),(1456167,88053,'JULY',2,10193),(686834,49984,'AUGUST',2,4807),(1558062,37437,'SEPTEMBER',2,9716),(1129714,67692,'OCTOBER',2,7908),(811002,38946,'NOVEMBER',2,5677),(1903545,52487,'DECEMBER',2,13326),(5571123,40935,'JANUARY',3,38998),(6259013,67569,'FEBRUARY',3,43813),(5285109,32680,'MARCH',3,37043),(4898703,76382,'APRIL',3,34291),(3543456,47805,'MAY',3,24804),(6338794,53378,'JUNE',3,44372),(6218604,33237,'JULY',3,43530),(5405327,41849,'AUGUST',3,37837),(3896123,68511,'SEPTEMBER',3,27273),(3623779,88497,'OCTOBER',3,25366),(6201935,84112,'NOVEMBER',3,43501),(3324098,71415,'DECEMBER',3,23118),(2049015,22326,'JANUARY',5,14343),(1272601,23872,'FEBRUARY',5,8908),(1730496,17324,'MARCH',5,12114),(1157818,18793,'APRIL',5,8105),(2220305,11269,'MAY',5,15542),(2221172,22216,'JUNE',5,15555),(1144233,25651,'JULY',5,7999),(2437809,27754,'AUGUST',5,17064),(1917020,18462,'SEPTEMBER',5,13419),(970090,10522,'OCTOBER',5,6790),(2069902,26934,'NOVEMBER',5,14489),(1032684,15357,'DECEMBER',5,7228),(17943791,30003,'JANUARY',4,3136),(20099440,69546,'FEBRUARY',4,3611),(18460915,164272,'MARCH',4,3231),(16572890,25319,'APRIL',4,2887),(21879440,57845,'MAY',4,126334),(16048727,76725,'JUNE',4,112340),(17273901,91091,'JULY',4,121417),(16172692,175617,'AUGUST',4,113209),(23449235,57517,'SEPTEMBER',4,164145),(22592005,88733,'OCTOBER',4,158144),(18320661,32695,'NOVEMBER',4,128245),(19779120,138965,'DECEMBER',4,138453);
/*!40000 ALTER TABLE `monthly_gained_sub` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pie_chart`
--

DROP TABLE IF EXISTS `pie_chart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pie_chart` (
  `id` int NOT NULL AUTO_INCREMENT,
  `male` int NOT NULL,
  `female` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pie_chart`
--

LOCK TABLES `pie_chart` WRITE;
/*!40000 ALTER TABLE `pie_chart` DISABLE KEYS */;
INSERT INTO `pie_chart` VALUES (1,70,30),(2,60,40),(3,65,45),(4,80,20),(5,50,50);
/*!40000 ALTER TABLE `pie_chart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `videostatistics`
--

DROP TABLE IF EXISTS `videostatistics`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `videostatistics` (
  `id` int NOT NULL AUTO_INCREMENT,
  `viewCount` int NOT NULL,
  `videoTitle` varchar(255) NOT NULL,
  `publishedDate` datetime NOT NULL,
  `channelId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_056f4979144891ba11fd3944e90` (`channelId`),
  CONSTRAINT `FK_056f4979144891ba11fd3944e90` FOREIGN KEY (`channelId`) REFERENCES `channel` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=42 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `videostatistics`
--

LOCK TABLES `videostatistics` WRITE;
/*!40000 ALTER TABLE `videostatistics` DISABLE KEYS */;
INSERT INTO `videostatistics` VALUES (2,98436,'Women Are Happier In The House ','2020-03-17 11:00:07',1),(3,263192,'Schul\'s Wifey Catches Corona','2020-02-18 12:45:00',1),(4,87917,'Confronting Your Girl On Her Period','2019-08-13 13:32:44',1),(5,46989,'Murder For Hire Should Be Legal','2020-04-10 18:24:21',1),(6,313863,'Moving In With Your Girl....BEWARE ','2020-01-07 14:00:04',1),(7,85273,'The ONE Way to get American\'s to Stay Inside','2020-03-27 20:30:01',1),(8,51330,'The Great Thing About The Corona Virus ','2020-03-13 11:00:13',1),(9,199501,'Everyone Loves Trump | Andrew Schul & Akaash Singh','2020-02-04 13:00:00',1),(10,109183,'Taking a Knee IS Respectful | Andrew Schul and Akaash Singh','2020-06-05 11:00:10',1),(11,97608,'BUY Your Girl\'s Forgiveness','2020-02-21 12:00:01',1),(12,164532,'How to Control Stress in Real-Time','2021-03-24 13:00:06',2),(13,342258,'Reduce Anxiety & Stress with the Physiological Sigh','2021-04-07 14:00:18',2),(14,530127,'Welcome to the Huberman Lab Podcast','2020-12-23 15:00:05',2),(15,112590,'AMA #5: Intrusive Thoughts, CGMs','2023-03-24 12:00:22',2),(16,210025,'AMA #4: Maintain Motivation, Improve REM Sleep','2023-02-24 13:00:16',2),(17,155878,'AMA #1: Leveraging Ultradian Cycles, How to Protect Your Brain, Seed Oils Examined and More','2022-11-02 15:15:02',2),(18,113656,'LIVE EVENT Q&A: Dr. Andrew Huberman Question & Answer in New York, NY','2022-12-14 14:51:49',2),(19,292703,'AMA #2: Improve Sleep, Reduce Sugar Cravings, Optimal Protein Intake, Stretching Frequency & More','2022-12-08 13:00:27',2),(20,272091,'Supercharge Exercise Performance & Recovery with Cooling | Huberman Lab Podcast #19','2021-05-10 12:00:17',2),(21,6473,'Sean Carroll: What is an Atom?','2019-11-04 17:22:04',3),(22,185001,'Will Javascript Take Over the World? | Brian Kernighan and Lex Fridman','2020-07-20 17:32:20',3),(23,31531,'Sean Carroll: What is the Wave Function?','2019-11-18 18:34:29',3),(24,112267,'Sean Carroll: Hilbert Space and Infinity','2019-11-06 16:16:44',3),(25,29016,'Sean Carroll: What is Quantum Entanglement?','2019-11-11 22:10:41',3),(26,25387,'Lex Fridman: Recipe for Progress in AI (Hard Work)','2020-01-13 16:30:36',3),(27,70599,'Elon Musk: What\'s Outside the Simulation? | AI Podcast Clips','2019-08-16 13:38:03',3),(28,17869,'I\'m Most Proud of Trying - Eric Weinstein | AI Podcast Clips','2020-04-15 14:00:41',3),(29,21660,'Measure passion not progress','2020-04-02 13:23:26',3),(30,80446,'Are We Living in a Simulation? with George Hot and Lex Fridman | AI Podcast Clips','2019-08-29 13:09:02',3),(31,8602,'Sean Carroll: What is Quantum Mechanics?','2019-11-03 18:58:18',3),(32,118992,'SEPARATED FROM BROTHER FOR 29 YEARS?!','2023-02-09 19:00:01',4),(33,2023262,'WILL ROB DYRDEK RETIRE FROM MTV? #short','2022-11-23 19:00:19',4),(34,2648521,'ROBIN WILLIAMS SHOCKED GABRIEL IGLESIAS #shorts','2022-10-20 20:00:07',4),(35,277590,'EDGE HAS GREATEST ENTRANCE SONG!','2023-04-28 16:00:25',4),(36,7354137,'CODY\'S HORRIFIC INJURY','2023-02-07 17:00:32',4),(37,3785,'Value Lock-In: How Values and Ideologies Persist | Will MacAskill | The Tim Ferriss Show','2022-08-08 18:49:00',5),(38,44696,'How to Improve Your VO2 Max | Dr. Peter Attia | The Tim Ferriss Show','2023-04-11 14:23:42',5),(39,18697,'How To Negotiate #shorts','2023-01-27 16:10:27',5),(40,18301,'When You\'re Overwhelmed #shorts','2022-11-08 23:47:04',5),(41,19799,'Should You Specialize or Be a Generalist? #shorts','2022-11-11 15:03:07',5);
/*!40000 ALTER TABLE `videostatistics` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-05-02  2:32:13
