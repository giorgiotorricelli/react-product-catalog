import Card from "./Card.jsx";

function Cards_wrapper({ lista }) {


    return (
        <div className="container">
            <div className="cards-wrapper row">
                {lista.map(current => {
                    return <Card singleProduct={current} key={current.id}/>
                })}
            </div>
        </div>

    );
}

export default Cards_wrapper