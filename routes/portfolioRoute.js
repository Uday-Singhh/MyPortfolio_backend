const router = require("express").Router();
const {Intro,About,Project,Experience,Education,Contact}=require("../models/portfolioModel");
const {User}=require("../models/UserModels");

router.get("/get-portfolio-data", 
    async(req,res)=>{
        try{
            const intros=await Intro.find();
            const abouts=await About.find();
            const projects=await Project.find();
            const contacts=await Contact.find();
            const experience=await Experience.find();
            const education=await Education.find();
           
            
            res.status(200).send({
                intro:intros[0],
                about:abouts[0],
                projects:projects,
                contacts:contacts[0],
                experience,
                education:education,
            })
        }
        catch(error){
            res.status(500).send(error);

        }
    }
)

//intro
router.post("/update-intro",async(req,res)=>{
    try {
       
        const intro=await Intro.findOneAndUpdate(
           { _id:req.body._id},
           req.body,
           {new:true},
        )
        
        res.status(200).send({
            data:intro,
            success:true,
            message:"data updated successfully",     
        }
        );
        
    } catch (error) {
        res.status(500).send(error);
    }
})

//about
router.post("/update-about",async(req,res)=>{
    try {
       
        const about=await About.findOneAndUpdate(
           { _id:req.body._id},
           req.body,
           {new:true},
        )
        
        res.status(200).send({
            data:about,
            success:true,
            message:"data updated successfully",     
        }
        );
        
    } catch (error) {
        res.status(500).send(error);
    }
})


//experience

router.post("/add-experience",async(req,res)=>{
    try {
       const experience= new Experience(req.body);
       await experience.save();
       res.status(200).send({
        data:experience,
        success:true,
        message:"data added successfully",
       })
        
    } catch (error) {
        res.status(500).send(error);
    }
})

router.post("/update-experience",async(req,res)=>{
    try {
       
        const exp=await Experience.findOneAndUpdate(
            { _id:req.body._id},
            req.body,
            {new:true},
           
        )
        
        res.status(200).send({
            data:exp,
            success:true,
            message:"Experience updated successfully",     
        }
        );
        
    } catch (error) {
        res.status(500).send(error);
    }
})

router.post("/delete-experience",async(req,res)=>{
    try {
       
        const exp=await Experience.findOneAndDelete(
           { _id:req.body._id},
           
        )
        
        res.status(200).send({
            data:exp,
            success:true,
            message:"Experience deleted successfully",     
        }
        );
        
    } catch (error) {
        res.status(500).send(error);
    }
})


//project
router.post("/add-project",async(req,res)=>{
    try {
       const prj= new Project(req.body);
       await prj.save();
       res.status(200).send({
        data:prj,
        success:true,
        message:"Project added successfully",
       })
        
    } catch (error) {
        res.status(500).send(error);
    }
})

router.post("/update-project",async(req,res)=>{
    try {
       
        const exp=await Project.findOneAndUpdate(
            { _id:req.body._id},
            req.body,
            {new:true},
           
        )
        
        res.status(200).send({
            data:exp,
            success:true,
            message:"Project updated successfully",     
        }
        );
        
    } catch (error) {
        res.status(500).send(error);
    }
})

router.post("/delete-project",async(req,res)=>{
    try {
       
        const exp=await Project.findOneAndDelete(
           { _id:req.body._id},
           
        )
        
        res.status(200).send({
            data:exp,
            success:true,
            message:"Project deleted successfully",     
        }
        );
        
    } catch (error) {
        res.status(500).send(error);
    }
})

//Education
/
router.post("/add-education",async(req,res)=>{
    try {
       const edu= new Education(req.body);
       await edu.save();
       res.status(200).send({
        data:edu,
        success:true,
        message:"Education added successfully",
       })
        
    } catch (error) {
        res.status(500).send(error);
    }
})

router.post("/update-education",async(req,res)=>{
    try {
       
        const edu=await Education.findOneAndUpdate(
            { _id:req.body._id},
            req.body,
            {new:true},
           
        )
        
        res.status(200).send({
            data:edu,
            success:true,
            message:"Education updated successfully",     
        }
        );
        
    } catch (error) {
        res.status(500).send(error);
    }
})

router.post("/delete-education",async(req,res)=>{
    try {
       
        const edu=await Education.findOneAndDelete(
           { _id:req.body._id},
           
        )
        
        res.status(200).send({
            data:edu,
            success:true,
            message:"Education deleted successfully",     
        }
        );
        
    } catch (error) {
        res.status(500).send(error);
    }
})

//contact
router.post("/update-contact",async(req,res)=>{
    try {
       
        const cnt=await Contact.findOneAndUpdate(
           { _id:req.body._id},
           req.body,
           {new:true},
        )
        
        res.status(200).send({
            data:cnt,
            success:true,
            message:"data updated successfully",     
        }
        );
        
    } catch (error) {
        res.status(500).send(error);
    }
})


//admin-login
router.post("/admin-login", async(req,res)=>{
   try {
    
    const user=await User.findOne({
        userName:req.body.userName,
        password:req.body.password,
    })
    user.password="";
    console.log(user);
    if(user)
        {
            res.status(200).send({
                data:user,
                success:true,
                message:"Login successfully"
            })
        }
        else{
            res.status(200).send({
                data:user,
                success:false,
                message:"Invalid User or Password",

            })
        }
    
   } catch (error) {
        res.status(500).send(error);
   }

})

module.exports = router;

