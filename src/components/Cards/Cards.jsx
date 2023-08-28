import Card from '../Card/Card';

export default function Cards({ characters }) {

    return <div>
        {
            characters.map(({ id, name, species, gender, image }) =>
                <Card
                    key={id}
                    name={name}
                    species={species}
                    gender={gender}
                    image={image}
                    onClose={() => window.alert('Cierra el card')}
                />)
        }
    </div>;
}