exports.handler = async event => {
    return {
        statusCode: 200,
        body: JSON.stringify([{ "p1": "a", "p2": "b", "p3": "c", "q1": "d", "q2": "e", "q3": "f" }]),
    }
}
