import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig = {
  collectCoverageFrom: [
    "app/**/*.{ts,tsx}",
    "!app/**/layout.tsx",
    "!app/**/loading.tsx",
    "!app/**/error.tsx",
    "!app/**/not-found.tsx",
  ],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1",
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  testEnvironment: "jest-environment-jsdom",
};

export default createJestConfig(customJestConfig);
