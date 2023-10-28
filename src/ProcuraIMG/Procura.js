import React, { useState } from 'react';

function Procura() {
    const [catImage, setCatImage] = useState(null);

    // Função para buscar uma imagem de gato aleatória da API
    function buscar_img_Gatos() {
        fetch('https://api.thecatapi.com/v1/images/search?limit=10')
            .then((resposta) => resposta.json())
            .then((data) => {
                setCatImage(data[0]);
            });
    }

    return (
        <>
            <div className="container">
                <div className="caixa_img">
                    {catImage && (
                        <img src={catImage.url} alt="Gato Fofo XD" />
                    )}
                </div>
                <div className="button-container">
                    <button onClick={buscar_img_Gatos} className="button">
                        Clique aqui e veja outro gato(a) além de você
                    </button>
                </div>
            </div>
        </>
    );
}

export default Procura;
