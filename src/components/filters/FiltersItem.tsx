import { FC } from 'react';

export const FiltersItem: FC = ({ index, item, handleValueChange }) => {
    return (
        <div className="filter-item">
            {item.type === 'select'
                && <select
                    value={item.value}
                    onChange={(e) => handleValueChange({ value: e.target.value, index })}
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
                                onChange={(e) => handleValueChange({ value: e.target.value, index })}
                            />
                        ))}
                    </div>
                </div>
            }
        </div>
    )
};
