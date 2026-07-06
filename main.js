document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('toggle-net-btn');
    const body = document.body;
    const statusText = document.getElementById('status-text');
    const logoIcon = document.querySelector('.logo-icon');
    const heroTitle = document.getElementById('hero-title');
    const heroDesc = document.getElementById('hero-desc');

    // Textos alternados dinamicamente para enriquecer a experiência
    const contentData = {
        online: {
            btnText: "🔌 Desligar a Internet",
            status: "Status: Conectado à Rede Mundial",
            logo: "🌐",
            title: "E se o mundo ficasse offline para sempre?",
            desc: "Uma jornada reflexiva sobre o impacto da rede global em nossas vidas, nossa cultura e no destino da humanidade.",
            articles: [
                "Sem e-mails ou redes sociais, o serviço postal voltaria a ser o coração da comunicação humana. Como seria esperar semanas por uma resposta?",
                "Transações instantâneas, criptomoedas e bancos digitais desapareceriam. O comércio local e o dinheiro físico retomariam o controle absoluto da economia global.",
                "Lojas de discos, fitas cassete e grandes enciclopédias impressas nas estantes. A informação e o entretenimento voltariam a ter barreiras físicas e geográficas."
            ]
        },
        offline: {
            btnText: "⚡ Ligar a Internet",
            status: "Status: Erro 404 - Rede não Encontrada",
            logo: "📰",
            title: "O Dia em que a Rede Mundial Silenciou.",
            desc: "Edição Extra Imparcial. As máquinas pararam, os feeds esvaziaram e a humanidade redescobriu o valor da proximidade física.",
            articles: [
                "CRÔNICA: As agências postais registram filas históricas. O cheiro de tinta fresca e o toque do papel selam o novo pacto da comunicação social.",
                "ECONOMIA: Bolsas de valores operam via pregão viva-voz. O ouro e o papel-moeda emitido pelos bancos centrais voltam a reinar de forma soberana.",
                "CULTURA: Teatros e cinemas locais têm lotação máxima registrada. Sem algoritmos de recomendação, o público busca a arte nas ruas da cidade."
            ]
        }
    };

    let isOnline = true;

    toggleBtn.addEventListener('click', () => {
        isOnline = !isOnline;
        
        // Ativa/desativa a classe do CSS que muda as variáveis de estilo
        body.classList.toggle('analog-mode');
        
        // Seleciona os parágrafos mutáveis dos artigos
        const articleTexts = document.querySelectorAll('.article-text');

        if (isOnline) {
            // Estado Conectado (Moderno)
            toggleBtn.textContent = contentData.online.btnText;
            statusText.textContent = contentData.online.status;
            logoIcon.textContent = contentData.online.logo;
            heroTitle.textContent = contentData.online.title;
            heroDesc.textContent = contentData.online.desc;
            
            articleTexts.forEach((p, index) => {
                p.textContent = contentData.online.articles[index];
            });
        } else {
            // Estado Desconectado (Analógico/Jornal)
            toggleBtn.textContent = contentData.offline.btnText;
            statusText.textContent = contentData.offline.status;
            logoIcon.textContent = contentData.offline.logo;
            heroTitle.textContent = contentData.offline.title;
            heroDesc.textContent = contentData.offline.desc;
            
            articleTexts.forEach((p, index) => {
                p.textContent = contentData.offline.articles[index];
            });
        }
    });
});
