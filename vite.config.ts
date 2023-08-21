import path from 'path';
import dotenv from "dotenv"
import legacy from '@vitejs/plugin-legacy';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import checker from 'vite-plugin-checker';
import svgr from 'vite-plugin-svgr';
import mkcert from 'vite-plugin-mkcert';
import paths from 'vite-tsconfig-paths';


import tsconfig from './tsconfig.json';


const SRC_PATH = path.resolve(__dirname, 'src');

const envFilePath = process.env.NODE_ENV === 'production' ? '.env.production' : '.env.development';

const parseTsConfigPaths = (
  tsPaths: Record<string, string[]>
): Record<string, string> => {
  const webpackConfigAliases: Record<string, string> = {};
  Object.entries(tsPaths).forEach(([alias, pathSt]) => {
    const aliasPath = pathSt[0].replace(/[^a-zA-Z]/g, '');
    webpackConfigAliases[alias] = path.join(SRC_PATH, aliasPath);
  });
  return webpackConfigAliases;
};

export default defineConfig({
  build: {
    target: 'es2015',
    outDir: 'public',
    assetsDir: 'static',
  },
  css: {
    modules: {
      localsConvention: 'dashes',
    },
  },
  plugins: [
    react(),
    legacy({
      targets: ['defaults', 'not IE 11'],
    }),
    svgr(),
    checker({
      typescript: false,
      overlay: false,
    }),
    paths(),
    mkcert(),
  ],

  publicDir: './static',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      " ": path.resolve(__dirname, '/..'),
      ...parseTsConfigPaths(tsconfig.compilerOptions.paths),
      styles: path.join(__dirname, 'src/styles'),
    },
  },
  server: {
    host: true,
  },
  define: {
    'process.env.VITE_APP_API_URL': JSON.stringify(process.env.VITE_APP_API_URL),
    'process.env.VITE_APP_API_URL_INFO': JSON.stringify(process.env.VITE_APP_API_URL_INFO),
    'process.env.VITE_APP_API_URL_STATIC': JSON.stringify(process.env.VITE_APP_API_URL_STATIC),
    'process.env.VITE_APP_API_URL_MIEM': JSON.stringify(process.env.VITE_APP_API_URL_MIEM),
  },
});
