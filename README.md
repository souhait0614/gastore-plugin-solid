# gastore-plugin-solid

[Gastore](https://www.npmjs.com/package/gastore) と [SolidJS](https://www.npmjs.com/package/solid-js) Signal の統合プラグイン

## 必須ライブラリ

- [Gastore](https://www.npmjs.com/package/gastore)
- [SolidJS](https://www.npmjs.com/package/solid-js)

## 使い方

npm などで`gastore-plugin-solid`をインストールしてください。

### 使用例
```tsx
import { createStore } from 'gastore'
import { createSignal } from 'solid-js'
import { integrate } from 'gastore-plugin-solid'

export const App = () => { // SolidJS Component
  const store = createStore('')
  const [getSignal, setSignal] = createSignal('')

  integrate(store, [getSignal, setSignal])

  store.set("Hello Gastore!")

  console.log(getSignal()) // ->Hello Gastore!

  setSignal("Hello SolidJS!")

  console.log(store.get()) // ->Hello SolidJS!!

  return (
    // ...
  )
}

```
### integrate()

引数で受け取った[Gastore](https://www.npmjs.com/package/gastore) の Store と [SolidJS](https://www.npmjs.com/package/solid-js) の Signal の内容を統合します。第一引数には Store、第二引数には Signal を指定します。

```ts
integrate<T>(store: Store<T>, signal: Signal<T>): void
```

## 開発

### 必要要件

- Node.js Version Manager ([fnm](https://fnm.vercel.app/)を推奨)
- [Node.js](https://nodejs.org/) v18.4.0
- [pnpm](https://pnpm.io/)

### インストール

```sh
git clone https://github.com/souhait0614/gastore-plugin-solid
cd gastore-plugin-solid
pnpm i
```
