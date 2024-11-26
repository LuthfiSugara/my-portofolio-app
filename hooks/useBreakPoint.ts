import { useState, useEffect, RefObject } from 'react';

const useBreakPoint = (ref: RefObject<HTMLElement>): number => {
    const [width, setWidth] = useState<number>(0);

    useEffect(() => {
        const updateWidth = () => {
            if (ref.current) {
                setWidth(ref.current.getBoundingClientRect().width);
            }
        };

        updateWidth();

        window.addEventListener('resize', updateWidth);

        return () => {
            window.removeEventListener('resize', updateWidth);
        };
    }, [ref]);

    return width;
};

export default useBreakPoint;
