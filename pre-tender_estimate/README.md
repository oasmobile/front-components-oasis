# front-components-succotash

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

import Fcs from @oasis-games/front-components-succotash;
Vue.use(Fcs)

<template>
   <div id="footer">
       <fcs-footer :options="footerConfig"></fcs-footer>
   </div>
   <fcs-login-reg
       :options="LoginRegConfig"
       :dialogVisible="dialogVisible"
       @close="close"
       @loginCallBack="loginCallBack">
   </fcs-login-reg>
</template>

<script>
export default {
   name: "app",
   data() {
       return {
           footerConfig: {
               lang: "en"
           },
           LoginRegConfig: {
               lang: 'ar',
               appId: "137082913339273",
               client: 'mbeen',
               isDebug: true,
           }
       };
   }
};
</script>
```



