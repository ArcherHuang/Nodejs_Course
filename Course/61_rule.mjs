function validator(
    {
        aaa,
        bbb,
    }
) {

    const message = `Hello ${aaa}, ${bbb}`;
    return {
        result: true,
        message: message,
        // message,
    };
}

export default {
    validator,
}