export const increasePagination = () => {
    return {
        type: 'NEXT_PAGINATION'
    }
}

export const decreasePagination = () => {
    return {
        type: 'PREVIOUS_PAGINATION'
    }
}

export const setPagination = (number) => {
    return {
        type: 'SET_PAGINATION_NUMBER',
        payload: number
    }
}
