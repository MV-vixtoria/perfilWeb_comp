const ctx = document.getElementById('myPieChart').getContext('2d');

const myPieChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Manhã (6h às 12h)', 'Tarde (12h às 18h', 'Madrugada (0h às 6h)', 'Noite (18h às 24h'],  // Nomes personalizados
        datasets: [{
            label: 'Meu Gráfico de Pizza',
            data: [100, 90, 150, 200],
            backgroundColor: [
                '#640F14',                  // Primeira cor
                '#49070A',                  // Segunda cor
                '#791227',                  // Terceira cor
                'rgba(121, 18, 39, 0.81)'   // Quarta cor com 81% de opacidade
            ],
            borderColor: 'transparent',    // Remove a cor da borda
            borderWidth: 0                  // Define a largura da borda como 0 
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    boxHeight: 20,
                    boxWidth: 20,
                    usePointStyle: true,
                    padding: 20,               // Aumenta o espaço entre os itens
                },
                
                onClick: (e) => e.stopPropagation(), // Para evitar a interação com os cliques
            }
        },
        layout: {
            padding: {
                top: 20,                    // Espaço acima do gráfico
                bottom: 20                  // Espaço abaixo do gráfico
            }
        }
    }
});
