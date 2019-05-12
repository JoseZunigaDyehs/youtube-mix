export const vjActions = props => {
    return {
        searchYT: (mixId,videos) => {
            debugger
            props.dispatch({ type: "SEARCH_END", data: {mixId,videos} });
        },
    };
};
