-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2.1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Oct 30, 2019 at 11:25 AM
-- Server version: 5.7.27-0ubuntu0.16.04.1
-- PHP Version: 7.0.33-0ubuntu0.16.04.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `02_belica`
--

-- --------------------------------------------------------

--
-- Table structure for table `proj_copies`
--

CREATE TABLE `proj_copies` (
  `id_copies` int(11) NOT NULL,
  `id_titles` int(11) NOT NULL,
  `status` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `proj_copies`
--

INSERT INTO `proj_copies` (`id_copies`, `id_titles`, `status`) VALUES
(1, 1, 1),
(2, 2, 1),
(3, 1, 1),
(4, 1, 1),
(5, 1, 0),
(6, 1, 1),
(7, 1, 1),
(8, 2, 1),
(9, 2, 1),
(10, 2, 1),
(11, 2, 0),
(12, 2, 1),
(13, 2, 0),
(14, 2, 1),
(15, 2, 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `proj_copies`
--
ALTER TABLE `proj_copies`
  ADD PRIMARY KEY (`id_copies`),
  ADD KEY `id_titles` (`id_titles`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `proj_copies`
--
ALTER TABLE `proj_copies`
  MODIFY `id_copies` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `proj_copies`
--
ALTER TABLE `proj_copies`
  ADD CONSTRAINT `copies` FOREIGN KEY (`id_titles`) REFERENCES `proj_titles` (`id_titles`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
