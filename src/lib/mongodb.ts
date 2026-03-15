import mongoose from "mongoose"

const MONGODB_URL = process.env.MONGODB_URL as string
if(!MONGODB_URL){
    throw new Error("plz define mongodb-url")
}

type CachedMongoose = {
    conn:typeof mongoose | null
    promise:Promise<typeof mongoose> | null ;
}

const cached = (globalThis as unknown as {mongosecached:CachedMongoose}).mongosecached || {conn:null,promise:null}

export async function connctDB(): Promise<typeof mongoose> {
    if(cached.conn && cached.conn.connection.readyState === 1){
        return cached.conn
    }
     
    if(cached.promise){
        cached.conn = await cached.promise
        return cached.conn
    }

    console.log("es new conn start")
    cached.promise = mongoose.connect(MONGODB_URL,{
        bufferCommands:false
    }).then((m) => {
        cached.conn = m
        cached.promise = null
        return m
    }).catch((error)=>{
        console.error("conn error",error)
        cached.promise = null
        throw error;
    })
    cached.conn = await cached.promise;
    (globalThis as unknown as {mongooseCage: CachedMongoose}).mongooseCage = cached
    return cached.promise
}