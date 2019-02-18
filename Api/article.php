-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Feb 18, 2019 at 03:43 PM
-- Server version: 5.7.23
-- PHP Version: 7.2.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `app`
--

-- --------------------------------------------------------

--
-- Table structure for table `article`
--

CREATE TABLE `article` (
  `id` int(11) NOT NULL,
  `intitule_article` varchar(100) NOT NULL,
  `image` varchar(255) NOT NULL COMMENT 'url',
  `contenu` mediumtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `article`
--

INSERT INTO `article` (`id`, `intitule_article`, `image`, `contenu`) VALUES
(1, 'papa gaga ', '', ''),
(2, 'mama gaga', '', ''),
(3, 'Se limiter, c’est la clé', '', 'L’arrivée d’un enfant changera votre vie, ça c’est une évidence. Mais votre quotidien est aussi modifié pendant les 9 mois de grossesse. Certaines choses sont interdites ou fortement déconseillées, mais il ne faut pas les voir comme une privation de liberté, ce sont au contraire les fondements du début d’une vie remplie de multiples possibilités. Voici donc la liste non exhaustive des restrictions à appliquer lors d’une grossesse.\r\nTabac, drogue et alcool : les censurés\r\nOn l’entend partout, on vous l’a dit et répété et on en rajoute une couche : cigarettes, drogues et alcool ne font pas bon ménage avec la grossesse. En effet, l’absorption de l’un de ses produits, même en petite quantité, augmente considérablement les risques de problèmes physiques et mentaux du petit être que vous portez. Les conséquences sont immédiates et perpétuelles, et touchent aussi bien le développement du foetus que la vie future de l’enfant.\r\n\r\nCigarettes et boissons alcoolisées augmentent les risques de malformations, de naissance prématurée et de maladies pour l’enfant. Si vous ne fumez pas, attention tout de même au tabagisme passif qui déclenche les mêmes risques. \r\nLes drogues, dures ou douces, entraînent de lourdes conséquences au niveau physique, mais aussi mental du futur né. Celui-ci peut naître dépendant des substances ingérées pendant la grossesse, et ressentir ce manque durant sa vie entière.\r\n\r\nBannissez donc ces trois éléments de votre vie, d’autant plus qu’ils sont néfastes pour vous aussi. \r\nLe café, délicieux mais à diminuer\r\nVotre boisson matinale préférée peut vite devenir un danger pour votre futur bébé. Non on ne plaisante pas, une trop grande quantité de café durant la grossesse peut entraîner les mêmes risques que la cigarette ! Mais pas besoin pour autant d’arrêter complètement le café, simplement contentez-vous de 2 à 3 tasses par jour maximum. \r\n \r\nAttention chats contagieux\r\nNon non, ce n’est pas la peine d’abandonner votre chat si vous attendez un enfant. Cependant, des précautions sont tout de même à prendre, notamment si votre chat est libre de sortir et de rentrer à sa guise. \r\n\r\nLa toxoplasmose est une maladie que l’on peut contracter à n’importe quel moment de notre vie sans grand danger en général, mais elle peut être très néfaste pour le développement du foetus. En effet, le parasite responsable de la toxoplasmose peut causer chez le futur enfant des problèmes au niveau du cerveau, des malformations, des crises d’épilepsie et même une inflammation des yeux. Cependant, il suffit de l’avoir eu une fois pour être immunisé ! De ce fait, si vous êtes enceinte et que vous avez déjà contracté la maladie, inutile alors de prendre des précautions vis à vis de votre chat. \r\nEn revanche si ce n’est pas le cas, veillez à manipuler avec des gants la litière de votre chat, voir laisser cette tâche à quelqu’un d’autre. Il faut savoir que le chat est l’animal le plus transmetteur du parasite, mais il y a d’autres manières de l’attraper. Les légumes, fruits et viandes crues et fumées peuvent aussi transmettre cette maladie. Il faut donc bien laver les végétaux avant de les consommer, et éviter les viandes “à risque”.\r\nMédicaments + grossesse = danger potentiel\r\nOn le sait, le système immunitaire d’une femme enceinte est plus faible et celle-ci est donc plus sujette à l’infection virale ou bactérienne. Mais on sait aussi que la prise de médicaments pendant la grossesse est un risque pour le foetus. La vie n’est pas juste parfois…\r\n\r\nMais pas de panique ! Certe certains médicaments sont proscrits pendant la grossesse mais ce n’est pas le cas de tous. En effet, vous avez tout de même le droit de vous soigner, notamment avec du paracétamol. Néanmoins, ne cherchez pas à vous soignez par vous-mêmes, demandez toujours l’avis d’un spécialiste de la santé avant de prendre quoique ce soit, et lisez bien les notices et inscriptions sur les boîtes de médicaments. \r\n\r\nUne dernière petite chose, les huiles essentielles sont aussi déconseillées, la médecine naturelle n’est donc pas non plus une option. \r\nNettoyer, balayer… oui mais sans produits chimiques\r\nEnceinte ou pas, une maison propre c’est important. Mais attention car les produits ménagers sont composés de produits pouvant nuir au foetus. Afin d’éviter tout problème, regarder attentivement les étiquettes des produits. \r\nLe Soleil, un ami-ennemi\r\nAh, la bronzette ! L’été il n’y a rien de mieux. Transat et hop c’est parti pour une sieste en plein air. Oui mais attention tout de même ! \r\n\r\nCette fois, pas de problème pour le foetus mais un risque conséquent pour vous. Une exposition trop importante au Soleil, et surtout sans protection peut faire apparaître sur votre visage, ou sur toutes autres zones exposées, un “masque de grossesse”. Ce sont des tâches brunes qui, une fois qu’elles sont là, apparaissent chaque été et ne disparaissent qu’une fois la ménopause atteinte. \r\n\r\nPour éviter ça, une seule solution : se protéger du mieux possible des UV. \r\n\r\n');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `article`
--
ALTER TABLE `article`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `article`
--
ALTER TABLE `article`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
