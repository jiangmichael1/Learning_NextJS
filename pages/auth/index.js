import React from 'react';
import User from '../../components/User';

const authIndexPage = () => (
    <div>
        <h1>Learning Next.js Project</h1>
        <User name="Max" age={28} />
    </div>
);

export default authIndexPage;