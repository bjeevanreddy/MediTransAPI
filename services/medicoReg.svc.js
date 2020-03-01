const medicoregmodel=require('../Models/medicoReg.model');
class Medico{
    getmedicos()
    {
        return medicoregmodel.find().exec();
    }
    addMedico(data) {
        let medico = new medicoregmodel(data);
        return medico.save();
    }
    checkMedico(email,mobile)
    {
        return medicoregmodel.find({$or:[{ email:email }, { mobile:mobile }] }).exec();
    }
}
module.exports = new Medico();