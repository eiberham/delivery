import React from 'react';

const CommercialContact = (props) => {

    return (
        <div className="commercial-contact">
            <h1>Contacto Comercial</h1>
            <hr/>
            <div className="commercial-contact__wrapper">
                {props.children}
            </div>

        </div>
    )

};

export default CommercialContact;