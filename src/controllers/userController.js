const userService = require("../services/userServices")

const userController={
    create: async(req,res)=>{
        try {
            const user= await userService.create(req.body)
            return res.status(201).json({
                msg:'Usuario criado com sucesso',
                user
            })
        } catch (error) {
            return res.status(500).json(
                {
                    msg:'erro ao tentar criar o Usuario'
                }
            )
        }
    },
    update:async(req,res)=>{
        try {
            const user= await userService.update(req.params.id, req.body);
            if(!user){
                return res.status(400).json({
                    msg:'User não encontrado'
                });
            }
            return res.status(200).json({
                msg:'User atualizado com sucesso',
                user
            })
        } catch (error) {
            return res.sta(500).json({
                msg:'Erro ao atualizar o User'
            })
        }
    }
}
module.exports=userController;