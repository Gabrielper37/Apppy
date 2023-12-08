-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 08-12-2023 a las 04:04:41
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `tpocrud`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `loginsystem`
--

CREATE TABLE `loginsystem` (
  `IDs` int(255) NOT NULL,
  `Users` varchar(255) NOT NULL,
  `Passwords` varchar(255) NOT NULL,
  `Emails` varchar(255) NOT NULL,
  `Ranks` int(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='Sistema de Login + Rangos';

--
-- Volcado de datos para la tabla `loginsystem`
--

INSERT INTO `loginsystem` (`IDs`, `Users`, `Passwords`, `Emails`, `Ranks`) VALUES
(1, 'Gabriel', 'Mariano', 'mariano.gabriel.persano@gmail.com', 1),
(3, 'Roberto', 'Mariano', 'Roberto@gmail.com', 2),
(4, 'GianCarlo', 'Carlo', 'Gian@gmail.com', 2),
(5, 'Lucas', '12345', 'Lucas@gmail.com', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `msglist`
--

CREATE TABLE `msglist` (
  `ID` int(255) NOT NULL,
  `NombreyApellido` varchar(255) NOT NULL,
  `Email` varchar(255) NOT NULL,
  `Mensaje` varchar(5000) NOT NULL,
  `Status` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='Lista de Mensajes Nosotroshtml';

--
-- Volcado de datos para la tabla `msglist`
--

INSERT INTO `msglist` (`ID`, `NombreyApellido`, `Email`, `Mensaje`, `Status`) VALUES
(2, 'qweqwee', 'qweqweqweqweewq@gmail.com', 'qweqweqweqwe', 'Respondido. 3'),
(3, 'Gabriel', 'Gabriel@Gmail.com', 'testhardcodeado', 'No Respondido.'),
(5, 'Carla', 'Carla@gmail.com', 'AGUANTE EL CUARTETO DE NOS AMEO', 'No Respondido.'),
(6, 'Roberto', 'Roberto@gmail.com', 'asdasasdasd\r\n', 'No respondido.'),
(7, 'Giancarlo', 'Giancarlo@gmail.com', 'Aguante Rammstein', 'No Respondido.');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `loginsystem`
--
ALTER TABLE `loginsystem`
  ADD PRIMARY KEY (`IDs`);

--
-- Indices de la tabla `msglist`
--
ALTER TABLE `msglist`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `loginsystem`
--
ALTER TABLE `loginsystem`
  MODIFY `IDs` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `msglist`
--
ALTER TABLE `msglist`
  MODIFY `ID` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
