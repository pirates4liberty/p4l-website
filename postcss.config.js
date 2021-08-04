const isProduction = (process.env.NODE_ENV === 'production');

module.exports = {
    "plugins": isProduction
        ? [
            "postcss-flexbugs-fixes",
            [
                "postcss-preset-env",
                {
                    "autoprefixer": {
                        "flexbox": "no-2009"
                    },
                    "stage": 3,
                    "features": {
                        "custom-properties": false
                    }
                }
            ],
            [
                '@fullhuman/postcss-purgecss',
                {
                    content: [
                        './src/pages/**/*.{js,jsx,ts,tsx}',
                        './src/components/**/*.{js,jsx,ts,tsx}'
                    ],
                    defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
                    safelist: {
                        standard: ["html", "body"],
                        greedy: [
                            /badge$/,
                            /badge-.*$/,
                            /bg-(primary|secondary|success|info|warning|danger|light|dark)$/,
                            /btn-.*$/,
                            /card-.*$/,
                            /h[123456]$/,
                            /mb-*$/,
                            /ml-*$/,
                            /mr-*$/,
                            /mt-*$/,
                            /text-(primary|secondary|success|info|warning|danger|light|dark|white)$/,
                            /tooltip/
                        ]
                    }
                }
            ],
        ] : [
            // No transformations in development
        ]
}
