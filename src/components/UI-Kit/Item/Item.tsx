import React from 'react';
interface IItemProps {
    name: string;
}
const Item: React.FC<IItemProps> = ({ name }) => {
    return (
        <div className={'item'}>
            <div className="item__title">
                <h6>Name: { name }</h6>
                <div className={'item__component'}>

                </div>
            </div>
        </div>
    );
};

export { Item };