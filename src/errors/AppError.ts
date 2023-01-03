class AppError extends Error {
    statusCode: number

    constructor(message: string, statusCode: number = 401) {
        super() 
        
        this.message = message
        this.statusCode = statusCode
    }
    
}

export { AppError }