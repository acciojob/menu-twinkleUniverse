
import React, { useState, useEffect } from "react";


const DisplayMenu = ({ data, selection }) => {
    const [menu, setMenu] = useState(data);

    useEffect(() => {
        if (selection === 1) {
            setMenu(data);

        } else if (selection === 2) {
            setMenu(data.filter((dish) => dish.category === 'breakfast'));

        } else if (selection === 3) {
            setMenu(data.filter((dish) => dish.category === 'lunch'));
        } else if (selection === 4) {
            setMenu(data.filter((dish) => dish.category === 'shakes'));
        }

    }, [data, selection]);
    console.log(menu)
    console.log(selection)

    return (
        <div id="container">
            {
                menu.map(item => (
                    <div key={item.id} className="menu">
                        <img src={item.img} />
                        <div className="info">
                            <div className="price">
                                <h4>{item.title}</h4>
                                <span>{`$ ${item.price}`}</span>
                            </div>
                            <hr/>
                            <p>{item.desc}</p>
                        </div>

                    </div>
                ))
            }

        </div>

    );
}

export default DisplayMenu;