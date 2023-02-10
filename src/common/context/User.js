import { createContext  } from 'react';
import { useState, useEffect } from 'react';

export const UserContext = createContext();

const [name, setName] = useState('');
const [balance, setBalance] = useState(0)

export const UserPorvider = () => {
    return (
        <UserContext.Provider value={}>

        </UserContext.Provider>
    )
}