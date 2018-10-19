import React from "react"
import { Card, Checkbox, Popup } from "semantic-ui-react";


const CardItem = ({ item, className, handleSelectItem, inArray, required }) => {

    const cardClass = `card-item ${className ? className : ''} ${inArray ? 'selected' : ''}`
    const cardReq = `card-item ${className ? className : ''} ${inArray ? 'selected' : ''} ${required ? 'required' : ''}`

    if (required) {
        return <Popup
            trigger={
                <Card onClick={() => handleSelectItem(item)} className={cardReq}>
                    <Card.Content>
                        <Card.Header>{item.name}</Card.Header>
                        <Card.Meta>{item.price}</Card.Meta>
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