import mysql2 from 'mysql2/promise'

export default async function conectar(){
    if(global.poolConexoes){
        return await global.poolConexoes.getConnection();
    }
    else{
        const poolDeConexoes = mysql2.createPool({
            host: 'localhost',
            user: 'root',
            password: '060770pa',
            port: 3306,
            database: 'gestaocomercialbackend',
            waitForConnections: true,
            connectionLimit: 1000,
            maxIdle: 1000, // max idle connections, the default value is the same as `connectionLimit`
            idleTimeout: 200000, // idle connections timeout, in milliseconds, the default value 60000
            queueLimit: 0,
        });

        global.poolConexoes = poolDeConexoes;
        return await poolDeConexoes.getConnection();
    }
}