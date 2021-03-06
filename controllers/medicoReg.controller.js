const medicosvc=require('../services/medicoReg.svc');
const medicocntrl={
    addMedicos: async function(req, res){
        try{
           // console.log("hello");
            let email=req.body.email;
            //console.log(email);
            let mobile=req.body.mobile;
           // console.log(email);
            let medicopresent=await medicosvc.checkMedico(email,mobile);
            console.log(medicopresent);
            if(medicopresent.length>=1)
            {
                res.send("You are already registered");
                res.status(200);
            }
            else{
                let register=await medicosvc.addMedico(req.body);
                if(register)
                {
                    res.send("Registered Successfully!!!");
                    res.status(200);
                }  
            }
        }
        catch(error)
        {
            res.send(error);
            res.status(500);
        }
    },
    getallmedicos: async function(req,res)
    {
        try{
            let allmedicos=await medicosvc.getmedicos();
            res.json(allmedicos);
            res.status(200);
        }
        catch(error)
        {
            res.send(error);
            res.status(500);
        }
    }
}
module.exports=medicocntrl;