// import dbConnect from "../../../utils/dbConnect";
// import Questionnaire from "../../../models/Questionnaire";

// dbConnect();

// export default async (req, res) => {
//   const { query: {id}, method} = req;

//   switch(method){
//     case 'GET':
//       try {
//         const questionnaire = await Questionnaire.findById(id);

//         if(!questionnaire){
//           return res.status(400).json({success: false});
//         }

//         res.status(200).json({success: true, data: questionnaire});
//       }catch(error){
//         res.status(400).json({ success: false })
//       }
//       break;
//     case 'PUT':
//       try{
//         const questionnaire = await Questionnaire.findByIdAndUpdate(id, req.body, {
//           new: true,
//           runValidators: true
//         });

//         if(!questionnaire){
//           return res.status(400).json({success: false});
//         }

//         res.status(200).json({success: true, data: questionnaire});
//       }catch(error){
//         res.status(400).json({success: false});
//       }
//       break;
//     case 'DELETE':
//       try {
//         const deletedQuestionnaire = await Questionnaire.deleteOne({ _id: id})
//         if(!deletedQuestionnaire){
//           return res.status(400).json({success: false})
//         }

//         res.status(200).json({success: true, data: {}});
//       }
//       catch(error) {
//         res.status(400).json({success: false});
//       }
//       break;
//     default:
//       res.status(400).json({success: false});
//       break;
//   }

// }