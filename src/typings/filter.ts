export type FilterItemValidatorsNumericalityType = {
    lessThanOrEqualTo: number,
    notLessThanOrEqualTo: string,
    notValid: string,
};

export type FilterItemValidatorsType = {
    numericality: FilterItemValidatorsNumericalityType,
};

export type FilterItemValuesDataType = {
    alias?: string,
    selectable: boolean,
    lat?: number,
    lon?: number,
    zoom?: number,
    id?: number,
    type?: string,
    nameIn?: string,
};

export type FilterItemElementsType = {
    label: string,
    value: null,
    default: null,
    name: string,
    type: null,
    validators: FilterItemValidatorsNumericalityType[]
}

export type FilterItemValuesType = {
    key: string,
    value: string,
    data?: FilterItemValuesDataType
};

export type FilterItemType = {
    label: string,
    value?: string,
    default?: null,
    name?: string,
    type: string,
    elements?: FilterItemElementsType[],
    validators?: FilterItemValidatorsType,
    values?: FilterItemValuesType[]
};
