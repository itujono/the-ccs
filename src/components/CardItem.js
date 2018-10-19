import React from "react"
import { Card, Popup } from "semantic-ui-react";


const CardItem = ({ item, className, handleSelectItem, inArray, required, subItemsRequired }) => {

    const cardClass = `card-item ${className ? className : ''} ${inArray ? 'selected' : ''}`
    const cardReq = `card-item ${className ? className : ''} ${inArray ? 'selected' : ''} ${subItemsRequired || required ? 'required' : ''}`
    const itemPrice = item.price !== 0 || item.price !== null ? item.price : 'Gratis!'

    if (subItemsRequired || required) {
        return <Popup
            trigger={
                <Card onClick={() => handleSelectItem(item)} className={cardReq}>
                    <Card.Content>
                        <Card.Header>{item.name}</Card.Header>
                        <Card.Meta>{itemPrice}</Card.Meta>
                        <Card.Description>{item.description}</Card.Description>
                    </Card.Content>
                </Card>}
            content="Fitur ini wajib ada"
            inverted
        />
    }

    return (
        <Card onClick={() => handleSelectItem(item)} className={cardClass}>
            <Card.Content>
                <Card.Header>{item.name}</Card.Header>
                <Card.Meta>{item.price}</Card.Meta>
                <Card.Description>{item.description}</Card.Description>
            </Card.Content>
        </Card>
    )
}

export default CardItem