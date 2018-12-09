// https://umijs.org/config/
import { resolve } from 'path'
import { i18n } from './src/utils/config'
export default {
  theme: './theme.config.js',
  // Webpack Configuration
  alias: {
    "api": resolve(__dirname, './src/services/'),
    "components": resolve(__dirname, './src/components'),
    "config": resolve(__dirname, './src/utils/config'),
    "models": resolve(__dirname, './src/models'),
    "routes": resolve(__dirname, './src/routes'),
    "services": resolve(__dirname, './src/services'),
    "themes": resolve(__dirname, './src/themes'),
    "utils": resolve(__dirname, './src/utils'),
  },
  "extraBabelPlugins": [
    ["import", {
      "libraryName": "antd",
      "libraryDirectory": "es",
      "style": true
    }]
  ],
  "env": {
    "development": {
      "extraBabelPlugins": ["dva-hmr"]
    }
  }
}
