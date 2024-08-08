const { format } =require('date-fns')


exports.FormatDate= async(req,res)=>{
    const { dateObj }=req.query;
    if( !dateObj){
        return res.status(404).json({
            status: "fail",
            message: "dateObject is required"
        })
    }
    try{
        const parsedDate = new Date(dateObj);
        if (isNaN(parsedDate)) {
            throw new Error('Invalid date');
        }
        const formattedDate = format(parsedDate, 'yyyy-MM-dd');
        // localStorage.setItem('depatureDate',formattedDate)
        res.json({ formattedDate });
    }catch(err){
        res.status(400).json({ error: err.message });
    }
}


