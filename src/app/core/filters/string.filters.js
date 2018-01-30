/* @ngInject */

export function toTitleCase() {
    return (str, includeParentheses = true) => {
        if (!str) {
            return '';
        }
        const modified = str.split(' ')
            .map(s => (s[0] || '').toUpperCase() + s.slice(1))
            .join(' ');

        if (includeParentheses) {
            return modified
                .split('(')
                .map(s => (s[0] || '').toUpperCase() + s.slice(1))
                .join('(');
        }

        return modified;
    };
}

export function maskString() {
    return (str, unmaskedChars = 4) => {
        if (!str || str.length < unmaskedChars ) {
            return '';
        }

        const unMasked = str.substring(str.length - unmaskedChars);
        const masked = str.substring(0, str.length - unmaskedChars).replace(/./g, '*');
        
        return masked + unMasked;
    };
}