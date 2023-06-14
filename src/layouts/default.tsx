import { FC, PropsWithChildren } from 'react';

const DefaultLayouts: FC<PropsWithChildren<unknown>> = ({ children }) => {
    return <div className="default-layouts">
        <div className="content">
            { children }
        </div>
    </div>
}

export default DefaultLayouts;
