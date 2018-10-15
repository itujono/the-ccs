import React from "react"
import { Card, Checkbox, Popup } from "semantic-ui-react";


const CardItem = ({ item, className, handleSelectItem, subItems, hasSubItems, inArray, onChangeItem }) => {

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
                        if (hore.parent === item.name) {
                            return <div key={hore.id} style={{ padding: '.3em 0' }}>
                                <Popup
                                    trigger={
                                        <React.Fragment>
                                        <Checkbox label={hore.name} onChange={() => onChangeItem(hore)} /> - <span>Rp {hore.price},00</span>
                                        </React.Fragment>
                                    }
                                    content={hore.description}
                                    inverted
                                />
                                {/* <Checkbox label={hore.name} onChange={() => onChangeItem(hore)} /> - <span>Rp {hore.price},00</span> */}
                            </div>
                        }
                    }))}
                </Card.Content>
            }
        </Card>
    )
}

export default CardItem