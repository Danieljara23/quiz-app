import dbConnect from "../../../utils/dbConnect";
import Questionnaire from "../../../models/Questionnaire";

dbConnect();

export default async(req, res) => {
  const { method } = req;
  switch(method) {
    case 'GET':
      try{
        const questionnaires = await Questionnaire.find({});

        res.status(200).json({ success: true, data: questionnaires })
      } catch(error){
        res.status(400).json({ success: false })
      }
      break;
    case 'POST':
      try{
        const questionnaire = await Questionnaire.create(req.body);
        
        res.status(201).json({ success: true, data: questionnaire })
      } catch(error){
        res.status(400).json({ success: false })
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}