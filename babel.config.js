const presets = {
    [['@babel/preset-env', { useBuiltIns: 'usage', corejs: 3 }]],
    "env": {
        "test": {
            "presets": [
                [
                    "@babel/preset-env",
                    {
                        "targets": {
                            "node": "current"
                        }
                    }
                ]
            ]
        }
    }
};

module.exports = { presets };
