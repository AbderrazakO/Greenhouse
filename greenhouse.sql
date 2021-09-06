-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : dim. 05 sep. 2021 à 13:55
-- Version du serveur : 10.4.20-MariaDB
-- Version de PHP : 8.0.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `greenhouse`
--

--
-- Déchargement des données de la table `conditions`
--

INSERT INTO `conditions` (`id`, `Temperature`, `Humidity`, `Date`, `Time`) VALUES
(1, 408, 10, '0000-00-00', '00:00:00'),
(2, 40, 610, '0000-00-00', '00:00:00'),
(3, 450, 610, '0000-00-00', '00:00:00'),
(4, 540, 160, '0000-00-00', '00:00:00'),
(5, 410, 130, '0000-00-00', '00:00:00'),
(6, 402, 110, '0000-00-00', '00:00:00'),
(7, 405, 102, '0000-00-00', '00:00:00'),
(8, 404, 810, '0000-00-00', '00:00:00'),
(9, 460, 100, '0000-00-00', '00:00:00'),
(10, 30, 12, '0000-00-00', '00:00:00');

--
-- Déchargement des données de la table `leds`
--

INSERT INTO `leds` (`id`, `status`, `date`, `time`) VALUES
(1, 1, '0000-00-00', '08:38:20'),
(2, 0, '2021-09-05', '12:30:12'),
(3, 0, '2021-09-05', '12:47:14'),
(4, 0, '2021-09-03', '10:23:14'),
(5, 0, '2021-09-03', '10:36:12'),
(6, 0, '2021-09-05', '12:50:30'),
(7, 1, '2021-09-03', '10:22:28'),
(8, 1, '0000-00-00', '08:38:20');

--
-- Déchargement des données de la table `luminosite`
--

INSERT INTO `luminosite` (`id`, `Luminosite`, `Date`, `Time`) VALUES
(0, 11, '2021-09-04', '09:31:40'),
(1, 10, '2021-09-04', '09:31:40'),
(2, 12, '2021-09-04', '09:31:40'),
(3, 14, '2021-09-04', '09:31:40'),
(4, 13, '2021-09-04', '09:31:40'),
(5, 12, '2021-09-04', '09:31:40'),
(6, 12, '2021-09-04', '09:31:40');

--
-- Déchargement des données de la table `sol`
--

INSERT INTO `sol` (`id`, `Humidity`, `Date`, `Time`) VALUES
(1, 154, '0000-00-00', '00:00:00'),
(2, 149, '0000-00-00', '00:00:00'),
(3, 184, '0000-00-00', '00:00:00'),
(4, 714, '0000-00-00', '00:00:00'),
(5, 1, '0000-00-00', '00:00:00'),
(6, 146, '0000-00-00', '00:00:00'),
(7, 144, '0000-00-00', '00:00:00'),
(8, 142, '0000-00-00', '00:00:00'),
(9, 124, '0000-00-00', '00:00:00'),
(10, 14, '0000-00-00', '00:00:00'),
(11, 14, '0000-00-00', '00:00:00'),
(12, 140, '0000-00-00', '00:00:00'),
(13, 104, '0000-00-00', '00:00:00');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
