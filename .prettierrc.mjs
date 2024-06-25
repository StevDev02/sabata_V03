// .prettierrc.mjs
/** @type {import("prettier").Config} */
export default {
   trailingComma: "es5",
   plugins: ['prettier-plugin-astro'],
   overrides: [
     {
       files: '*.astro',
       options: {
         parser: 'astro',
       },
     },
   ],
 };