import React from 'react';
import PropTypes from 'prop-types';

function OrderCard({ card, onClickPlus, onClickMinus }) {
    const classes = [];

    if (card.count !== 0) {
        classes.push('active');
    } else if (card.count === 0) {
        classes.pop('active');
    }

    return (
        <div className={'order__card' + ' ' + classes.join(' ')}>
            <h4 className="order__card__title">{card.title}</h4>
            <div className="order__card__content">
                <div className="order__card__counter">
                    <button
                        className="order__card__counter-btn"
                        onClick={() => {
                            onClickMinus(card.id);
                        }}>
                        <span>-</span>
                    </button>
                    <p className="order__card__counter-number">{card.count}</p>
                    <button
                        className="order__card__counter-btn"
                        onClick={() => {
                            onClickPlus(card.id);
                        }}>
                        <span>+</span>
                    </button>
                </div>
                <div className="order__card__price">{card.price} грн</div>
            </div>
        </div>
    );
}

OrderCard.propTypes = {
    card: PropTypes.object.isRequired,
    onClickPlus: PropTypes.func.isRequired,
    onClickMinus: PropTypes.func.isRequired,
};

export default OrderCard;
