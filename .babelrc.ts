export default {
  presets: [
    '@babel/preset-env',
    ['@babel/preset-react', { runtime: 'automatic' }],
    'babel-plugin-styled-components',
  ],
  plugins: [
    process.env.NODE_ENV === 'development' ? 'react-refresh/babel' : null,
  ],
};
