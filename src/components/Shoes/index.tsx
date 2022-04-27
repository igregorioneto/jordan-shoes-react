import './styles.scss';

type ShoesProps = {
    shoes: string;
}

export function Shoes({ shoes }: ShoesProps) {
    return (
        <div className="shoes-listing">
            <div className="shoes">
                <img src={shoes} alt="Tênis do Jordan" />
            </div>
        </div>
    );
}