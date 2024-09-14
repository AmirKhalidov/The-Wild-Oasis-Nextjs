'use client';

import { useState } from 'react';

function Counter({ users }) {
    const [counter, setCounter] = useState(0);
    console.log(users);

    return (
        <div>
            <p>There are {users.length} users</p>
            <button onClick={() => setCounter((c) => c + 1)}>{counter}</button>
        </div>
    );
}

export default Counter;
