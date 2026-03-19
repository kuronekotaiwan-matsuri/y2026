import type { Config } from "jest";

const config: Config = {
  // jsdom環境でDOMテストを実行
  testEnvironment: "jsdom",

  // テストファイルのパターン
  testMatch: ["<rootDir>/tests/**/*.test.{ts,tsx}"],

  // モジュールパスエイリアスの設定
  moduleNameMapper: {
    // @/ エイリアスを src/ に解決
    "^@/(.*)$": "<rootDir>/src/$1",
    // CSSモジュールのモック
    "\\.module\\.css$": "identity-obj-proxy",
    // 通常のCSSファイルのモック
    "\\.css$": "<rootDir>/tests/__mocks__/styleMock.ts",
  },

  // SWCによるTypeScriptトランスフォーム設定
  transform: {
    "^.+\\.(ts|tsx)$": [
      "@swc/jest",
      {
        jsc: {
          parser: {
            syntax: "typescript",
            tsx: true,
          },
          transform: {
            react: {
              runtime: "automatic",
            },
          },
        },
      },
    ],
  },

  // テスト実行前のセットアップ
  setupFilesAfterEnv: ["<rootDir>/tests/setup.ts"],
};

export default config;
