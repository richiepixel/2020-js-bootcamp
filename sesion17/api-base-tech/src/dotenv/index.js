//dotenv
console.log(process.env.DB_HOST);
console.log(process.env.JWT_SECRET);
console.log(process.env.DB_USER);
console.log(process.env.DB_PASS);
console.log(process.env.NODE_ENV);

if(process.env.NODE_ENV !== 'production'){
    console.log('Running in development mode')
}