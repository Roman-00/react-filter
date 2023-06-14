import { FC } from 'react';

export const FiltersItem: ({
                               index,
                               item,
                               handleValueChange
                           }: { index: any; item: any; handleValueChange: any }) => JSX.Element = ({ index, item, handleValueChange }) => {
    return (
        <div className="filter-item">
            {item.type === 'select'
                && <select
                    value={item.value}
                    onChange={(e) => handleValueChange({ value: e.target.value, index, type: item.type,  name: item.name})}
                >
                    {item.values.map(option => (
                        <option
                            key={option.value}
                            value={option.key}
                        >
                            { option.value }
                        </option>
                    ))}
                </select>
            }
            {item.type === 'group'
                && <div className="filter-item__group">
                    <label className="filter-item__group-label">
                        {item.label}
                    </label>

                    <div className="filter-item__group-inputs">
                        {item.elements.map(element => (
                            <input
                                key={element.name}
                                type="text"
                                value={element.value}
                                placeholder={element.label}
                                onChange={(e) => handleValueChange({ value: e.target.value, index, type: item.type, name: element.name })}
                            />
                        ))}
                    </div>
                </div>
            }
        </div>
    )
};
