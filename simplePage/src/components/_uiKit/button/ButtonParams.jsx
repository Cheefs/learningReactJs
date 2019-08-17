const DEFAULT = 'default';
const types = {
    default: {
        padding: '7px 15px',
        borderRadius: '2px',
        border: '1px solid #dddd',
        backgroundColor: '#9d9d9d',
        color: '#ffff',
        fontWeight: 'bold',
        cursor: 'pointer',
        hover: {
            backgroundColor: '#dddd',
            textDecoration: 'none',
            color: '#ffff',
        }
    },

    link: {
        border: 'none',
        backgroundColor: 'transparent',
        color: '#0332ff',
        fontWeight: 'bold',
        cursor: 'pointer',
        hover: {
            textDecoration: 'underline',
            backgroundColor: 'transparent',
            color: '#0332dd',
        }
    }
}

export const setType = (prop, option, subType = null) => {
    if ( subType ) {
        return types[prop] && types[prop][option][subType] ?
                types[prop][option][subType] : types[DEFAULT][option][subType];
    }

    return types[prop] && types[prop][option] ?
        types[prop][option] : types[DEFAULT][option];
}
