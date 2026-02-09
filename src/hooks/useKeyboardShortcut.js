import { useEffect } from 'react';

/**
 * Custom hook for keyboard shortcuts
 * @param {string} key - Key to listen for (e.g., 'o', 'r', '/')
 * @param {Function} callback - Function to call when key is pressed
 * @param {Object} options - Options { alt, ctrl, shift }
 */
export function useKeyboardShortcut(key, callback, options = {}) {
    useEffect(() => {
        const handler = (event) => {
            // Check if target is an input/textarea to avoid conflicts
            const isInput = ['INPUT', 'TEXTAREA'].includes(event.target.tagName);

            // Allow '/' to work everywhere, others only when not in input
            const shouldTrigger = key === '/' || !isInput;

            if (!shouldTrigger) return;

            const { alt = false, ctrl = false, shift = false } = options;

            const keyMatches = event.key.toLowerCase() === key.toLowerCase();
            const modifiersMatch =
                event.altKey === alt &&
                event.ctrlKey === ctrl &&
                event.shiftKey === shift;

            if (keyMatches && modifiersMatch) {
                event.preventDefault();
                callback(event);
            }
        };

        window.addEventListener('keydown', handler);
        return () => window.removeEventListener('keydown', handler);
    }, [key, callback, options]);
}
