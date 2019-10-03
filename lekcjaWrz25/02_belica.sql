-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2.1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Oct 03, 2019 at 02:55 PM
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
-- Table structure for table `bibl_autor`
--

CREATE TABLE `bibl_autor` (
  `id_autor` int(11) NOT NULL,
  `autor` varchar(100) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `bibl_book`
--

CREATE TABLE `bibl_book` (
  `id_book` int(11) NOT NULL,
  `id_autor` int(11) NOT NULL,
  `id_tytul` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `bibl_tytul`
--

CREATE TABLE `bibl_tytul` (
  `id_tytul` int(11) NOT NULL,
  `tytul` varchar(100) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `cars`
--

CREATE TABLE `cars` (
  `id_car` int(11) NOT NULL,
  `nazwa` text CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `cena` double NOT NULL,
  `foto` text CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `opis` text CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `szczegoly` text CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `promocja` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf32 COLLATE=utf32_unicode_ci;

--
-- Dumping data for table `cars`
--

INSERT INTO `cars` (`id_car`, `nazwa`, `cena`, `foto`, `opis`, `szczegoly`, `promocja`) VALUES
(1, 'Toyota Yaris', 9000, 'http://st.motortrend.com/uploads/sites/10/2016/10/2017-toyota-yaris-le-5-door-hatchback-angular-front.png', 'Szybkie i zwinne, oszczędne i ogólnie. Niezniszczalne', 'Więcej szcegółów i opisu Więcej szcegółów i opisu Więcej szcegółów i opisu Więcej szcegółów i opisu Więcej szcegółów i opisu Więcej szcegółów i opisu Więcej szcegółów i opisu Więcej szcegółów i opisu', 10),
(2, 'Opel Astra', 11500, 'https://upload.wikimedia.org/wikipedia/commons/b/ba/Opel_Astra_1.4_EDIT_Edition_%28K%29_%E2%80%93_Frontansicht_%281%29%2C_31._Juli_2016%2C_D%C3%BCsseldorf.jpg', 'Fajne autko, szybko jeździ. Wygodne siedzenia.', 'Lepszy opis Lepszy opis Lepszy opis Lepszy opis Lepszy opis Lepszy opis Lepszy opis Lepszy opis Lepszy opis', 0),
(3, 'BMW i8', 50000, 'http://st.motortrend.com/uploads/sites/10/2016/06/2015-bmw-i8-mega-coupe-angular-front.png', 'Szybciutkie, weźmie cię gdzie chcesz.', 'opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis', 0),
(4, 'Test Car', 99999, 'https://upload.wikimedia.org/wikipedia/commons/e/ea/Superman_monster_truck.jpg', 'DuÅ¼e auto', 'WytrzymaÅ‚e do trikÃ³w', 3),
(5, 'Test Car', 99999, 'https://upload.wikimedia.org/wikipedia/commons/e/ea/Superman_monster_truck.jpg', 'DuÅ¼e auto', 'WytrzymaÅ‚e do trikÃ³w', 3);

-- --------------------------------------------------------

--
-- Table structure for table `organizacja`
--

CREATE TABLE `organizacja` (
  `id_org` int(11) NOT NULL,
  `nazwa_dzial` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `organizacja`
--

INSERT INTO `organizacja` (`id_org`, `nazwa_dzial`) VALUES
(1, 'serwis'),
(2, 'handel'),
(3, 'marketing'),
(4, 'it');

-- --------------------------------------------------------

--
-- Table structure for table `permissions`
--

CREATE TABLE `permissions` (
  `id_perm` int(11) NOT NULL,
  `permission` varchar(32) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `permissions`
--

INSERT INTO `permissions` (`id_perm`, `permission`) VALUES
(1, 'delete'),
(2, 'update'),
(3, 'read'),
(4, 'add_new_user');

-- --------------------------------------------------------

--
-- Table structure for table `pracownicy`
--

CREATE TABLE `pracownicy` (
  `id_pracownicy` int(11) NOT NULL,
  `imie` varchar(30) CHARACTER SET utf8 COLLATE utf8_polish_ci NOT NULL,
  `dzial` int(11) NOT NULL,
  `zarobki` int(11) NOT NULL,
  `data_urodzenia` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `pracownicy`
--

INSERT INTO `pracownicy` (`id_pracownicy`, `imie`, `dzial`, `zarobki`, `data_urodzenia`) VALUES
(4, 'jan', 2, 25, '1975-01-28'),
(5, 'ania', 2, 35, '1987-04-13'),
(6, 'adam', 3, 45, '1997-11-14'),
(7, 'marcin', 4, 15, '2001-09-01'),
(8, 'michał', 3, 45, '1999-10-22'),
(9, 'patrycja', 1, 33, '2002-03-16'),
(10, 'robert', 1, 51, '1992-09-14'),
(11, 'basia', 3, 15, '1987-04-25'),
(12, 'dagmara', 2, 20, '1998-04-08'),
(13, 'andrzej', 2, 30, '1987-04-15'),
(14, 'jarek', 1, 10, '1987-02-05'),
(15, 'dorota', 3, 35, '1999-04-17'),
(16, 'zosia', 4, 21, '1988-02-21'),
(17, 'dawid', 4, 45, '1985-01-15'),
(18, 'klaudia', 4, 65, '1984-12-12'),
(19, 'franek', 1, 60, '1999-01-15');

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `id_role` int(11) NOT NULL,
  `role` varchar(16) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`id_role`, `role`) VALUES
(1, 'user'),
(2, 'editor'),
(3, 'admin'),
(4, 'superadmin');

-- --------------------------------------------------------

--
-- Table structure for table `role_permission`
--

CREATE TABLE `role_permission` (
  `id_r_p` int(11) NOT NULL,
  `id_role` int(11) NOT NULL,
  `id_perm` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `role_permission`
--

INSERT INTO `role_permission` (`id_r_p`, `id_role`, `id_perm`) VALUES
(1, 1, 3),
(2, 2, 2),
(3, 2, 3),
(4, 3, 1),
(5, 3, 2),
(6, 3, 3),
(7, 4, 1),
(8, 4, 2),
(9, 4, 3),
(10, 4, 4);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id_users` int(11) NOT NULL,
  `username` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `id_role` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id_users`, `username`, `password`, `id_role`) VALUES
(1, 'jacek', '$2y$10$Oqhf.L.LWUXCKgPQIql75.pUJKilstgu5X./mqb/PmtM2kQcLJU6y', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bibl_autor`
--
ALTER TABLE `bibl_autor`
  ADD PRIMARY KEY (`id_autor`);

--
-- Indexes for table `bibl_book`
--
ALTER TABLE `bibl_book`
  ADD PRIMARY KEY (`id_book`);

--
-- Indexes for table `bibl_tytul`
--
ALTER TABLE `bibl_tytul`
  ADD PRIMARY KEY (`id_tytul`);

--
-- Indexes for table `cars`
--
ALTER TABLE `cars`
  ADD PRIMARY KEY (`id_car`);

--
-- Indexes for table `organizacja`
--
ALTER TABLE `organizacja`
  ADD PRIMARY KEY (`id_org`);

--
-- Indexes for table `permissions`
--
ALTER TABLE `permissions`
  ADD PRIMARY KEY (`id_perm`);

--
-- Indexes for table `pracownicy`
--
ALTER TABLE `pracownicy`
  ADD PRIMARY KEY (`id_pracownicy`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id_role`);

--
-- Indexes for table `role_permission`
--
ALTER TABLE `role_permission`
  ADD PRIMARY KEY (`id_r_p`),
  ADD KEY `id_role` (`id_role`),
  ADD KEY `id_perm` (`id_perm`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id_users`),
  ADD KEY `id_role` (`id_role`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `bibl_autor`
--
ALTER TABLE `bibl_autor`
  MODIFY `id_autor` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `bibl_book`
--
ALTER TABLE `bibl_book`
  MODIFY `id_book` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `bibl_tytul`
--
ALTER TABLE `bibl_tytul`
  MODIFY `id_tytul` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `cars`
--
ALTER TABLE `cars`
  MODIFY `id_car` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `organizacja`
--
ALTER TABLE `organizacja`
  MODIFY `id_org` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `pracownicy`
--
ALTER TABLE `pracownicy`
  MODIFY `id_pracownicy` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;
--
-- AUTO_INCREMENT for table `role_permission`
--
ALTER TABLE `role_permission`
  MODIFY `id_r_p` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id_users` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `role_permission`
--
ALTER TABLE `role_permission`
  ADD CONSTRAINT `perm_to_role` FOREIGN KEY (`id_perm`) REFERENCES `permissions` (`id_perm`),
  ADD CONSTRAINT `role_to_perm` FOREIGN KEY (`id_role`) REFERENCES `roles` (`id_role`);

--
-- Constraints for table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `user_roles` FOREIGN KEY (`id_role`) REFERENCES `roles` (`id_role`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
