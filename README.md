# P2P Messenger

## Technologies utilisées

Les technologies utlisées sont celles du MEAN stack, soit MongoDB, Express, AngularJS, et NodeJS. Il y a aussi utilisation de jQuery pour la manipulation du DOM.

Pour la gestion du P2P, j'ai choisi PeerJS , qui permet d'aisément envoyer des messages entre deux utilisateurs, ainsi que des médias

### NodeJS et Express

J'ai choisi NodeJS avec Express afin de créer un serveur car cela me permet de facilement moduler mon serveur et de facilement créer des API et de communiquer avec la base de données. 

### socket.io

Avec l'utilisation de socket.io qui présente une implémentation assez simple dans Node, je peux facilement mettre à jour en direct la liste des utilisateurs en ligne.

### PeerJS

Peer propose un module pour Node qui me permet de créer mon propre serveur Peer. L'implémentation côté client est aussi assez simple et permet d'envoyer des messages ainsi que des médias.

### MongoDB

J'ai choisi MongoDB plus que d'autres bases de données car il est assez facile de communiquer avec une base Mongo à partir de Node grâce au plugin Mongoose qu'avec d'autres bases de données

### AngularJS

AngularJS me permet de facilement utiliser les API mises en place avec Node, et je peux aussi aisément réaliser des filtres avec le data-binding.