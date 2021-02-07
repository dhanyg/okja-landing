# okja-landing
Landing page for okja website

An alternative and simple landing page made with tailwind css. [Demo](https://dhanyg.github.io/okja-landing/index.html)  
  
## How to use  
Simply clone the repository  
`https://github.com/dhanyg/okja-landing.git`  
  
Run `npm install`  
  
Build the css using command `npm run build`  
  
For production, edit file `tailwind.config.js`, uncomment `enable: true` in purge section:  
```
purge: {
    // enabled: true,
    content: [
      './*.html',
    ],
  },
```
Then use command `npm run serve` (it will compress the size of css file)  
  
**Don't forget to comment `enable: true` or change the value to `false` for development**
