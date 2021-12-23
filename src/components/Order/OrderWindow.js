import React from 'react';
import PropTypes from 'prop-types';

import OrderCard from './OrderCard';
import BtnCross from '../BtnCross/BtnCross';

function OrderWindow() {
    const [orderCards, setOrderCards] = React.useState([
        { id: 1, title: 'Имбирные конфеты с апельсином', price: '26', count: 0 },
        { id: 2, title: 'Апельсиновые конфеты с орехами', price: '20', count: 0 },
        { id: 3, title: 'Имбирные конфеты с орехами', price: '30', count: 0 },
        { id: 4, title: 'Лимонные конфеты с мёдом', price: '20', count: 0 },
        { id: 5, title: 'Клюквенные конфеты', price: '20', count: 0 },
        { id: 6, title: 'Конфеты с брусникой и мёдом', price: '26', count: 0 },
    ]);

    let totalCount = 0;
    let totalPrise = 0;
    orderCards.map((card) => {
        totalCount = totalCount + card.count;
        totalPrise = totalPrise + card.count * card.price;
    });

    function onIncrease(id) {
        setOrderCards(
            orderCards.map((card) => {
                if (card.id === id) {
                    card.count++;
                }
                return card;
            }),
        );
    }

    function onDecrease(id) {
        setOrderCards(
            orderCards.map((card) => {
                if (card.id === id && card.count > 0) {
                    card.count--;
                }
                return card;
            }),
        );
    }

    return (
        <div className="mask">
            <div className="order">
                <div className="container">
                    <div className="order__inner">
                        <div className="order__header">
                            <BtnCross></BtnCross>
                        </div>
                        <div className="order__content">
                            {orderCards.map((card) => {
                                return (
                                    <OrderCard
                                        card={card}
                                        key={card.id}
                                        onClickPlus={onIncrease}
                                        onClickMinus={onDecrease}></OrderCard>
                                );
                            })}
                        </div>
                        <div className="order__controls">
                            <div className="order__controls__buttons">
                                <button className="order__controls-btn">Онлайн заказ</button>
                                <button className="order__controls-price">
                                    {totalCount} шт / {totalPrise} грн
                                </button>
                            </div>
                            <div className="order__controls__link">
                                <a>Заказ по телефону</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

OrderWindow.propTypes = {
    onIncrease: PropTypes.func.isRequired,
    onDecrease: PropTypes.func.isRequired,
};

export default OrderWindow;
