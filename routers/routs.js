import express from "express";
import middleware from "../middleware/middleware.js";
import Controller from "../controller/controller.js";
const router = express.Router();



router.get('/files',middleware,(req,res) => {
    Controller.getAllFiles(req,res)
})

router.get('/files/:name',middleware,(req,res) => {
    Controller.findFileByName(req, res)
})

router.post('/files/:name',middleware,async (req,res) => {
    await Controller.fileSubmit(req,res)
})

export {router}


// router.post('/', async (req,res) =>{
//     const post = new Post({
//         title: req.body.title,
//         description: req.body.description,
//     });
//     try {
//         const savePost = await post.save()
//         res.json(savePost);
//     }catch (e) {
//         res.json({message: e})
//     }
// });
//
// router.get('/', async (req, res) =>{
//     try {
//         const get = await Post.find();
//         res.json(get);
//     }catch (e) {
//         res.json({message: e});
//     }
// });
//
// router.get('/:postId', async (req, res) =>{
//     console.log("post")
//     try{
//         const {postId} = req.params
//         const get_by_id = await Post.findById(postId);
//         res.json(get_by_id);
//     }catch (e) {
//         res.json({message: e})
//     }
// })
//
// router.delete('/:postId', async (req, res) =>{
//     try {
//         const {postId} = req.params
//         const delete_by_id = await Post.deleteOne({_id: postId});
//         res.json(delete_by_id)
//     }catch (e) {
//         res.json({message: e})
//     }
// })
//
// router.patch('/:postId', async (req, res) =>{
//     try {
//         const {postId} = req.params
//         const update_by_id = await Post.updateOne(
//             {_id: postId},
//             {$set:
//                     {   title : req.body.title,
//                         description: req.body.description,
//                     }
//             }
//         );
//         res.json(update_by_id)
//     }catch (e) {
//         res.json({message: e})
//     }
// })