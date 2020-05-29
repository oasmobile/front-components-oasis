# front-components-oasis-vue

A simple Vue components for page footer.

## Building manually

After checking out the repo, install dependencies:

```shell
npm install
```

Then build a minified, distributable JS file:

```shell
npm run build
```

## Example Usage In Vue Project
<!-- prettier-ignore -->
```
Vue Global registration:

import Fco from @oasis-games/front-components-oasis-vue;
Vue.use(Fco)

<template>
   <div id="footer">
       <fco-footer :options="footerConfig"></fco-footer>
   </div>
</template>

<script>
export default {
   name: "app",
   data() {
       return {
           footerConfig: {
               lang: "en",
               gamecode: "mrthen"
           }
       };
   }
};
</script>
```



