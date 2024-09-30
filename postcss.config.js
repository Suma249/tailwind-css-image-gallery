const plugin = require('tailwindcss')
const tailwindcss=require('tailwindcss')

module.exports={
    plugins:[
        tailwindcss('./tailwind.js'),
        require('autoprefixer')
    ]
}