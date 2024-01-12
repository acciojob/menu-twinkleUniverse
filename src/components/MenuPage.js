
/*import React, { useState, useEffect } from "react";


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
        <div id="categories">
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

export default DisplayMenu;*/


import React from "react";
import { useState } from "react";

const MenuPage = (props) => {
  const [Details, setDetails] = useState(props.Details);

  return (
    <div>
      <main id="categories" className="main">
        <div
          onClick={() => {
            setDetails([...props.Details]);
          }}
        >
          All
        </div>
        <div
          data-test-id="menu-item-breakfast"
          className="filter-btn-1"
          onClick={() => {
            setDetails(
              props.Details.filter((dish) => dish.category == "breakfast")
            );
          }}
        >
          Breakfast
        </div>
        <div className="filter-btn-2"
          data-test-id="menu-item-lunch"
          onClick={() => {
            setDetails(
              props.Details.filter((dish) => dish.category == "lunch")
            );
          }}
        >
          Lunch
        </div>
        <div
          className="filter-btn-3"
          data-test-id="menu-item-shakes"
          onClick={() => {
            setDetails(
              props.Details.filter((dish) => dish.category === "shakes")
            );
          }}
        >
          Shakes
        </div>
      </main>
      <div id="menu-details">
        {Details &&
          Details.map((obj) => {
            return (
              <div className="food">
                {/* {console.log(obj.img)} */}
                <div className="food-details">
                  <img src={obj.img} alt="img" />
                  <div>
                    <h3>{obj.title}</h3>
                    <strong>{obj.price}</strong>
                  </div>
                  <p>{obj.desc}</p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};
export default MenuPage;
