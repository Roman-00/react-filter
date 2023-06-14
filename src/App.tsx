import { FC } from 'react';
import DefaultLayouts from '@/layouts/default';
import Filters from '@/components/filters/Filters';

const App: FC = () => (
    <div id="app">
        <DefaultLayouts>
            <Filters />
        </DefaultLayouts>
    </div>
);

export default App
