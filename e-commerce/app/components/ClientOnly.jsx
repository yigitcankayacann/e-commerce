import { useState, useEffect } from 'react';

const ClientOnly = ({ children }) => {
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        setHasMounted(true);
    }, []);

    if (!hasMounted) {
        return null; // Sunucu tarafında render etme
    }

    return children;
};

export default ClientOnly;
