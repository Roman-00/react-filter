import React, { FC } from 'react';
import { getData } from '@/api/filters';
import { FiltersItem } from './FiltersItem';

const Filters: FC = () => {
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
    const update = (newValue, index) => {
        setData(prevData => {
            const updData = [...prevData];
            updData[index].value = newValue;

            return updData;
        })
    };

    const handleValueChange = ({ value, index }) => {
        update(value, index);
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
