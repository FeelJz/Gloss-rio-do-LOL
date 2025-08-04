import React, { useState } from 'react';

// Dados do glossário (extraídos do aplicativo original)
const glossaryData = [
    { term: "Split Push", definition: "A estratégia de um campeão que empurra uma rota lateral sozinho para criar pressão e forçar os inimigos a se dividirem." },
    { term: "Gank", definition: "Um ataque surpresa de um campeão a uma rota que não é a sua, geralmente para ajudar um aliado a garantir uma eliminação." },
    { term: "Farm", definition: "A aquisição de ouro e experiência ao dar o 'last-hit' em tropas e monstros." },
    { term: "Peel", definition: "Ação de proteger um aliado de alto valor (como um atirador) afastando os campeões inimigos." },
    { term: "CC (Crowd Control)", definition: "Habilidades que limitam a movimentação ou ações de campeões inimigos, como stuns e slows." },
    { term: "Macro", definition: "Estratégia e tomada de decisão de alto nível, incluindo controle de objetivos e rotação pelo mapa." },
    { term: "Micro", definition: "A proficiência mecânica de um jogador com seu campeão, incluindo combos, last-hitting e esquiva de habilidades." },
    { term: "Barão (Baron)", definition: "Um objetivo épico que concede um buff poderoso ao time que o abate, fortalecendo as tropas e dando bônus de dano de ataque e poder de habilidade." },
    { term: "Dragão (Dragon)", definition: "Objetivos épicos que concedem bônus permanentes e um 'Alma de Dragão' ao time que os abate." },
    { term: "Herald (Arauto)", definition: "Um objetivo épico que pode ser usado para dar um grande impulso ao empurrar uma rota, especialmente para derrubar torres." },
    { term: "Wave Management", definition: "A arte de manipular a posição e o tamanho da onda de minions na rota para criar uma vantagem estratégica." },
    { term: "Poke", definition: "Causar dano a distância ao inimigo para enfraquecê-lo antes de uma luta ou para forçá-lo a recuar." },
    { term: "Engage", definition: "Ato de iniciar uma luta de equipe, geralmente com habilidades de controle de grupo ou alto impacto." },
    { term: "Disengage", definition: "Ato de se afastar de uma luta ou impedir que o inimigo inicie, usando habilidades de controle de grupo ou movimento." },
    { term: "Scaling", definition: "A capacidade de um campeão se tornar mais forte e influente à medida que o jogo avança e ele adquire mais ouro, experiência e itens." },
    { term: "Burst", definition: "A capacidade de um campeão causar uma grande quantidade de dano em um curto período de tempo, geralmente para abater um inimigo rapidamente." },
    { term: "Snowball", definition: "O efeito de bola de neve, onde uma pequena vantagem inicial (como uma eliminação ou objetivo) se transforma em uma vantagem cada vez maior, tornando o time mais forte." },
    { term: "Zoning", definition: "Ato de controlar uma área do mapa ou uma rota, impedindo que os inimigos se aproximem para farmar ou participar de lutas." },
    { term: "Roam", definition: "Ato de um campeão sair de sua rota para ajudar outras rotas ou participar de objetivos no mapa." },
    { term: "Trade", definition: "Uma troca de dano ou recursos entre dois ou mais campeões na rota." },
    { term: "CC Chain", definition: "Uma sequência de habilidades de controle de grupo aplicadas a um inimigo, mantendo-o incapacitado por um longo período." },
    { term: "Vision Control", definition: "A estratégia de colocar e remover sentinelas para obter e negar visão do mapa, crucial para a tomada de decisões." }
];

const App = () => {
    // Estado para o termo de busca do glossário
    const [searchTerm, setSearchTerm] = useState('');

    // Lógica para filtrar o glossário em tempo real
    const handleSearch = (e) => {
        setSearchTerm(e.target.value.toLowerCase());
    };

    // Filtra os termos do glossário com base no termo de busca
    const filteredGlossary = glossaryData.filter(item => 
        item.term.toLowerCase().includes(searchTerm) || 
        item.definition.toLowerCase().includes(searchTerm)
    );

    // Renderiza a lista de termos do glossário
    const renderGlossaryList = () => {
        if (filteredGlossary.length === 0) {
            return <p className="text-center text-gray-500 italic mt-8">Nenhum termo encontrado.</p>;
        }
        return (
            <div id="glossary-list" className="space-y-4">
                {filteredGlossary.map((item, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg shadow-sm border border-[#E08D3F]/50">
                        <h3 className="font-bold text-[#E0674A]">{item.term}</h3>
                        <p className="mt-1">{item.definition}</p>
                    </div>
                ))}
            </div>
        );
    };

    return (
        <div className="bg-[#8F8174] text-[#61504C] min-h-screen font-sans">
            {/* Estilos CSS incorporados para a aplicação */}
            <style>{`
                body {
                    margin: 0;
                    font-family: 'Inter', sans-serif; /* Usando a fonte Inter */
                }
            `}</style>
            <header className="bg-[#61504C] text-[#8F8174] shadow-lg py-3">
                <nav className="container mx-auto px-6">
                    <h1 className="text-xl md:text-2xl font-bold text-white text-center">Glossário de League of Legends</h1>
                </nav>
            </header>
    
            <main className="container mx-auto p-4 md:p-8">
                <section id="glossary" className="content-section">
                    <div className="bg-white/50 p-6 rounded-lg shadow-md">
                        <h2 className="text-3xl font-bold text-[#E0674A] mb-4">Glossário Essencial</h2>
                        <p className="mb-4">A linguagem de League of Legends é rica em termos específicos. Use a busca abaixo para encontrar rapidamente a definição de qualquer jargão do jogo.</p>
                        <input
                            type="text"
                            id="glossary-search"
                            placeholder="Buscar termo..."
                            className="w-full p-2 border border-[#E08D3F] rounded-lg mb-6 focus:ring-2 focus:ring-[#829BE0] focus:border-transparent"
                            onChange={handleSearch}
                            value={searchTerm}
                        />
                        {renderGlossaryList()}
                    </div>
                </section>
            </main>
        </div>
    );
};

export default App;
