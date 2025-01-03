const NotesModel = require("../Model/Notes.model");


const notesCreate = async (req, res) => {
    const { title, body } = req.body;
    if (!title || !body) {
        return res.status(400).json({ message: "Please Fill all information" });
    }

    const userID = req.user?._id; // Optional chaining to avoid crashing
    if (!userID) {
        return res.status(401).json({ message: "User not authenticated" });
    }
    console.log("Authenticated user ID:", userID);

    try {
        await NotesModel.create({ title, body, userID });
        return res.status(200).json({ message: "Note Created Successfully" });
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

const notesDelete = async (req, res) => {
    const { noteID } = req.params

    const isExistNotes = await NotesModel.findById(noteID)
    if (!isExistNotes) {
        return res.status(404).json({ message: "Notes Not Found" })
    }

    if (isExistNotes.userID != req.user._id) {
        return res.status(403).json({ message: "You are not allowed to delete this note" })
    }

    await NotesModel.findByIdAndDelete(noteID)
    return res.status(200).json({ message: "Notes Deleted Successfully" })
}

const getAllNotesUser = async (req, res) => {
    const { userID } = req.params
    if (userID != req.user._id) {
        return res.status(403).json({ message: "You are not allowed to access this note" })
    }

    try {
        const notes = await NotesModel.find({ userID })
        if (!(notes.length) > 0) {
            return res.status(404).json({ message: "Notes Not Found" })
        }
        return res.status(200).json({ message: "Notes Get Successfully", notes })

    }
    catch (error) {
        return res.status(400).json({ message: error })
    }
}

const getSingelNotesUser = async (req, res) => {
    const { noteID } = req.params

    try {
        const isExistNotes = await NotesModel.findById(noteID)
  

        if (!isExistNotes) {
            return res.status(404).json({ message: "Notes Not Found" })
        }
        
        if (isExistNotes.userID != req.user._id) {
            
            return res.status(403).json({ message: "You are not allowed to get this note" })
        }

        return res.status(200).json({ message: "Notes Get Successfully",isExistNotes})

    }
    catch (error) {
        return res.status(404).json({ message:error })
    }

}

const updateNotes=async(req,res)=>{
    const {noteID}=req.params

    try{
        const isExistNotes=await NotesModel.findById(noteID)
    if(!isExistNotes){
        return res.status(404).json({ message: "Notes Not Found" })
    }

    if (isExistNotes.userID != req.user._id) {
        return res.status(403).json({ message: "You are not allowed to update this note" })
    }

    if(req.file){
        await NotesModel.findByIdAndUpdate(noteID,{
            ...req.body,
            Notesimg:req.file.originalname,
        })
        res.status(200).json({message:"Notes Update SuccessFully"})
    }else{
        await NotesModel.findByIdAndUpdate(noteID,req.body)
        res.status(200).json({message:"Notes Update SuccessFully"})
    }

    
    }
    catch(error){
        return res.status(404).json({ message:error })
    }

}

const getAllNotesAdmin=async(req,res)=>{
    
    try
    {
        const totalNotes=await NotesModel.find()
        
        if(!totalNotes.length>0){
            return res.status(404).json({ message: "No Notes Found" })
        }
        res.status(200).json({message:"Notes Get Success",totalNotes})
    }
    catch(error)
    {
        return res.status(404).json({ message:error })
    }
}

const DeleteAllNotesAdmin=async(req,res)=>{
    try{
        await  NotesModel.deleteMany()
        res.status(200).json({message:"Notes Delete SuccessFully"})
    }   
    catch(error){
        return res.status(404).json({ message:error })
    }
}


module.exports = { notesCreate, notesDelete, getAllNotesUser, getSingelNotesUser,updateNotes,getAllNotesAdmin ,DeleteAllNotesAdmin }
