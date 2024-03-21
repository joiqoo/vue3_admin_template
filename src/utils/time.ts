export const getTime = () => {
    let hours = new Date().getHours();
    let message = ';'
    if (hours <= 12) {
        message = 'morning';
    } else if (hours <= 18) {
        message = 'afternoon';
    } else {
        message = 'evening';
    }
    return message;
}