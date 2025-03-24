# Code Citations

## License: MIT
https://github.com/sumback/fill-in-app/tree/940beb3953e1f692122be878ddf817fe4bea0912/vite.config.ts

```
manualChunks(id) {
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString();
          }
        },
      },
    }
```


## License: unknown
https://github.com/ZhangKKKK/vite-vant/tree/2d16feb5c11d6674e1169de254b77b803e774599/vite.config.ts

```
: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString(
```


## License: unknown
https://github.com/lynnlo/senior-assassin-game/tree/44be30836d5ea8b0f86d3914f53c8b40a466edca/vite.config.js

```
;

export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/'
```


## License: unknown
https://github.com/CamiloCortesM/Blackjack/tree/b564eb6027019efc04e528756f82caf09ef62cc5/vite.config.js

```
output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString();
          }
        },
```

