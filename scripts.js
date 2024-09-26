
// Cria uma array vazia para armazenar os produtos adicionados ao carrinho
let cart ??? 

// Seleciona todos os botões de adicionar ao carrinho
const addItem??? = document.???('???');

// Seleciona o elemento onde os itens do carrinho serão mostrados
const cartItems = document.???('cart-???');

// Seleciona o parágrafo onde será exibido o preço total
const totalPriceElement = ???.getElementById('total-???');

// Seleciona o botão de finalizar compra
const checkoutButton = document.getElementById('checkout');

// Função para atualizar o carrinho de compras e o preço total
function updateCart() {
    // Limpa o conteúdo atual da lista de itens do carrinho
    cartItems.??? = '';

    // Variável para armazenar o total do preço
    let total = ???;

    // Percorre todos os itens do carrinho
    cart.forEach(item => {
        // Cria um elemento <li> para cada produto no carrinho
        const li = ???.createElement('???');
        li.text??? = `${item.name} - R$ ${item.price.toFixed(2)}`;
        cartItems.appendChild(li);

        // Adiciona o preço do produto ao total
        total += item.???;
    });

    // Atualiza o total no HTML
    total???Element.textContent = `Total: R$ ${total.toFixed(2)}`;
}

// Adiciona um evento de clique para cada botão de adicionar ao carrinho
addItemCarrinho.forEach(button => {
    button.addEventListener('click', function() {
        // Obtém o nome e o preço do produto a partir dos atributos 'data' do botão
        const productName = this.getAttribute('data-name');
        const productPrice = parseFloat(this.getAttribute('data-price'));

        // Cria um objeto para representar o produto e o adiciona à array 'cart'
        const product = {
            name: productName,
            ???: productPrice
        };
        cart.push(product);

        // Atualiza o carrinho na interface
        updateCart();
    });
});

// Adiciona um evento de clique ao botão de finalizar compra
checkoutButton.addEventListener('click', function() {
    // Verifica se o carrinho está vazio
    if (cart.length === 0) {
        alert('Seu carrinho está vazio.');
    } ??? {
        alert(`Compra finalizada! Total: R$ ${totalPriceElement.textContent}`);
        // Limpa o carrinho após a compra
        ??? = [ ];
        updateCart( );
    }
});