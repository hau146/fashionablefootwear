import React, { useState } from 'react';
import MyContext from './MyContext';

const MyProvider = ({ children }) => {
    const [valueFromChild, setValueFromChild] = useState('');

    const callFunctionFromChild = (value) => {
        setValueFromChild(value);

    };

    return (
        <MyContext.Provider value={{ callFunctionFromChild, valueFromChild }}>
            {children}
        </MyContext.Provider>
    );
};

export default MyProvider;
