import mysql from 'mysql2/promise'

export default async function conectar(){
    if(global.poolConexoes){
        await global.poolConexoes.getConnection();
    }
    else{
        const poolDeConexoes = mysql.createPool({
            host: 'localhost',
            user: 'root',
            password: '060770pa',
            port: 3306,
            database: 'gestaocomercialbackend',
            waitForConnections: true,
            connectionLimit: 10,
            maxIdle: 10, // max idle connections, the default value is the same as `connectionLimit`
            idleTimeout: 60000, // idle connections timeout, in milliseconds, the default value 60000
            queueLimit: 0,
            enableKeepAlive: true,
            keepAliveInitialDelay: 0
        });

        global.poolConexoes = poolDeConexoes;
        return await poolDeConexoes.getConnection();
    }
}