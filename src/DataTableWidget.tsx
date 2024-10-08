import React from 'react'
import { ReactWidget } from '@jupyterlab/ui-components';
import DataObejct from './DataObject';
import DataTable from './DataTable';

export class DataTableWidget extends ReactWidget {
    private data: DataObejct[] = [];
    constructor() {
        super();
        this.loadData();
    }

    async loadData() {
        // we need to load data from an API endpoint
        this.data = [
            { id: 1, name: 'annotated-types', version: '0.7.0' },
            { id: 2, name: 'anyio', version: '4.6.0' },
            { id: 3, name: 'appnope', version: '0.1.4' },
            { id: 4, name: 'argon2-cffi', version: '23.1.0' },
            { id: 5, name: 'argon2-cffi-bindings', version: '21.2.0' },
            { id: 6, name: 'arrow', version: '1.3.0' },
            { id: 7, name: 'asttokens', version: '2.4.1' },
            { id: 8, name: 'async-lru', version: '2.0.4' },
            { id: 9, name: 'attrs', version: '24.2.0' },
            { id: 10, name: 'Babel', version: '2.14.0' }
        ];

        var response = await fetch('/v3/pip-list');
        if (!response.ok) {
            console.log("Error ocurred in loading data.");
        }

        var tableData = await response.json();
        this.data = tableData.map((pkg: any, index: number) => ({
            id: index + 1,
            name: pkg.name,
            version: pkg.version
        }));
    }

    render(): JSX.Element {
        return <DataTable data={this.data} />
    }
}