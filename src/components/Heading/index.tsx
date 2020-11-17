import React from 'react';

interface Headings {
    tag: HeadingTypes;
    className?: string;
}

type HeadingTypes = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

const Heading: React.FC<Headings> = ({ children, tag: Tag, className }) => (
    <Tag className={className}>{children}</Tag>
);

export default Heading;