import wallpaper from '../assets/images/wallpaper.jpeg';
import shoes from '../assets/images/1.png';

import '../styles/home.scss';

export function Home() {
    return (
        <div id="page-home">
            <header>
                <div className="bonus">
                    <span>Ganhe R$ 10,00 de desconto no frete</span>
                </div>
                <div className="titulo-home">
                    <span>JordanShoes</span>
                </div>
            </header>
            <aside>
                <div className="background-site">
                    <img src={wallpaper} alt="Ilustração simbolizando o JordanShoes" />
                    <div className="texto-background-site">
                        <h1>A melhor loja de Jordan</h1>
                        <p>
                            O tênis Jordan é fruto de uma velha e forte
                            parceria entre a Nike e o jorgador Michael Jordan.
                        </p>
                    </div>
                </div>           
            </aside>
            <main>
                <div className="conteudo">
                    <div className="title">
                        <h2>Destaques</h2>
                        <p>Frete grátis e chinelo de brinde é aqui, aproveite por tempo limitado.</p>
                    </div>
                    <div className="shoes-listing">
                        <div className="shoes">
                            <img src={shoes} alt="Tênis do Jordan" />
                        </div>
                    </div>
                    <div className="shoes-listing">
                        <div className="shoes">
                            <img src={shoes} alt="Tênis do Jordan" />
                        </div>
                    </div>
                    <div className="shoes-listing">
                        <div className="shoes">
                            <img src={shoes} alt="Tênis do Jordan" />
                        </div>
                    </div>
                    <div className="shoes-listing">
                        <div className="shoes">
                            <img src={shoes} alt="Tênis do Jordan" />
                        </div>
                    </div>
                    <div className="shoes-listing">
                        <div className="shoes">
                            <img src={shoes} alt="Tênis do Jordan" />
                        </div>
                    </div>
                    <div className="shoes-listing">
                        <div className="shoes">
                            <img src={shoes} alt="Tênis do Jordan" />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}