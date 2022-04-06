function getMessage(message) {

    let result = typeof(message) !== 'string' ? alert('Сообщение должно передаваться в качестве строки') : message.trim();

    if (result === undefined) return;

    if (result.length > 30) {

        result += '...';
    }

    return result;
}

console.log(getMessage(false));