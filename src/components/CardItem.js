import React from "react"
import { Card, Checkbox, Popup } from "semantic-ui-react";


const CardItem = ({ item, className, handleSelectItem, inArray }) => {

    const cardClass = `card-item ${className ? className : ''} ${inArray ? 'selected' : ''}`

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