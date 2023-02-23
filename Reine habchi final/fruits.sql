CREATE TABLE `products` (
  `ProductId` int(11) NOT NULL,
  `ImageSrc` varchar(100) NOT NULL,
  `ProductName` varchar(100) NOT NULL,
  `Description` varchar(1000) NOT NULL,
  `Price` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `products` (`ProductId`, `ImageSrc`, `ProductName`, `Description`, `Price`) VALUES
(1, '././assets/fruit1.webp', 'Oranges', 'a round usually sweet juicy fruit with a yellowish to reddish orange rind. : any of various small evergreen citrus trees having shiny leaves, fragrant white flowers, and fruits which are oranges. : a color between red and yellow. orange.', 3),
(2, '././assets/fruit2.webp', 'Lemon', 'The lemon is a round, slightly elongated fruit, it has a strong and resistant skin, with an intense bright yellow colour when it is totaly ripe, giving off a special aroma when it is cut. The pulp is pale yellow, juicy and acid, divided in gores.', 3.5),
(3, '././assets/fruit3.webp', 'Carrot', 'carrot, (Daucus carota), herbaceous, generally biennial plant of the Apiaceae family that produces an edible taproot. Among common varieties root shapes range from globular to long, with lower ends blunt to pointed. Besides the orange-coloured roots, white-, yellow-, and purple-fleshed varieties are known.', 3),
(4, '././assets/fruit4.webp', 'Apple', 'the fleshy usually rounded and red, yellow, or green edible pome fruit of a tree (genus Malus) of the rose family.', 5),
(5, '././assets/fruit5.webp', 'Banana', 'A banana is a curved, yellow fruit with a thick skin and soft sweet flesh. If you eat a banana every day for breakfast, your roommate might nickname you \"the monkey.\" A banana is a tropical fruit that is quite popular all over the world. It grows in bunches on a banana tree.', 4),
(6, '././assets/fruit6.webp', 'Strawberry', 'A strawberry is both a low-growing, flowering plant and also the name of the fruit that it produces. Strawberries are soft, sweet, bright red berries. They are also delicious. Strawberries have tiny edible seeds, which grow all over their surface. When ripe, strawberries smell wonderful and taste even better.', 5);

CREATE TABLE `users` (
  `userid` int(11) NOT NULL,
  `fullname` varchar(100) NOT NULL,
  `email` varchar(50) NOT NULL,
  `phone` varchar(25) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `users` (`userid`, `fullname`, `email`, `phone`, `username`, `password`) VALUES
(6, 'Reine Habchi', '82030156@students.liu.edu.lb', '+96176416854', 'reine123', 'angularcli123');