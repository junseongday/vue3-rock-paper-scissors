# vue3-rock-paper-scissors

I will create a rock-paper-scissors game using Vue 3, TypeScript, and Vite. I will cover the deployment method using GitHub Actions and the build process for a desktop app using Electron.

Below is my blog, you might want to take a look at it.

[1.프로젝트만들기](https://itjs.kr/vue3-typescript-%ea%b0%80%ec%9c%84-%eb%b0%94%ec%9c%84-%eb%b3%b4-%ea%b2%8c%ec%9e%84-%eb%a7%8c%eb%93%a4%ea%b8%b0-1-%ed%94%84%eb%a1%9c%ec%a0%9d%ed%8a%b8-%eb%a7%8c%eb%93%a4%ea%b8%b0){:target="_blank"}

[2.플로그인 설치 및 세팅](https://itjs.kr/vue3-typescript-%ea%b0%80%ec%9c%84-%eb%b0%94%ec%9c%84-%eb%b3%b4-%ea%b2%8c%ec%9e%84-%eb%a7%8c%eb%93%a4%ea%b8%b0-2-%ed%94%8c%eb%9f%ac%ea%b7%b8%ec%9d%b8-%ec%84%a4%ec%b9%98-%eb%b0%8f-%ec%84%b8){:target="_blank"}

[3.게임만들기](https://itjs.kr/vue3-typescript-%ea%b0%80%ec%9c%84-%eb%b0%94%ec%9c%84-%eb%b3%b4-%ea%b2%8c%ec%9e%84-%eb%a7%8c%eb%93%a4%ea%b8%b0-3-%ea%b2%8c%ec%9e%84%eb%a7%8c%eb%93%a4%ea%b8%b0){:target="_blank"}

[4.배포하기](https://itjs.kr/vue3-typescript-%ea%b0%80%ec%9c%84-%eb%b0%94%ec%9c%84-%eb%b3%b4-%ea%b2%8c%ec%9e%84-%eb%a7%8c%eb%93%a4%ea%b8%b0-4-%eb%b0%b0%ed%8f%ac%ed%95%98%ea%b8%b0){:target="_blank"}

[5.ELECTRON 적용](https://itjs.kr/vue3-typescript-%ea%b0%80%ec%9c%84-%eb%b0%94%ec%9c%84-%eb%b3%b4-%ea%b2%8c%ec%9e%84-%eb%a7%8c%eb%93%a4%ea%b8%b0-5-electron-%ec%a0%81%ec%9a%a9){:target="_blank"}

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support For `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.
