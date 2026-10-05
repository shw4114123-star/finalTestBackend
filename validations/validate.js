export function validate(schema){
    return (req, _res, next) => {
        const result = schema.safeParse({
            body: req.body,
            params: req.params,
            query: req.query
        })
        if (!result.success) {
            const message = result.error.issuss[0].message;
            const error = new Error(message);
            error.statusCode = 400;
            return next(error)
        }
        if (result.data.body) {
            req.bodt = result.data.body
        }
    }
}