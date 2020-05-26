<template>
    <div id="app"><fcs-footer :options="footerConfig"></fcs-footer></div>
</template>

<script>
export default {
    name: "app",
    data() {
        return {
            footerConfig: {
                lang: "",
                gamecode:"",
            },
            dialogVisible: true
        };
    },
    methods: {}
};
</script>
<style>
body,
div,
dl,
dt,
dd,
ul,
ol,
li,
h1,
h2,
h3,
h4,
h5,
h6,
input,
button,
textarea,
p,
blockquote,
th,
td,
form {
    margin: 0;
    padding: 0;
}
</style>
