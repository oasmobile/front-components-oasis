<template>
    <div class="fco">
        <div :id="this.options.id">

        </div>
        <div ref="rawScrpit"></div>
    </div>
</template>

<script>
    export default {
        props: {
            options: Object,
            type: Number
        },
        name: "index",
        mounted() {
            this.fco();
        },
        methods: {
            fco: function () {
                let script = document.createElement('script'),
                    DomScript = document.createElement('script');
                script.src = 'http://img.oasgames.com/fc-oasis/production/v2.0.1.1/loader.min.js';
                script.async = "async";
                switch (this.type) {
                    case 1:
                        DomScript.innerHTML = `var fcoFooterConfig = ` + JSON.stringify(this.options);
                        break;
                    case 2:
                        DomScript.innerHTML = `var fcoGDPRConfig = ` + JSON.stringify(this.options);
                        break;
                }
                this.$refs.rawScrpit.append(script);
                this.$refs.rawScrpit.append(DomScript);
            }
        }
    }
</script>
