import React, {useRef} from 'react';


function useEmToPx<T extends HTMLElement>(): [React.MutableRefObject<T>, (emSize: number) => number] {
    const ref = useRef<T>(null);

    function emToPx(emSize: number): number {
        let fontSize = 16;
        try {
            fontSize = parseFloat(window.getComputedStyle(ref.current).fontSize) ?? 16;
        } catch (e) {
            // fail silently
        }
        return emSize * fontSize;
    }

    return [ref, emToPx];
}

export default useEmToPx;
