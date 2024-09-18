document.getElementById('inserirBtn').addEventListener('click', function() {
    // Função para o botão Inserir
    alert('Novo usuário será inserido.');
    // Limpa o formulário
    document.getElementById('codigo').value = '';
    document.getElementById('nome').value = '';
    document.getElementById('sobrenome').value = '';
    document.getElementById('email').value = '';
    document.getElementById('senha').value = '';
});

document.getElementById('editarBtn').addEventListener('click', function() {
    // Função para o botão Editar
    alert('Modo de edição ativado. Modifique os campos e clique em salvar.');
});

document.getElementById('excluirBtn').addEventListener('click', function() {
    // Função para o botão Excluir
    const confirmDelete = confirm('Tem certeza que deseja excluir este usuário?');
    if (confirmDelete) {
        alert('Usuário excluído com sucesso.');
        // Aqui você pode adicionar a lógica para remover o usuário.
    }
});

const menuItems = document.querySelectorAll('.menu-item');

menuItems.forEach(item => {
  item.addEventListener('click', () => {
    // Remove a classe 'active' de todos os itens
    menuItems.forEach(item => item.classList.remove('active'));

    // Adiciona a classe 'active' ao item clicado
    item.classList.add('active');
  });
});



