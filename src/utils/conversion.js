

export const getNetworkNameFromId = (id) => {
    if (id === 1) {
        return "Mainnet"
    } else if (id === 3) {
        return "Ropsten"
    } else {
        return "Unsupported"
    }
}

export const truncateString = (str, num) => {
    // If the length of str is less than or equal to num
    // just return str--don't truncate it.
    if (str.length <= num) {
        return str
    }
    // Return str truncated with '...' concatenated to the end of str.
    return str.slice(0, num+2) + '...' + str.slice(Math.abs(num) * -1)
}