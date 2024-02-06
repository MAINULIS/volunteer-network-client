
const UploadWorkForm = () => {
    return (
        <div className=""> 
            <h3 className="text-3xl font-bold text-center text-blue-950">Add An Voluntary Work</h3>
            <form  className='p-4 mt-12 rounded-md bg-white'>
                <div className='md:flex justify-center gap-5 pb-4'>
                    <div >
                        <label htmlFor="name"> <span className='text-xl font-semibold text-black'>Event Title</span> <br />
                            <input className='px-4 rounded-sm input input-bordered bg-white w-96 py-1' type="text" name="name" id="name " placeholder=' Enter Event Title' required />
                        </label>
                    </div>
                    <div>
                        <label htmlFor="name"> <span className='text-xl font-semibold text-black'>Event Date</span> <br />
                            <input className='px-4 input input-bordered rounded-sm w-96 bg-white py-1' type="date" name="date" id="date" placeholder='Enter coffee Supplier' required />
                        </label>
                    </div>
                </div>
                <div className='md:flex justify-center gap-4 pb-4'>
                    <div>
                        <label htmlFor="name"> <span className='text-xl font-semibold text-black'>event Time</span> <br /></label>
                        <input className='px-4 input input-bordered  rounded-sm w-96 bg-white py-1' type="text" name="quantity" id="quantity" placeholder='Enter event Time' required />
                    </div>
                    <div>
                        <label htmlFor="name"> <span className='text-xl font-semibold text-black'>Description</span> <br /></label>
                        <textarea className="px-4 input input-bordered  rounded-sm w-96 bg-white" name="Description" id="" placeholder="Enter Description" cols="30" rows="10"></textarea>
                    </div>
                    
                </div>
                <div className='pb-4'>
                        <label htmlFor="name"> <span className='text-xl font-semibold text-black'>Photo</span> <br /></label>
                        <input className='px-4 input input-bordered  w-full rounded-sm bg-white py-1' type="text" name="photo" id="photo" placeholder='Enter photo url' required />
                    </div>
              
            </form>
        </div>
    );
};

export default UploadWorkForm;