import wallpaper from '../assets/images/wallpaper.jpeg';
import { Shoes } from '../components/Shoes';

import shoes from '../assets/images/1.png';

import '../styles/home.scss';

export function Home() {
    let listShoes: string[] = [
        'src/assets/images/1.png',
        'src/assets/images/2.png',
        'src/assets/images/3.png',
        'src/assets/images/4.png',
        'src/assets/images/5.png',
        'src/assets/images/6.png',
        'src/assets/images/7.png',
        'src/assets/images/8.png',
    ];

    console.log(listShoes[0])
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

                    <Shoes shoes={shoes} />
                    <Shoes shoes={shoes} />
                    <Shoes shoes={shoes} />
                    <Shoes shoes={shoes} />
                    <Shoes shoes={shoes} />
                    <Shoes shoes={shoes} />
                    <Shoes shoes={shoes} />
                    <Shoes shoes={shoes} />
                </div>
            </main>
        </div>
    );
}