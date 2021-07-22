const { rollup } = require('rollup');
const { terser } = require('rollup-plugin-terser');

async function build() {
    const bundle = await rollup({
        input: 'js/digit_span_task.js',
        plugins: [terser()]
    });

    bundle.write({ file: 'build/digit_span_task.js'});
}

build();
