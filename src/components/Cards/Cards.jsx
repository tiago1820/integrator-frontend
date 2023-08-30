import Card from '../Card/Card';

export default function Cards({ characters, onClose }) {

    return <div>
        {
            characters.map(({ id, name, species, gender, image }) =>
                <Card
                    key={id}
                    id={id}
                    name={name}
                    species={species}
                    gender={gender}
                    image={image}
                    onClose={onClose}
                />)
        }
    </div>;
}