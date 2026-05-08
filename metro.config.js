const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

const config = getDefaultConfig(__dirname);

// SVG: убираем svg из assets, добавляем в source
config.resolver.assetExts = config.resolver.assetExts.filter((ext) => ext !== "svg");
config.resolver.sourceExts = [...config.resolver.sourceExts, "svg"];

// Применяем NativeWind
const nativeWindConfig = withNativeWind(config, { input: "./src/global.css" });

// SVG трансформер поверх NativeWind трансформера
nativeWindConfig.transformer = {
  ...nativeWindConfig.transformer,
  babelTransformerPath: require.resolve("react-native-svg-transformer/expo"),
};

module.exports = nativeWindConfig;
