/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { isServer }) => {
      // Add file loader for mp4 files
      config.module.rules.push({
        test: /\.(mp4)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              publicPath: '/_next',
              outputPath: 'static/media',
              name: '[name].[hash].[ext]',
            },
          },
        ],
      });
  
      return config;
    },
  };
  
export default nextConfig;
  