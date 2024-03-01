//@ts-nocheck

"use client"

import { FileType } from "@/lib/types/typings"
import { ColumnDef } from "@tanstack/react-table"
import { FileIcon, defaultStyles } from 'react-file-icon';
import prettyBytes from "pretty-bytes"
import Link from "next/link";
import { COLOR_EXTENSION_MAP } from "@/lib/constants";


export const columns: ColumnDef<FileType>[] = [
    {
        accessorKey: "type",
        header: "type",
        cell: ({ renderValue, ...props }) => {
            const type = renderValue() as string;
            const extension: string = type.split("/")[1]

            return <div className="w-10"><FileIcon extension={extension} labelColor={COLOR_EXTENSION_MAP[extension]} {...defaultStyles[extension]} /></div>
        }
    },
    {
        accessorKey: "filename",
        header: "Filename",
    },
    {
        accessorKey: "timestamp",
        header: "Date Added",
    },
    {
        accessorKey: "size",
        header: "Size",
        cell: ({ renderValue, ...props }) => {
            return <span>{prettyBytes(renderValue() as number)}</span>
        }
    },
    {
        accessorKey: "downloadURL",
        header: "Link",
        cell: ({ renderValue, ...props }) => {
            const renderedValue = renderValue();
            const downloadLink = renderedValue !== null ? renderedValue as string : " ";
            return <Link href={downloadLink} target="_blank" className="underline text-black dark:text-white">Download</Link>
        }
    },
]
