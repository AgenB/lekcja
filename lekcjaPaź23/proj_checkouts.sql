-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2.1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Oct 30, 2019 at 11:24 AM
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
-- Table structure for table `proj_checkouts`
--

CREATE TABLE `proj_checkouts` (
  `id_checkouts` int(11) NOT NULL,
  `id_users` int(11) NOT NULL,
  `id_copies` int(11) NOT NULL,
  `date_out` date NOT NULL,
  `date_in` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `proj_checkouts`
--
ALTER TABLE `proj_checkouts`
  ADD PRIMARY KEY (`id_checkouts`),
  ADD KEY `id_users` (`id_users`),
  ADD KEY `id_books` (`id_copies`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `proj_checkouts`
--
ALTER TABLE `proj_checkouts`
  MODIFY `id_checkouts` int(11) NOT NULL AUTO_INCREMENT;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `proj_checkouts`
--
ALTER TABLE `proj_checkouts`
  ADD CONSTRAINT `title_id` FOREIGN KEY (`id_copies`) REFERENCES `proj_copies` (`id_copies`),
  ADD CONSTRAINT `user_id` FOREIGN KEY (`id_users`) REFERENCES `proj_users` (`id_users`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
