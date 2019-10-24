-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2.1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Oct 24, 2019 at 02:49 PM
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
-- Table structure for table `proj_books`
--

CREATE TABLE `proj_books` (
  `id_books` int(11) NOT NULL,
  `id_titles` int(11) NOT NULL,
  `id_authors` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `proj_books`
--

INSERT INTO `proj_books` (`id_books`, `id_titles`, `id_authors`) VALUES
(1, 1, 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `proj_books`
--
ALTER TABLE `proj_books`
  ADD PRIMARY KEY (`id_books`),
  ADD KEY `id_titles` (`id_titles`),
  ADD KEY `id_authors` (`id_authors`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `proj_books`
--
ALTER TABLE `proj_books`
  MODIFY `id_books` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `proj_books`
--
ALTER TABLE `proj_books`
  ADD CONSTRAINT `book_author` FOREIGN KEY (`id_authors`) REFERENCES `proj_authors` (`id_authors`),
  ADD CONSTRAINT `book_title` FOREIGN KEY (`id_titles`) REFERENCES `proj_titles` (`id_titles`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
