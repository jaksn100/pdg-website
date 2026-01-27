'use client';

import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';
import './rich-text.css';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

interface RichTextEditorProps {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    style?: React.CSSProperties;
}

const modules = {
    toolbar: [
        ['bold', 'italic', 'underline'],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
        ['link'],
        ['clean']
    ],
};

const formats = [
    'bold', 'italic', 'underline',
    'list', 'bullet',
    'link',
];

export default function RichTextEditor({ value, onChange, placeholder, style }: RichTextEditorProps) {
    return (
        <div className="rich-text-editor" style={style}>
            <ReactQuill
                theme="snow"
                value={value}
                onChange={onChange}
                modules={modules}
                formats={formats}
                placeholder={placeholder}
            />
        </div>
    );
}
