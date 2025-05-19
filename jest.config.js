// @ts-check
// No TypeScript imports in JS files
/** @type {import('jest').Config} */
const config = {
  preset: "jest-preset-angular",
  setupFilesAfterEnv: ["<rootDir>/setup-jest.ts"],
  testMatch: ["**/+(*.)+(spec).+(ts)?(x)"],
  transform: {
    "^.+\\.(ts|js|html)$": "jest-preset-angular",
  },
  testEnvironment: "jsdom",
  moduleFileExtensions: ["ts", "html", "js", "json"],
};

export default config;
