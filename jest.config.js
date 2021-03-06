module.exports = {
  verbose: true,
  setupFiles: ["./tests/setup.js"],
  moduleFileExtensions: ["js", "jsx", "json"],
  coveragePathIgnorePatterns: [
    "/components/index.js",
    "/components/styles",
    "/components/version",
    "/components/icon",
    "/components/form",
    "/components/wordPad",
    "/components/dropdown",
  ],
  transformIgnorePatterns: ["/node_modules/", ".history/*", "lib", "dist"],
  modulePathIgnorePatterns: ["/.history/", "lib", "dist"],
  moduleDirectories: ["node_modules", ".", "src", "src/shared"],
  snapshotSerializers: ["enzyme-to-json/serializer"],
  collectCoverageFrom: ["components/**/*.{js,jsx}"],
  transform: {
    "^.+\\.jsx?$": "babel-jest",
  },
  testURL: "http://localhost",
  rootDir: __dirname,
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/tests/_mocks/fileMock.js",
    "\\.(css|less)$": "<rootDir>/tests/_mocks/styleMock.js",
  },
};
