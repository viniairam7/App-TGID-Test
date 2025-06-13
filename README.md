# 🇧🇷 App TGID Test
🛍️ Este projeto é uma aplicação web simples desenvolvida com React. Ele simula uma loja online onde os usuários podem visualizar produtos, adicionar e remover itens de um carrinho de compras e, ao final, ver um resumo da compra. O objetivo principal é demonstrar habilidades no consumo de uma API REST, mesmo que simulada, utilizando o JSON Server.

💻 Para executar o projeto localmente, basta clonar o repositório e instalar as dependências com o comando npm install. Em seguida, é necessário criar um arquivo chamado db.json na raiz do projeto contendo os produtos. Um exemplo de conteúdo seria: uma lista de produtos com id, nome e preço. Com o arquivo pronto, basta iniciar o JSON Server com o comando json-server --watch db.json --port 3001. Esse servidor simulará a API REST que será consumida pelo React.

# 🖥️ A interface da aplicação é simples e responsiva. 
Os produtos são exibidos com nome e preço, cada um com um botão para ser adicionado ao carrinho. O carrinho, por sua vez, mostra todos os itens adicionados com a opção de removê-los individualmente. Um resumo ao lado mostra o valor total da compra e um botão de “Finalizar Compra”.

🛠️ Este projeto utiliza exclusivamente tecnologias como React, JavaScript moderno (ES6+), CSS e JSON Server. Ele foi feito com o intuito de cumprir um desafio de programação, podendo ser expandido facilmente com recursos como login, autenticação, conexão com banco de dados real e design mais elaborado.

📁 A estrutura do projeto está organizada com componentes separados para manter a manutenção e escalabilidade. Os arquivos principais estão na pasta src, com uma subpasta chamada components contendo os arquivos ProdutoList.js, Carrinho.js e ResumoCarrinho.js.

📜 O projeto é totalmente livre para uso e modificação. Está licenciado sob a Licença MIT. Sinta-se à vontade para contribuir, estudar ou adaptá-lo para seus próprios projetos.

# 🇺🇸 App TGID Test
🛍️ This project is a simple web application built using React. It simulates an online store where users can view products, add or remove items from a shopping cart, and finally see a summary of the purchase. The main goal is to demonstrate skills in consuming a REST API, even if it's a simulated one using JSON Server.

💻 To run the project locally, start by cloning the repository and installing the dependencies using the command npm install. Then, create a file called db.json at the root of the project containing a list of products. Each product should have an ID, name, and price. Once the file is ready, start the JSON Server with json-server --watch db.json --port 3001. This will simulate the REST API that React will consume.

# 🖥️ The interface is clean and responsive. 
Products are displayed with their name and price, and each has a button to add it to the cart. The cart shows all added items, with the option to remove them one by one. On the side, there's a summary showing the total purchase amount and a "Finalize Purchase" button.

🛠️ This project exclusively uses technologies such as React, modern JavaScript (ES6+), CSS, and JSON Server. It was built to fulfill a programming challenge but can easily be expanded to include features like user login, authentication, connection to a real database, or a more advanced UI design.

📁 The project is well-structured with separate components to make it maintainable and scalable. The main files are under the src folder, with a subfolder called components containing ProdutoList.js, Carrinho.js, and ResumoCarrinho.js.

📜 This project is open-source and free to use or modify. It is licensed under the MIT License. Feel free to contribute, study, or adapt it for your own use.
