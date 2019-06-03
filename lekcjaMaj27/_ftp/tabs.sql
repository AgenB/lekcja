-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2.1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Jun 03, 2019 at 02:07 PM
-- Server version: 5.7.26-0ubuntu0.16.04.1
-- PHP Version: 7.0.33-0ubuntu0.16.04.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `z_ghj`
--

-- --------------------------------------------------------

--
-- Table structure for table `tabs`
--

CREATE TABLE `tabs` (
  `tabs_id` int(11) NOT NULL,
  `tabName` varchar(128) NOT NULL,
  `tabContent` varchar(2048) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tabs`
--

INSERT INTO `tabs` (`tabs_id`, `tabName`, `tabContent`) VALUES
(1, 'Lorem', 'Praesent eget odio non magna sollicitudin pulvinar. Maecenas sit amet erat a velit semper venenatis vel non tellus. Suspendisse et lectus sit amet urna tristique mollis sed non ex. Aliquam ut blandit massa, eu consequat ligula. Cras id tristique libero. Integer ut urna faucibus, mattis ipsum nec, vestibulum nunc. Nulla eleifend non metus a ornare. Curabitur laoreet augue nec laoreet malesuada. Proin ut nisi vel mauris dictum cursus. Suspendisse ac dui sagittis, mollis velit a, vestibulum tortor. Donec egestas nibh sem, vel interdum orci pellentesque id. Ut vulputate dignissim risus, et sodales arcu dapibus sed.'),
(2, 'Ipsum', 'Nulla risus arcu, posuere scelerisque leo et, viverra aliquam metus. Maecenas viverra, metus sit amet lacinia fermentum, sapien ex consectetur massa, in suscipit massa enim vel quam. Aliquam interdum aliquam nunc id sollicitudin. Mauris maximus posuere lacus, nec iaculis turpis viverra molestie. Suspendisse bibendum nibh semper nunc varius, nec ultrices lectus lobortis. Proin arcu magna, tempor nec sodales ac, posuere convallis mauris. Phasellus at luctus libero, vitae pulvinar dui. Donec eu diam dui. Praesent dictum, est eu lobortis suscipit, neque dui tempor ligula, nec suscipit nisl libero vel enim. Aliquam convallis, tortor vitae tincidunt mollis, libero ipsum volutpat felis, euismod congue libero diam nec lectus. Suspendisse ac risus ex.'),
(3, 'Dolor', 'Nunc viverra tempus lorem, at euismod massa euismod vel. Mauris est quam, consequat quis efficitur nec, scelerisque a nibh. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum mattis posuere sem pretium egestas. Donec tempor facilisis lacinia. Morbi dignissim maximus mauris, at malesuada dui euismod ut. Fusce dui massa, pellentesque in neque et, maximus bibendum est.'),
(4, 'Sit amet', 'Integer gravida ante nulla, id aliquet nisl posuere et. Quisque a porttitor nulla. Proin sit amet quam quis lectus congue rhoncus. Ut eu purus iaculis, interdum arcu a, bibendum mi. Sed quis venenatis arcu. Phasellus gravida ex neque, at commodo lorem ullamcorper vel. Aliquam vel ornare libero. Lorem ipsum dolor sit amet, consectetur adipiscing elit.');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tabs`
--
ALTER TABLE `tabs`
  ADD PRIMARY KEY (`tabs_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tabs`
--
ALTER TABLE `tabs`
  MODIFY `tabs_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
