import Cake from "./Cake";

const CakeList = ({ cakes }) => {
    const cakeComponent = cakes.map((cake, index) => {
        return <Cake cake={cake} key={index} />
    });

    return (
        <>
            <ul className="cakes">{cakeComponent}</ul>
        </>
    );
}

export default CakeList;