import React from 'react';

const CommercialContact = (props) => {

    return (
        <div className="commercial-contact">
            <h1 className="commercial-contact__title">
                <span className="commercial-contact__bullet"></span> Contacto Comercial
            </h1>
            <div className="commercial-contact__wrapper">
                {props.children}
            </div>

        </div>
    )

};

export default CommercialContact;