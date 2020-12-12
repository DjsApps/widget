import React, {useState} from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';

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

const options = [
    {
        label: "The Color is Red",
        value: "Red"
    },
    {
        label: "The Color is Green",
        value: "Green"
    },
    {
        label: "The Color is Blue",
        value: "Blue"
    }
];

export default () => {
    const [selected, setSelected] = useState(options[0])

    return (
        <div>
            <Header />
            <Route path="/">
                <Accordion items={items} />
            </Route>
            <Route path="/list">
                <Search />
            </Route>
            <Route path="/dropdown">
                <Dropdown 
                label="Select a Color"
                selected={selected}
                onSelectedChange={setSelected}
                options={options}
                />
            </Route>
            <Route path="/translate">
                <Translate />
            </Route>
        </div>
    )
} 