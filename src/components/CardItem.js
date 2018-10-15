import React from "react"
import { Card, Checkbox } from "semantic-ui-react";


const CardItem = ({ item, className, handleSelectItem, subItems, hasSubItems, inArray }) => {

    const cardClass = hasSubItems ? "card-item no-click" : `card-item ${className ? className : ''} ${inArray ? 'selected' : ''}`

    return (
        <Card onClick={() => handleSelectItem(item)} className={cardClass}>
            <Card.Content>
                <Card.Header>{item.name}</Card.Header>
                <Card.Meta>{item.price}</Card.Meta>
                <Card.Description>{item.description}</Card.Description>
            </Card.Content>
            {
                hasSubItems && subItems && <Card.Content extra>
                    {subItems.map(sub => sub.map(hore => {
                        if (hore.parent === item.name) return <div style={{ padding: '.3em 0' }}><Checkbox label={hore.name} /></div>
                    }))}
                </Card.Content>
            }
        </Card>
    )
}

export default CardItem