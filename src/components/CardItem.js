import React from "react"
import { Card, Transition, Button } from "semantic-ui-react";


const CardItem = ({ item, className, handleSelectItem, selectedItem, inArray }) => {

    const matched = item.id && selectedItem && item.id === selectedItem.id
    const cardClass = `card-item ${className ? className : ''} ${matched || inArray ? 'selected' : ''}`

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