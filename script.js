// Gráficos usando Chart.js

const usersCtx = document.getElementById('usersChart').getContext('2d');
const usersChart = new Chart(usersCtx, {
    type: 'bar',
    data: {
        labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
        datasets: [{
            label: 'Usuários',
            data: [1000, 2000, 1500, 2200, 1900, 1700, 2300, 2400, 1800, 2100, 2500, 2700],
            backgroundColor: '#FF6F61'
        }]
    }
});

const panicButtonCtx = document.getElementById('panicButtonChart').getContext('2d');
const panicButtonChart = new Chart(panicButtonCtx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
        datasets: [{
            label: 'Botões de Pânico',
            data: [400, 450, 500, 480, 530, 520, 550, 570, 610, 600, 630, 640],
            borderColor: '#FF6F61',
            fill: false
        }]
    }
});

const dangerousTimesCtx = document.getElementById('dangerousTimesChart').getContext('2d');
const dangerousTimesChart = new Chart(dangerousTimesCtx, {
    type: 'pie',
    data: {
        labels: ['Manhã (6h às 12h)', 'Tarde (12h às 18h)', 'Noite (18h às 24h)', 'Madrugada (0h às 6h)'],
        datasets: [{
            data: [1500, 1200, 2200, 961],
            backgroundColor: ['#FF6F61', '#FF9966', '#FFCC99', '#660000']
        }]
    }
});

// Feedback - exemplo dinâmico
const feedbackData = [
    { usuario: "Ana Oliveira", mensagem: "Adorei o botão de pânico! Me sinto muito mais segura.", status: "ANALISADO", data: "29/03/2025" },
    { usuario: "Sofia Almeida", mensagem: "Sinto falta de mais opções de personalização.", status: "REJEITADO", data: "05/02/2025" },
    { usuario: "Alice Vitória", mensagem: "Uma função de chat otimizada com outros usuários seria interessante.", status: "PENDENTE", data: "30/01/2025" },
    { usuario: "Sofia Helena", mensagem: "O design do app é muito intuitivo e fácil de usar.", status: "ANALISADO", data: "11/01/2025" }
];

function loadFeedback() {
    const feedbackTable = document.getElementById('feedbackTable');
    feedbackData.forEach(item => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${item.usuario}</td>
            <td>${item.mensagem}</td>
            <td class="status-${item.status.toLowerCase()}">${item.status}</td>
            <td>${item.data}</td>
        `;
        
        feedbackTable.appendChild(row);
    });
}

window.onload = function() {
    loadFeedback();
};



