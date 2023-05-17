const Path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  devServer: {
    port: 3000,
  },
  entry: {
    app: "./src/index.tsx", // 처음 시작할 파일
  },
  devtool: "eval-cheap-source-map", // 디버깅 도와주는 설정
  module: {
    rules: [
      {
        test: /\.tsx?$/, // 확장자
        use: "ts-loader", // ts -> js 로 컴파일해줌
        exclude: /node_modules/, // 제외할 폴더
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "images/[name].[ext]",
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx"], // 모듈을 찾을 때 확장자 순서
  },
  output: {
    path: Path.join(__dirname, "dist"), // 빌드하면 만들어질 경로
    filename: "bundle.js", // 파일 이름
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: "public/index.html",
    }),
  ],
};
