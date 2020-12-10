import React from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';

const items = [
    {
        title: "What is React?",
        content: "React is a Frontend Javascript Language"
    },
    {
        title: "Why Use React?",
        content: "React is Famous Javascript Library Among Developers"
    },
    {
        title: "How do you use React?",
        content: "We Use React by creating Components"
    }
]

export default () => {
    return (
        <div>
            {/* <Accordion items={items} /> */}
            <Search />
        </div>
    )
} 