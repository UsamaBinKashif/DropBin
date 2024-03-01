import { FileType } from '@/lib/types/typings';
import * as React from 'react';
import { Button } from '../ui/button';
import { DataTable } from './Table';
import { columns } from './columns';

interface FileProps {
    skeletonFiles: FileType[];
}

const TableWrapper: React.FunctionComponent<FileProps> = ({ skeletonFiles }) => {
    return (
        <div className='space-y-5'>
            {/* <Button>
                Sort by...
            </Button> */}

            <DataTable columns={columns} data={skeletonFiles} />
        </div>
    )
};

export default TableWrapper;
