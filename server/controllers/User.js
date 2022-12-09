import axios from "../config/axios.config"

export class User{
    // TODO: Remove password from payload
    static getUsersList = async (req, res, next) => {
        try{
            const token = req.headers.authorization?? ""
            axios.get('/usersList', {'headers': {'Authorization': token}})
            .then(response => {
                return res.status(response.status).json(response.data)
            }).catch(err => {
                return res.status(err.response.status).json(err.response.data)
            })            
            
        }catch(error){
            next(error)
        }
    }

    static login = async (req, res, next) =>{
        try {
            axios.post('/login', req.body)
            .then(response => {
                return res.status(response.status).json(response.data)
            }).catch(err => {
                if(err.response == undefined)
                    return res.status(500).json({
                        message: "there was error connecting to the server"})
                return res.status(err.response.status).json(err.response.data)
            })
        } catch (error) {
            next(error)
        }
    }

    static register = async (req, res, next) => {
        try{
            axios.post('/register', req.body)
            .then(response => {
                return res.status(response.status).json(response.data)
            }).catch(err => {
                if(err.response == undefined)
                    return res.status(500).json({
                        message: "there was error connecting to the server"})
                return res.status(err.response.status).json(err.response.data)
            })
        }catch(error){
            next(error)
        }
    }

}