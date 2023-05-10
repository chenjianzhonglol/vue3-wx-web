import { defineConfig, loadEnv } from 'vite';
import path from 'path';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import pxtorem from 'postcss-pxtorem';
import autoprefixer from 'autoprefixer';
import checker from 'vite-plugin-checker';
import vueI18nPlugin from '@intlify/unplugin-vue-i18n/vite';
import components from 'unplugin-vue-components/vite';
import { VantResolver } from 'unplugin-vue-components/resolvers';
import autoImport from 'unplugin-auto-import/vite';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    },

    server: {
      port: 9000,
      open: true,
      watch: {
        ignored: ['**/.eslintrc-auto-import.json']
      },
      hmr: {
        clientPort: 80
      },
      proxy: {
        '/api': {
          target: loadEnv(mode, process.cwd()).VITE_API_HOST,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '')
        }
      }
    },

    css: {
      postcss: {
        plugins: [
          autoprefixer({
            overrideBrowserslist: ['> 1%', 'last 2 versions', 'not dead', 'iOS >= 7', 'Android >= 4.0']
          }),
          pxtorem({
            rootValue: 37.5,
            propList: ['*', '!border-']
          })
        ]
      }
    },

    plugins: [
      vue(),
      checker({
        vueTsc: true,
        eslint: {
          lintCommand: 'eslint "./src/**/!(*.d).{vue,js,ts,jsx,tsx}"',
          dev: {
            logLevel: ['error']
          }
        },
        stylelint: {
          lintCommand: 'stylelint ./src/**/*.{scss,vue}'
        }
      }),
      vueI18nPlugin({
        include: path.resolve(__dirname, 'src/locales/languages/*.json')
      }),
      components({
        dirs: ['src/components'],
        dts: './temp/component.d.ts',
        resolvers: [VantResolver()]
      }),
      autoImport({
        dirs: ['./src/store'],
        imports: [
          'vue',
          'vue-router',
          'pinia',
          {
            '@/locales': ['useI18n', 'i18nGlobalInstance']
          },
          {
            vant: ['showToast']
          }
        ],
        dts: './temp/auto-import.d.ts',
        eslintrc: {
          enabled: true,
          filepath: './temp/.eslintrc-auto-import.json',
          globalsPropValue: 'readonly'
        }
      }),
      vueJsx()
    ],

    build: {
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (/node_modules[\\/](vue|vue-router|pinia)/.test(id)) {
              return 'vue';
            }
          }
        }
      }
    }
  };
});
