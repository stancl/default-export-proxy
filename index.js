export default async (req, res) => {
    res.send(`
        import defaultExport from ${req.query.pkg};

        ${req.query.var} = defaultExport;
    `);
}
