const HtmlWebPackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ZipPlugin = require('zip-webpack-plugin');

const htmlPlugin = new HtmlWebPackPlugin({
    template: "./src/index.html",
    filename: "./index.html"
});
const zipPlugin = new ZipPlugin({
    // OPTIONAL: defaults to the Webpack output path (above)
    // can be relative (to Webpack output path) or absolute
    path: './staticresource',

    // OPTIONAL: defaults to the Webpack output filename (above) or,
    // if not present, the basename of the path
    filename: 'JSX.zip',

    // OPTIONAL: defaults to 'zip'
    // the file extension to use instead of 'zip'
    extension: 'resource',

    // OPTIONAL: defaults to the empty string
    // the prefix for the files included in the zip file
    // pathPrefix: '',

    // OPTIONAL: defaults to the identity function
    // a function mapping asset paths to new paths
    pathMapper: function(assetPath) {
        // put all pngs in an `images` subdir
        if (assetPath.endsWith('.png'))
            return path.join(path.dirname(assetPath), 'images', path.basename(assetPath));
        return assetPath;
    },

    // OPTIONAL: see https://github.com/thejoshwolfe/yazl#addfilerealpath-metadatapath-options
    fileOptions: {
        mtime: new Date(),
        mode: 0o100664,
        compress: true,
        forceZip64Format: false,
    },

    // OPTIONAL: see https://github.com/thejoshwolfe/yazl#endoptions-finalsizecallback
    zipOptions: {
        forceZip64Format: false,
    },
})

const extractPlugin = new ExtractTextPlugin('./main.css');

module.exports = {
    devtool: 'source-map',
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.s?css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader!sass-loader",
                })
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'fonts/'
                    }
                }]
            }
        ]
    },
    plugins: [htmlPlugin, extractPlugin, zipPlugin]
};