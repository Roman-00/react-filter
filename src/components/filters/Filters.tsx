import React, { FC } from 'react';
import { getData } from '@/api/filters';
import { FiltersItem } from './FiltersItem';

const Filters: () => JSX.Element = () => {
    const [data, setData] = React.useState([]);

    React.useEffect(() => {
        getData()
            .then((res) => {
                setData(res);
            })
    }, []);

    /**
     * Обновляем значения данных в data
     */
    const update = (newValue, index, type, name) => {
        if(type === 'select') {
            data[index].value = newValue;
        } else if(type === 'group') {
            const newElements = [...data[index].elements];
            const targetElementValue = newElements.find(item => item.name === name);
            targetElementValue.value = newValue;
            const withOutTargetElementValue = newElements.filter(item => item.name !== name);
            withOutTargetElementValue.push(targetElementValue);
        }
        setData(data)
    };

    const handleValueChange = ({ value, index, type, name }) => {
        update(value, index, type, name);
    };

    return (
        <div className="filters">
            {data?.map((item, index) => (
                <FiltersItem
                    item={item}
                    index={index}
                    key={index}
                    handleValueChange={handleValueChange}
                />
            ))}
        </div>
    )
};

export default Filters;
